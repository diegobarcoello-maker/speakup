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
/* dos ojitos y una sonrisa: lo que convierte una forma en un personaje */
const cara = (x,y,sep,rad) => {
  const r = rad || 2.6;
  return ci(x-sep, y, r, C.negro) + ci(x+sep, y, r, C.negro) +
    '<path d="M'+(x-sep)+' '+(y+7)+' Q'+x+' '+(y+12)+' '+(x+sep)+' '+(y+7)+'" stroke="'+C.negro+'" stroke-width="2" fill="none" stroke-linecap="round"/>';
};

const ART = {

/* ---------- ANIMALES ---------- */
cat: svg(
  el(50,58,26,23,C.naranja) +
  pa('M28 42 L26 22 L44 34 Z', C.naranja) + pa('M72 42 L74 22 L56 34 Z', C.naranja) +
  pa('M30 40 L29 28 L40 36 Z', C.rosa) + pa('M70 40 L71 28 L60 36 Z', C.rosa) +
  cara(50,52,11) +
  ci(50,60,3.4,C.rosa) +
  li(24,56,12,52,C.negro,2) + li(24,62,12,62,C.negro,2) +
  li(76,56,88,52,C.negro,2) + li(76,62,88,62,C.negro,2)
),
dog: svg(
  el(50,58,26,23,C.cafe) +
  el(24,52,9,17,C.cafeO) + el(76,52,9,17,C.cafeO) +
  cara(50,52,11) +
  el(50,64,7,5.5,C.negro) +
  pa('M43 72 Q50 78 57 72', C.rosa)
),
bird: svg(
  el(52,58,22,20,C.azul) +
  ci(40,42,14,C.azul) +
  pa('M28 42 L14 47 L28 50 Z', C.amar) +
  ci(37,39,2.6,C.negro) +
  pa('M56 52 Q70 46 74 60 Q62 64 56 52 Z', C.azulO) +
  li(46,78,44,90,C.amar,3) + li(56,78,58,90,C.amar,3)
),
fish: svg(
  el(46,50,26,17,C.naranja) +
  pa('M72 50 L90 36 L90 64 Z', C.rojo) +
  ci(34,45,3,C.negro) +
  pa('M40 34 Q50 28 58 36', C.rojo) +
  ci(66,58,2.4,C.blanco) + ci(74,64,1.8,C.blanco)
),
horse: svg(
  el(46,62,24,18,C.cafe) +
  el(70,40,11,14,C.cafe) +
  pa('M64 30 L62 20 L70 27 Z', C.cafeO) + pa('M76 30 L78 20 L72 27 Z', C.cafeO) +
  ci(74,40,2.6,C.negro) +
  pa('M22 52 Q10 62 22 76', C.cafeO) +
  li(34,78,32,92,C.cafeO,5) + li(56,78,58,92,C.cafeO,5)
),
cow: svg(
  el(50,58,26,22,C.blanco) +
  pa('M32 44 Q42 38 46 52 Q36 58 32 44 Z', C.negro) +
  pa('M64 66 Q74 62 76 74 Q64 76 64 66 Z', C.negro) +
  cara(50,50,11) +
  el(50,66,9,6.5,C.rosa) + ci(47,66,1.6,C.negro) + ci(53,66,1.6,C.negro) +
  pa('M26 40 Q20 32 28 30', C.blanco, ' stroke="'+C.grisO+'" stroke-width="3"') +
  pa('M74 40 Q80 32 72 30', C.blanco, ' stroke="'+C.grisO+'" stroke-width="3"')
),
elephant: svg(
  el(52,56,26,22,C.gris) +
  el(26,50,10,16,C.gris) +
  pa('M40 66 Q30 82 40 90 Q46 84 44 70 Z', C.gris) +
  cara(56,50,10) +
  li(66,74,66,88,C.gris,7) + li(80,72,80,86,C.gris,7)
),
lion: svg(
  ci(50,54,30,C.amar) +
  ci(50,54,22,C.naranja) +
  cara(50,50,10) +
  el(50,60,5,4,C.cafeO) +
  li(26,54,14,50,C.negro,2) + li(26,60,14,60,C.negro,2) +
  li(74,54,86,50,C.negro,2) + li(74,60,86,60,C.negro,2)
),
duck: svg(
  el(50,62,22,18,C.amar) +
  ci(64,40,13,C.amar) +
  pa('M76 40 L92 44 L76 49 Z', C.naranja) +
  ci(67,37,2.6,C.negro) +
  li(44,80,42,90,C.naranja,4) + li(56,80,58,90,C.naranja,4)
),
frog: svg(
  el(50,62,26,20,C.verde) +
  ci(36,40,10,C.verde) + ci(64,40,10,C.verde) +
  ci(36,40,5,C.blanco) + ci(64,40,5,C.blanco) +
  ci(36,40,2.6,C.negro) + ci(64,40,2.6,C.negro) +
  pa('M36 64 Q50 74 64 64', C.verdeO, ' stroke="'+C.verdeO+'" stroke-width="3" fill="none"') +
  el(28,78,9,5,C.verdeO) + el(72,78,9,5,C.verdeO)
),
bear: svg(
  ci(30,32,10,C.cafeO) + ci(70,32,10,C.cafeO) +
  ci(50,56,28,C.cafe) +
  el(50,66,13,10,C.crema) +
  cara(50,50,11) +
  el(50,62,5.5,4,C.negro)
),
rabbit: svg(
  el(50,64,22,20,C.blanco) +
  ci(50,44,15,C.blanco) +
  el(41,24,6,15,C.blanco) + el(59,24,6,15,C.blanco) +
  el(41,24,3,10,C.rosa) + el(59,24,3,10,C.rosa) +
  cara(50,42,8,2.4) +
  ci(50,50,2.6,C.rosa)
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
  pa('M18 54 Q18 34 50 34 Q82 34 82 54 L82 76 Q82 82 76 82 L24 82 Q18 82 18 76 Z', C.cafe) +
  pa('M24 54 Q24 42 50 42 Q76 42 76 54 Z', '#d9a05b')
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
  pa('M18 58 Q50 42 82 58 Q82 80 50 84 Q18 80 18 58 Z', C.blanco, ' stroke="'+C.gris+'" stroke-width="2"') +
  el(50,54,26,8,C.crema)
),
chicken: svg(
  el(50,60,28,20,C.cafe) +
  el(50,52,24,14,'#d9a05b') +
  li(24,64,14,76,'#e8d5a8',6) + li(76,64,86,76,'#e8d5a8',6)
),


/* ---------- CASA Y OBJETOS ---------- */
house: svg(
  re(24,50,52,38,C.crema,3) +
  pa('M16 52 L50 22 L84 52 Z', C.rojo) +
  re(44,66,14,22,C.cafeO,2) + ci(55,77,1.8,C.amar) +
  re(30,58,12,12,C.azul,2) + re(60,58,12,12,C.azul,2)
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
  pa('M14 62 L18 48 Q20 42 28 42 L64 42 Q72 42 76 48 L86 62 Z', C.rojo) +
  pa('M28 48 L44 48 L44 58 L24 58 Z', C.azul) + pa('M50 48 L64 48 L70 58 L50 58 Z', C.azul) +
  re(12,60,76,10,'#c23b1c',4) +
  ci(30,72,9,C.negro) + ci(30,72,4,C.gris) +
  ci(70,72,9,C.negro) + ci(70,72,4,C.gris)
),
bus: svg(
  re(14,30,72,42,C.amar,6) +
  re(20,38,20,14,C.azul,2) + re(44,38,20,14,C.azul,2) + re(68,38,12,14,C.azul,2) +
  ci(32,74,8,C.negro) + ci(32,74,3.4,C.gris) +
  ci(68,74,8,C.negro) + ci(68,74,3.4,C.gris)
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
  pa('M34 88 L34 46 Q34 40 40 40 Q46 40 46 46 L46 30 Q46 24 52 24 Q58 24 58 30 L58 34 Q58 28 64 28 Q70 28 70 34 L70 44 Q70 38 74 38 Q80 38 80 46 L80 68 Q80 88 60 88 Z', C.piel)
),
eye: svg(
  el(50,54,34,20,C.blanco, ' stroke="'+C.negro+'" stroke-width="3"') +
  ci(50,54,12,C.cafe) + ci(50,54,5,C.negro) + ci(46,50,3,C.blanco)
),
boy: svg(
  ci(50,32,16,C.piel) +
  pa('M34 28 Q34 14 50 14 Q66 14 66 28 Q58 22 50 24 Q42 26 34 28 Z', C.pelo) +
  ci(45,32,2.4,C.negro) + ci(55,32,2.4,C.negro) +
  pa('M44 38 Q50 43 56 38', 'none', ' stroke="'+C.negro+'" stroke-width="2" stroke-linecap="round"') +
  pa('M32 88 Q32 52 50 52 Q68 52 68 88 Z', C.azul)
),
girl: svg(
  ci(50,32,16,C.piel) +
  pa('M30 34 Q30 12 50 12 Q70 12 70 34 Q70 22 50 22 Q30 22 30 34 Z', C.cafeO) +
  el(30,42,7,14,C.cafeO) + el(70,42,7,14,C.cafeO) +
  ci(45,32,2.4,C.negro) + ci(55,32,2.4,C.negro) +
  pa('M44 38 Q50 43 56 38', 'none', ' stroke="'+C.negro+'" stroke-width="2" stroke-linecap="round"') +
  pa('M50 52 L72 88 L28 88 Z', C.rosa)
),
family: svg(
  ci(32,38,12,C.piel) + pa('M18 86 Q18 56 32 56 Q46 56 46 86 Z', C.azul) +
  ci(32,32,13,C.pelo) +
  ci(64,36,13,C.piel) + pa('M48 86 Q48 54 64 54 Q80 54 80 86 Z', C.rosa) +
  pa('M50 32 Q50 14 64 14 Q78 14 78 32 Q78 20 64 20 Q50 20 50 32 Z', C.cafeO) +
  ci(50,62,9,C.piel) + pa('M40 88 Q40 72 50 72 Q60 72 60 88 Z', C.amar) +
  ci(50,58,10,C.pelo)
),

/* ---------- NATURALEZA ---------- */
sun: svg(
  ci(50,52,20,C.amar) +
  li(50,20,50,8,C.naranja,5) + li(50,84,50,96,C.naranja,5) +
  li(18,52,6,52,C.naranja,5) + li(82,52,94,52,C.naranja,5) +
  li(27,29,19,21,C.naranja,5) + li(73,29,81,21,C.naranja,5) +
  li(27,75,19,83,C.naranja,5) + li(73,75,81,83,C.naranja,5) +
  cara(50,48,7,2.2)
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
  re(44,58,12,30,C.cafeO,3) +
  ci(50,38,22,C.verde) + ci(32,48,14,C.verde) + ci(68,48,14,C.verde)
),
flower: svg(
  li(50,54,50,90,C.verdeO,4) +
  el(38,72,10,5,C.verde) + el(62,66,10,5,C.verde) +
  el(50,30,10,14,C.rosa) + el(50,54,10,14,C.rosa) +
  el(36,42,14,10,C.rosa) + el(64,42,14,10,C.rosa) +
  ci(50,42,9,C.amar)
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
