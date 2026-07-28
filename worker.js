/* ============================================================
   SpeakUp — Intermediario (Cloudflare Worker)

   Guarda la clave de Anthropic para que nadie del equipo tenga
   que configurar nada. La app le habla a este Worker, y el Worker
   le habla a Anthropic con TU clave.

   Protecciones, por orden:
     1. Solo acepta peticiones desde tu propia app (origen).
     2. Exige un código de acceso que tú repartes al equipo.
     3. Límite diario por dispositivo, para que nadie se desmadre.
     4. Tope diario global, para que el gasto no se te dispare.
     5. Fija el modelo y el máximo de tokens: nadie puede pedir
        algo mucho más caro desde fuera.

   Variables que hay que configurar en Cloudflare:
     CLAVE_ANTHROPIC   (secreto)  tu clave sk-ant-...
     CODIGO_ACCESO     (secreto)  el código que le das al equipo
     ORIGEN_PERMITIDO  (texto)    https://diegobarcoello-maker.github.io
     LIMITE_DISPOSITIVO (texto)   peticiones por persona y día · por defecto 80
     LIMITE_GLOBAL      (texto)   peticiones de todos por día  · por defecto 600
   Enlace opcional (recomendado):
     LIMITES  → un espacio de nombres KV. Sin él la app funciona,
                pero no se pueden contar los usos.
   ============================================================ */

const MODELOS_PERMITIDOS = [
  'claude-sonnet-5',
  'claude-haiku-4-5-20251001',
  'claude-opus-5'
];
const MAX_TOKENS = 4000;

export default {
  async fetch(peticion, env) {
    const origen = env.ORIGEN_PERMITIDO || '*';

    if (peticion.method === 'OPTIONS') return conCors(new Response(null, { status: 204 }), origen);
    if (peticion.method !== 'POST')    return error(405, 'Solo se aceptan peticiones POST.', origen);

    // 1 · que venga de tu app
    const suOrigen = peticion.headers.get('Origin');
    if (origen !== '*' && suOrigen && suOrigen !== origen) {
      return error(403, 'Origen no permitido.', origen);
    }

    // 2 · código de acceso
    if (!env.CLAVE_ANTHROPIC) return error(500, 'El servidor no tiene configurada la clave.', origen);
    if (!env.CODIGO_ACCESO)   return error(500, 'El servidor no tiene configurado el código de acceso.', origen);
    const codigo = peticion.headers.get('X-Codigo') || '';
    if (!igualSeguro(codigo, env.CODIGO_ACCESO)) {
      return error(401, 'Código de acceso incorrecto. Pídeselo a Diego.', origen);
    }

    // 3 y 4 · límites de uso
    const dispositivo = (peticion.headers.get('X-Dispositivo') || 'anonimo').slice(0, 60);
    const hoy = new Date().toISOString().slice(0, 10);
    const topeDispositivo = Number(env.LIMITE_DISPOSITIVO || 80);
    const topeGlobal      = Number(env.LIMITE_GLOBAL || 600);

    if (env.LIMITES) {
      const claveDisp = 'd:' + hoy + ':' + dispositivo;
      const claveGlob = 'g:' + hoy;
      const [usosDisp, usosGlob] = await Promise.all([
        env.LIMITES.get(claveDisp).then(v => Number(v || 0)),
        env.LIMITES.get(claveGlob).then(v => Number(v || 0))
      ]);
      if (usosDisp >= topeDispositivo) {
        return error(429, 'Has llegado a tu límite de hoy (' + topeDispositivo + ' usos). Vuelve mañana: las lecciones, la escucha y el repaso siguen funcionando.', origen);
      }
      if (usosGlob >= topeGlobal) {
        return error(429, 'El equipo llegó al límite de hoy. Vuelve mañana.', origen);
      }
      // se guarda un día y medio: al día siguiente el contador nace de cero
      await Promise.all([
        env.LIMITES.put(claveDisp, String(usosDisp + 1), { expirationTtl: 129600 }),
        env.LIMITES.put(claveGlob, String(usosGlob + 1), { expirationTtl: 129600 })
      ]);
    }

    // 5 · sanear lo que se pide, para que nadie encarezca la llamada
    let cuerpo;
    try { cuerpo = await peticion.json(); }
    catch (e) { return error(400, 'La petición no es JSON válido.', origen); }

    if (MODELOS_PERMITIDOS.indexOf(cuerpo.model) < 0) cuerpo.model = 'claude-sonnet-5';
    cuerpo.max_tokens = Math.min(Number(cuerpo.max_tokens) || 700, MAX_TOKENS);
    delete cuerpo.stream;                          // esta app no usa streaming
    if (!Array.isArray(cuerpo.messages) || !cuerpo.messages.length) {
      return error(400, 'Faltan los mensajes.', origen);
    }

    // llamada real a Anthropic, con TU clave
    let respuesta;
    try {
      respuesta = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': env.CLAVE_ANTHROPIC,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(cuerpo)
      });
    } catch (e) {
      return error(502, 'No se pudo contactar con Anthropic.', origen);
    }

    const texto = await respuesta.text();
    return conCors(new Response(texto, {
      status: respuesta.status,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    }), origen);
  }
};

/* ---------- utilidades ---------- */

function conCors(respuesta, origen) {
  const h = new Headers(respuesta.headers);
  h.set('Access-Control-Allow-Origin', origen);
  h.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  h.set('Access-Control-Allow-Headers', 'content-type, x-codigo, x-dispositivo');
  h.set('Access-Control-Max-Age', '86400');
  h.set('Vary', 'Origin');
  return new Response(respuesta.body, { status: respuesta.status, headers: h });
}

function error(estado, mensaje, origen) {
  return conCors(new Response(JSON.stringify({ error: { message: mensaje } }), {
    status: estado,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  }), origen);
}

/* Compara sin delatar en cuántas letras falla */
function igualSeguro(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let dif = 0;
  for (let i = 0; i < a.length; i++) dif |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return dif === 0;
}
