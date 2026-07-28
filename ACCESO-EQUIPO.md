# Dar acceso al equipo sin que configuren nada

Con esto, tus vendedores abren un enlace y ya tienen el tutor con IA funcionando. No crean cuentas, no pegan claves, no configuran nada.

Tú montas un pequeño servicio intermedio —gratis— que guarda **tu** clave. La app le habla a ese servicio, y el servicio habla con Anthropic. La clave nunca sale de ahí, así que nadie puede copiarla.

**Tiempo: unos 15 minutos, una sola vez.**

---

## Antes de empezar: pon un tope de gasto

Esto es lo primero, no lo último. A partir de ahora **tú pagas el consumo de todo el equipo**.

Entra en [console.anthropic.com](https://console.anthropic.com) → **Billing** o **Limits**, y fija un límite de gasto mensual con el que estés cómodo. Es tu red de seguridad: si algo se desmadra, se corta solo.

Recomendación: empieza con poco, mira cómo consume tu equipo la primera semana, y ajusta.

---

## 1 · Crea la cuenta de Cloudflare

Entra en [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) y regístrate. Es gratis y no pide tarjeta.

## 2 · Crea el Worker

1. En el panel, menú izquierdo: **Workers & Pages** → **Create** → **Create Worker**
2. Ponle de nombre `speakup` y pulsa **Deploy**
3. Cuando termine, pulsa **Edit code**
4. Borra todo lo que hay y pega el contenido de **`worker.js`**
5. Pulsa **Deploy** arriba a la derecha

Apunta la dirección que te queda. Será algo así:

```
https://speakup.TU-USUARIO.workers.dev
```

## 3 · Guarda tu clave y el código de acceso

Vuelve al Worker → pestaña **Settings** → **Variables and Secrets**.

Añade estas cuatro. Las dos primeras como **Secret** (así quedan ocultas), las otras dos como **Text**:

| Nombre | Tipo | Valor |
|---|---|---|
| `CLAVE_ANTHROPIC` | Secret | Tu clave `sk-ant-...` |
| `CODIGO_ACCESO` | Secret | El código que le darás al equipo, p. ej. `SOYODA-2026` |
| `ORIGEN_PERMITIDO` | Text | `https://diegobarcoello-maker.github.io` |
| `LIMITE_DISPOSITIVO` | Text | `80` |
| `LIMITE_GLOBAL` | Text | `600` |

Pulsa **Deploy** para que tomen efecto.

> Si no guardaste tu clave de Anthropic, crea una nueva en console.anthropic.com → API Keys. Puedes tener varias a la vez.

## 4 · Activa los contadores de uso (recomendado)

Sin esto el servicio funciona, pero no puede contar cuántas veces usa cada quien, así que los límites no se aplican.

1. Menú izquierdo: **Storage & Databases** → **KV** → **Create a namespace**
2. Nómbralo `speakup-limites` y créalo
3. Vuelve a tu Worker → **Settings** → **Bindings** → **Add** → **KV namespace**
4. Variable name: `LIMITES` · KV namespace: `speakup-limites`
5. **Deploy**

## 5 · Reparte el enlace

Ahora arma el enlace con tu dirección y tu código:

```
https://diegobarcoello-maker.github.io/speakup/?api=https://speakup.TU-USUARIO.workers.dev&codigo=SOYODA-2026
```

Eso es lo que le pasas al equipo. Al abrirlo, la app se configura sola, borra el código de la barra de direcciones y les avisa de que el tutor quedó activado. Desde ahí, que instalen la app con el menú ⋮ → **Instalar aplicación**.

**Importante:** ese enlace lleva el código dentro. Mándalo por privado a cada persona, no lo publiques en un grupo abierto ni en redes.

---

## Cómo queda el control

| Protección | Qué hace |
|---|---|
| Código de acceso | Sin él, el servicio no responde |
| Origen permitido | Solo acepta peticiones desde tu app, no desde otra web |
| Límite por persona | 80 usos al día cada uno. Al pasarse, se le corta a esa persona sola |
| Tope global | 600 usos al día entre todos. Es tu freno de mano |
| Modelo y tokens fijados | Nadie puede pedir respuestas mucho más caras desde fuera |
| Tope de gasto en Anthropic | La red de seguridad final |

Los contadores se reinician solos cada día.

## Si quieres cambiar algo después

- **Subir o bajar los límites** → Settings → Variables → cambia el número → Deploy
- **Cambiar el código** (si se filtró) → cambia `CODIGO_ACCESO` → Deploy, y reparte el enlace nuevo. Los antiguos dejan de funcionar al instante
- **Cortar el acceso a todos de golpe** → borra `CODIGO_ACCESO` o pausa el Worker

## Si alguien prefiere ir por su cuenta

En Ajustes hay una segunda opción: poner su propia clave de Anthropic. Entonces paga su consumo y no toca tu saldo. Si tiene las dos cosas configuradas, manda el código del equipo.

## Y si no montas nada de esto

La app funciona igual para cualquiera, sin configurar nada, en todo lo que no usa IA: las 22 unidades con sus 250 ejercicios, los 10 diálogos de escucha, la pronunciación y el repaso. Solo quedan bloqueados Conversar, el Correo de negocios, el generador de lecciones y el asistente de dudas.
