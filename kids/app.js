/* ============================================================
   SpeakUp Kids — Lógica

   Dos modos según la edad:
     peques  (4-6)  sin una sola palabra escrita para el niño
     grandes (7-10) con la palabra escrita junto al dibujo

   No se recoge ningún dato del niño. Todo vive en este
   navegador y nunca sale de aquí.
   ============================================================ */
(function () {
'use strict';

/* ══════════════ 1. GUARDAR Y CARGAR ══════════════ */

const LLAVE = 'speakup.kids.v1';

const INICIAL = {
  configurado: false,
  modo: 'grandes',          // 'peques' | 'grandes'
  nombre: '',
  estrellas: {},            // mundoId -> 0..3
  aprendidas: {},           // 'mundo/palabra' -> true
  charlasHechas: {},        // mundoId -> true
  jugadas: 0,
  aciertos: 0,
  minutos: 0,
  ultimoDia: '',
  dias: 0,
  ajustes: { voz: '', sonido: true }
};

let S = cargar();

function cargar() {
  try {
    const bruto = localStorage.getItem(LLAVE);
    if (!bruto) return JSON.parse(JSON.stringify(INICIAL));
    const g = JSON.parse(bruto);
    const s = Object.assign(JSON.parse(JSON.stringify(INICIAL)), g);
    s.ajustes = Object.assign({}, INICIAL.ajustes, g.ajustes || {});
    return s;
  } catch (e) { return JSON.parse(JSON.stringify(INICIAL)); }
}
function guardar() {
  try { localStorage.setItem(LLAVE, JSON.stringify(S)); } catch (e) {}
}
const hoyClave = () => new Date().toISOString().slice(0, 10);

function contarDia() {
  const h = hoyClave();
  if (S.ultimoDia !== h) { S.ultimoDia = h; S.dias++; guardar(); }
}

/* ══════════════ 2. VOZ ══════════════ */

const Voz = {
  ingles: [], espanol: [],

  cargar() {
    if (!window.speechSynthesis) return;
    const todas = speechSynthesis.getVoices() || [];
    Voz.ingles  = todas.filter(v => /^en/i.test(v.lang));
    Voz.espanol = todas.filter(v => /^es/i.test(v.lang));
  },

  /* Para un niño conviene una voz clara y más lenta que la de un adulto. */
  elegirEn() {
    if (!Voz.ingles.length) Voz.cargar();
    if (S.ajustes.voz) {
      const g = Voz.ingles.find(v => v.voiceURI === S.ajustes.voz);
      if (g) return g;
    }
    return Voz.ingles.find(v => /female|samantha|zira|karen|moira/i.test(v.name)) ||
           Voz.ingles.find(v => /en-US/i.test(v.lang)) || Voz.ingles[0] || null;
  },
  elegirEs() {
    if (!Voz.espanol.length) Voz.cargar();
    /* si hay una voz latinoamericana, mejor que la de España para un niño de aquí */
    return Voz.espanol.find(v => /es-(MX|US|419|CO|AR)/i.test(v.lang)) ||
           Voz.espanol.find(v => /monica|paulina|sabina|helena/i.test(v.name)) ||
           Voz.espanol[0] || null;
  },

  hablar(texto, idioma, vel, alTerminar) {
    if (!window.speechSynthesis || !texto) { if (alTerminar) alTerminar(); return; }
    try {
      const u = new SpeechSynthesisUtterance(texto);
      const v = idioma === 'es' ? Voz.elegirEs() : Voz.elegirEn();
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = idioma === 'es' ? 'es-ES' : 'en-US'; }
      u.rate = vel || (idioma === 'es' ? 0.95 : 0.82);
      u.pitch = 1.12;
      if (alTerminar) { u.onend = alTerminar; u.onerror = alTerminar; }
      speechSynthesis.speak(u);
    } catch (e) { if (alTerminar) alTerminar(); }
  },

  decir(texto, vel)   { Voz.parar(); Voz.hablar(texto, 'en', vel); },
  decirEs(texto)      { Voz.parar(); Voz.hablar(texto, 'es'); },

  /* Lo importante para un niño que empieza de cero: primero lo oye en
     inglés y enseguida entiende qué significa. Sin eso, adivina. */
  decirLasDos(en, es) {
    Voz.parar();
    Voz.hablar(en, 'en', null, () => {
      setTimeout(() => Voz.hablar(es, 'es'), 260);
    });
  },

  parar() { try { speechSynthesis.cancel(); } catch (e) {} }
};
if (window.speechSynthesis) {
  Voz.cargar();
  speechSynthesis.onvoiceschanged = Voz.cargar;
}

/* ══════════════ 3. SONIDOS ══════════════ */

const Son = {
  ctx: null,
  on() { return S.ajustes.sonido !== false; },
  motor() {
    if (!Son.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { Son.ctx = new AC(); } catch (e) { return null; }
    }
    if (Son.ctx.state === 'suspended') { try { Son.ctx.resume(); } catch (e) {} }
    return Son.ctx;
  },
  nota(hz, t0, dur, vol, tipo) {
    const c = Son.motor(); if (!c) return;
    const t = c.currentTime + (t0 || 0);
    const o = c.createOscillator(), g = c.createGain();
    o.type = tipo || 'sine';
    o.frequency.setValueAtTime(hz, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.09, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.2));
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + (dur || 0.2) + 0.05);
  },
  bien()  { if (Son.on()) { Son.nota(659.25, 0, 0.14); Son.nota(987.77, 0.08, 0.26, 0.08); } },
  mal()   { if (Son.on()) { Son.nota(311.13, 0, 0.18, 0.06, 'triangle'); } },
  toque() { if (Son.on()) Son.nota(587.33, 0, 0.1, 0.05); },
  fiesta() {
    if (!Son.on()) return;
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((h, i) => Son.nota(h, i * 0.1, 0.4, 0.09));
  }
};

/* ══════════════ 4. UTILIDADES ══════════════ */

const $ = s => document.querySelector(s);
const app = () => document.getElementById('app');
const esc = t => String(t == null ? '' : t)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const mezclar = a => a.slice().sort(() => Math.random() - 0.5);
const alAzar = a => a[Math.floor(Math.random() * a.length)];
const esPeque = () => S.modo === 'peques';

const ICO = {
  altavoz: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1c2.9.9 5 3.5 5 6.7s-2.1 5.8-5 6.7v2.1c4-1 7-4.5 7-8.8s-3-7.8-7-8.8z"/></svg>',
  jugar:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 15 9l7 .6-5.3 4.6 1.6 6.8L12 17.3 5.7 21l1.6-6.8L2 9.6 9 9z"/></svg>',
  charla:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>',
  papas:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5c0-3-4-5.5-9-5.5z"/></svg>',
  micro:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11z"/></svg>'
};

/* ══════════════ 5. ESTADO DE LA VISTA ══════════════ */

const V = { pantalla: 'mundos', mundo: null, i: 0, juego: null, charla: null, paso: null };

function ir(pantalla) {
  Voz.parar();
  V.pantalla = pantalla; V.mundo = null; V.i = 0; V.juego = null; V.charla = null;
  window.scrollTo(0, 0);
  pintar();
}

/* ══════════════ 6. PANTALLAS ══════════════ */

function mundoPorId(id) { return MUNDOS.find(m => m.id === id) || null; }
function estrellas(id) { return S.estrellas[id] || 0; }

/* ---- Al empezar: nombre y edad ---- */
function vistaEdad() {
  if (V.paso === 'nombre') {
    return '<div class="wrap">' +
      '<div style="text-align:center;margin-bottom:18px">' +
        '<div style="width:110px;height:110px;margin:0 auto 8px">' + dibujo('boy') + '</div>' +
        '<h1>¿Cómo te llamas?</h1>' +
        '<p style="color:var(--suave)">Para saludarte por tu nombre. Si prefieres, déjalo vacío.</p>' +
      '</div>' +
      '<div class="tarjeta">' +
        '<input type="text" id="nombreNino" maxlength="16" placeholder="Tu nombre" autocomplete="off" ' +
          'value="' + esc(S.nombre) + '" class="campo-nombre">' +
      '</div>' +
      '<button class="btn grande bloque verde" data-act="guardar-nombre">¡Vamos! →</button>' +
      '<div style="height:10px"></div>' +
      '<button class="btn claro bloque" data-act="saltar-nombre">Sin nombre</button>' +
      '<p style="text-align:center;color:var(--suave);font-size:.88rem;margin-top:18px">' +
        'El nombre se queda solo en este dispositivo. No se envía a ninguna parte.</p>' +
    '</div>';
  }

  return '<div class="wrap">' +
    '<div style="text-align:center;margin-bottom:22px">' +
      '<div style="width:120px;height:120px;margin:0 auto 10px">' + dibujo('star') + '</div>' +
      '<h1>¡Hola!</h1>' +
      '<p style="color:var(--suave)">Dinos qué edad tiene quien va a jugar. Así la app se adapta sola.</p>' +
    '</div>' +

    '<div class="edades">' +
      '<button class="edad peques" data-act="edad" data-modo="peques">' +
        '<span class="num">4-6</span>' +
        '<span><b>Todavía no lee</b><span>Solo dibujos y voz. Oye la palabra en inglés, y enseguida qué significa.</span></span>' +
      '</button>' +
      '<button class="edad grandes" data-act="edad" data-modo="grandes">' +
        '<span class="num">7-10</span>' +
        '<span><b>Ya lee</b><span>Ve la palabra escrita, su traducción y una frase de ejemplo.</span></span>' +
      '</button>' +
    '</div>' +

    '<p style="text-align:center;color:var(--suave);font-size:.9rem;margin-top:22px">' +
      'Se puede cambiar después en la zona de papás.<br>No pedimos ni guardamos ningún dato del niño.</p>' +
  '</div>';
}

/* ---- Inicio: los mundos ---- */
function vistaMundos() {
  const total = MUNDOS.length * 3;
  const ganadas = MUNDOS.reduce((n, m) => n + estrellas(m.id), 0);
  return '<div class="wrap">' +
    '<h1>' + (S.nombre ? '¡Hola, ' + esc(S.nombre) + '!' : '¡A jugar!') + '</h1>' +
    '<p style="color:var(--suave);margin-top:-4px">Elige un mundo y aprende jugando.</p>' +

    '<div class="tarjeta" style="display:flex;align-items:center;gap:14px;padding:16px 20px">' +
      '<div style="width:52px;height:52px;flex:none">' + dibujo('star') + '</div>' +
      '<div style="flex:1">' +
        '<b style="font-size:1.3rem">' + ganadas + ' de ' + total + '</b>' +
        '<div style="color:var(--suave);font-size:.92rem">estrellas ganadas</div>' +
      '</div>' +
    '</div>' +

    (Instalar.sePuede()
      ? '<button class="instalar-tira" data-act="instalar">' +
          '<span>' + dibujo('gift') + '</span>' +
          '<b>Ponla en la pantalla de inicio</b>' +
          '<i>Para abrirla de un toque, sin internet</i>' +
        '</button>'
      : '') +

    '<div class="mundos">' +
      MUNDOS.map(m => {
        const e = estrellas(m.id);
        return '<button class="mundo ' + m.color + '" data-act="mundo" data-id="' + m.id + '">' +
          dibujo(m.emoji) +
          '<b>' + esc(m.titulo) + '</b>' +
          '<span class="estrellas">' +
            [0,1,2].map(i => '<i class="' + (i < e ? 'on' : '') + '"></i>').join('') +
          '</span>' +
        '</button>';
      }).join('') +
    '</div>' +
    '<div style="height:20px"></div>' +
  '</div>';
}

/* ---- Aprender las palabras de un mundo ---- */
function vistaAprender() {
  const m = mundoPorId(V.mundo);
  if (!m) return vistaMundos();
  const p = m.palabras[V.i];
  const ultima = V.i === m.palabras.length - 1;

  return '<div class="barra">' +
      '<button class="volver" data-act="inicio" aria-label="Volver">←</button>' +
      '<span class="titulo">' + esc(m.titulo) + '</span>' +
    '</div>' +

    '<div class="progreso">' +
      m.palabras.map((_, i) =>
        '<i class="' + (i < V.i ? 'on' : i === V.i ? 'cur' : '') + '"></i>').join('') +
    '</div>' +

    '<div class="wrap">' +
      '<div class="palabra-carta">' +
        '<div class="dibujo" key="' + V.i + '">' + dibujo(p.art) + '</div>' +
        (esPeque()
          ? '<div class="es solo-adulto">' + esc(p.en) + ' · ' + esc(p.es) + '</div>'
          : '<div class="en">' + esc(p.en) + '</div>' +
            '<div class="es">' + esc(p.es) + '</div>' +
            '<div class="frase">' + esc(p.frase) + '</div>' +
            '<div class="frase-es">' + esc(p.fraseEs) + '</div>') +
      '</div>' +

      '<div class="dos-voces">' +
        '<button class="altavoz" data-act="oir" data-texto="' + esc(p.en) + '" aria-label="Escuchar en inglés">' +
          ICO.altavoz + '<i>EN</i></button>' +
        '<button class="altavoz es" data-act="oir-es" data-texto="' + esc(p.es) + '" aria-label="Escuchar en español">' +
          ICO.altavoz + '<i>ES</i></button>' +
      '</div>' +
      '<p class="pista">Toca <b>EN</b> para oírla en inglés y <b>ES</b> para saber qué significa.</p>' +

      '<button class="btn claro bloque" style="margin-bottom:12px" data-act="oir-frase" data-en="' + esc(p.frase) + '" data-es="' + esc(p.fraseEs) + '">' +
        ICO.altavoz + ' Escuchar la frase en los dos idiomas</button>' +

      '<button class="btn grande bloque ' + (ultima ? 'verde' : '') + '" data-act="sig-palabra">' +
        (ultima ? '¡A jugar! ★' : 'Siguiente →') + '</button>' +
      '<div style="height:20px"></div>' +
    '</div>';
}

/* ══════════════ 7. LOS JUEGOS ══════════════ */

/* Tres rondas por mundo, cada una con su tipo. En peques solo
   entran los juegos que no necesitan leer. */
function armarJuego(m) {
  const tipos = esPeque()
    ? ['oirToca', 'oirToca', 'sombra']
    : ['oirToca', 'cualEs', 'sombra'];
  const preguntas = [];
  const pool = mezclar(m.palabras);
  tipos.forEach((tipo, ronda) => {
    const usadas = mezclar(m.palabras).slice(0, 4);
    for (let k = 0; k < 3; k++) {
      const buena = pool[(ronda * 3 + k) % pool.length];
      let otras = m.palabras.filter(x => x.en !== buena.en);
      otras = mezclar(otras).slice(0, 3);
      const opciones = mezclar(otras.concat([buena]));
      preguntas.push({ tipo, buena, opciones, resp: null });
    }
  });
  return { preguntas, i: 0, aciertos: 0, fallos: 0 };
}

function vistaJuego() {
  const m = mundoPorId(V.mundo);
  if (!m || !V.juego) return vistaMundos();
  const J = V.juego;

  if (J.i >= J.preguntas.length) return vistaFinJuego(m, J);

  const q = J.preguntas[J.i];
  const hecho = q.resp !== null;

  let cabeza = '';
  let rejilla = '';

  if (q.tipo === 'oirToca') {
    cabeza = '<p style="text-align:center;font-size:1.15rem;font-weight:700;margin-bottom:14px">' +
        (esPeque() ? 'Escucha y toca' : '¿Cuál es?') + '</p>' +
      '<button class="altavoz ' + (hecho ? '' : 'sonando') + '" data-act="oir" data-texto="' + esc(q.buena.en) + '" aria-label="Escuchar otra vez">' +
        ICO.altavoz + '</button>';
    rejilla = q.opciones.map((o, i) => botonOpcion(o, q, i, true, false)).join('');

  } else if (q.tipo === 'cualEs') {
    cabeza = '<p style="text-align:center;font-size:1.15rem;font-weight:700;margin-bottom:8px">¿Cómo se escribe?</p>' +
      '<div style="width:150px;height:150px;margin:0 auto 14px">' + dibujo(q.buena.art) + '</div>';
    rejilla = q.opciones.map((o, i) => botonOpcion(o, q, i, false, true)).join('');

  } else { /* sombra: ve el dibujo grande y elige el nombre por voz */
    cabeza = '<p style="text-align:center;font-size:1.15rem;font-weight:700;margin-bottom:14px">' +
        (esPeque() ? '¿Cuál suena así?' : 'Escucha y elige') + '</p>' +
      '<div style="width:150px;height:150px;margin:0 auto 10px">' + dibujo(q.buena.art) + '</div>' +
      '<div style="text-align:center;margin-bottom:14px">' +
        '<button class="altavoz chico" data-act="oir" data-texto="' + esc(q.buena.en) + '" aria-label="Escuchar">' +
          ICO.altavoz + '</button></div>';
    rejilla = q.opciones.map((o, i) => botonOpcion(o, q, i, true, !esPeque())).join('');
  }

  return '<div class="barra">' +
      '<button class="volver" data-act="inicio" aria-label="Salir">←</button>' +
      '<span class="titulo">' + esc(m.titulo) + '</span>' +
      '<span style="font-weight:800;color:var(--verdeO);font-size:1.2rem">' + J.aciertos + ' ★</span>' +
    '</div>' +
    '<div class="progreso">' +
      J.preguntas.map((_, i) => '<i class="' + (i < J.i ? 'on' : i === J.i ? 'cur' : '') + '"></i>').join('') +
    '</div>' +
    '<div class="wrap">' +
      cabeza +
      '<div class="opciones">' + rejilla + '</div>' +
      (hecho
        ? '<button class="btn grande bloque verde" style="margin-top:18px" data-act="sig-juego">Siguiente →</button>'
        : '') +
      '<div style="height:20px"></div>' +
    '</div>';
}

function botonOpcion(o, q, i, conDibujo, conTexto) {
  let cls = 'opcion';
  if (q.resp !== null) {
    if (o.en === q.buena.en) cls += ' bien';
    else if (i === q.resp) cls += ' mal';
  }
  return '<button class="' + cls + '"' + (q.resp !== null ? ' disabled' : '') +
    ' data-act="responder" data-i="' + i + '" aria-label="' + esc(o.es) + '">' +
    (conDibujo ? dibujo(o.art) : '') +
    (conTexto ? '<b>' + esc(o.en) + '</b>' : '') +
  '</button>';
}

function vistaFinJuego(m, J) {
  const pct = Math.round(J.aciertos / J.preguntas.length * 100);
  const estr = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 45 ? 1 : 0;
  return '<div class="wrap" style="text-align:center;padding-top:20px">' +
    '<div style="width:170px;height:170px;margin:0 auto 6px">' + dibujo(estr ? 'star' : 'heart') + '</div>' +
    '<h1>' + (estr === 3 ? '¡Perfecto!' : estr === 2 ? '¡Muy bien!' : estr === 1 ? '¡Bien hecho!' : '¡Casi!') + '</h1>' +
    '<p style="font-size:1.3rem">Acertaste <b>' + J.aciertos + '</b> de <b>' + J.preguntas.length + '</b></p>' +
    '<div style="display:flex;justify-content:center;gap:10px;margin:18px 0 24px">' +
      [0,1,2].map(i =>
        '<div style="width:56px;height:56px;opacity:' + (i < estr ? '1' : '.22') + '">' + dibujo('star') + '</div>'
      ).join('') +
    '</div>' +
    '<button class="btn grande bloque verde" data-act="jugar-otra" data-id="' + m.id + '">Jugar otra vez</button>' +
    '<div style="height:10px"></div>' +
    (m.charla && !S.charlasHechas[m.id]
      ? '<button class="btn grande bloque azul" data-act="charla" data-id="' + m.id + '">Ahora a conversar →</button>' +
        '<div style="height:10px"></div>'
      : '') +
    '<button class="btn claro bloque" data-act="inicio">Volver a los mundos</button>' +
    '<div style="height:20px"></div>' +
  '</div>';
}

/* ══════════════ 8. CONVERSACIÓN GUIONADA ══════════════ */

function vistaCharlas() {
  return '<div class="wrap">' +
    '<h1>Conversar</h1>' +
    '<p style="color:var(--suave);margin-top:-4px">Habla con los personajes. Tú eliges qué responder.</p>' +
    '<div class="mundos">' +
      MUNDOS.map(m =>
        '<button class="mundo ' + m.color + '" data-act="charla" data-id="' + m.id + '">' +
          dibujo(m.charla.art) +
          '<b>' + esc(m.charla.quien) + '</b>' +
          (S.charlasHechas[m.id] ? '<span class="estrellas"><i class="on"></i><i class="on"></i><i class="on"></i></span>' : '') +
        '</button>').join('') +
    '</div>' +
    '<div style="height:20px"></div>' +
  '</div>';
}

function vistaCharla() {
  const m = mundoPorId(V.mundo);
  if (!m) return vistaCharlas();
  const ch = m.charla, E = V.charla;

  if (E.i >= ch.pasos.length) {
    return '<div class="wrap" style="text-align:center;padding-top:20px">' +
      '<div style="width:160px;height:160px;margin:0 auto 6px">' + dibujo(ch.art) + '</div>' +
      '<h1>¡Conversaste en inglés!</h1>' +
      '<p style="font-size:1.15rem">Hablaste con ' + esc(ch.quien) + ' de principio a fin.</p>' +
      '<button class="btn grande bloque verde" style="margin-top:18px" data-act="charla" data-id="' + m.id + '">Otra vez</button>' +
      '<div style="height:10px"></div>' +
      '<button class="btn claro bloque" data-act="ir-charlas">Otras conversaciones</button>' +
      '<div style="height:20px"></div>' +
    '</div>';
  }

  const paso = ch.pasos[E.i];
  return '<div class="barra">' +
      '<button class="volver" data-act="ir-charlas" aria-label="Salir">←</button>' +
      '<span class="titulo">' + esc(ch.quien) + '</span>' +
    '</div>' +
    '<div class="progreso">' +
      ch.pasos.map((_, i) => '<i class="' + (i < E.i ? 'on' : i === E.i ? 'cur' : '') + '"></i>').join('') +
    '</div>' +
    '<div class="wrap">' +
      '<div class="charla-quien">' + dibujo(ch.art) + '<b>' + esc(ch.quien) + '</b></div>' +

      (E.dichas || []).slice(-1).map(d =>
        '<div class="burbuja mia">' +
          '<div class="en">' + esc(d.en) + '</div>' +
          '<div class="es">' + esc(d.es) + '</div>' +
        '</div>').join('') +

      /* Lo que dice el personaje, siempre con su traducción. Un niño que
         empieza de cero no puede responder a algo que no entiende. */
      '<div class="burbuja">' +
        '<div class="en">' + esc(paso.dice) + '</div>' +
        '<div class="es">' + esc(paso.diceEs) + '</div>' +
      '</div>' +
      '<div class="dos-voces chico">' +
        '<button class="altavoz chico" data-act="oir" data-texto="' + esc(paso.dice) + '" aria-label="Otra vez en inglés">' +
          ICO.altavoz + '<i>EN</i></button>' +
        '<button class="altavoz chico es" data-act="oir-es" data-texto="' + esc(paso.diceEs) + '" aria-label="Qué significa">' +
          ICO.altavoz + '<i>ES</i></button>' +
      '</div>' +

      '<p class="pista">Elige qué quieres responder. Toca el altavoz para oírlo antes.</p>' +

      '<div class="elegir">' +
        paso.opciones.map((o, i) =>
          '<button data-act="responder-charla" data-i="' + i + '">' +
            '<span class="mini" data-act="oir" data-texto="' + esc(o.en) + '">' + ICO.altavoz + '</span>' +
            '<span class="txt"><b>' + esc(o.en) + '</b><i>' + esc(o.es) + '</i></span>' +
          '</button>').join('') +
      '</div>' +
      '<div style="height:20px"></div>' +
    '</div>';
}

/* ══════════════ 9. ZONA DE PAPÁS ══════════════ */

let puertaOk = false, puertaReto = null;

function nuevoReto() {
  const a = 3 + Math.floor(Math.random() * 7);
  const b = 4 + Math.floor(Math.random() * 6);
  puertaReto = { a, b, r: a * b };
}

function vistaPapas() {
  if (!puertaOk) {
    if (!puertaReto) nuevoReto();
    return '<div class="wrap"><div class="puerta">' +
      '<div style="width:100px;height:100px;margin:10px auto 0">' + dibujo('key') + '</div>' +
      '<h1>Zona de papás</h1>' +
      '<p style="color:var(--suave)">Resuelve esto para entrar. Es solo para que no lo abra un niño sin querer.</p>' +
      '<div class="cuenta">' + puertaReto.a + ' × ' + puertaReto.b + ' = ?</div>' +
      '<input type="number" id="puerta" inputmode="numeric" placeholder="?" autocomplete="off">' +
      '<div style="height:14px"></div>' +
      '<button class="btn bloque" data-act="abrir-puerta">Entrar</button>' +
    '</div></div>';
  }

  const totalP = MUNDOS.reduce((n, m) => n + m.palabras.length, 0);
  const vistas = Object.keys(S.aprendidas).length;
  const estrellasTot = MUNDOS.reduce((n, m) => n + estrellas(m.id), 0);
  const pct = S.jugadas ? Math.round(S.aciertos / S.jugadas * 100) : 0;
  const voces = (Voz.lista || []);

  return '<div class="wrap">' +
    '<h1>Zona de papás</h1>' +

    '<div class="tarjeta">' +
      '<h2>Cómo va</h2>' +
      '<div class="dato"><span>Palabras vistas</span><b>' + vistas + ' / ' + totalP + '</b></div>' +
      '<div class="dato"><span>Estrellas ganadas</span><b>' + estrellasTot + ' / ' + (MUNDOS.length * 3) + '</b></div>' +
      '<div class="dato"><span>Respuestas acertadas</span><b>' + pct + '%</b></div>' +
      '<div class="dato"><span>Días que ha jugado</span><b>' + S.dias + '</b></div>' +
      '<div class="dato"><span>Conversaciones hechas</span><b>' + Object.keys(S.charlasHechas).length + ' / ' + MUNDOS.length + '</b></div>' +
    '</div>' +

    '<div class="tarjeta">' +
      '<h2>Ajustes</h2>' +
      '<p style="font-size:.95rem;color:var(--suave)">Modo actual: <b>' +
        (esPeque() ? 'Peques (4-6), sin texto' : 'Grandes (7-10), con texto') + '</b></p>' +
      '<button class="btn claro bloque" data-act="cambiar-modo">Cambiar a ' + (esPeque() ? 'Grandes' : 'Peques') + '</button>' +
      '<div style="height:12px"></div>' +
      '<label style="display:block;font-weight:700;margin-bottom:6px">Nombre del niño <span style="font-weight:400;color:var(--suave)">(opcional, solo para saludarlo)</span></label>' +
      '<input type="text" id="pnombre" value="' + esc(S.nombre) + '" placeholder="Sin nombre" style="width:100%;font-family:inherit;font-size:1.1rem;padding:14px;border-radius:16px;border:3px solid var(--borde)">' +
      '<div style="height:12px"></div>' +
      (voces.length
        ? '<label style="display:block;font-weight:700;margin-bottom:6px">Voz</label>' +
          '<select id="pvoz" style="width:100%;font-family:inherit;font-size:1rem;padding:14px;border-radius:16px;border:3px solid var(--borde);background:#fff">' +
            '<option value="">Automática</option>' +
            voces.map(v => '<option value="' + esc(v.voiceURI) + '"' +
              (S.ajustes.voz === v.voiceURI ? ' selected' : '') + '>' + esc(v.name) + '</option>').join('') +
          '</select><div style="height:12px"></div>'
        : '') +
      '<label style="display:flex;align-items:center;gap:10px;font-weight:700">' +
        '<input type="checkbox" id="pson" ' + (Son.on() ? 'checked' : '') + ' style="width:26px;height:26px"> Sonidos del juego</label>' +
      '<div style="height:14px"></div>' +
      '<button class="btn bloque" data-act="guardar-papas">Guardar</button>' +
    '</div>' +

    '<div class="tarjeta">' +
      '<h2>Instalar</h2>' +
      '<p style="font-size:.95rem;color:var(--suave)">' + (Instalar.puesta
        ? 'Ya está instalada en este dispositivo.'
        : 'Puedes ponerla en la pantalla de inicio como una app más. Funciona sin internet.') + '</p>' +
      (Instalar.puesta ? '' : '<button class="btn claro bloque" data-act="instalar">Ponerla en la pantalla</button>') +
    '</div>' +

    '<div class="tarjeta">' +
      '<h2>Privacidad</h2>' +
      '<div class="aviso">' +
        'Esta app <b>no pide ni envía ningún dato</b>. No hay cuentas, no hay anuncios y no hay publicidad dentro. ' +
        'Todo el progreso se guarda solo en este dispositivo y nunca sale de aquí. ' +
        'El nombre es opcional y solo sirve para saludar; si lo dejas vacío, la app funciona igual.' +
      '</div>' +
      '<div style="height:12px"></div>' +
      '<button class="btn claro bloque" data-act="exportar">Guardar una copia del progreso</button>' +
      '<div style="height:10px"></div>' +
      '<button class="btn claro bloque" data-act="borrar" style="color:var(--rojo)">Borrar todo y empezar de cero</button>' +
    '</div>' +
    '<div style="height:20px"></div>' +
  '</div>';
}

/* ============================================================
   INSTALAR EN EL DISPOSITIVO
   En Android el navegador nos deja pedirlo con un botón.
   En iPhone y iPad no lo permite, así que ahí explicamos
   los dos toques que hay que dar.
   ============================================================ */
const Instalar = {
  invitacion: null,
  puesta: false,
  esIOS: false,

  init() {
    Instalar.esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    Instalar.puesta = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      window.navigator.standalone === true;

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      Instalar.invitacion = e;
      pintar();
    });
    window.addEventListener('appinstalled', () => {
      Instalar.invitacion = null; Instalar.puesta = true;
      premio('¡Ya está en tu pantalla!');
      pintar();
    });
  },

  sePuede() { return !Instalar.puesta && (!!Instalar.invitacion || Instalar.esIOS); },

  async pedir() {
    if (Instalar.invitacion) {
      Instalar.invitacion.prompt();
      try {
        const r = await Instalar.invitacion.userChoice;
        if (r && r.outcome === 'accepted') Son.fiesta();
      } catch (e) {}
      Instalar.invitacion = null;
      pintar();
      return;
    }
    V.pantalla = 'instalar'; pintar();
  }
};

function vistaInstalar() {
  return '<div class="wrap">' +
    '<button class="volver" data-act="inicio" aria-label="Volver" style="margin-bottom:14px">←</button>' +
    '<h1>Ponla en la pantalla</h1>' +
    '<p style="color:var(--suave)">Así queda como una app de verdad, con su ícono, a pantalla completa y funcionando sin internet.</p>' +
    (Instalar.esIOS
      ? '<div class="tarjeta">' +
          '<div class="paso-i"><span>1</span><b>Toca el botón de Compartir</b>' +
            '<i>Es el cuadrito con la flecha hacia arriba, abajo en Safari.</i></div>' +
          '<div class="paso-i"><span>2</span><b>Baja y elige «Añadir a pantalla de inicio»</b>' +
            '<i>Puede que tengas que deslizar un poco la lista.</i></div>' +
          '<div class="paso-i"><span>3</span><b>Toca «Añadir»</b>' +
            '<i>Listo. El ícono queda con tus otras apps.</i></div>' +
          '<div class="aviso" style="margin-top:12px">Solo funciona desde <b>Safari</b>. Si estás en Chrome en el iPad, abre esta página en Safari primero.</div>' +
        '</div>'
      : '<div class="tarjeta">' +
          '<div class="paso-i"><span>1</span><b>Abre el menú del navegador</b><i>Los tres puntos ⋮ de arriba.</i></div>' +
          '<div class="paso-i"><span>2</span><b>Elige «Instalar aplicación»</b><i>O «Añadir a pantalla de inicio».</i></div>' +
          '<div class="paso-i"><span>3</span><b>Confirma</b><i>El ícono queda en tu pantalla de inicio.</i></div>' +
        '</div>') +
    '<button class="btn grande bloque verde" data-act="inicio">Entendido</button>' +
    '<div style="height:20px"></div>' +
  '</div>';
}

/* ══════════════ 10. PREMIOS ══════════════ */

function confeti() {
  const capa = document.createElement('div');
  capa.className = 'confeti';
  const colores = ['#ff7a45', '#ffc93c', '#3ec46d', '#3a8dde', '#ff8fb1', '#9b6bd6'];
  let html = '';
  for (let i = 0; i < 40; i++) {
    html += '<i style="left:' + Math.random() * 100 + '%;background:' + alAzar(colores) +
      ';animation-duration:' + (1.6 + Math.random() * 1.4) + 's;animation-delay:' + (Math.random() * .5) + 's"></i>';
  }
  capa.innerHTML = html;
  document.body.appendChild(capa);
  setTimeout(() => capa.remove(), 3400);
}

function premio(texto) {
  const capa = document.getElementById('capa');
  capa.innerHTML = '<div class="premio"><div class="premio-caja">' +
    '<div class="estrellota">' + dibujo('star') + '</div>' +
    '<h2>' + esc(texto) + '</h2>' +
  '</div></div>';
  Son.fiesta(); confeti();
  setTimeout(() => { capa.innerHTML = ''; }, 1600);
}

/* ══════════════ 11. PINTAR ══════════════ */

function pintar() {
  const raiz = app();

  if (!S.configurado) {
    document.getElementById('nav').hidden = true;
    raiz.innerHTML = '<div class="view">' + vistaEdad() + '</div>';
    return;
  }
  document.getElementById('nav').hidden = false;

  let html = '';
  if (V.pantalla === 'mundos')        html = V.mundo ? (V.juego ? vistaJuego() : vistaAprender()) : vistaMundos();
  else if (V.pantalla === 'charlas')  html = V.mundo ? vistaCharla() : vistaCharlas();
  else if (V.pantalla === 'papas')    html = vistaPapas();
  else if (V.pantalla === 'instalar') html = vistaInstalar();
  raiz.innerHTML = '<div class="view">' + html + '</div>';

  document.querySelectorAll('.navbtn').forEach(b => {
    if (b.dataset.p === V.pantalla) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
}

/* ══════════════ 12. TOQUES ══════════════ */

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const a = t.dataset.act;

  if (a === 'edad') {
    S.modo = t.dataset.modo; guardar();
    Son.bien();
    V.paso = 'nombre'; window.scrollTo(0, 0); pintar(); return;
  }

  if (a === 'guardar-nombre' || a === 'saltar-nombre') {
    if (a === 'guardar-nombre') {
      const c = document.getElementById('nombreNino');
      if (c) S.nombre = c.value.trim().slice(0, 16);
    }
    S.configurado = true; guardar();
    Son.fiesta(); contarDia();
    V.paso = null;
    ir('mundos');
    if (S.nombre) setTimeout(() => premio('¡Hola, ' + S.nombre + '!'), 200);
    return;
  }
  if (a === 'nav')      { ir(t.dataset.p); return; }
  if (a === 'instalar') { Instalar.pedir(); return; }
  if (a === 'inicio')   { ir('mundos'); return; }
  if (a === 'ir-charlas'){ ir('charlas'); return; }

  if (a === 'oir')    { Voz.decir(t.dataset.texto); return; }
  if (a === 'oir-es') { Voz.decirEs(t.dataset.texto); return; }
  if (a === 'oir-frase') { Voz.decirLasDos(t.dataset.en, t.dataset.es); return; }

  if (a === 'mundo') {
    V.pantalla = 'mundos'; V.mundo = t.dataset.id; V.i = 0; V.juego = null;
    Son.toque(); window.scrollTo(0, 0); pintar();
    const m = mundoPorId(V.mundo);
    if (m) setTimeout(() => Voz.decirLasDos(m.palabras[0].en, m.palabras[0].es), 350);
    return;
  }

  if (a === 'sig-palabra') {
    const m = mundoPorId(V.mundo); if (!m) return;
    S.aprendidas[m.id + '/' + m.palabras[V.i].en] = true;
    if (V.i < m.palabras.length - 1) {
      V.i++; guardar(); Son.toque(); pintar();
      const q = m.palabras[V.i];
      setTimeout(() => Voz.decirLasDos(q.en, q.es), 300);
    } else {
      guardar();
      V.juego = armarJuego(m);
      Son.toque(); window.scrollTo(0, 0); pintar();
      setTimeout(() => {
        const q = V.juego.preguntas[0];
        if (q.tipo !== 'cualEs') Voz.decir(q.buena.en);
      }, 400);
    }
    return;
  }

  if (a === 'responder') {
    const J = V.juego; if (!J) return;
    const q = J.preguntas[J.i];
    if (q.resp !== null) return;
    const i = Number(t.dataset.i);
    q.resp = i;
    const bien = q.opciones[i].en === q.buena.en;
    S.jugadas++; if (bien) { S.aciertos++; J.aciertos++; } else J.fallos++;
    guardar();
    if (bien) { Son.bien(); Voz.decirLasDos(q.buena.en, q.buena.es); }
    else { Son.mal(); }
    pintar();
    return;
  }

  if (a === 'sig-juego') {
    const J = V.juego, m = mundoPorId(V.mundo); if (!J || !m) return;
    J.i++;
    if (J.i >= J.preguntas.length) {
      const pct = Math.round(J.aciertos / J.preguntas.length * 100);
      const estr = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 45 ? 1 : 0;
      if (estr > estrellas(m.id)) S.estrellas[m.id] = estr;
      guardar();
      window.scrollTo(0, 0); pintar();
      if (estr) premio(alAzar(PREMIOS));
      return;
    }
    window.scrollTo(0, 0); pintar();
    const q = J.preguntas[J.i];
    if (q.tipo !== 'cualEs') setTimeout(() => Voz.decir(q.buena.en), 300);
    return;
  }

  if (a === 'jugar-otra') {
    const m = mundoPorId(t.dataset.id); if (!m) return;
    V.pantalla = 'mundos'; V.mundo = m.id; V.juego = armarJuego(m);
    Son.toque(); window.scrollTo(0, 0); pintar();
    setTimeout(() => {
      const q = V.juego.preguntas[0];
      if (q.tipo !== 'cualEs') Voz.decir(q.buena.en);
    }, 350);
    return;
  }

  if (a === 'charla') {
    const m = mundoPorId(t.dataset.id); if (!m) return;
    V.pantalla = 'charlas'; V.mundo = m.id; V.juego = null;
    V.charla = { i: 0, dichas: [] };
    Son.toque(); window.scrollTo(0, 0); pintar();
    setTimeout(() => Voz.decirLasDos(m.charla.pasos[0].dice, m.charla.pasos[0].diceEs), 400);
    return;
  }

  if (a === 'responder-charla') {
    const m = mundoPorId(V.mundo), E = V.charla; if (!m || !E) return;
    const paso = m.charla.pasos[E.i];
    const dicho = paso.opciones[Number(t.dataset.i)];
    E.dichas.push(dicho);
    Voz.decir(dicho.en);          // el niño oye lo que acaba de decir, para repetirlo
    Son.bien();
    setTimeout(() => {
      E.i++;
      if (E.i >= m.charla.pasos.length) {
        S.charlasHechas[m.id] = true; guardar();
        window.scrollTo(0, 0); pintar();
        premio('¡Conversaste en inglés!');
      } else {
        pintar();
        setTimeout(() => Voz.decirLasDos(m.charla.pasos[E.i].dice, m.charla.pasos[E.i].diceEs), 700);
      }
    }, 1500);
    pintar();
    return;
  }

  /* ---- zona de papás ---- */
  if (a === 'abrir-puerta') {
    const v = Number((document.getElementById('puerta') || {}).value);
    if (v === puertaReto.r) { puertaOk = true; pintar(); }
    else { nuevoReto(); Son.mal(); pintar(); }
    return;
  }
  if (a === 'cambiar-modo') {
    S.modo = esPeque() ? 'grandes' : 'peques'; guardar(); pintar(); return;
  }
  if (a === 'guardar-papas') {
    const n = document.getElementById('pnombre');
    const vz = document.getElementById('pvoz');
    const so = document.getElementById('pson');
    if (n) S.nombre = n.value.trim().slice(0, 20);
    if (vz) S.ajustes.voz = vz.value;
    if (so) S.ajustes.sonido = so.checked;
    guardar(); Son.bien(); pintar();
    return;
  }
  if (a === 'exportar') {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'speakup-kids-progreso.json';
    document.body.appendChild(link); link.click();
    setTimeout(() => { link.remove(); URL.revokeObjectURL(url); }, 800);
    return;
  }
  if (a === 'borrar') {
    if (!window.confirm('¿Seguro? Se borra todo el progreso y no se puede recuperar.')) return;
    try { localStorage.removeItem(LLAVE); } catch (e) {}
    S = JSON.parse(JSON.stringify(INICIAL));
    puertaOk = false; puertaReto = null;
    ir('mundos');
    return;
  }
});

/* ══════════════ 13. ARRANQUE ══════════════ */

function arrancar() {
  document.getElementById('nav').className = 'nav';
  document.getElementById('nav').innerHTML =
    '<div class="nav-in">' +
      [['mundos', ICO.jugar, 'Jugar'], ['charlas', ICO.charla, 'Conversar'], ['papas', ICO.papas, 'Papás']]
      .map(([p, i, l]) =>
        '<button class="navbtn" data-act="nav" data-p="' + p + '">' + i + '<span>' + l + '</span></button>'
      ).join('') +
    '</div>';

  Instalar.init();
  contarDia();
  pintar();

  const arr = document.getElementById('arranque');
  setTimeout(() => {
    arr.classList.add('fuera');
    setTimeout(() => arr.remove(), 600);
  }, 1600);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).catch(() => {});
    });
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
else arrancar();

})();
