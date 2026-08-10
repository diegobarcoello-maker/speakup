/* ============================================================
   SpeakUp Kids — Ilustraciones

   Dibujadas a mano en SVG, dentro del propio archivo. Pesan
   unos pocos kilobytes en total, se ven nítidas en cualquier
   pantalla y funcionan sin internet.

   Todas usan el mismo lienzo de 100x100 y la misma paleta,
   para que se vean como una familia y no como un pegote de
   iconos sueltos.
   ============================================================ */

const C = {
  piel:  '#f5c99b', pelo:  '#5b3a29', rojo:  '#e4572e', naranja:'#f5a623',
  amar:  '#f7c948', verde: '#5aa650', verdeO:'#3d7a36', azul:  '#3a8dde',
  azulO: '#2668a8', mora:  '#8e6bbf', rosa:  '#f28ab2', cafe:  '#a1662f',
  cafeO: '#7a4a1e', gris:  '#9aa5b1', grisO: '#5c6773', blanco:'#ffffff',
  negro: '#31404d', crema: '#fdf3e3'
};

function svg(cuerpo) {
  return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + cuerpo + '</svg>';
}
/* atajos, para que el resto se lea */
const ci = (x,y,r,f) => '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"/>';
const el = (x,y,rx,ry,f,extra) => '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+f+'"'+(extra||'')+'/>';
const re = (x,y,w,h,f,r) => '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(r||0)+'" fill="'+f+'"/>';
const pa = (d,f,extra) => '<path d="'+d+'" fill="'+(f||'none')+'"'+(extra||'')+'/>';
const li = (x1,y1,x2,y2,s,w) => '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+s+'" stroke-width="'+(w||3)+'" stroke-linecap="round"/>';
/* Contorno oscuro: sin él, las formas planas se confunden entre sí.
   Es el truco que más mejora un dibujo infantil. */
const O = 'stroke="#4a3b2f" stroke-width="2.6" stroke-linejoin="round"';
const cio = (x,y,r,f) => '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'" '+O+'/>';
const elo = (x,y,rx,ry,f) => '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+f+'" '+O+'/>';
const pao = (d,f) => '<path d="'+d+'" fill="'+f+'" '+O+'/>';
const reo = (x,y,w,h,f,r) => '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(r||0)+'" fill="'+f+'" '+O+'/>';

/* dos ojitos y una sonrisa: lo que convierte una forma en un personaje */
const cara = (x,y,sep,rad) => {
  const r = rad || 2.6;
  return ci(x-sep, y, r, C.negro) + ci(x+sep, y, r, C.negro) +
    '<path d="M'+(x-sep)+' '+(y+7)+' Q'+x+' '+(y+12)+' '+(x+sep)+' '+(y+7)+'" stroke="'+C.negro+'" stroke-width="2" fill="none" stroke-linecap="round"/>';
};

const ART = {

/* ---------- ANIMALES ---------- */
cat: svg(
  el(50,74,20,10,'#c97b2e') +
  elo(50,52,30,26,C.naranja) +
  pao('M26 34 L22 12 L44 26 Z', C.naranja) + pao('M74 34 L78 12 L56 26 Z', C.naranja) +
  pa('M29 31 L27 19 L38 26 Z', C.rosa) + pa('M71 31 L73 19 L62 26 Z', C.rosa) +
  ci(40,46,4.2,C.negro) + ci(60,46,4.2,C.negro) +
  ci(41.5,44.5,1.5,C.blanco) + ci(61.5,44.5,1.5,C.blanco) +
  pao('M50 56 l-5 -4 h10 Z', C.rosa) +
  pa('M50 60 q-6 6 -11 1', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  pa('M50 60 q6 6 11 1', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  li(24,52,8,47,'#4a3b2f',2) + li(24,58,8,59,'#4a3b2f',2) +
  li(76,52,92,47,'#4a3b2f',2) + li(76,58,92,59,'#4a3b2f',2)
),
dog: svg(
  elo(50,74,20,10,'#8a5622') +
  elo(50,52,29,25,C.cafe) +
  elo(23,50,9,17,C.cafeO) + elo(77,50,9,17,C.cafeO) +
  ci(40,46,4.2,C.negro) + ci(60,46,4.2,C.negro) +
  ci(41.5,44.5,1.5,C.blanco) + ci(61.5,44.5,1.5,C.blanco) +
  elo(50,60,8,6.5,C.negro) +
  pa('M50 66 v5', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  pa('M42 72 q8 7 16 0', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  pao('M46 72 q4 8 8 0 Z', C.rosa)
),
bird: svg(
  elo(56,56,22,20,C.azul) +
  cio(38,40,15,C.azul) +
  pao('M24 40 L8 45 L24 50 Z', C.naranja) +
  ci(35,36,3.4,C.negro) + ci(36,35,1.2,C.blanco) +
  pao('M58 50 q16 -6 20 10 q-14 8 -20 -10 Z', C.azulO) +
  pao('M76 60 q10 4 12 14 q-10 2 -14 -8 Z', C.azulO) +
  li(48,76,46,90,C.naranja,3.4) + li(60,76,62,90,C.naranja,3.4)
),
fish: svg(
  pao('M74 50 L94 34 L94 66 Z', C.rojo) +
  elo(46,50,28,19,C.naranja) +
  pao('M40 30 q10 -6 18 4 q-9 6 -18 -4 Z', C.rojo) +
  ci(30,45,4,C.negro) + ci(31,44,1.4,C.blanco) +
  pa('M34 56 q6 4 12 0', 'none', ' stroke="#4a3b2f" stroke-width="2.2" stroke-linecap="round"') +
  ci(62,46,3,'#f7c48a') + ci(70,56,2.6,'#f7c48a') + ci(58,58,2.6,'#f7c48a')
),
horse: svg(
  pao('M36 88 q-4 -30 6 -44 q10 -14 26 -14 q14 0 18 10 q3 8 -4 12 l-8 4 q-6 3 -8 10 q-3 12 -2 22 Z', C.cafe) +
  pao('M62 30 l-3 -14 l10 9 Z', C.cafeO) + pao('M76 28 l4 -13 l-9 8 Z', C.cafeO) +
  pa('M42 34 q-8 4 -8 16 q0 10 4 16', 'none', ' stroke="'+C.cafeO+'" stroke-width="7" stroke-linecap="round"') +
  ci(72,40,3.6,C.negro) + ci(73,39,1.3,C.blanco) +
  elo(84,52,7,6,'#c99a6a') + ci(83,51,1.6,C.negro) +
  li(44,88,44,92,C.cafeO,6) + li(64,88,64,92,C.cafeO,6)
),
cow: svg(
  pao('M18 46 q-8 -4 -6 -12 q8 -2 12 6 Z', '#e8e2d8') +
  pao('M82 46 q8 -4 6 -12 q-8 -2 -12 6 Z', '#e8e2d8') +
  elo(20,54,10,13,C.blanco) + elo(80,54,10,13,C.blanco) +
  elo(50,52,28,26,C.blanco) +
  pa('M30 36 q10 -6 15 6 q-9 8 -15 -6 Z', C.negro) +
  pa('M68 68 q8 -3 8 8 q-9 3 -8 -8 Z', C.negro) +
  ci(40,46,4.2,C.negro) + ci(60,46,4.2,C.negro) +
  ci(41.5,44.5,1.5,C.blanco) + ci(61.5,44.5,1.5,C.blanco) +
  elo(50,66,15,11,C.rosa) +
  ci(45,64,2.2,'#c96b8e') + ci(55,64,2.2,'#c96b8e') +
  pa('M44 71 q6 4 12 0', 'none', ' stroke="#c96b8e" stroke-width="2.2" stroke-linecap="round"')
),
elephant: svg(
  elo(52,58,30,26,C.gris) +
  pao('M22 50 q-14 -6 -12 10 q2 14 14 10 Z', '#b6c0ca') +
  pao('M40 70 q-4 16 4 20 q8 3 8 -8 q0 -8 -4 -14 Z', C.gris) +
  ci(46,50,4.2,C.negro) + ci(64,50,4.2,C.negro) +
  ci(47.5,48.5,1.5,C.blanco) + ci(65.5,48.5,1.5,C.blanco) +
  pao('M64 66 l6 12 l-6 2 Z', C.crema) +
  li(76,74,76,88,C.gris,8) + li(60,80,60,90,C.gris,8)
),
lion: svg(
  cio(50,54,32,C.amar) +
  ci(50,54,31,'none') +
  cio(50,54,22,'#f5a623') +
  ci(42,50,4.2,C.negro) + ci(58,50,4.2,C.negro) +
  ci(43.5,48.5,1.5,C.blanco) + ci(59.5,48.5,1.5,C.blanco) +
  pao('M50 58 l-5 -4 h10 Z', C.cafeO) +
  pa('M50 62 q-6 6 -11 1', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  pa('M50 62 q6 6 11 1', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  cio(36,28,8,C.amar) + cio(64,28,8,C.amar)
),
duck: svg(
  elo(46,64,24,18,C.amar) +
  cio(66,42,15,C.amar) +
  pao('M78 40 L94 45 L78 51 Z', C.naranja) +
  ci(64,38,3.4,C.negro) + ci(65,37,1.2,C.blanco) +
  pao('M32 60 q-12 4 -8 14 q10 2 14 -8 Z', '#e0b02a') +
  li(42,80,40,90,C.naranja,3.6) + li(54,80,56,90,C.naranja,3.6)
),
frog: svg(
  elo(50,64,30,22,C.verde) +
  cio(34,40,12,C.verde) + cio(66,40,12,C.verde) +
  ci(34,40,6,C.blanco) + ci(66,40,6,C.blanco) +
  ci(34,41,3.2,C.negro) + ci(66,41,3.2,C.negro) +
  pa('M34 64 q16 12 32 0', 'none', ' stroke="#2f6b2a" stroke-width="3" stroke-linecap="round"') +
  ci(42,58,2.4,'#7cc46e') + ci(58,58,2.4,'#7cc46e') +
  pao('M22 76 q-8 4 -4 10 q8 2 12 -6 Z', C.verdeO) +
  pao('M78 76 q8 4 4 10 q-8 2 -12 -6 Z', C.verdeO)
),
bear: svg(
  cio(28,30,12,C.cafeO) + cio(72,30,12,C.cafeO) +
  ci(28,30,6,'#c98b52') + ci(72,30,6,'#c98b52') +
  cio(50,56,29,C.cafe) +
  elo(50,66,15,12,C.crema) +
  ci(40,50,4.2,C.negro) + ci(60,50,4.2,C.negro) +
  ci(41.5,48.5,1.5,C.blanco) + ci(61.5,48.5,1.5,C.blanco) +
  elo(50,62,6,4.6,C.negro) +
  pa('M50 67 v3', 'none', ' stroke="#4a3b2f" stroke-width="2.2" stroke-linecap="round"') +
  pa('M43 72 q7 5 14 0', 'none', ' stroke="#4a3b2f" stroke-width="2.2" stroke-linecap="round"')
),
rabbit: svg(
  elo(41,26,7,17,C.blanco) + elo(59,26,7,17,C.blanco) +
  el(41,27,3.4,11,C.rosa) + el(59,27,3.4,11,C.rosa) +
  elo(50,68,24,20,C.blanco) +
  cio(50,48,16,C.blanco) +
  ci(44,46,3.6,C.negro) + ci(56,46,3.6,C.negro) +
  ci(45,45,1.3,C.blanco) + ci(57,45,1.3,C.blanco) +
  pao('M50 54 l-4 -3 h8 Z', C.rosa) +
  pa('M50 57 q-5 5 -9 1', 'none', ' stroke="#4a3b2f" stroke-width="2.2" stroke-linecap="round"') +
  pa('M50 57 q5 5 9 1', 'none', ' stroke="#4a3b2f" stroke-width="2.2" stroke-linecap="round"')
),

/* ---------- COMIDA ---------- */
apple: svg(
  pa('M50 30 Q26 26 24 52 Q22 82 50 88 Q78 82 76 52 Q74 26 50 30 Z', C.rojo) +
  li(50,30,50,16,C.cafeO,4) +
  pa('M52 20 Q68 12 66 26 Q54 30 52 20 Z', C.verde)
),
banana: svg(
  pa('M22 34 Q26 74 66 80 Q86 82 84 68 Q60 72 40 52 Q30 40 30 30 Z', C.amar) +
  pa('M22 34 Q26 30 30 30 Q30 40 40 52 Q60 72 84 68 Q86 72 84 74 Q56 76 34 54 Q24 44 22 34 Z', '#e0b02a')
),
bread: svg(
  pao('M16 56 q0 -22 34 -22 q34 0 34 22 v20 q0 6 -6 6 H22 q-6 0 -6 -6 Z', C.cafe) +
  pa('M24 54 q0 -12 26 -12 q26 0 26 12 Z', '#e0b878') +
  li(34,66,34,78,'#8a5622',2.4) + li(50,66,50,78,'#8a5622',2.4) + li(66,66,66,78,'#8a5622',2.4)
),
milk: svg(
  pa('M34 38 L34 82 Q34 86 38 86 L62 86 Q66 86 66 82 L66 38 Z', C.blanco, ' stroke="'+C.gris+'" stroke-width="2"') +
  pa('M34 38 L50 20 L66 38 Z', C.blanco, ' stroke="'+C.gris+'" stroke-width="2"') +
  re(40,54,20,18,C.azul,3)
),
egg: svg(
  el(50,56,24,30,C.blanco, ' stroke="'+C.gris+'" stroke-width="2"') +
  el(43,46,7,9,'#f7f2e7')
),
cheese: svg(
  pa('M16 66 L50 30 L86 46 L86 72 Q86 76 82 76 L20 76 Q16 76 16 72 Z', C.amar) +
  ci(40,58,5,'#e0b02a') + ci(62,60,4,'#e0b02a') + ci(52,70,3.4,'#e0b02a')
),
water: svg(
  pa('M36 30 L64 30 L60 86 Q60 90 56 90 L44 90 Q40 90 40 86 Z', '#d9edf9', ' stroke="'+C.azul+'" stroke-width="2"') +
  pa('M38 54 L62 54 L60 86 Q60 90 56 90 L44 90 Q40 90 40 86 Z', C.azul)
),
cake: svg(
  re(22,54,56,30,C.rosa,6) +
  re(22,46,56,12,C.crema,4) +
  ci(34,46,5,C.rojo) + ci(50,44,5,C.rojo) + ci(66,46,5,C.rojo) +
  li(50,44,50,28,C.amar,4) + el(50,24,3.4,5,C.naranja)
),
rice: svg(
  pao('M16 58 q34 -18 68 0 q0 24 -34 28 q-34 -4 -34 -28 Z', C.blanco) +
  elo(50,56,28,9,'#f7f2e7') +
  el(42,54,4,2.4,'#e8e2d8') + el(56,53,4,2.4,'#e8e2d8') + el(50,59,4,2.4,'#e8e2d8')
),
chicken: svg(
  elo(46,64,26,20,'#e8d5a8') +
  cio(64,42,14,'#f2e3c0') +
  pao('M60 28 q-3 -8 3 -8 q2 -6 7 -1 q6 -3 5 4 q6 2 1 7 Z', C.rojo) +
  pao('M78 42 L90 46 L78 50 Z', C.naranja) +
  ci(62,40,3.4,C.negro) + ci(63,39,1.2,C.blanco) +
  pao('M24 62 q-10 6 -6 14 q10 2 14 -8 Z', '#d9c48c') +
  li(42,82,40,92,C.naranja,3.4) + li(54,82,56,92,C.naranja,3.4)
),


/* ---------- CASA Y OBJETOS ---------- */
house: svg(
  pao('M22 50 h56 v38 H22 Z', C.crema) +
  pao('M12 52 L50 18 L88 52 Z', C.rojo) +
  reo(43,64,15,24,C.cafeO,2) + ci(54,77,2,C.amar) +
  reo(28,58,14,13,'#bfe3ff',2) + reo(60,58,14,13,'#bfe3ff',2) +
  li(35,58,35,71,C.blanco,2) + li(28,64.5,42,64.5,C.blanco,2) +
  li(67,58,67,71,C.blanco,2) + li(60,64.5,74,64.5,C.blanco,2)
),
door: svg(
  re(30,20,40,68,C.cafe,4) +
  re(36,26,28,56,C.cafeO,3) +
  ci(62,54,3,C.amar)
),
window: svg(
  re(22,26,56,50,C.azul,4) +
  re(22,26,56,50,'none',4) +
  li(50,26,50,76,C.blanco,4) + li(22,51,78,51,C.blanco,4) +
  re(18,22,64,8,C.cafe,3)
),
chair: svg(
  re(30,20,10,50,C.cafe,3) + re(60,20,10,50,C.cafe,3) +
  re(26,44,48,10,C.cafeO,3) +
  re(28,66,6,20,C.cafe,2) + re(66,66,6,20,C.cafe,2)
),
table: svg(
  re(14,40,72,10,C.cafeO,4) +
  re(22,50,8,36,C.cafe,2) + re(70,50,8,36,C.cafe,2)
),
bed: svg(
  re(14,44,72,26,C.azul,4) +
  re(18,34,26,16,C.blanco,4) +
  re(14,66,8,20,C.cafeO,2) + re(78,66,8,20,C.cafeO,2)
),
book: svg(
  pa('M18 26 Q34 20 50 26 L50 78 Q34 72 18 78 Z', C.rojo) +
  pa('M82 26 Q66 20 50 26 L50 78 Q66 72 82 78 Z', C.azul) +
  li(50,26,50,78,C.crema,3)
),
ball: svg(
  ci(50,54,30,C.blanco, ) +
  '<circle cx="50" cy="54" r="30" fill="none" stroke="'+C.negro+'" stroke-width="2"/>' +
  pa('M50 34 L64 44 L58 60 L42 60 L36 44 Z', C.negro) +
  li(50,34,50,24,C.negro,2) + li(64,44,76,40,C.negro,2) + li(36,44,24,40,C.negro,2)
),
car: svg(
  pao('M10 64 l6 -18 q3 -8 12 -8 h44 q9 0 12 8 l6 18 Z', C.rojo) +
  pao('M28 46 h18 v12 H22 Z', '#bfe3ff') + pao('M52 46 h18 l6 12 H52 Z', '#bfe3ff') +
  reo(8,62,84,12,'#c23b1c',5) +
  cio(28,76,10,C.negro) + ci(28,76,4.4,C.gris) +
  cio(72,76,10,C.negro) + ci(72,76,4.4,C.gris) +
  ci(16,58,3.4,C.amar) + ci(84,58,3.4,C.amar)
),
bus: svg(
  reo(12,28,76,44,C.amar,8) +
  pao('M18 38 h20 v14 H18 Z', '#bfe3ff') + pao('M44 38 h20 v14 H44 Z', '#bfe3ff') + pao('M70 38 h12 v14 H70 Z', '#bfe3ff') +
  reo(18,58,26,10,'#e0b02a',3) +
  cio(30,76,9,C.negro) + ci(30,76,3.8,C.gris) +
  cio(70,76,9,C.negro) + ci(70,76,3.8,C.gris)
),
bike: svg(
  '<circle cx="26" cy="66" r="16" fill="none" stroke="'+C.negro+'" stroke-width="4"/>' +
  '<circle cx="74" cy="66" r="16" fill="none" stroke="'+C.negro+'" stroke-width="4"/>' +
  li(26,66,46,66,C.azul,4) + li(46,66,58,42,C.azul,4) + li(58,42,74,66,C.azul,4) +
  li(46,66,58,42,C.azul,4) + li(52,42,66,42,C.negro,4)
),

/* ---------- ESCUELA ---------- */
pencil: svg(
  pa('M22 78 L28 60 L70 18 L82 30 L40 72 Z', C.amar) +
  pa('M70 18 L82 30 L88 24 Q90 22 88 20 L80 12 Q78 10 76 12 Z', C.rosa) +
  pa('M22 78 L28 60 L34 66 Z', C.negro)
),
bag: svg(
  re(22,40,56,44,C.mora,8) +
  pa('M36 40 Q36 22 50 22 Q64 22 64 40', 'none', ' stroke="'+C.mora+'" stroke-width="5"') +
  re(34,54,32,14,C.crema,3)
),
scissors: svg(
  li(30,80,66,32,C.gris,5) + li(70,80,34,32,C.gris,5) +
  '<circle cx="28" cy="82" r="8" fill="none" stroke="'+C.rojo+'" stroke-width="4"/>' +
  '<circle cx="72" cy="82" r="8" fill="none" stroke="'+C.rojo+'" stroke-width="4"/>'
),
clock: svg(
  ci(50,54,32,C.blanco) +
  '<circle cx="50" cy="54" r="32" fill="none" stroke="'+C.negro+'" stroke-width="4"/>' +
  li(50,54,50,34,C.negro,4) + li(50,54,64,60,C.negro,3) +
  ci(50,54,3,C.rojo)
),

/* ---------- CUERPO Y PERSONAS ---------- */
hand: svg(
  pao('M30 88 V50 q0 -8 7 -8 q7 0 7 8 V30 q0 -8 7 -8 q7 0 7 8 v6 q0 -8 7 -8 q7 0 7 8 v10 q0 -6 6 -6 q7 0 7 9 v19 q0 22 -22 22 Z', C.piel) +
  pa('M44 50 v14 M58 44 v20 M72 50 v14', 'none', ' stroke="#d9a271" stroke-width="2.2" stroke-linecap="round"')
),
eye: svg(
  pao('M12 54 q38 -30 76 0 q-38 30 -76 0 Z', C.blanco) +
  cio(50,54,14,C.cafe) +
  ci(50,54,6.5,C.negro) + ci(45,49,3.6,C.blanco) +
  pa('M14 50 q36 -28 72 0', 'none', ' stroke="#4a3b2f" stroke-width="3" stroke-linecap="round"')
),
boy: svg(
  pao('M32 90 q0 -34 18 -34 q18 0 18 34 Z', C.azul) +
  cio(50,34,17,C.piel) +
  pao('M32 30 q0 -16 18 -16 q18 0 18 16 q-9 -7 -18 -5 q-9 2 -18 5 Z', C.pelo) +
  ci(44,34,3.4,C.negro) + ci(56,34,3.4,C.negro) +
  ci(45,33,1.2,C.blanco) + ci(57,33,1.2,C.blanco) +
  pa('M43 42 q7 6 14 0', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  ci(33,38,3.6,'#f0a48a') + ci(67,38,3.6,'#f0a48a')
),
girl: svg(
  pao('M50 56 L74 90 H26 Z', C.rosa) +
  cio(50,34,17,C.piel) +
  pao('M30 36 q0 -22 20 -22 q20 0 20 22 q0 -12 -20 -12 q-20 0 -20 12 Z', C.cafeO) +
  elo(29,46,7,14,C.cafeO) + elo(71,46,7,14,C.cafeO) +
  ci(44,34,3.4,C.negro) + ci(56,34,3.4,C.negro) +
  ci(45,33,1.2,C.blanco) + ci(57,33,1.2,C.blanco) +
  pa('M43 42 q7 6 14 0', 'none', ' stroke="#4a3b2f" stroke-width="2.4" stroke-linecap="round"') +
  ci(34,38,3.4,'#f0a48a') + ci(66,38,3.4,'#f0a48a')
),
family: svg(
  pao('M14 88 q0 -30 18 -30 q18 0 18 30 Z', C.azul) +
  cio(32,40,13,C.piel) + pao('M20 38 q0 -14 12 -14 q12 0 12 14 q-6 -6 -12 -5 q-6 1 -12 5 Z', C.pelo) +
  ci(28,40,2.8,C.negro) + ci(36,40,2.8,C.negro) +
  pao('M50 88 q0 -34 16 -34 q16 0 16 34 Z', C.rosa) +
  cio(66,38,13,C.piel) + pao('M53 40 q0 -18 13 -18 q13 0 13 18 q0 -9 -13 -9 q-13 0 -13 9 Z', C.cafeO) +
  ci(62,38,2.8,C.negro) + ci(70,38,2.8,C.negro) +
  pao('M38 90 q0 -18 11 -18 q11 0 11 18 Z', C.amar) +
  cio(49,62,10,C.piel) + pao('M40 61 q0 -11 9 -11 q9 0 9 11 q-5 -5 -9 -4 q-4 1 -9 4 Z', C.pelo) +
  ci(46,62,2.4,C.negro) + ci(52,62,2.4,C.negro)
),

/* ---------- NATURALEZA ---------- */
sun: svg(
  li(50,18,50,6,C.naranja,5.5) + li(50,86,50,98,C.naranja,5.5) +
  li(18,52,6,52,C.naranja,5.5) + li(82,52,94,52,C.naranja,5.5) +
  li(27,29,18,20,C.naranja,5.5) + li(73,29,82,20,C.naranja,5.5) +
  li(27,75,18,84,C.naranja,5.5) + li(73,75,82,84,C.naranja,5.5) +
  cio(50,52,22,C.amar) +
  ci(43,48,3.4,C.negro) + ci(57,48,3.4,C.negro) +
  pa('M42 58 q8 8 16 0', 'none', ' stroke="#4a3b2f" stroke-width="2.6" stroke-linecap="round"') +
  ci(36,58,3.4,'#f0a48a') + ci(64,58,3.4,'#f0a48a')
),
moon: svg(
  pa('M62 14 Q30 22 30 52 Q30 82 62 90 Q34 82 34 52 Q34 22 62 14 Z', C.amar) +
  pa('M62 14 Q86 26 86 52 Q86 78 62 90 Q40 80 40 52 Q40 24 62 14 Z', C.amar)
),
star: svg(
  pa('M50 14 L61 40 L89 43 L68 62 L74 90 L50 76 L26 90 L32 62 L11 43 L39 40 Z', C.amar)
),
cloud: svg(
  ci(34,58,16,C.blanco) + ci(52,50,20,C.blanco) + ci(70,58,15,C.blanco) +
  re(34,58,36,16,C.blanco,8)
),
rain: svg(
  ci(34,44,15,C.gris) + ci(52,38,18,C.gris) + ci(68,46,13,C.gris) +
  re(34,44,34,14,C.gris,7) +
  li(36,66,32,80,C.azul,4) + li(50,66,46,84,C.azul,4) + li(64,66,60,80,C.azul,4)
),
tree: svg(
  reo(44,56,12,32,C.cafeO,3) +
  cio(50,36,23,C.verde) + cio(31,48,15,C.verde) + cio(69,48,15,C.verde) +
  ci(44,32,4,'#7cc46e') + ci(58,40,3.4,'#7cc46e') + ci(36,50,3.4,'#7cc46e')
),
flower: svg(
  li(50,54,50,90,C.verdeO,4.5) +
  pao('M50 70 q-14 -10 -18 2 q12 8 18 -2 Z', C.verde) +
  pao('M50 62 q14 -10 18 2 q-12 8 -18 -2 Z', C.verde) +
  elo(50,30,11,15,C.rosa) + elo(50,54,11,15,C.rosa) +
  elo(35,42,15,11,C.rosa) + elo(65,42,15,11,C.rosa) +
  cio(50,42,10,C.amar)
),
flag: svg(
  li(28,14,28,90,C.cafeO,5) +
  pa('M31 18 L78 26 L78 52 L31 44 Z', C.rojo)
),

/* ---------- ROPA ---------- */
shirt: svg(
  pa('M32 26 L44 22 Q50 30 56 22 L68 26 L80 36 L70 46 L66 42 L66 82 L34 82 L34 42 L30 46 L20 36 Z', C.azul)
),
shoe: svg(
  pa('M16 68 L16 50 Q16 44 24 44 L38 44 L52 56 L78 62 Q86 64 86 72 L86 76 Q86 80 82 80 L20 80 Q16 80 16 76 Z', C.rojo) +
  li(20,72,84,72,C.blanco,4)
),
hat: svg(
  pa('M24 62 Q24 26 50 26 Q76 26 76 62 Z', C.azulO) +
  re(12,60,76,10,C.azul,5)
),
sock: svg(
  pa('M36 16 L58 16 L58 56 Q58 62 64 66 L78 74 Q84 78 80 84 Q76 90 70 86 L48 74 Q36 68 36 54 Z', C.mora) +
  re(36,16,22,10,C.rosa,2)
),

/* ---------- JUGUETES Y OTROS ---------- */
toy: svg(
  ci(50,34,15,C.rosa) +
  re(34,50,32,28,C.mora,6) +
  li(30,54,20,68,C.mora,6) + li(70,54,80,68,C.mora,6) +
  ci(45,32,2.4,C.negro) + ci(55,32,2.4,C.negro) +
  pa('M44 40 Q50 45 56 40', 'none', ' stroke="'+C.negro+'" stroke-width="2" stroke-linecap="round"')
),
balloon: svg(
  el(50,40,22,26,C.rojo) +
  pa('M46 66 L54 66 L50 72 Z', C.rojo) +
  pa('M50 72 Q58 80 46 88', 'none', ' stroke="'+C.grisO+'" stroke-width="2"')
),
gift: svg(
  re(20,44,60,42,C.mora,4) +
  re(20,36,60,12,C.rosa,3) +
  re(44,36,12,50,C.rosa,2) +
  pa('M44 36 Q30 22 42 22 Q50 24 50 36 Z', C.rosa) +
  pa('M56 36 Q70 22 58 22 Q50 24 50 36 Z', C.rosa)
),
phone: svg(
  re(32,14,36,72,C.negro,8) +
  re(36,22,28,54,C.azul,3) +
  ci(50,81,3,C.gris)
),
key: svg(
  '<circle cx="30" cy="46" r="16" fill="none" stroke="'+C.amar+'" stroke-width="8"/>' +
  li(44,52,84,74,C.amar,8) +
  li(70,58,76,72,C.amar,7) + li(58,52,64,66,C.amar,7)
),
heart: svg(
  pa('M50 84 Q14 58 14 38 Q14 20 32 20 Q44 20 50 32 Q56 20 68 20 Q86 20 86 38 Q86 58 50 84 Z', C.rojo)
)
};

/* Los colores se dibujan solos: una mancha de pintura del color que toque */
const COLORES_ART = {
  red:C.rojo, blue:C.azul, yellow:C.amar, green:C.verde, orange:C.naranja,
  purple:C.mora, pink:C.rosa, brown:C.cafe, black:C.negro, white:C.blanco, grey:C.gris
};
Object.keys(COLORES_ART).forEach(nombre => {
  const f = COLORES_ART[nombre];
  const borde = (nombre === 'white') ? ' stroke="'+C.gris+'" stroke-width="2"' : '';
  ART[nombre] = svg(pa('M50 12 Q78 12 84 40 Q90 68 66 82 Q42 96 24 76 Q6 56 18 34 Q28 14 50 12 Z', f, borde));
});

/* Los números se dibujan como puntos, que es como los cuenta un niño */
for (let n = 1; n <= 10; n++) {
  const puntos = [];
  const cols = n <= 3 ? n : n <= 6 ? 3 : n <= 8 ? 4 : 5;
  const filas = Math.ceil(n / cols);
  for (let i = 0; i < n; i++) {
    const f = Math.floor(i / cols), c = i % cols;
    const enFila = Math.min(cols, n - f * cols);
    const ancho = 100 / (cols + 1);
    const x = 50 - (enFila - 1) * ancho / 2 + c * ancho;
    const y = 50 - (filas - 1) * 16 / 2 + f * 16 + 4;
    puntos.push(ci(x, y, 8, C.azul));
  }
  ART['num' + n] = svg(puntos.join(''));
}

function dibujo(clave) { return ART[clave] || ART.star; }
