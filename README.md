# SpeakUp — Tutor personal de inglés A1 → B2

### ▶ La app está publicada en **https://diegobarcoello-maker.github.io/speakup/**

Aplicación web que enseña inglés a un hispanohablante desde cero hasta nivel B2, con peso extra en inglés profesional y de comercio exterior. Interfaz 100 % en español, contenido de aprendizaje en inglés.

Funciona **entera dentro del navegador**: sin backend, sin compilación, sin instalar nada.

> **Primeros pasos:** abre el enlace, escribe tu nombre, elige tu nivel de partida y empieza. El progreso se guarda solo, en tu navegador. Para que el tutor converse de verdad, pega tu clave de API de Anthropic en Ajustes (ver más abajo).

---

## Qué incluye

| Sección | Qué hace |
|---|---|
| **Inicio** | Meta diaria de XP, racha, palabras aprendidas y mapa de ruta visible A1 → A2 → B1 → B2 con B2 marcado como meta. |
| **Lecciones** | 13 unidades sembradas (3 de A1, 2 de A2, 4 de B1, 4 de B2) con vocabulario con audio, frases útiles, gramática explicada en español y 6-7 ejercicios por unidad de 5 tipos distintos. |
| **Conversar** | 10 escenarios de roleplay con el tutor de IA. Responde en inglés, se puede escuchar, y cada turno trae una **nota de coach** que corrige en español y una pista de qué decir. Entrada por texto o por voz. |
| **Correo de negocios** | 6 tareas reales (pedir cotización, dar seguimiento, confirmar pedido, disculparse por un retraso, proponer reunión, tema libre). El tutor corrige, puntúa y reescribe el correo. |
| **Pronunciación** | Escuchas la frase nativa (normal o despacio), la dices con tu voz y recibes un puntaje que marca en verde y rojo qué palabras salieron bien. |
| **Repaso** | Repetición espaciada (SRS) sobre todo el vocabulario aprendido, con tres niveles de recuerdo. |
| **Ajustes** | Nombre, meta diaria, nivel de partida, acento (americano/británico), voz del tutor, clave de API, modelo, tema claro/oscuro, exportar progreso. |

El nivel sube solo al acumular XP: **A1** 0 · **A2** 600 · **B1** 1800 · **B2** 4000.

---

## Archivos

```
index.html    ← página principal (debe ir en la raíz del repositorio)
styles.css    ← diseño, modo claro/oscuro, accesibilidad
data.js       ← contenido pedagógico: unidades, escenarios, correos
app.js        ← lógica: lecciones, SRS, voz, IA, progreso
README.md     ← este archivo
```

Todas las rutas son **relativas** (`styles.css`, `data.js`, `app.js`), así que la app funciona igual en `usuario.github.io/repo/` que abriendo `index.html` con doble clic.

---

## Actualizar la app

Ya está publicada desde la rama `main`, carpeta raíz. Para cambiar cualquier cosa:

1. Edita el archivo en tu computadora (el contenido vive en `data.js`).
2. En el repositorio pulsa **Add file → Upload files**, arrastra el archivo modificado y pulsa **Commit changes**.
3. GitHub Pages se actualiza solo en 1-2 minutos. Si no ves el cambio, recarga con **Ctrl + Shift + R** para saltarte la caché del navegador.

También puedes editar directamente en GitHub: entra al archivo, pulsa el lápiz, cambia y confirma.

### Si algo falla

| Síntoma | Causa habitual |
|---|---|
| Texto sin estilos | `styles.css` no está en la raíz del repositorio |
| Página en blanco | Falta `data.js` o `app.js`; ábrela y mira la consola (F12) |
| 404 al publicar | Espera un minuto más, o revisa Settings → Pages |
| No se oye el audio | Prueba en Chrome o Edge; algunos sistemas no traen voces en inglés |
| El micrófono no aparece | Solo funciona en Chrome, Edge y Safari, y siempre sobre HTTPS |

---

## Activar el tutor con IA

La conversación, las notas de coach y la corrección de correos usan la API de Anthropic directamente desde el navegador.

1. Entra en [console.anthropic.com](https://console.anthropic.com) → **API Keys** → crea una clave (empieza por `sk-ant-`).
2. En SpeakUp abre **Ajustes** (engranaje arriba a la derecha), pega la clave en *Clave de API de Anthropic* y pulsa **Guardar cambios**.
3. Pulsa **Probar la conexión** para confirmar que funciona.

La clave se guarda **solo en el `localStorage` de tu navegador** y únicamente viaja a `api.anthropic.com`. Como es tu clave personal, no la pongas dentro del código ni la subas al repositorio: si el sitio es público, cualquiera podría leerla.

**Sin clave la app sigue siendo útil**: Conversar funciona con diálogos guiados y un corrector básico de errores típicos del hispanohablante, y el Correo de negocios muestra correcciones estructurales más un correo modelo de referencia. Lecciones, Pronunciación y Repaso no necesitan IA en absoluto.

### Modelos disponibles en Ajustes

- `claude-sonnet-5` — equilibrio entre calidad y velocidad (predeterminado)
- `claude-haiku-4-5-20251001` — más rápido y económico
- `claude-opus-5` — correcciones más profundas

---

## Requisitos del navegador

| Función | Requisito |
|---|---|
| Lecciones, repaso, progreso | Cualquier navegador moderno |
| Escuchar audio (`SpeechSynthesis`) | Chrome, Edge, Safari, Firefox |
| Hablar con el micrófono (`SpeechRecognition`) | **Chrome o Edge** en escritorio, Chrome en Android, Safari en iOS 14.5+ |

Si el navegador no soporta reconocimiento de voz, la app lo detecta y te deja escribir en lugar de hablar; nada se rompe.

El micrófono exige **HTTPS**, que GitHub Pages ya proporciona.

---

## Cómo se usa (recomendación de uso diario, 10-15 min)

1. **Repaso** primero: quítate de encima las tarjetas pendientes (2-3 min).
2. **Una lección** nueva o repetida (5-7 min).
3. **Conversar**: dos o tres turnos en un escenario, mejor por voz (3-5 min).
4. Un par de veces por semana, **Correo de negocios** con una tarea real de tu trabajo.

La constancia diaria pesa más que las sesiones largas: la racha existe justamente para eso.

---

## Privacidad y datos

Todo el progreso (XP, racha, vocabulario, lecciones completadas, ajustes) vive en el `localStorage` de tu navegador bajo la clave `speakup.v1`. No hay servidor ni cuentas.

Si borras los datos del sitio o cambias de navegador, el progreso se pierde. Usa **Ajustes → Exportar mi progreso** para descargar una copia de seguridad en JSON.

---

## Personalizar el contenido

Todo el material está en `data.js` y es texto plano, fácil de editar:

- `UNITS` — añade una unidad copiando la estructura de cualquier otra. Tipos de ejercicio disponibles: `mc` (opción múltiple), `fill` (completar), `tr` (traducir), `listen` (auditivo), `order` (ordenar palabras).
- `SCENARIOS` — añade escenarios de roleplay. `persona` es la instrucción que recibe la IA; `fallback` son las respuestas guiadas cuando no hay clave.
- `EMAIL_TASKS` — añade tareas de correo con su `brief` y un correo `model` de referencia.
- `PRONUNCIATION_SETS` — frases de pronunciación por nivel.
- `OFFLINE_RULES` — reglas del corrector sin IA para errores típicos del hispanohablante.

Tras editar, vuelve a subir el archivo a GitHub: Pages se actualiza solo en 1-2 minutos.
