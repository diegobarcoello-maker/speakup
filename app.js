/* ============================================================
   SpeakUp — Tutor personal de inglés A1 → B2
   Aplicación de una sola página, sin backend.
   ============================================================ */
(function () {
'use strict';

/* ══════════════════ 1. ICONOS ══════════════════ */
const PATHS = {
  home:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  book:      '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M8 7h8M8 11h6"/>',
  chat:      '<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/>',
  mic:       '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v4"/>',
  cards:     '<rect x="3" y="6" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
  gear:      '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  flame:     '<path d="M12 2s5 4.5 5 9a5 5 0 0 1-10 0c0-1.5.6-2.8 1.4-3.8C9 9.7 10.5 8 12 2z"/><path d="M12 22a5 5 0 0 0 5-5"/>',
  star:      '<path d="m12 2 3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4L7 14.4l-5-4.9 7-1z"/>',
  play:      '<path d="M6 4l14 8-14 8z"/>',
  send:      '<path d="m22 2-7 20-4-9-9-4z"/>',
  check:     '<path d="m5 13 4 4L19 7"/>',
  x:         '<path d="M6 6l12 12M18 6 6 18"/>',
  right:     '<path d="M9 5l7 7-7 7"/>',
  left:      '<path d="M15 5l-7 7 7 7"/>',
  user:      '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  cup:       '<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M6 3v2M10 3v2M14 3v2"/>',
  plane:     '<path d="M10 20l1.5-5L3 11l1-2 9 2 4-6a2 2 0 0 1 3 3l-6 4 2 9-2 1z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  handshake: '<path d="M11 17 8.5 14.5"/><path d="m2 12 4-4 5 3 3-3 4 2 4-2"/><path d="M6 8v6l5 5 3-2 3 2 3-3V8"/>',
  truck:     '<rect x="1" y="6" width="13" height="10" rx="1"/><path d="M14 9h4l3 4v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 10h6M9 14h4"/>',
  scale:     '<path d="M12 3v18M5 21h14"/><path d="M6 7h12"/><path d="m3 13 3-6 3 6a3 3 0 0 1-6 0z"/><path d="m15 13 3-6 3 6a3 3 0 0 1-6 0z"/>',
  bulb:      '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.7.8 1 1.6 1 2.5h6c0-.9.3-1.7 1-2.5A6 6 0 0 0 12 2z"/>',
  mail:      '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  volume:    '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/>',
  trophy:    '<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/><path d="M10 14h4l1 6H9z"/>',
  refresh:   '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  lock:      '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  target:    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  compass:   '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-4 1 2-5z"/>',
  pen:       '<path d="M14 4l6 6L8 22H2v-6z"/><path d="m12 6 6 6"/>',
  chart:     '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  bolt:      '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  sparkle:   '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z"/>',
  note:      '<path d="M5 3h11l4 4v14H5z"/><path d="M15 3v5h5"/><path d="M9 12h7M9 16h5"/>',
  trash:     '<path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
  upload:    '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  download:  '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/>',
  pause:     '<rect x="7" y="5" width="3.5" height="14" rx="1"/><rect x="13.5" y="5" width="3.5" height="14" rx="1"/>',
  ear:       '<path d="M8 20a3 3 0 0 0 3-3c0-2 3-2.5 3-6a3 3 0 0 0-6 0"/><path d="M5 10a7 7 0 1 1 14 0c0 4-3 5-3 8a4 4 0 0 1-8 .5"/>'
};
// width/height por defecto: cualquier regla CSS más específica los sobrescribe
function ic(n, cls) {
  return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
    'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' +
    (cls ? ' class="' + cls + '"' : '') + '>' + (PATHS[n] || '') + '</svg>';
}

/* ══════════════════ 2. UTILIDADES ══════════════════ */
const $ = s => document.querySelector(s);
const app = () => document.getElementById('app');

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "he's": 'he is', "she's": 'she is', "it's": 'it is',
  "we're": 'we are', "they're": 'they are', "that's": 'that is', "what's": 'what is',
  "there's": 'there is', "here's": 'here is', "who's": 'who is', "let's": 'let us',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
  "i'll": 'i will', "you'll": 'you will', "he'll": 'he will', "she'll": 'she will',
  "we'll": 'we will', "they'll": 'they will', "it'll": 'it will',
  "i'd": 'i would', "you'd": 'you would', "he'd": 'he would', "she'd": 'she would',
  "we'd": 'we would', "they'd": 'they would',
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "can't": 'can not',
  "cannot": 'can not', "won't": 'will not', "isn't": 'is not', "aren't": 'are not',
  "wasn't": 'was not', "weren't": 'were not', "haven't": 'have not', "hasn't": 'has not',
  "hadn't": 'had not', "wouldn't": 'would not', "couldn't": 'could not',
  "shouldn't": 'should not', "mustn't": 'must not', "i'm not": 'i am not'
};

function norm(s) {
  let t = String(s || '').toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"');
  t = t.replace(/[a-z]+'[a-z]+|[a-z]+/g, m => CONTRACTIONS[m] || m);
  t = t.replace(/[.,!?;:"()¡¿]/g, ' ')
       .replace(/\s+/g, ' ').trim();
  return t;
}
function words(s) { return norm(s).split(' ').filter(Boolean); }

function todayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function startOfDay(ts) { const d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); }
function daysAgo(key) {
  if (!key) return 999;
  const [y, m, d] = key.split('-').map(Number);
  const then = new Date(y, m - 1, d).setHours(0, 0, 0, 0);
  return Math.round((startOfDay(Date.now()) - then) / 86400000);
}
function shuffle(a) { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }

/* ══════════════════ 3. ESTADO ══════════════════ */
const KEY = 'speakup.v1';
const DEFAULT_STATE = {
  onboarded: false,
  name: '',
  xp: 0,
  streak: 0,
  lastActive: '',
  dailyDate: '',
  dailyXp: 0,
  completed: {},   // unitId -> { score, date }
  srs: {},         // en -> tarjeta de RECONOCIMIENTO (ves inglés, recuerdas español)
  srsProd: {},     // en -> tarjeta de PRODUCCIÓN (ves español, escribes inglés)
  customUnits: [], // unidades generadas con IA
  mistakes: [],    // libreta de errores: { id, date, wrong, right, note, tag, source }
  dialoguesDone: {}, // dialogueId -> { score, date }
  historia: {},      // 'YYYY-MM-DD' -> { xp, palabras }
  soundBest: {},     // id de sonido -> mejor porcentaje
  convTurns: 0,
  pronBest: 0,
  pronCount: 0,
  settings: {
    accent: 'en-US',
    theme: 'auto',
    apiKey: '',
    proxyUrl: '',      // intermediario del equipo
    codigo: '',        // código de acceso del equipo
    model: 'claude-sonnet-5',
    dailyGoal: 50,
    voiceURI: ''
  }
};
let S = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    const o = JSON.parse(raw);
    const merged = Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_STATE)), o);
    merged.settings = Object.assign({}, DEFAULT_STATE.settings, o.settings || {});
    return merged;
  } catch (e) {
    console.warn('No se pudo leer el progreso guardado:', e);
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch (e) { console.warn('No se pudo guardar el progreso:', e); }
}

/* Unidades del curso + las que hayas generado con la IA */
function allUnits() { return UNITS.concat(S.customUnits || []); }

/* ---- Libreta de errores ---- */
function addMistake(m) {
  if (!m || (!m.right && !m.note)) return;
  const norma = s => String(s || '').toLowerCase().replace(/[^a-z0-9' ]/g, '').trim();
  const dup = S.mistakes.find(x => norma(x.right) === norma(m.right) && norma(x.wrong) === norma(m.wrong));
  if (dup) { dup.count = (dup.count || 1) + 1; dup.date = todayKey(); return; }
  S.mistakes.unshift({
    id: 'e' + Date.now() + Math.floor(Math.random() * 999),
    date: todayKey(),
    wrong: (m.wrong || '').slice(0, 160),
    right: (m.right || '').slice(0, 160),
    note:  (m.note  || '').slice(0, 260),
    tag:   (m.tag   || 'General').slice(0, 40),
    source: m.source || 'chat',
    count: 1
  });
  if (S.mistakes.length > 300) S.mistakes.length = 300;
}
function mistakesByTag() {
  const map = {};
  S.mistakes.forEach(m => { (map[m.tag] = map[m.tag] || []).push(m); });
  return Object.entries(map)
    .map(([tag, list]) => ({ tag, list, total: list.reduce((a, m) => a + (m.count || 1), 0) }))
    .sort((a, b) => b.total - a.total);
}

function currentLevel() {
  let lv = LEVELS[0];
  for (const l of LEVELS) if (S.xp >= l.xp) lv = l;
  return lv;
}
function levelIndex() { return LEVELS.findIndex(l => l.id === currentLevel().id); }
function nextLevel() { return LEVELS[levelIndex() + 1] || null; }
function levelProgress() {
  const cur = currentLevel(), nx = nextLevel();
  if (!nx) return 100;
  return Math.min(100, Math.round(((S.xp - cur.xp) / (nx.xp - cur.xp)) * 100));
}
function isLevelUnlocked(id) {
  return LEVELS.findIndex(l => l.id === id) <= levelIndex();
}

function ensureDay() {
  const t = todayKey();
  if (S.dailyDate !== t) { S.dailyDate = t; S.dailyXp = 0; }
}
function addXp(n, silent) {
  ensureDay();
  const beforeLevel = currentLevel().id;
  const t = todayKey();
  if (S.lastActive !== t) {
    S.streak = daysAgo(S.lastActive) === 1 ? (S.streak + 1) : 1;
    S.lastActive = t;
  }
  S.xp += n;
  S.dailyXp += n;
  // historial diario, para poder ver la evolución
  if (!S.historia) S.historia = {};
  const dia = S.historia[t] || (S.historia[t] = { xp: 0, palabras: 0 });
  dia.xp += n;
  dia.palabras = Object.keys(S.srs).length;
  const dias = Object.keys(S.historia).sort();
  if (dias.length > 400) delete S.historia[dias[0]];
  save();
  paintStats();
  if (!silent) toast('+' + n + ' XP', 'xp');
  const after = currentLevel().id;
  if (after !== beforeLevel) setTimeout(() => levelUpModal(after), 500);
}

function addSrs(en, es, unitId) {
  if (S.srs[en]) return;
  S.srs[en] = { en, es, unit: unitId, due: startOfDay(Date.now()), interval: 0, ease: 2.5, reps: 0, lapses: 0 };
}
/* ---- Dos direcciones de repaso ----
   'rec'  reconocimiento: ves el inglés y recuerdas el español (fácil, entra primero)
   'prod' producción:     ves el español y ESCRIBES el inglés (difícil, es la que te hace hablar)
   Cada dirección lleva su propio calendario. La de producción se desbloquea
   cuando ya has acertado dos veces la de reconocimiento.                        */
const PROD_UNLOCK_REPS = 2;

function unlockProduction(en) {
  const rec = S.srs[en];
  if (!rec || S.srsProd[en] || rec.reps < PROD_UNLOCK_REPS) return false;
  S.srsProd[en] = { en: rec.en, es: rec.es, unit: rec.unit, due: startOfDay(Date.now()), interval: 0, ease: 2.5, reps: 0, lapses: 0 };
  return true;
}
function deck(dir) { return dir === 'prod' ? S.srsProd : S.srs; }

function dueCards() {
  const limit = startOfDay(Date.now()) + 86400000 - 1;
  const out = [];
  Object.values(S.srs).forEach(c => { if (c.due <= limit) out.push({ en: c.en, dir: 'rec' }); });
  Object.values(S.srsProd).forEach(c => { if (c.due <= limit) out.push({ en: c.en, dir: 'prod' }); });
  return out;
}

/* Respuestas aceptadas al escribir el inglés de una tarjeta de producción */
function prodAnswers(en) {
  const out = new Set();
  const base = String(en || '').trim();
  out.add(base);
  const sinParen = base.replace(/\s*\([^)]*\)/g, '').trim();
  if (sinParen) out.add(sinParen);
  const m = base.match(/\(([^)]+)\)/);
  if (m) out.add(m[1].trim());
  base.split('/').forEach(p => {
    const t = p.replace(/\s*\([^)]*\)/g, '').trim();
    if (t) out.add(t);
  });
  Array.from(out).forEach(t => { if (/^to\s+/i.test(t)) out.add(t.replace(/^to\s+/i, '')); });
  return Array.from(out).map(norm).filter(Boolean);
}
/* Otras palabras del mazo con la MISMA traducción (hola → hello / hi).
   Si escribes una de ellas no es un fallo, solo no era la que tocaba. */
function siblingAnswers(en, es) {
  const objetivo = norm(es);
  const out = [];
  Object.values(S.srs).forEach(c => {
    if (c.en !== en && norm(c.es) === objetivo) out.push(c.en);
  });
  return out;
}
function checkProduction(card, typed) {
  const t = norm(typed);
  if (!t) return { estado: 'vacio' };
  if (prodAnswers(card.en).indexOf(t) >= 0) return { estado: 'bien' };
  const hermanos = siblingAnswers(card.en, card.es);
  for (const h of hermanos) {
    if (prodAnswers(h).indexOf(t) >= 0) return { estado: 'hermano', otra: h };
  }
  return { estado: 'mal' };
}
function srsStats() {
  const rec = Object.keys(S.srs).length;
  const prod = Object.keys(S.srsProd).length;
  const solido = Object.values(S.srsProd).filter(c => c.reps >= 2).length;
  return { rec, prod, solido };
}
function scheduleCard(card, grade) {
  // grade: 0 = otra vez · 1 = casi · 2 = lo sabía
  if (grade === 0) {
    card.lapses++; card.reps = 0; card.interval = 0;
    card.ease = Math.max(1.3, card.ease - 0.2);
    card.due = startOfDay(Date.now());
  } else if (grade === 1) {
    card.reps++;
    card.ease = Math.max(1.3, card.ease - 0.05);
    card.interval = card.interval < 1 ? 1 : Math.max(1, Math.round(card.interval * 1.25));
    card.due = startOfDay(Date.now()) + card.interval * 86400000;
  } else {
    card.reps++;
    card.ease = Math.min(2.8, card.ease + 0.08);
    card.interval = card.reps <= 1 ? 1 : card.reps === 2 ? 3 : Math.round(Math.max(1, card.interval) * card.ease);
    card.due = startOfDay(Date.now()) + card.interval * 86400000;
  }
  save();
}

/* ══════════════════ 4. VOZ ══════════════════ */
const Voice = {
  list: [],
  ready: false,
  init() {
    if (!('speechSynthesis' in window)) return;
    const grab = () => { Voice.list = window.speechSynthesis.getVoices() || []; Voice.ready = Voice.list.length > 0; };
    grab();
    window.speechSynthesis.onvoiceschanged = grab;
    setTimeout(grab, 400);
  },
  pick() {
    const want = S.settings.accent;
    if (S.settings.voiceURI) {
      const v = Voice.list.find(v => v.voiceURI === S.settings.voiceURI);
      if (v) return v;
    }
    const exact = Voice.list.filter(v => v.lang && v.lang.replace('_', '-') === want);
    if (exact.length) {
      const nice = exact.find(v => /google|samantha|natural|premium|daniel|aria|jenny/i.test(v.name));
      return nice || exact[0];
    }
    return Voice.list.find(v => v.lang && v.lang.toLowerCase().startsWith('en')) || null;
  },
  englishVoices() { return Voice.list.filter(v => v.lang && v.lang.toLowerCase().startsWith('en')); },
  /* Dos voces distintas para que un diálogo suene a dos personas */
  pickPair() {
    const primera = Voice.pick();
    const mismoAcento = Voice.englishVoices().filter(v => v.lang && v.lang.replace('_', '-') === S.settings.accent);
    const pool = mismoAcento.length >= 2 ? mismoAcento : Voice.englishVoices();
    const segunda = pool.filter(v => !primera || v.voiceURI !== primera.voiceURI)[0] || primera;
    return [primera, segunda];
  },
  speak(text, rate) {
    if (!('speechSynthesis' in window)) { toast('Tu navegador no permite reproducir audio.'); return; }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = Voice.pick();
      if (v) u.voice = v;
      u.lang = (v && v.lang) || S.settings.accent;
      u.rate = rate || 0.95;
      u.pitch = 1;
      window.speechSynthesis.speak(u);
    } catch (e) { console.warn(e); }
  }
};

const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const micSupported = !!SR;
let recognizer = null;

function startListening(onFinal, onEnd, onErr) {
  if (!SR) { onErr && onErr('unsupported'); return null; }
  try {
    const r = new SR();
    r.lang = S.settings.accent;
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.continuous = false;
    r.onresult = e => {
      const txt = Array.from(e.results).map(x => x[0].transcript).join(' ').trim();
      onFinal(txt);
    };
    r.onerror = e => onErr && onErr(e.error || 'error');
    r.onend = () => onEnd && onEnd();
    r.start();
    return r;
  } catch (e) { onErr && onErr('error'); return null; }
}
function stopListening() { if (recognizer) { try { recognizer.stop(); } catch (e) {} recognizer = null; } }

/* ══════════════════ 5. API DE ANTHROPIC ══════════════════
   Dos caminos:
   · EQUIPO — la app habla con el intermediario, que guarda la clave.
     El usuario no configura nada: le basta abrir el enlace con el código.
   · PROPIO — cada quien pone su clave de Anthropic y va directo.
   Si hay intermediario configurado, se usa ese.                        */

const API_URL = 'https://api.anthropic.com/v1/messages';

/* Dirección del intermediario del equipo. Se rellena tras desplegar
   el Worker; también se puede pasar por enlace con ?api=... */
const PROXY_POR_DEFECTO = '';

function proxyUrl()   { return (S.settings.proxyUrl || PROXY_POR_DEFECTO || '').trim().replace(/\/+$/, ''); }
function codigoEquipo(){ return (S.settings.codigo || '').trim(); }
function hayTutor()    { return !!((proxyUrl() && codigoEquipo()) || (S.settings.apiKey || '').trim()); }

/* Identificador de este dispositivo, para repartir el límite diario */
function idDispositivo() {
  if (!S.deviceId) {
    S.deviceId = 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    save();
  }
  return S.deviceId;
}

async function callClaude(system, messages, maxTokens) {
  const proxy = proxyUrl();
  const codigo = codigoEquipo();
  const key = (S.settings.apiKey || '').trim();
  if (!proxy && !key) { const e = new Error('nokey'); e.code = 'nokey'; throw e; }
  if (proxy && !codigo && !key) { const e = new Error('nocode'); e.code = 'nocode'; throw e; }

  const usarProxy = !!(proxy && codigo);
  const destino = usarProxy ? proxy : API_URL;
  const cabeceras = usarProxy
    ? { 'content-type': 'application/json', 'X-Codigo': codigo, 'X-Dispositivo': idDispositivo() }
    : { 'content-type': 'application/json', 'x-api-key': key,
        'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' };

  let res;
  try {
    res = await fetch(destino, {
      method: 'POST',
      headers: cabeceras,
      body: JSON.stringify({
        model: S.settings.model || 'claude-sonnet-5',
        max_tokens: maxTokens || 700,
        system: system,
        messages: messages
      })
    });
  } catch (netErr) {
    const e = new Error('network'); e.code = 'network'; throw e;
  }
  if (!res.ok) {
    let detail = '';
    try { const j = await res.json(); detail = (j.error && j.error.message) || ''; } catch (x) {}
    const e = new Error(detail || ('HTTP ' + res.status));
    e.code = res.status === 401 ? (usarProxy ? 'badcode' : 'badkey')
           : res.status === 429 ? (usarProxy ? 'limite' : 'rate')
           : 'http';
    e.status = res.status;
    e.detalle = detail;
    throw e;
  }
  const data = await res.json();
  return (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
}

function parseJson(raw) {
  if (!raw) return null;
  let t = raw.trim();
  t = t.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a >= 0 && b > a) t = t.slice(a, b + 1);
  try { return JSON.parse(t); } catch (e) { return null; }
}

function apiErrorText(err) {
  switch (err && err.code) {
    case 'nokey':   return 'El tutor con IA todavía no está activado. Ve a Ajustes e introduce el código de tu equipo, o tu propia clave de Anthropic.';
    case 'nocode':  return 'Te falta el código de acceso del equipo. Pídeselo a quien te pasó la app y ponlo en Ajustes.';
    case 'badcode': return 'Ese código de acceso no es correcto. Revísalo en Ajustes o pídelo de nuevo.';
    case 'badkey':  return 'La clave de API no es válida. Revísala en Ajustes.';
    case 'limite':  return (err.detalle || 'Has llegado al límite de uso de hoy.') + ' Mientras tanto, las lecciones, la escucha y el repaso funcionan igual.';
    case 'rate':    return 'La API está recibiendo demasiadas solicitudes. Espera unos segundos y vuelve a intentar.';
    case 'network': return 'No se pudo conectar. Revisa tu conexión a internet e inténtalo de nuevo.';
    default:        return 'Hubo un problema con la IA: ' + ((err && err.message) || 'error desconocido') + '. Puedes seguir en modo sin IA.';
  }
}

/* ══════════════════ 6. CORRECTOR SIN IA ══════════════════ */
function offlineCoach(text) {
  const notes = [], errors = [];
  const t = ' ' + text.trim() + ' ';
  for (const r of OFFLINE_RULES) {
    const m = t.match(r.re);
    if (m) {
      notes.push(r.fix);
      errors.push({ wrong: m[0].trim(), right: '', note: r.fix, tag: r.tag || 'General' });
      if (notes.length >= 2) break;
    }
  }
  if (!notes.length) {
    if (/^[a-z]/.test(text.trim())) notes.push('Recuerda empezar la frase con mayúscula.');
    else if (/\bi\b/.test(text) && !/\bI\b/.test(text)) notes.push('En inglés el pronombre "I" siempre va en mayúscula.');
    else if (text.trim().split(/\s+/).length < 4) notes.push('Intenta responder con frases un poco más largas: añade un detalle o una pregunta de vuelta.');
    else notes.push('Se entiende bien. Para sonar más natural, intenta terminar tu turno con una pregunta al otro.');
  }
  return { note: notes.join(' '), errors: errors };
}

/* ══════════════════ 7. AVISOS Y MODALES ══════════════════ */
function toast(msg, kind) {
  let wrap = $('.toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'toast' + (kind ? ' ' + kind : '');
  t.setAttribute('role', 'status');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 320); }, 2200);
}

function levelUpModal(levelId) {
  const lv = LEVELS.find(l => l.id === levelId);
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  bg.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true" aria-label="Subiste de nivel">' +
      '<div style="color:var(--accent);margin-bottom:8px">' + ic('trophy', 'ic-lg') + '</div>' +
      '<h2>¡Subiste a ' + esc(lv.id) + '!</h2>' +
      '<p class="muted small">' + esc(lv.desc) + '</p>' +
      '<button class="btn btn-primary btn-block" data-act="closemodal">Seguir aprendiendo</button>' +
    '</div>';
  bg.addEventListener('click', e => { if (e.target === bg || e.target.closest('[data-act="closemodal"]')) bg.remove(); });
  document.body.appendChild(bg);
  bg.querySelector('button').focus();
}

/* ══════════════════ 8. ENRUTADOR ══════════════════ */
const V = { tab: 'home', unit: null, lesson: null, talk: null, pron: null, review: null, pack: null, packQuiz: null };
let sayAllToken = 0;

function go(tab) {
  V.tab = tab;
  V.unit = null;
  V.lesson = null;
  V.pack = null;
  V.packQuiz = null;
  sayAllToken++;            // detiene la lectura encadenada del vocabulario
  if (tab === 'review') V.review = null;   // recalcular las tarjetas pendientes al entrar
  stopListening();
  stopDialogue();
  if (V.talk) V.talk.rec = false;
  if (V.pron) V.pron.rec = false;
  if (V.audio) { V.audio.id = null; V.audio.stage = 'intro'; }   // volver siempre a la lista de diálogos
  if (window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  window.scrollTo(0, 0);
  render();
}

function paintStats() {
  const bar = $('#topstats');
  if (!bar) return;
  bar.innerHTML =
    '<span class="stat-chip flame" title="Días seguidos practicando">' + ic('flame') + S.streak + '</span>' +
    '<span class="stat-chip xp" title="Experiencia total">' + ic('star') + S.xp + '</span>' +
    '<span class="stat-chip level" title="Tu nivel actual">' + currentLevel().id + '</span>';
}

function render() {
  applyTheme();
  const root = app();
  document.body.classList.toggle('previo', !S.onboarded);
  if (!S.onboarded) {
    document.getElementById('nav').hidden = true;
    document.getElementById('topstats').hidden = true;
    // el engranaje debe funcionar también antes de empezar: ahí está el botón de instalar
    root.innerHTML = '<div class="view">' + (V.tab === 'settings' ? viewSettingsPrevio() : viewOnboarding()) + '</div>';
    renderAsk();
    afterRender();
    return;
  }
  document.getElementById('nav').hidden = false;
  document.getElementById('topstats').hidden = false;
  paintStats();

  let html = '';
  if (V.tab === 'home')            html = viewHome();
  else if (V.tab === 'create')     html = viewCreate();
  else if (V.tab === 'lessons')    html = V.unit ? viewUnit() : viewLessons();
  else if (V.tab === 'vocab')      html = V.pack ? viewPack() : viewVocab();
  else if (V.tab === 'talk')       html = viewTalk();
  else if (V.tab === 'pron')       html = viewAudio();
  else if (V.tab === 'review')     html = viewReview();
  else if (V.tab === 'settings')   html = viewSettings();
  root.innerHTML = '<div class="view">' + Sesion.barra() + html + '</div>';

  const navTab = (V.tab === 'create' || V.tab === 'vocab') ? 'lessons' : V.tab === 'mistakes' ? 'review' : V.tab;
  document.querySelectorAll('.navbtn').forEach(b => {
    if (b.dataset.tab === navTab) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
  renderAsk();
  afterRender();
}

/* ¿pantalla táctil? En el móvil no conviene abrir el teclado solo:
   tapa media pantalla justo cuando toca leer el enunciado. */
const ESoTACTIL = (function () {
  try { return window.matchMedia('(hover: none) and (pointer: coarse)').matches; }
  catch (e) { return false; }
})();

function afterRender() {
  const chat = document.getElementById('chatbox');
  if (chat) chat.scrollIntoView({ block: 'end' });
  if (Ask.abierto) return;                       // si el asistente está abierto, el foco es suyo
  const focusEl = document.querySelector('[data-autofocus]');
  if (!focusEl) return;
  // en táctil solo enfocamos botones; nunca campos de texto, para no forzar el teclado
  const esCampo = /^(INPUT|TEXTAREA)$/.test(focusEl.tagName);
  if (ESoTACTIL && esCampo) return;
  focusEl.focus();
}

/* El teclado del móvil tapa lo que está anclado abajo. Con esto el botón
   del asistente y su panel se levantan por encima del teclado. */
function vigilarTeclado() {
  const vv = window.visualViewport;
  if (!vv) return;
  const ajustar = () => {
    const tapado = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop));
    document.documentElement.style.setProperty('--teclado', tapado + 'px');
    document.body.classList.toggle('con-teclado', tapado > 120);
  };
  vv.addEventListener('resize', ajustar);
  vv.addEventListener('scroll', ajustar);
  ajustar();
}

/* ══════════════════ 9. ONBOARDING ══════════════════ */
function viewOnboarding() {
  const step = V.onbStep || 1;
  if (step === 1) {
    return '<div class="onb">' +
      '<div class="onb-hero">' +
        '<img class="onb-logo" src="icon-192.png" alt="" width="88" height="88">' +
        '<h1>Bienvenido a SpeakUp</h1>' +
        '<p class="onb-lema">Tu tutor personal de inglés. Desde cero hasta <b>B2</b>: hablar y entender con soltura, en el día a día y en los negocios.</p>' +
      '</div>' +

      '<div class="onb-puntos">' +
        [['chat', 'Habla', 'Conversa con un tutor que te corrige en español'],
         ['headphones', 'Escucha', 'Diálogos reales a velocidad normal'],
         ['cards', 'Recuerda', 'Repaso espaciado para que no se te olvide']]
        .map(([i, t, d]) =>
          '<div class="onb-punto"><span>' + ic(i) + '</span><b>' + t + '</b><i>' + d + '</i></div>').join('') +
      '</div>' +

      '<div class="card">' +
        '<div class="field">' +
          '<label for="onbname">¿Cómo te llamas? <span class="muted" style="font-weight:400">(opcional)</span></label>' +
          '<input type="text" id="onbname" placeholder="Tu nombre" autocomplete="given-name" value="' + esc(S.name) + '">' +
          '<div class="hint">Lo usaremos para saludarte y para practicar presentaciones.</div>' +
        '</div>' +
        '<button class="btn btn-primary btn-block" data-act="onb-next">Empezar ' + ic('right') + '</button>' +
      '</div>' +
      '<p class="tiny muted center">Tu progreso se guarda en este dispositivo. Sin cuentas ni servidores.</p>' +
    '</div>';
  }
  return '<div class="onb">' +
    '<button class="back-link" data-act="onb-back">' + ic('left') + ' Atrás</button>' +
    '<h1>¿Desde dónde empezamos?</h1>' +
    '<p class="muted">Elige con sinceridad. Siempre puedes cambiarlo después en Ajustes.</p>' +
    '<div class="tile-list">' +
      LEVELS.map(l =>
        '<button class="tile" data-act="onb-level" data-level="' + l.id + '">' +
          '<span class="tile-ico">' + ic('compass') + '</span>' +
          '<span class="tile-body">' +
            '<span class="tile-t">' + esc(l.name) + '</span>' +
            '<span class="tile-d">' + esc(l.desc) + '</span>' +
          '</span>' +
          '<span class="tile-go">' + ic('right') + '</span>' +
        '</button>'
      ).join('') +
    '</div>' +
    '<div class="notice warn" style="margin-top:16px">' +
      '<b>' + ic('target') + ' Tu meta: nivel B2</b>' +
      'Sostener conversaciones reales — personales y de negocios — y entender sin traducir en tu cabeza.' +
    '</div>' +
  '</div>';
}

/* Ajustes reducidos, accesibles desde la pantalla de bienvenida */
function viewSettingsPrevio() {
  const st = S.settings;
  return '<div class="onb">' +
    '<button class="back-link" data-act="tab" data-tab="home">' + ic('left') + ' Volver</button>' +
    '<h1>Ajustes</h1>' +
    App.tarjeta() +
    '<div class="card">' +
      '<div class="card-title"><h3>Apariencia</h3></div>' +
      '<div class="field"><label for="settheme">Tema</label>' +
        '<select id="settheme">' +
          ['auto', 'light', 'dark'].map(t => '<option value="' + t + '"' + (st.theme === t ? ' selected' : '') + '>' + (t === 'auto' ? 'Automático (según el sistema)' : t === 'light' ? 'Claro' : 'Oscuro') + '</option>').join('') +
        '</select></div>' +
      '<button class="btn btn-primary btn-block" data-act="save-theme">Guardar</button>' +
    '</div>' +
    '<div class="card">' +
      '<div class="card-title"><h3>¿Ya usabas SpeakUp?</h3></div>' +
      '<p class="small muted">Si tienes una copia de seguridad de otro equipo, impórtala ahora y sigues donde ibas.</p>' +
      '<button class="btn btn-ghost btn-block" data-act="import">' + ic('upload') + ' Importar mi progreso</button>' +
      '<input type="file" id="importfile" accept="application/json,.json" class="sr-only" tabindex="-1" aria-hidden="true">' +
    '</div>' +
    '<p class="tiny muted center" style="margin-bottom:24px">El resto de ajustes — voz, acento, clave de IA — están disponibles una vez empieces.</p>' +
  '</div>';
}

/* ══════════════════ 9b. SESIÓN DIARIA GUIADA ══════════════════
   Un solo botón que encadena repaso, lección y práctica hablada.
   Quita la decisión de "¿y hoy qué hago?", que es lo que rompe la racha. */

const Sesion = {
  activa: false,
  pasos: [],
  i: 0,

  planificar() {
    const pasos = [];
    const pendientes = dueCards().length;
    if (pendientes) pasos.push({ tipo: 'review', meta: Math.min(10, pendientes), hechas: 0, titulo: 'Repaso', tab: 'review' });

    const u = allUnits().find(x => !S.completed[x.id] && (x.custom || isLevelUnlocked(x.level)))
           || allUnits().filter(x => x.custom || isLevelUnlocked(x.level)).slice(-1)[0];
    if (u) pasos.push({ tipo: 'lesson', meta: 5, hechas: 0, titulo: 'Lección', tab: 'lessons', unitId: u.id, unitTitle: u.title });

    if (hayTutor()) {
      pasos.push({ tipo: 'talk', meta: 2, hechas: 0, titulo: 'Conversar', tab: 'talk' });
    } else {
      pasos.push({ tipo: 'listen', meta: 3, hechas: 0, titulo: 'Escuchar', tab: 'pron' });
    }
    return pasos;
  },

  empezar() {
    Sesion.pasos = Sesion.planificar();
    if (!Sesion.pasos.length) { toast('No hay nada pendiente. Elige tú qué practicar.'); return; }
    Sesion.activa = true;
    Sesion.i = 0;
    Sesion.irAlPaso();
  },

  paso() { return Sesion.pasos[Sesion.i]; },

  irAlPaso() {
    const p = Sesion.paso();
    if (!p) { render(); return; }
    if (p.tipo === 'review') { V.reviewTab = 'vocab'; V.review = null; V.tab = 'review'; }
    else if (p.tipo === 'lesson') {
      V.tab = 'lessons'; V.unit = p.unitId;
      V.lesson = { step: 'ex', i: 0, right: 0, answered: false, picked: null, correct: false, solution: '', typed: '' };
    }
    else if (p.tipo === 'talk') {
      V.tab = 'talk';
      const T = talkState();
      T.mode = 'chat';
      if (!T.scenario) {
        const posibles = SCENARIOS.filter(s => LEVELS.findIndex(l => l.id === s.level) <= levelIndex());
        const sc = (posibles.length ? posibles : SCENARIOS)[Math.floor(Math.random() * (posibles.length || SCENARIOS.length))];
        T.scenario = sc.id;
        T.msgs = [{ who: 'them', text: sc.opener, coach: '', hint: 'Responde con una frase completa.' }];
        T.showHint = -1;
      }
    }
    else if (p.tipo === 'listen') { V.tab = 'pron'; audioState().tab = 'dialogs'; }
    window.scrollTo(0, 0);
    render();
  },

  /* Lo llaman las acciones normales de la app cuando cuentan para el paso actual */
  avanzar(tipo) {
    if (!Sesion.activa) return;
    const p = Sesion.paso();
    if (!p || p.tipo !== tipo) return;
    p.hechas++;
    if (p.hechas >= p.meta) {
      Sesion.i++;
      if (Sesion.i >= Sesion.pasos.length) { Sesion.terminar(); return; }
      const sig = Sesion.paso();
      toast('Paso completado. Vamos con ' + sig.titulo + '.');
      setTimeout(() => Sesion.irAlPaso(), 600);
    }
  },

  terminar() {
    Sesion.activa = false;
    V.tab = 'home';
    V.sesionResumen = { pasos: Sesion.pasos.slice(), fecha: todayKey() };
    window.scrollTo(0, 0);
    render();
    addXp(20, true);
    toast('Sesión completa. +20 XP de bonus');
  },

  cancelar() { Sesion.activa = false; render(); },

  /* Barra de progreso que acompaña toda la sesión */
  barra() {
    if (!Sesion.activa) return '';
    const p = Sesion.paso();
    if (!p) return '';
    return '<div class="ses-barra">' +
      '<div class="ses-pasos">' +
        Sesion.pasos.map((x, i) =>
          '<span class="ses-paso' + (i < Sesion.i ? ' hecho' : i === Sesion.i ? ' actual' : '') + '">' +
            (i < Sesion.i ? ic('check') : '') + esc(x.titulo) +
          '</span>').join('<span class="ses-flecha">' + ic('right') + '</span>') +
      '</div>' +
      '<div class="ses-info">' +
        '<span>' + esc(p.titulo) + ': <b>' + Math.min(p.hechas, p.meta) + ' de ' + p.meta + '</b></span>' +
        '<button class="btn btn-ghost btn-sm" data-act="ses-salir">Salir</button>' +
      '</div>' +
      '<div class="bar accent"><i style="width:' + Math.round((Math.min(p.hechas, p.meta) / p.meta) * 100) + '%"></i></div>' +
    '</div>';
  }
};

/* ══════════════════ 9c. GRÁFICA DE PROGRESO ══════════════════ */
function graficaProgreso(dias) {
  dias = dias || 14;
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  const datos = [];
  for (let i = dias - 1; i >= 0; i--) {
    const d = new Date(hoy.getTime() - i * 86400000);
    const clave = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    const reg = (S.historia || {})[clave];
    datos.push({ clave, xp: reg ? reg.xp : 0, dia: d.getDay(), num: d.getDate() });
  }
  const total = datos.reduce((a, x) => a + x.xp, 0);
  const activos = datos.filter(x => x.xp > 0).length;
  if (!total) {
    return '<div class="card home-wide">' +
      '<div class="card-title"><span style="color:var(--brand)">' + ic('chart') + '</span><h3>Tu progreso</h3></div>' +
      '<p class="small muted" style="margin:0">Aquí verás tu evolución día a día en cuanto empieces a practicar. Se irá dibujando sola.</p>' +
    '</div>';
  }
  const max = Math.max.apply(null, datos.map(x => x.xp).concat([S.settings.dailyGoal || 50]));
  const nombres = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  const meta = S.settings.dailyGoal || 50;

  return '<div class="card home-wide">' +
    '<div class="card-title"><span style="color:var(--brand)">' + ic('chart') + '</span><h3>Tu progreso</h3>' +
      '<span class="pill" style="margin-left:auto">' + dias + ' días</span></div>' +
    '<div class="grafica" role="img" aria-label="XP de los últimos ' + dias + ' días">' +
      '<div class="graf-meta" style="bottom:' + Math.round((meta / max) * 100) + '%"><span>meta</span></div>' +
      datos.map(x =>
        '<div class="graf-col" title="' + x.clave + ': ' + x.xp + ' XP">' +
          '<i style="height:' + (x.xp ? Math.max(4, Math.round((x.xp / max) * 100)) : 2) + '%' +
            (x.xp >= meta ? ';background:var(--ok)' : '') + '"></i>' +
          '<span>' + nombres[x.dia] + '</span>' +
        '</div>').join('') +
    '</div>' +
    '<div class="stats-grid" style="margin-top:14px">' +
      '<div class="stat-box"><div class="stat-num">' + total + '</div><div class="stat-lab">XP en ' + dias + ' días</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + activos + '</div><div class="stat-lab">Días practicados</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + Math.round(total / dias) + '</div><div class="stat-lab">Media diaria</div></div>' +
      '<div class="stat-box"><div class="stat-num">' + Object.keys(S.srs).length + '</div><div class="stat-lab">Palabras</div></div>' +
    '</div>' +
  '</div>';
}

/* ══════════════════ 10. INICIO ══════════════════ */
function viewHome() {
  const lv = currentLevel(), nx = nextLevel();
  const goal = S.settings.dailyGoal || 50;
  ensureDay();
  const pct = Math.min(100, Math.round((S.dailyXp / goal) * 100));
  const due = dueCards().length;
  const doneCount = Object.keys(S.completed).length;
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches';

  const nextUnit = allUnits().find(u => !S.completed[u.id] && (u.custom || isLevelUnlocked(u.level)));
  const topTag = mistakesByTag().filter(g => g.total >= 2)[0];

  return '' +
  '<h1>' + esc(greet) + (S.name ? ', ' + esc(S.name) : '') + '</h1>' +
  '<p class="muted" style="margin-top:-6px">' + (S.dailyXp >= goal
    ? 'Meta diaria cumplida. Todo lo que hagas ahora es ganancia.'
    : 'Te faltan <b>' + (goal - S.dailyXp) + ' XP</b> para cumplir la meta de hoy.') + '</p>' +

  '<div class="home-grid">' +

  (V.sesionResumen && V.sesionResumen.fecha === todayKey()
    ? '<div class="card home-wide center" style="border-color:var(--ok)">' +
        '<div style="color:var(--ok)">' + ic('check', 'ic-lg') + '</div>' +
        '<h2 style="margin:8px 0 4px">Sesión de hoy completada</h2>' +
        '<p class="muted small">' + V.sesionResumen.pasos.map(p => p.titulo + ' (' + Math.min(p.hechas, p.meta) + ')').join(' · ') + '</p>' +
        '<button class="btn btn-ghost btn-sm" data-act="ses-cerrar">De acuerdo</button>' +
      '</div>'
    : '<button class="ses-lanzar home-wide" data-act="ses-empezar">' +
        '<span class="ses-lanzar-ico">' + ic('bolt') + '</span>' +
        '<span class="ses-lanzar-txt">' +
          '<b>Mis 10 minutos</b>' +
          '<span>' + Sesion.planificar().map(p => p.titulo).join(' → ') + '. Sin decidir nada.</span>' +
        '</span>' +
        '<span class="tile-go">' + ic('right') + '</span>' +
      '</button>') +

  '<div class="card home-wide">' +
    '<div class="row-between" style="margin-bottom:9px">' +
      '<b class="small">Meta de hoy</b>' +
      '<span class="small muted">' + S.dailyXp + ' / ' + goal + ' XP</span>' +
    '</div>' +
    '<div class="bar accent"><i style="width:' + pct + '%"></i></div>' +
  '</div>' +

  '<div class="stats-grid home-wide" style="margin-bottom:14px">' +
    '<div class="stat-box"><div class="stat-num">' + S.streak + '</div><div class="stat-lab">Días de racha</div></div>' +
    '<div class="stat-box"><div class="stat-num">' + Object.keys(S.srs).length +
      (srsStats().prod ? '<span style="font-size:.9rem;color:var(--brand)"> / ' + srsStats().prod + '</span>' : '') +
      '</div><div class="stat-lab">' + (srsStats().prod ? 'Palabras · activas' : 'Palabras aprendidas') + '</div></div>' +
    '<div class="stat-box"><div class="stat-num">' + doneCount + '</div><div class="stat-lab">Lecciones hechas</div></div>' +
    '<div class="stat-box"><div class="stat-num">' + S.convTurns + '</div><div class="stat-lab">Turnos hablados</div></div>' +
  '</div>' +

  (nextUnit
    ? '<div class="card">' +
        '<div class="card-title"><span style="color:var(--brand)">' + ic('play') + '</span><h3>Continuar donde ibas</h3></div>' +
        '<div class="tile" style="cursor:default;border:0;padding:0;box-shadow:none;background:none">' +
          '<span class="tile-ico">' + ic('book') + '</span>' +
          '<span class="tile-body">' +
            '<span class="tile-t">' + esc(nextUnit.title) + ' <span class="pill ' + nextUnit.level + '">' + nextUnit.level + '</span></span>' +
            '<span class="tile-d">' + esc(nextUnit.goal) + '</span>' +
          '</span>' +
        '</div>' +
        '<button class="btn btn-primary btn-block" style="margin-top:12px" data-act="open-unit" data-id="' + nextUnit.id + '">Empezar la lección</button>' +
      '</div>'
    : '<div class="card center"><b>Terminaste todas las unidades.</b><p class="small muted" style="margin:8px 0 0">Sigue practicando en Conversar y Repaso para consolidar.</p></div>') +

  (due > 0
    ? '<div class="card">' +
        '<div class="row-between">' +
          '<div><b>' + due + ' palabra' + (due === 1 ? '' : 's') + ' para repasar</b><div class="small muted">La repetición espaciada es lo que fija el vocabulario.</div></div>' +
          '<button class="btn btn-soft btn-sm" data-act="tab" data-tab="review">Repasar</button>' +
        '</div>' +
      '</div>'
    : '') +

  (topTag
    ? '<div class="card">' +
        '<div class="row-between">' +
          '<div><b>Tu error más repetido: ' + esc(topTag.tag) + '</b>' +
          '<div class="small muted">' + topTag.total + ' veces. Practicar justo esto rinde más que una lección nueva.</div></div>' +
          '<button class="btn btn-soft btn-sm" data-act="go-mistakes">Verlo</button>' +
        '</div>' +
      '</div>'
    : '') +

  '<div class="card home-wide">' +
    '<div class="card-title"><span style="color:var(--accent)">' + ic('target') + '</span><h3>Tu ruta hasta B2</h3></div>' +
    '<div class="roadmap">' +
      LEVELS.map((l, i) => {
        const cur = l.id === lv.id;
        const done = i < levelIndex();
        const isGoal = l.id === 'B2' && !cur;
        const cls = cur ? 'current' : done ? 'done' : isGoal ? 'goal' : '';
        const unitsOfLevel = UNITS.filter(u => u.level === l.id);
        const doneOfLevel = unitsOfLevel.filter(u => S.completed[u.id]).length;
        return '<div class="rm-step ' + cls + '">' +
          '<span class="rm-dot">' + (done ? ic('check') : l.id) + '</span>' +
          '<span>' +
            '<span class="rm-name">' + esc(l.name) + (l.id === 'B2' ? ' — meta' : '') + '</span>' +
            '<span class="rm-desc">' + (l.id === 'B2' ? 'Hablar y entender con fluidez · ' : '') + doneOfLevel + '/' + unitsOfLevel.length + ' unidades</span>' +
          '</span>' +
          '<span class="pill' + (cur || done ? ' ' + l.id : '') + '">' + (cur ? 'Estás aquí' : done ? 'Superado' : 'Bloqueado') + '</span>' +
        '</div>';
      }).join('') +
    '</div>' +
    (nx
      ? '<div style="margin-top:14px">' +
          '<div class="row-between small muted" style="margin-bottom:6px"><span>Avance hacia ' + nx.id + '</span><span>' + S.xp + ' / ' + nx.xp + ' XP</span></div>' +
          '<div class="bar"><i style="width:' + levelProgress() + '%"></i></div>' +
        '</div>'
      : '<div class="notice" style="margin:14px 0 0"><b>Llegaste a B2.</b>Ahora toca mantenerlo: conversa a diario y repasa el vocabulario.</div>') +
  '</div>' +

  (App.invitacion && !App.instalada
    ? '<div class="card home-wide">' +
        '<div class="row-between">' +
          '<div><b>' + ic('download') + ' Ponla en tu pantalla de inicio</b>' +
          '<div class="small muted">Con su icono, sin barra de navegador y funcionando sin internet.</div></div>' +
          '<button class="btn btn-soft btn-sm" data-act="instalar">Instalar</button>' +
        '</div>' +
      '</div>'
    : '') +

  graficaProgreso(14) +

  '<div class="btn-row home-wide" style="margin-bottom:20px">' +
    '<button class="btn btn-ghost" data-act="tab" data-tab="talk">' + ic('chat') + ' Conversar</button>' +
    '<button class="btn btn-ghost" data-act="tab" data-tab="pron">' + ic('headphones') + ' Escuchar</button>' +
  '</div>' +

  '</div>';
}

/* ══════════════════ 11. LECCIONES ══════════════════ */
function unitTile(u) {
  const done = !!S.completed[u.id];
  return '<button class="tile' + (done ? ' done' : '') + '" data-act="open-unit" data-id="' + u.id + '">' +
    '<span class="tile-ico">' + ic(done ? 'check' : u.custom ? 'sparkle' : 'book') + '</span>' +
    '<span class="tile-body">' +
      '<span class="tile-t">' + esc(u.title) +
        (u.custom ? ' <span class="pill">tuya</span>' : '') +
        (done ? ' <span class="pill">' + S.completed[u.id].score + '%</span>' : '') + '</span>' +
      '<span class="tile-d">' + esc(u.goal) + '</span>' +
    '</span>' +
    '<span class="tile-go">' + ic('right') + '</span>' +
  '</button>';
}

function viewLessons() {
  const mine = S.customUnits || [];
  const totalVoc = (typeof VOCAB_PACKS === 'undefined' ? [] : VOCAB_PACKS).reduce((n, p) => n + p.words.length, 0);
  let html = '<h1>Lecciones</h1><p class="muted" style="margin-top:-6px">' + UNITS.length + ' unidades que te llevan de A1 a B2, con peso extra en inglés de negocios y comercio exterior. Y las que crees tú.</p>' +
    '<button class="tile" data-act="tab" data-tab="vocab" style="border-color:var(--brand)">' +
      '<span class="tile-ico">' + ic('cards') + '</span>' +
      '<span class="tile-body">' +
        '<span class="tile-t">Vocabulario del día a día <span class="pill">' + totalVoc + ' palabras</span></span>' +
        '<span class="tile-d">La casa, la familia, la comida, la salud, el clima, el dinero, los verbos y adjetivos más usados. Con frase de ejemplo y audio.</span>' +
      '</span>' +
      '<span class="tile-go">' + ic('right') + '</span>' +
    '</button>' +
    '<button class="tile" data-act="open-create" style="border-style:dashed;border-color:var(--accent)">' +
      '<span class="tile-ico" style="background:var(--accent-soft);color:var(--accent)">' + ic('sparkle') + '</span>' +
      '<span class="tile-body">' +
        '<span class="tile-t">Crear una lección a tu medida</span>' +
        '<span class="tile-d">Dile el tema — aduanas, cobranzas, reclamos — y el tutor la arma con tu vocabulario.</span>' +
      '</span>' +
      '<span class="tile-go">' + ic('right') + '</span>' +
    '</button>';

  if (mine.length) {
    html += '<div class="level-head">Tus lecciones · ' + mine.length + '</div><div class="tile-list">' +
      mine.map(unitTile).join('') + '</div>';
  }

  for (const l of LEVELS) {
    const unlocked = isLevelUnlocked(l.id);
    html += '<div class="level-head">' + esc(l.name) + (unlocked ? '' : ' · bloqueado') + '</div>';
    if (!unlocked) {
      html += '<div class="notice"><b>' + ic('lock') + ' Se desbloquea con ' + l.xp + ' XP</b>Te faltan ' + (l.xp - S.xp) + ' XP. Completa lecciones, conversa y repasa para llegar.</div>';
      continue;
    }
    html += '<div class="tile-list">' + UNITS.filter(u => u.level === l.id).map(unitTile).join('') + '</div>';
  }
  return html + '<div style="height:20px"></div>';
}

/* ---- Generador de lecciones con IA ---- */
function createState() {
  if (!V.create) V.create = { topic: '', level: currentLevel().id, busy: false, err: '' };
  return V.create;
}

function viewCreate() {
  const C = createState();
  const noKey = !hayTutor();
  return '' +
  '<button class="back-link" data-act="tab" data-tab="lessons">' + ic('left') + ' Lecciones</button>' +
  '<h1>Crear una lección</h1>' +
  '<p class="muted" style="margin-top:-6px">Escribe el tema en español. El tutor genera vocabulario, frases, una nota de gramática y los ejercicios, todo a tu nivel.</p>' +
  App.avisoSinConexion('Crear una lección') +

  (noKey
    ? '<div class="notice warn"><b>' + ic('lock') + ' La IA no está activada</b>Esta función necesita el tutor con IA. Actívalo en ' +
      '<button class="btn btn-sm btn-soft" data-act="tab" data-tab="settings">Ajustes</button></div>'
    : '') +

  '<div class="card">' +
    '<div class="field">' +
      '<label for="ctopic">¿Sobre qué quieres la lección?</label>' +
      '<input type="text" id="ctopic" placeholder="Ej.: reclamar un pedido que llegó dañado" value="' + esc(C.topic) + '"' + (C.busy ? ' disabled' : ' data-autofocus') + '>' +
    '</div>' +
    '<div class="field">' +
      '<label for="clevel">Nivel</label>' +
      '<select id="clevel"' + (C.busy ? ' disabled' : '') + '>' +
        LEVELS.map(l => '<option value="' + l.id + '"' + (C.level === l.id ? ' selected' : '') + '>' + esc(l.name) + '</option>').join('') +
      '</select>' +
      '<div class="hint">Por defecto tu nivel actual. Súbelo un escalón si quieres estirarte.</div>' +
    '</div>' +
    '<button class="btn btn-primary btn-block" data-act="gen-unit"' + (C.busy || noKey ? ' disabled' : '') + '>' +
      (C.busy ? 'Escribiendo la lección… (20-40 s)' : ic('sparkle') + ' Generar la lección') + '</button>' +
    (C.err ? '<div class="notice err" style="margin:12px 0 0"><b>No se pudo crear</b>' + esc(C.err) + '</div>' : '') +
  '</div>' +

  '<div class="card">' +
    '<div class="card-title"><h3>Ideas para tu trabajo</h3></div>' +
    '<div class="btn-row">' +
      TOPIC_SUGGESTIONS.map(t => '<button class="btn btn-ghost btn-sm" data-act="use-topic" data-topic="' + esc(t) + '">' + esc(t) + '</button>').join('') +
    '</div>' +
  '</div><div style="height:20px"></div>';
}

async function generateUnit() {
  const C = createState();
  const topic = (document.getElementById('ctopic') || {}).value || '';
  const level = (document.getElementById('clevel') || {}).value || currentLevel().id;
  if (!topic.trim()) { toast('Escribe primero el tema.'); return; }
  C.topic = topic; C.level = level; C.busy = true; C.err = ''; render();

  const lv = LEVELS.find(l => l.id === level);
  const system =
    'You write English lessons for a Spanish-speaking adult professional who works in foreign trade and regional sales management. ' +
    'Target CEFR level: ' + level + ' (' + lv.desc + '). Use ' + (S.settings.accent === 'en-GB' ? 'British' : 'American') + ' English. ' +
    'ALL explanations, translations and feedback must be in SPANISH. All the English content must be natural and genuinely useful at work. ' +
    'At A1/A2 keep sentences short and use only high-frequency words; at B1/B2 use fluent, professional English. ' +
    'Reply with ONE valid JSON object and nothing else — no markdown, no code fences. Exact shape:\n' +
    '{"title": short Spanish title (max 6 words),\n' +
    ' "goal": one Spanish sentence saying what the student will be able to do,\n' +
    ' "grammar": {"title": Spanish title of one grammar point, "es": explanation in SPANISH, 2-4 sentences, warning about the typical Spanish-speaker mistake, "examples": [3 objects {"en": English sentence, "es": Spanish translation}]},\n' +
    ' "vocab": [10-14 objects {"en": English word or expression, "es": Spanish translation}],\n' +
    ' "phrases": [5-6 objects {"en": full useful English sentence, "es": Spanish translation}],\n' +
    ' "exercises": [6-7 objects, MIXING these five types:\n' +
    '    {"t":"mc","q":question in SPANISH,"opts":[3 English options],"a":index of correct option,"why":explanation in SPANISH},\n' +
    '    {"t":"fill","q":English sentence containing ___ ,"a":[accepted words],"why":explanation in SPANISH},\n' +
    '    {"t":"tr","q":Spanish sentence to translate,"a":[2-3 accepted English translations],"why":explanation in SPANISH},\n' +
    '    {"t":"listen","audio":English sentence to be read aloud,"opts":[3 Spanish meanings],"a":index of correct one,"why":explanation in SPANISH},\n' +
    '    {"t":"order","words":[4-9 English words in CORRECT order, punctuation attached to its word],"why":explanation in SPANISH}]}\n' +
    'Every "why" must teach something, never just repeat the answer. Options must all be different and plausible.';

  try {
    const raw = await callClaude(system, [{ role: 'user', content: 'Tema de la lección: ' + topic.trim() }], 4000);
    const j = parseJson(raw);
    if (!j) throw new Error('La IA no devolvió una lección legible. Vuelve a intentar.');
    const res = sanitizeUnit(j, level);
    if (res.error) throw new Error(res.error + ' Prueba otra vez o con un tema más concreto.');
    S.customUnits.unshift(res.unit);
    if (S.customUnits.length > 40) S.customUnits.length = 40;
    save();
    C.busy = false; C.topic = '';
    V.tab = 'lessons'; V.unit = res.unit.id; V.lesson = { step: 'study' };
    render();
    toast('Lección creada: ' + res.unit.title);
    return;
  } catch (err) {
    C.err = err.code ? apiErrorText(err) : err.message;
  }
  C.busy = false; render();
}

function unitById(id) { return allUnits().find(u => u.id === id); }

/* Convierte un texto con saltos de línea en párrafos, resaltando lo escrito en MAYÚSCULAS */
function paras(text) {
  return String(text || '').split(/\n{2,}/).map(p => {
    let h = esc(p.trim()).replace(/\n/g, '<br>');
    h = h.replace(/\b([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ' ]{3,}[A-ZÁÉÍÓÚÑ])\b/g, '<b>$1</b>');
    return h ? '<p>' + h + '</p>' : '';
  }).join('');
}
function exampleRow(e) {
  return '<div class="ex">' +
    '<button class="spk" data-act="say" data-text="' + esc(e.en) + '" aria-label="Escuchar: ' + esc(e.en) + '">' + ic('volume') + '</button>' +
    '<span><b>' + esc(e.en) + '</b><br><span>' + esc(e.es) + '</span></span></div>';
}

/* ---- Validación de una unidad generada por la IA ---- */
function sanitizeUnit(raw, level) {
  const str = (v, max) => typeof v === 'string' ? v.trim().slice(0, max || 200) : '';
  const pairs = (arr, max) => (Array.isArray(arr) ? arr : [])
    .map(p => ({ en: str(p && p.en, 120), es: str(p && p.es, 120) }))
    .filter(p => p.en && p.es).slice(0, max);

  const u = {
    id: 'custom-' + Date.now(),
    level: LEVELS.find(l => l.id === level) ? level : 'A1',
    custom: true,
    title: str(raw && raw.title, 60),
    goal:  str(raw && raw.goal, 140),
    grammar: {
      title: str(raw && raw.grammar && raw.grammar.title, 80),
      es:    str(raw && raw.grammar && raw.grammar.es, 600),
      examples: pairs(raw && raw.grammar && raw.grammar.examples, 3)
    },
    vocab:   pairs(raw && raw.vocab, 14),
    phrases: pairs(raw && raw.phrases, 6),
    exercises: []
  };

  (Array.isArray(raw && raw.exercises) ? raw.exercises : []).forEach(ex => {
    if (!ex || typeof ex !== 'object') return;
    const why = str(ex.why, 260);
    if ((ex.t === 'mc' || ex.t === 'listen')) {
      const opts = (Array.isArray(ex.opts) ? ex.opts : []).map(o => str(o, 120)).filter(Boolean);
      const a = Number(ex.a);
      if (opts.length < 3 || !(a >= 0 && a < opts.length)) return;
      if (new Set(opts.map(o => o.toLowerCase())).size !== opts.length) return;
      if (ex.t === 'listen') {
        const audio = str(ex.audio, 160);
        if (!audio) return;
        u.exercises.push({ t: 'listen', audio, opts, a, why });
      } else {
        const q = str(ex.q, 200);
        if (!q) return;
        u.exercises.push({ t: 'mc', q, opts, a, why });
      }
    } else if (ex.t === 'fill') {
      const q = str(ex.q, 200);
      const a = (Array.isArray(ex.a) ? ex.a : [ex.a]).map(x => str(x, 60)).filter(Boolean);
      if (!q || q.indexOf('___') < 0 || !a.length) return;
      u.exercises.push({ t: 'fill', q, a, why });
    } else if (ex.t === 'tr') {
      const q = str(ex.q, 200);
      const a = (Array.isArray(ex.a) ? ex.a : [ex.a]).map(x => str(x, 160)).filter(Boolean);
      if (!q || !a.length) return;
      u.exercises.push({ t: 'tr', q, a, why });
    } else if (ex.t === 'order') {
      const words = (Array.isArray(ex.words) ? ex.words : []).map(w => str(w, 30)).filter(Boolean);
      if (words.length < 3 || words.length > 12) return;
      u.exercises.push({ t: 'order', words, a: words.join(' '), why });
    }
  });

  u.exercises = u.exercises.slice(0, 8);
  const faltan = [];
  if (!u.title) faltan.push('título');
  if (!u.goal) faltan.push('objetivo');
  if (!u.grammar.title || !u.grammar.es) faltan.push('gramática');
  if (u.vocab.length < 6) faltan.push('vocabulario (mínimo 6 palabras)');
  if (u.phrases.length < 3) faltan.push('frases útiles (mínimo 3)');
  if (u.exercises.length < 4) faltan.push('ejercicios (mínimo 4 válidos)');
  return faltan.length ? { error: 'A la lección le falta: ' + faltan.join(', ') + '.' } : { unit: u };
}

function viewUnit() {
  const u = unitById(V.unit);
  if (!u) { V.unit = null; return viewLessons(); }
  const L = V.lesson;

  if (!L || L.step === 'study') return viewUnitStudy(u);
  if (L.step === 'ex')          return viewExercise(u);
  return viewUnitDone(u);
}

function viewUnitStudy(u) {
  return '' +
  '<button class="back-link" data-act="tab" data-tab="lessons">' + ic('left') + ' Lecciones</button>' +
  '<div class="row-between"><h1 style="margin-bottom:4px">' + esc(u.title) + '</h1><span class="pill ' + u.level + '">' + u.level + '</span></div>' +
  '<p class="muted" style="margin-top:0">' + esc(u.goal) + '</p>' +

  '<div class="card">' +
    '<div class="grammar">' +
      '<h3>' + esc(u.grammar.title) + '</h3>' +
      paras(u.grammar.es) +
      '<div class="ex-head">Ejemplos</div>' +
      u.grammar.examples.map(exampleRow).join('') +
    '</div>' +
  '</div>' +

  (u.grammar.more || []).map(m =>
    '<div class="card">' +
      '<div class="grammar alt">' +
        '<h3>' + esc(m.title) + '</h3>' +
        paras(m.es) +
        '<div class="ex-head">Ejemplos</div>' +
        m.examples.map(exampleRow).join('') +
      '</div>' +
    '</div>'
  ).join('') +

  (u.grammar.mistakes && u.grammar.mistakes.length
    ? '<div class="card">' +
        '<div class="card-title"><span style="color:var(--err)">' + ic('x') + '</span><h3>Errores típicos del hispanohablante</h3></div>' +
        '<p class="small muted" style="margin-top:-4px">Estos son los que te delatan. Léelos ahora y los reconocerás cuando el coach te los marque.</p>' +
        u.grammar.mistakes.map(m =>
          '<div class="mistake">' +
            '<div class="mistake-pair">' +
              '<span class="bad">' + esc(m.bad) + '</span>' +
              '<span class="arrow">' + ic('right') + '</span>' +
              '<span class="good">' + esc(m.good) + '</span>' +
              '<button class="spk" data-act="say" data-text="' + esc(m.good) + '" aria-label="Escuchar la forma correcta">' + ic('volume') + '</button>' +
            '</div>' +
            '<div class="tiny muted">' + esc(m.es) + '</div>' +
          '</div>'
        ).join('') +
      '</div>'
    : '') +

  '<div class="card">' +
    '<div class="card-title"><h3>Vocabulario</h3><span class="pill">' + u.vocab.length + ' palabras</span>' +
      '<button class="btn btn-sm btn-ghost" style="margin-left:auto" data-act="say-all" data-id="' + u.id + '">' + ic('play') + ' Escuchar todo</button></div>' +
    '<div class="vocab-list">' +
      u.vocab.map(v =>
        '<div class="vocab-row">' +
          '<span><span class="vocab-en">' + esc(v.en) + '</span><br><span class="vocab-es">' + esc(v.es) + '</span></span>' +
          '<button class="spk" data-act="say" data-text="' + esc(v.en.replace(/^to /, '').replace(/\s*\(.*\)/, '')) + '" aria-label="Escuchar ' + esc(v.en) + '">' + ic('volume') + '</button>' +
        '</div>'
      ).join('') +
    '</div>' +
  '</div>' +

  (u.vocabPlus && u.vocabPlus.length
    ? '<div class="card">' +
        '<div class="card-title"><h3>Vocabulario ampliado</h3><span class="pill">' + u.vocabPlus.length + ' más</span>' +
          '<button class="btn btn-sm btn-ghost" style="margin-left:auto" data-act="say-plus" data-id="' + u.id + '">' + ic('play') + ' Escuchar</button></div>' +
        '<p class="small muted" style="margin-top:-6px">Palabras y expresiones del mismo tema que no caben en la lista corta, pero que vas a oír todo el tiempo.</p>' +
        '<div class="vocab-list">' +
          u.vocabPlus.map(v =>
            '<div class="vocab-row' + (S.srs[v.en] ? ' sabida' : '') + '">' +
              '<span><span class="vocab-en">' + esc(v.en) + '</span>' +
                (S.srs[v.en] ? ' <span class="tick" title="Ya está en tu repaso">' + ic('check') + '</span>' : '') +
                '<br><span class="vocab-es">' + esc(v.es) + '</span></span>' +
              '<button class="spk" data-act="say" data-text="' + esc(v.en.replace(/^to /, '').replace(/\s*\(.*\)/, '')) + '" aria-label="Escuchar ' + esc(v.en) + '">' + ic('volume') + '</button>' +
            '</div>'
          ).join('') +
        '</div>' +
        '<button class="btn btn-soft btn-block btn-sm" style="margin-top:12px" data-act="unit-plus-srs" data-id="' + u.id + '">' + ic('cards') + ' Añadir estas al repaso</button>' +
      '</div>'
    : '') +

  '<div class="card">' +
    '<div class="card-title"><h3>Frases útiles</h3></div>' +
    u.phrases.map(p =>
      '<div class="phrase-row">' +
        '<button class="spk" data-act="say" data-text="' + esc(p.en) + '" aria-label="Escuchar: ' + esc(p.en) + '">' + ic('volume') + '</button>' +
        '<span><span class="phrase-en">' + esc(p.en) + '</span><br><span class="phrase-es">' + esc(p.es) + '</span></span>' +
      '</div>'
    ).join('') +
  '</div>' +

  '<button class="btn btn-primary btn-block" data-act="start-ex" data-id="' + u.id + '">' +
    'Practicar (' + u.exercises.length + ' ejercicios) ' + ic('right') + '</button>' +
  (u.custom
    ? '<div class="center" style="margin-top:10px"><button class="btn btn-ghost btn-sm" data-act="del-unit" data-id="' + u.id + '" style="color:var(--err)">' + ic('trash') + ' Borrar esta lección</button></div>'
    : '') +
  '<div style="height:22px"></div>';
}

function viewExercise(u) {
  const L = V.lesson;
  const ex = u.exercises[L.i];
  const total = u.exercises.length;
  const kindName = { mc: 'Opción múltiple', fill: 'Completa el espacio', tr: 'Traduce al inglés', listen: 'Comprensión auditiva', order: 'Ordena las palabras' };

  let body = '';
  const answered = L.answered;

  if (ex.t === 'mc' || ex.t === 'listen') {
    const q = ex.t === 'listen'
      ? '<div class="center" style="margin-bottom:18px">' +
          '<button class="btn btn-primary" data-act="say" data-text="' + esc(ex.audio) + '">' + ic('volume') + ' Reproducir audio</button>' +
          '<div class="tiny muted" style="margin-top:8px">Puedes escucharlo las veces que necesites.</div>' +
        '</div><div class="ex-q">¿Qué significa lo que escuchaste?</div>'
      : '<div class="ex-q">' + esc(ex.q) + '</div>';
    body = q + '<div class="opts">' +
      ex.opts.map((o, i) => {
        let cls = '';
        if (answered) {
          if (i === ex.a) cls = ' correct';
          else if (i === L.picked) cls = ' wrong';
        }
        return '<button class="opt' + cls + '" data-act="answer-mc" data-i="' + i + '"' + (answered ? ' disabled' : '') + '>' + esc(o) + '</button>';
      }).join('') + '</div>';

  } else if (ex.t === 'order') {
    const picked = L.picked || [];
    // barajar el banco: si no, las palabras aparecen ya en el orden correcto
    if (!L.bankOrder || L.bankOrder.length !== ex.words.length) {
      let o = shuffle(ex.words.map((_, i) => i));
      if (ex.words.length > 2 && o.every((v, i) => v === i)) o = o.slice().reverse();
      L.bankOrder = o;
    }
    const bank = L.bankOrder.map(i => ({ w: ex.words[i], i })).filter(x => picked.indexOf(x.i) < 0);
    body = '<div class="ex-q">Ordena las palabras para formar la frase</div>' +
      '<div class="word-slot" aria-live="polite">' +
        (picked.length ? picked.map(i => '<button class="wchip" data-act="unpick" data-i="' + i + '"' + (answered ? ' disabled' : '') + '>' + esc(ex.words[i]) + '</button>').join('')
                       : '<span class="muted small" style="align-self:center">Toca las palabras de abajo…</span>') +
      '</div>' +
      '<div class="word-bank">' +
        bank.map(x => '<button class="wchip" data-act="pick" data-i="' + x.i + '"' + (answered ? ' disabled' : '') + '>' + esc(x.w) + '</button>').join('') +
      '</div>' +
      (answered ? '' : '<button class="btn btn-primary btn-block" data-act="check-order"' + (picked.length !== ex.words.length ? ' disabled' : '') + '>Comprobar</button>');

  } else { // fill / tr
    const label = ex.t === 'tr' ? 'Traduce al inglés:' : 'Completa la frase:';
    const qHtml = ex.t === 'fill' ? esc(ex.q).replace(/___/g, '<span class="blank">___</span>') : esc(ex.q);
    body = '<div class="ex-q">' + qHtml + '</div>' +
      '<div class="field">' +
        '<label class="sr-only" for="exinput">' + label + '</label>' +
        '<input type="text" id="exinput" placeholder="Escribe en inglés…" autocomplete="off" autocapitalize="off" spellcheck="false"' +
          (answered ? ' disabled value="' + esc(L.typed || '') + '"' : ' data-autofocus') + '>' +
      '</div>' +
      (answered ? '' : '<button class="btn btn-primary btn-block" data-act="check-text">Comprobar</button>');
  }

  let fb = '';
  if (answered) {
    const ok = L.correct;
    fb = '<div class="feedback ' + (ok ? 'ok' : 'no') + '" role="status">' +
      '<b>' + (ok ? '¡Correcto!' : 'Casi. La respuesta correcta es:') + '</b>' +
      (ok ? '' : '<div class="sol" style="margin-bottom:6px">' + esc(L.solution) + '</div>') +
      esc(ex.why || '') +
      '</div>' +
      '<button class="btn btn-primary btn-block" style="margin-top:12px" data-act="next-ex" data-autofocus>' +
        (L.i + 1 < total ? 'Siguiente ' : 'Terminar lección ') + ic('right') + '</button>';
  }

  return '' +
  '<button class="back-link" data-act="quit-ex">' + ic('left') + ' Salir de la práctica</button>' +
  '<div class="ex-progress" role="progressbar" aria-valuemin="1" aria-valuemax="' + total + '" aria-valuenow="' + (L.i + 1) + '" aria-label="Progreso de la lección">' +
    u.exercises.map((_, i) => '<i class="' + (i < L.i ? 'on' : i === L.i ? 'cur' : '') + '"></i>').join('') +
  '</div>' +
  '<div class="card">' +
    '<div class="ex-kind">' + (kindName[ex.t] || '') + ' · ' + (L.i + 1) + ' de ' + total + '</div>' +
    body + fb +
  '</div>';
}

function viewUnitDone(u) {
  const L = V.lesson;
  const score = Math.round((L.right / u.exercises.length) * 100);
  const msg = score === 100 ? 'Perfecto. Nivel nativo de constancia.'
            : score >= 70   ? 'Muy bien. Ya dominas la idea principal.'
            : 'Buen intento. Repite la unidad en unos días y verás la diferencia.';
  return '<div class="card center" style="margin-top:24px">' +
    '<div style="color:var(--accent)">' + ic('trophy', 'ic-lg') + '</div>' +
    '<h1 style="margin:10px 0 4px">' + score + '%</h1>' +
    '<p class="muted">' + esc(msg) + '</p>' +
    '<div class="divider"></div>' +
    '<p class="small">Se añadieron <b>' + u.vocab.length + ' palabras</b> a tu repaso espaciado. Volverán a aparecer justo antes de que las olvides.</p>' +
    '<div class="btn-row" style="margin-top:14px">' +
      '<button class="btn btn-ghost" data-act="restart-ex" data-id="' + u.id + '">' + ic('refresh') + ' Repetir</button>' +
      '<button class="btn btn-primary" data-act="tab" data-tab="lessons">Siguiente lección</button>' +
    '</div>' +
  '</div>';
}

/* ══════════════════ 12. CONVERSAR ══════════════════ */
function talkState() {
  if (!V.talk) V.talk = { mode: 'chat', scenario: null, msgs: [], busy: false, draft: '', rec: false, emailTask: null, emailText: '', emailResult: null, showHint: -1 };
  return V.talk;
}

/* ============================================================
   VOCABULARIO POR TEMAS
   Packs de vida cotidiana. No se bloquean por nivel: nadie
   debería esperar 1.300 XP para aprender a decir "cocina".
   ============================================================ */

function packsPorNivel(id) {
  return (typeof VOCAB_PACKS === 'undefined' ? [] : VOCAB_PACKS).filter(p => p.level === id);
}

/* cuántas palabras del pack ya están en tu repaso */
function packAprendidas(p) {
  let n = 0;
  for (const w of p.words) if (S.srs[w.en]) n++;
  return n;
}

function packTile(p) {
  const hechas = packAprendidas(p);
  const pct = Math.round(hechas / p.words.length * 100);
  return '<button class="tile" data-act="open-pack" data-id="' + p.id + '">' +
    '<span class="tile-ico"' + (pct === 100 ? ' style="background:var(--ok-soft);color:var(--ok)"' : '') + '>' +
      ic(pct === 100 ? 'check' : 'cards') + '</span>' +
    '<span class="tile-body">' +
      '<span class="tile-t">' + esc(p.title) + ' <span class="pill">' + p.words.length + '</span>' +
        (hechas ? ' <span class="pill">' + pct + '%</span>' : '') + '</span>' +
      '<span class="tile-d">' + esc(p.desc) + '</span>' +
    '</span>' +
    '<span class="tile-go">' + ic('right') + '</span>' +
  '</button>';
}

function viewVocab() {
  const todos = (typeof VOCAB_PACKS === 'undefined' ? [] : VOCAB_PACKS);
  const total = todos.reduce((n, p) => n + p.words.length, 0);
  const mias  = todos.reduce((n, p) => n + packAprendidas(p), 0);
  const pct   = total ? Math.round(mias / total * 100) : 0;

  let html = '<button class="back-link" data-act="tab" data-tab="lessons">' + ic('left') + ' Lecciones</button>' +
    '<h1>Vocabulario</h1>' +
    '<p class="muted" style="margin-top:-6px">' + total + ' palabras del habla de todos los días, agrupadas por tema. ' +
      'Cada una con una frase de ejemplo, porque es la frase la que se queda, no la palabra suelta.</p>' +

    '<div class="card">' +
      '<div class="row-between small muted" style="margin-bottom:6px"><span>Tu avance en vocabulario</span><span>' + mias + ' / ' + total + '</span></div>' +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
      '<p class="small muted" style="margin:10px 0 0">Una palabra cuenta cuando entra a tu repaso espaciado. ' +
        'Desde ahí vuelve sola justo antes de que la olvides.</p>' +
    '</div>';

  for (const l of LEVELS) {
    const ps = packsPorNivel(l.id);
    if (!ps.length) continue;
    html += '<div class="level-head">' + esc(l.name) + '</div>' +
      '<div class="tile-list">' + ps.map(packTile).join('') + '</div>';
  }
  return html + '<div style="height:20px"></div>';
}

function packPorId(id) {
  return (typeof VOCAB_PACKS === 'undefined' ? [] : VOCAB_PACKS).find(p => p.id === id) || null;
}

function viewPack() {
  const p = packPorId(V.pack);
  if (!p) return viewVocab();
  if (V.packQuiz) return viewPackQuiz(p);

  const hechas = packAprendidas(p);
  const faltan = p.words.length - hechas;

  return '<button class="back-link" data-act="tab" data-tab="vocab">' + ic('left') + ' Vocabulario</button>' +
    '<h1>' + esc(p.title) + '</h1>' +
    '<p class="muted" style="margin-top:-6px">' + esc(p.desc) + '</p>' +

    '<div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:14px">' +
      '<button class="btn btn-soft btn-sm" data-act="say-pack" data-id="' + p.id + '">' + ic('play') + ' Escuchar todo</button>' +
      (faltan
        ? '<button class="btn btn-primary btn-sm" data-act="pack-srs" data-id="' + p.id + '">' + ic('cards') + ' Añadir ' + faltan + ' al repaso</button>'
        : '<span class="pill" style="background:var(--ok-soft);color:var(--ok)">' + ic('check') + ' Todas en tu repaso</span>') +
      '<button class="btn btn-ghost btn-sm" data-act="pack-quiz" data-id="' + p.id + '">' + ic('target') + ' Ponerme a prueba</button>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card-title"><h3>' + p.words.length + ' palabras</h3>' +
        (hechas ? '<span class="pill" style="margin-left:auto">' + hechas + ' en tu repaso</span>' : '') + '</div>' +
      '<div class="vocab-list">' +
        p.words.map(w =>
          '<div class="vocab-row vocab-row-ej' + (S.srs[w.en] ? ' sabida' : '') + '">' +
            '<span>' +
              '<span class="vocab-en">' + esc(w.en) + '</span>' +
              (S.srs[w.en] ? ' <span class="tick" title="Ya está en tu repaso">' + ic('check') + '</span>' : '') +
              '<br><span class="vocab-es">' + esc(w.es) + '</span>' +
              '<br><span class="ej-en">' + esc(w.ex) + '</span>' +
              '<br><span class="ej-es">' + esc(w.exs) + '</span>' +
            '</span>' +
            '<button class="spk" data-act="say" data-text="' + esc(w.ex) + '" aria-label="Escuchar: ' + esc(w.ex) + '">' + ic('volume') + '</button>' +
          '</div>'
        ).join('') +
      '</div>' +
    '</div>' +
    '<div style="height:20px"></div>';
}

/* ---- prueba rápida del pack: ves el español, eliges el inglés ---- */
function iniciarPackQuiz(p) {
  const barajado = p.words.slice().sort(() => Math.random() - 0.5).slice(0, Math.min(10, p.words.length));
  V.packQuiz = { i: 0, aciertos: 0, preguntas: barajado.map(w => {
    const otras = p.words.filter(o => o.en !== w.en).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = otras.concat([w]).sort(() => Math.random() - 0.5);
    return { es: w.es, en: w.en, opts: opts.map(o => o.en), a: opts.findIndex(o => o.en === w.en) };
  }), elegida: null };
}

function viewPackQuiz(p) {
  const q = V.packQuiz;
  if (q.i >= q.preguntas.length) {
    const pct = Math.round(q.aciertos / q.preguntas.length * 100);
    return '<div class="card" style="text-align:center">' +
      '<div class="big-score">' + pct + '%</div>' +
      '<p><b>' + q.aciertos + ' de ' + q.preguntas.length + '</b> correctas en ' + esc(p.title) + '.</p>' +
      '<p class="small muted">' + (pct >= 80
        ? 'Muy bien. Estas palabras ya son tuyas: el repaso se encarga de que no se vayan.'
        : 'Normal en la primera pasada. Vuelve a leer las frases de ejemplo y repite: así se fija.') + '</p>' +
      '<button class="btn btn-primary btn-block" data-act="pack-quiz" data-id="' + p.id + '">Otra vez</button>' +
      '<button class="btn btn-ghost btn-block" data-act="pack-salir-quiz" data-id="' + p.id + '">Volver al pack</button>' +
    '</div>';
  }
  const pr = q.preguntas[q.i];
  const respondida = q.elegida !== null;
  return '<button class="back-link" data-act="pack-salir-quiz" data-id="' + p.id + '">' + ic('left') + ' Salir de la prueba</button>' +
    '<div class="exhead"><span class="small muted">' + (q.i + 1) + ' de ' + q.preguntas.length + '</span>' +
      '<div class="bar bar-sm"><span style="width:' + Math.round(q.i / q.preguntas.length * 100) + '%"></span></div></div>' +
    '<div class="card">' +
      '<p class="small muted" style="margin-bottom:4px">¿Cómo se dice en inglés?</p>' +
      '<h2 style="margin-bottom:16px">' + esc(pr.es) + '</h2>' +
      '<div class="opts">' +
        pr.opts.map((o, i) => {
          let cls = 'opt';
          if (respondida) {
            if (i === pr.a) cls += ' ok';
            else if (i === q.elegida) cls += ' bad';
          }
          return '<button class="' + cls + '"' + (respondida ? ' disabled' : '') +
            ' data-act="pack-answer" data-i="' + i + '">' + esc(o) + '</button>';
        }).join('') +
      '</div>' +
      (respondida
        ? '<div class="notice" style="margin-top:14px"><b>' +
            (q.elegida === pr.a ? ic('check') + ' Correcto' : ic('x') + ' Era: ' + esc(pr.en)) + '</b></div>' +
          '<button class="btn btn-primary btn-block" data-act="pack-next" data-autofocus>Siguiente ' + ic('right') + '</button>'
        : '') +
    '</div>';
}

function viewTalk() {
  const T = talkState();
  const tabs = '<div class="tabs" role="tablist">' +
    '<button class="tab" role="tab" aria-selected="' + (T.mode === 'chat') + '" data-act="talk-mode" data-mode="chat">' + ic('chat') + ' Conversar</button>' +
    '<button class="tab" role="tab" aria-selected="' + (T.mode === 'email') + '" data-act="talk-mode" data-mode="email">' + ic('mail') + ' Correo de negocios</button>' +
  '</div>';

  if (T.mode === 'email') return tabs + viewEmail();
  if (!T.scenario)        return tabs + viewScenarioPicker();
  return tabs + viewChat();
}

function viewScenarioPicker() {
  const noKey = !hayTutor();
  return '<h1>Conversar</h1>' +
  '<p class="muted" style="margin-top:-6px">Elige una situación y habla en inglés. El tutor te responde, te corrige en español y te sugiere qué decir.</p>' +
  App.avisoSinConexion('Conversar con el tutor') +
  (noKey ? '<div class="notice warn"><b>Modo sin IA activo</b>Puedes practicar con diálogos guiados y correcciones básicas. Para que el tutor responda de verdad, activa la IA en <button class="btn btn-sm btn-soft" data-act="tab" data-tab="settings" style="margin-left:4px">Ajustes</button></div>' : '') +
  '<div class="tile-list two">' +
    SCENARIOS.map(s =>
      '<button class="tile" data-act="pick-scenario" data-id="' + s.id + '">' +
        '<span class="tile-ico">' + ic(s.icon) + '</span>' +
        '<span class="tile-body">' +
          '<span class="tile-t">' + esc(s.title) + ' <span class="pill ' + s.level + '">' + s.level + '</span></span>' +
          '<span class="tile-d">' + esc(s.desc) + '</span>' +
        '</span>' +
      '</button>'
    ).join('') +
  '</div><div style="height:20px"></div>';
}

function viewChat() {
  const T = talkState();
  const sc = SCENARIOS.find(s => s.id === T.scenario);
  const canMic = micSupported;

  const msgs = T.msgs.map((m, idx) => {
    if (m.who === 'me') {
      return '<div class="msg me"><div class="bubble">' + esc(m.text) + '</div></div>';
    }
    let h = '<div class="msg them">' +
      '<div class="msg-who">' + esc(sc.title) + '</div>' +
      '<div class="msg-row">' +
        '<div class="bubble">' + esc(m.text) + '</div>' +
        '<button class="spk" data-act="say" data-text="' + esc(m.text) + '" aria-label="Escuchar la respuesta">' + ic('volume') + '</button>' +
      '</div>';
    if (m.coach) {
      h += '<div class="coach"><b>' + ic('bulb') + ' Nota del coach</b>' + esc(m.coach) + '</div>';
    }
    if (m.hint) {
      h += (T.showHint === idx
        ? '<div class="hintbox"><b>Podrías decir:</b> ' + esc(m.hint) + '</div>'
        : '<button class="btn btn-sm btn-ghost" style="margin-top:8px" data-act="show-hint" data-i="' + idx + '">' + ic('bulb') + ' ¿Qué le digo?</button>');
    }
    return h + '</div>';
  }).join('');

  const typing = T.busy ? '<div class="msg them"><div class="bubble"><span class="typing"><i></i><i></i><i></i></span></div></div>' : '';

  return '' +
  '<button class="back-link" data-act="leave-scenario">' + ic('left') + ' Cambiar situación</button>' +
  '<div class="row-between" style="margin-bottom:12px">' +
    '<div><b>' + esc(sc.title) + '</b><div class="tiny muted">' + esc(sc.role) + '</div></div>' +
    '<button class="btn btn-sm btn-ghost" data-act="reset-chat" aria-label="Reiniciar conversación">' + ic('refresh') + '</button>' +
  '</div>' +
  '<div class="chat">' + msgs + typing + '</div>' +
  '<div id="chatbox"></div>' +
  '<div class="composer" style="margin-bottom:22px">' +
    '<label class="sr-only" for="chatinput">Escribe tu respuesta en inglés</label>' +
    '<textarea id="chatinput" placeholder="Write in English…" rows="1"' + (T.busy ? ' disabled' : ' data-autofocus') + '>' + esc(T.draft) + '</textarea>' +
    (canMic
      ? '<button class="btn ' + (T.rec ? 'btn-accent' : 'btn-ghost') + ' btn-icon" data-act="chat-mic" aria-label="' + (T.rec ? 'Detener grabación' : 'Hablar con el micrófono') + '"' + (T.busy ? ' disabled' : '') + '>' + (T.rec ? '<span class="rec-dot"></span>' : ic('mic')) + '</button>'
      : '') +
    '<button class="btn btn-primary btn-icon" data-act="send-chat" aria-label="Enviar"' + (T.busy ? ' disabled' : '') + '>' + ic('send') + '</button>' +
  '</div>';
}

async function sendChat(text) {
  const T = talkState();
  const sc = SCENARIOS.find(s => s.id === T.scenario);
  if (!text.trim() || T.busy) return;
  T.msgs.push({ who: 'me', text: text.trim() });
  T.draft = '';
  T.busy = true;
  S.convTurns++;
  render();

  const lv = currentLevel().id;
  const system =
    'You are an English conversation tutor for a Spanish-speaking adult professional who works in foreign trade and sales. ' +
    'Their current CEFR level is ' + lv + '. Stay in character as: ' + sc.persona + ' ' +
    'Adapt your English to level ' + lv + ': at A1/A2 use short, very simple sentences and high-frequency words; at B1/B2 use natural, fluent business-appropriate English. ' +
    'Use ' + (S.settings.accent === 'en-GB' ? 'British' : 'American') + ' English. ' +
    'ALWAYS reply with a single valid JSON object and nothing else. No markdown, no code fences. Keys exactly: ' +
    '"reply_en" (your in-character line in English, 1-3 sentences, almost always ending with a question to keep the conversation going), ' +
    '"coach_es" (feedback in SPANISH about the student\'s last message: if there is a mistake, give the corrected English sentence and explain briefly why; if it was correct, give one short tip to sound more natural. Max 45 words), ' +
    '"hint_es" (a short suggestion in SPANISH of what the student could say next, including a model English sentence. Max 25 words), ' +
    '"error" (ONLY if the student made a real mistake, an object {"wrong": the exact wrong English fragment they wrote, "right": the corrected English fragment, "tag": the grammar category in SPANISH, chosen from: Verbo to be, Presente simple, Pasado simple, Present perfect, Futuro, Condicionales, Preposiciones, Artículos, Orden de palabras, Comparativos, Incontables y plurales, Phrasal verbs, Vocabulario, Registro y cortesía}. If there was no mistake, set "error" to null).';

  const history = T.msgs.slice(-12).map(m => ({
    role: m.who === 'me' ? 'user' : 'assistant',
    content: m.who === 'me' ? m.text : JSON.stringify({ reply_en: m.text, coach_es: m.coach || '', hint_es: m.hint || '' })
  }));
  if (history.length && history[0].role !== 'user') history.shift();

  try {
    const raw = await callClaude(system, history, 600);
    const j = parseJson(raw);
    if (!j || !j.reply_en) throw new Error('respuesta no válida');
    T.msgs.push({ who: 'them', text: j.reply_en, coach: j.coach_es || '', hint: j.hint_es || '' });
    if (j.error && (j.error.right || j.error.wrong)) {
      addMistake({ wrong: j.error.wrong, right: j.error.right, note: j.coach_es, tag: j.error.tag, source: 'Conversar · ' + sc.title });
    }
    addXp(8, true);
  } catch (err) {
    const turn = T.msgs.filter(m => m.who === 'me').length - 1;
    const line = sc.fallback[Math.min(turn, sc.fallback.length - 1)];
    const oc = offlineCoach(text);
    oc.errors.forEach(e => addMistake(Object.assign({}, e, { source: 'Conversar · ' + sc.title })));
    T.msgs.push({
      who: 'them',
      text: line,
      coach: oc.note + (err.code === 'nokey' ? '' : ' (' + apiErrorText(err) + ')'),
      hint: 'Responde con una frase completa y termina preguntando algo de vuelta.'
    });
    if (err.code === 'nokey') { if (!T.warned) { toast('Modo sin IA: respuestas guiadas.'); T.warned = true; } }
    else toast(apiErrorText(err));
    addXp(5, true);
  }
  T.busy = false;
  save();
  Sesion.avanzar('talk');
  render();
}

/* ---------- Correo de negocios ---------- */
function viewEmail() {
  const T = talkState();
  if (!T.emailTask) {
    return '<h1>Correo de negocios</h1>' +
    '<p class="muted" style="margin-top:-6px">Escribe un correo real en inglés y el tutor te lo corrige y lo mejora, explicándote todo en español.</p>' +
    '<div class="tile-list">' +
      EMAIL_TASKS.map(t =>
        '<button class="tile" data-act="pick-email" data-id="' + t.id + '">' +
          '<span class="tile-ico">' + ic('mail') + '</span>' +
          '<span class="tile-body"><span class="tile-t">' + esc(t.title) + '</span><span class="tile-d">' + esc(t.brief) + '</span></span>' +
          '<span class="tile-go">' + ic('right') + '</span>' +
        '</button>'
      ).join('') +
    '</div><div style="height:20px"></div>';
  }

  const task = EMAIL_TASKS.find(t => t.id === T.emailTask);
  const R = T.emailResult;

  return '' +
  '<button class="back-link" data-act="leave-email">' + ic('left') + ' Otra tarea</button>' +
  '<h2>' + esc(task.title) + '</h2>' +
  '<div class="notice"><b>Tu tarea</b>' + esc(task.brief) + '</div>' +
  '<div class="card">' +
    '<div class="field">' +
      '<label for="emailtext">Tu correo en inglés</label>' +
      '<textarea id="emailtext" placeholder="Dear Mr. Chen,&#10;&#10;I hope this email finds you well…" spellcheck="false">' + esc(T.emailText) + '</textarea>' +
      '<div class="hint">Escribe como lo harías de verdad. Los errores son parte del proceso.</div>' +
    '</div>' +
    '<button class="btn btn-primary btn-block" data-act="review-email"' + (T.busy ? ' disabled' : '') + '>' +
      (T.busy ? 'Revisando…' : 'Revisar mi correo') + '</button>' +
  '</div>' +

  (R ? renderEmailResult(R, task) : '') +
  '<div style="height:20px"></div>';
}

function renderEmailResult(R, task) {
  let h = '<div class="card">';
  if (typeof R.score === 'number') {
    h += '<div class="row-between" style="margin-bottom:10px"><b>Valoración</b><span class="stat-num" style="font-size:1.3rem;color:var(--brand)">' + R.score + '/100</span></div>' +
         '<div class="bar" style="margin-bottom:14px"><i style="width:' + Math.max(0, Math.min(100, R.score)) + '%"></i></div>';
  }
  if (R.summary_es) h += '<p class="small">' + esc(R.summary_es) + '</p>';
  if (R.notes_es && R.notes_es.length) {
    h += '<div class="divider"></div><b class="small">Correcciones</b>';
    h += R.notes_es.map(n => {
      const issue = typeof n === 'string' ? n : (n.issue || '');
      const why = typeof n === 'string' ? '' : (n.why || '');
      return '<div class="coach" style="margin-top:8px"><b>' + ic('pen') + ' ' + esc(issue) + '</b>' + esc(why) + '</div>';
    }).join('');
  }
  if (R.improved_en) {
    h += '<div class="divider"></div><b class="small">Versión mejorada</b>' +
      '<div style="background:var(--surface-2);border-radius:9px;padding:13px;margin-top:8px;white-space:pre-wrap;font-size:.92rem">' + esc(R.improved_en) + '</div>' +
      '<button class="btn btn-ghost btn-sm" style="margin-top:10px" data-act="say" data-text="' + esc(R.improved_en.slice(0, 400)) + '">' + ic('volume') + ' Escuchar</button>';
  }
  if (R.offline && task.model) {
    h += '<div class="divider"></div><b class="small">Correo modelo de referencia</b>' +
      '<div style="background:var(--surface-2);border-radius:9px;padding:13px;margin-top:8px;white-space:pre-wrap;font-size:.92rem">' + esc(task.model) + '</div>';
  }
  return h + '</div>';
}

async function reviewEmail() {
  const T = talkState();
  const task = EMAIL_TASKS.find(t => t.id === T.emailTask);
  const text = (document.getElementById('emailtext') || {}).value || '';
  if (!text.trim()) { toast('Escribe primero tu correo.'); return; }
  T.emailText = text;
  T.busy = true; T.emailResult = null; render();

  const system =
    'You are a business English coach for a Spanish-speaking sales manager in foreign trade. ' +
    'The student wrote a business email in English. Task context: ' + task.brief + ' ' +
    'Their CEFR level is ' + currentLevel().id + '. Use ' + (S.settings.accent === 'en-GB' ? 'British' : 'American') + ' English conventions. ' +
    'Reply with a single valid JSON object and nothing else (no markdown, no code fences). Keys exactly: ' +
    '"score" (integer 0-100 for clarity, correctness and professional tone), ' +
    '"summary_es" (2 sentences in SPANISH: what they did well and the main thing to fix), ' +
    '"notes_es" (array of max 5 objects with "issue" = the specific problem written in SPANISH quoting the English fragment, "why" = a short explanation in SPANISH plus the corrected English, "wrong" = the exact wrong English fragment, "right" = the corrected English fragment, and "tag" = the category in SPANISH from: Verbo to be, Presente simple, Pasado simple, Present perfect, Futuro, Condicionales, Preposiciones, Artículos, Orden de palabras, Comparativos, Incontables y plurales, Phrasal verbs, Vocabulario, Registro y cortesía), ' +
    '"improved_en" (the full email rewritten in natural, professional English, keeping their intent and any names they used).';

  try {
    const raw = await callClaude(system, [{ role: 'user', content: text }], 1400);
    const j = parseJson(raw);
    if (!j) throw new Error('respuesta no válida');
    T.emailResult = j;
    (j.notes_es || []).forEach(n => {
      if (n && typeof n === 'object' && (n.right || n.wrong)) {
        addMistake({ wrong: n.wrong, right: n.right, note: n.why || n.issue, tag: n.tag, source: 'Correo · ' + task.title });
      }
    });
    addXp(20, true);
    toast('+20 XP', 'xp');
  } catch (err) {
    const notes = [];
    for (const r of OFFLINE_RULES) {
      const m = (' ' + text + ' ').match(r.re);
      if (m) {
        notes.push({ issue: 'Revisa esto', why: r.fix });
        addMistake({ wrong: m[0].trim(), right: '', note: r.fix, tag: r.tag, source: 'Correo · ' + task.title });
      }
    }
    if (!/^(dear|hi|hello)/i.test(text.trim())) notes.push({ issue: 'Falta el saludo', why: 'Los correos profesionales empiezan con "Dear Mr./Ms. Apellido," o "Hello NAME,".' });
    if (!/(regards|sincerely|best wishes|thank you)/i.test(text)) notes.push({ issue: 'Falta la despedida', why: 'Cierra con "Best regards," o "Kind regards," seguido de tu nombre.' });
    if (!notes.length) notes.push({ issue: 'Estructura', why: 'Revisa que tengas saludo, motivo del correo, petición concreta y despedida.' });
    T.emailResult = { offline: true, notes_es: notes.slice(0, 5), summary_es: 'Revisión sin IA (' + apiErrorText(err).toLowerCase() + ') Abajo tienes un correo modelo para comparar.' };
    addXp(10, true);
  }
  T.busy = false; save(); render();
}

/* ══════════════════ 13. ESCUCHAR ══════════════════ */
function audioState() {
  if (!V.audio) V.audio = { tab: 'dialogs', id: null, stage: 'intro', qi: 0, answered: false, picked: null, right: 0, plays: 0, rate: 1, playing: false, playIdx: 0, dictTyped: '', dictResult: null };
  return V.audio;
}
function dialogueById(id) { return DIALOGUES.find(d => d.id === id); }
function guardarDialogo() {
  const A = audioState();
  const d = dialogueById(A.id);
  if (!d) return;
  const score = d.questions.length ? Math.round((A.right / d.questions.length) * 100) : 0;
  const primero = !S.dialoguesDone[d.id];
  S.dialoguesDone[d.id] = { score: Math.max(score, (S.dialoguesDone[d.id] || {}).score || 0), date: todayKey() };
  d.lines.slice(0, 3).forEach(l => addSrs(l.en, l.es, d.id));
  addXp(primero ? 25 : 8, true);
  save();
}

/* --- Reproductor secuencial de diálogos --- */
let dlgToken = 0;
function stopDialogue() {
  dlgToken++;
  const A = audioState();
  A.playing = false;
  if (window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch (e) {} }
}
function paintPlayer(dlg) {
  const el = document.getElementById('dlgstatus');
  if (!el) return;
  const A = audioState();
  el.textContent = A.playing
    ? 'Turno ' + Math.min(A.playIdx + 1, dlg.lines.length) + ' de ' + dlg.lines.length
    : (A.plays ? 'Escuchado ' + A.plays + (A.plays === 1 ? ' vez' : ' veces') : 'Sin texto: solo el oído');
}
function playLines(lines, rate, onDone, dlg) {
  if (!('speechSynthesis' in window)) { toast('Tu navegador no permite reproducir audio.'); return; }
  const token = ++dlgToken;
  const A = audioState();
  const voces = Voice.pickPair();
  A.playing = true; A.playIdx = 0;
  const paso = () => {
    if (token !== dlgToken) return;
    if (A.playIdx >= lines.length) { A.playing = false; if (dlg) paintPlayer(dlg); onDone && onDone(); return; }
    const linea = lines[A.playIdx];
    if (dlg) paintPlayer(dlg);
    try {
      const u = new SpeechSynthesisUtterance(linea.en);
      const v = linea.who === 'B' ? voces[1] : voces[0];
      if (v) u.voice = v;
      u.lang = (v && v.lang) || S.settings.accent;
      u.rate = rate;
      u.onend = () => { if (token !== dlgToken) return; A.playIdx++; setTimeout(paso, 300); };
      u.onerror = () => { if (token !== dlgToken) return; A.playIdx++; setTimeout(paso, 300); };
      window.speechSynthesis.speak(u);
    } catch (e) { A.playIdx++; setTimeout(paso, 300); }
  };
  try { window.speechSynthesis.cancel(); } catch (e) {}
  setTimeout(paso, 100);
}

function viewAudio() {
  const A = audioState();
  const tabs = '<div class="tabs" role="tablist">' +
    '<button class="tab" role="tab" aria-selected="' + (A.tab === 'dialogs') + '" data-act="audio-tab" data-t="dialogs">' + ic('headphones') + ' Diálogos</button>' +
    '<button class="tab" role="tab" aria-selected="' + (A.tab === 'pron') + '" data-act="audio-tab" data-t="pron">' + ic('mic') + ' Pronunciar</button>' +
    '<button class="tab" role="tab" aria-selected="' + (A.tab === 'sounds') + '" data-act="audio-tab" data-t="sounds">' + ic('ear') + ' Sonidos</button>' +
  '</div>';
  if (A.tab === 'pron')   return tabs + viewPron();
  if (A.tab === 'sounds') return tabs + viewSounds();
  return tabs + (A.id ? viewDialogue() : viewDialogueList());
}

function viewDialogueList() {
  const hechos = S.dialoguesDone || {};
  let html = '<h1>Escuchar</h1>' +
    '<p class="muted" style="margin-top:-6px">Dos personas hablando a velocidad normal, sin texto. Primero escuchas, después respondes. La transcripción se ve al final, no antes: si lees mientras oyes, no entrenas el oído.</p>';
  for (const l of LEVELS) {
    const desbloqueado = isLevelUnlocked(l.id);
    const lista = DIALOGUES.filter(d => d.level === l.id);
    if (!lista.length) continue;
    html += '<div class="level-head">' + esc(l.name) + (desbloqueado ? '' : ' · bloqueado') + '</div>';
    if (!desbloqueado) {
      html += '<div class="notice"><b>' + ic('lock') + ' Se desbloquea con ' + l.xp + ' XP</b>Te faltan ' + (l.xp - S.xp) + ' XP.</div>';
      continue;
    }
    html += '<div class="tile-list">' + lista.map(d => {
      const r = hechos[d.id];
      return '<button class="tile' + (r ? ' done' : '') + '" data-act="open-dlg" data-id="' + d.id + '">' +
        '<span class="tile-ico">' + ic(r ? 'check' : 'headphones') + '</span>' +
        '<span class="tile-body">' +
          '<span class="tile-t">' + esc(d.title) + (r ? ' <span class="pill">' + r.score + '%</span>' : '') +
            ' <span class="pill">' + d.lines.length + ' turnos</span></span>' +
          '<span class="tile-d">' + esc(d.context) + '</span>' +
        '</span>' +
        '<span class="tile-go">' + ic('right') + '</span>' +
      '</button>';
    }).join('') + '</div>';
  }
  return html + '<div style="height:20px"></div>';
}

function viewDialogue() {
  const A = audioState();
  const d = dialogueById(A.id);
  if (!d) { A.id = null; return viewDialogueList(); }
  const atras = '<button class="back-link" data-act="close-dlg">' + ic('left') + ' Diálogos</button>';

  /* --- 1. Escuchar --- */
  if (A.stage === 'intro') {
    return atras +
    '<div class="row-between"><h1 style="margin-bottom:4px">' + esc(d.title) + '</h1><span class="pill ' + d.level + '">' + d.level + '</span></div>' +
    '<div class="notice"><b>' + ic('ear') + ' La situación</b>' + esc(d.context) + '</div>' +
    '<div class="card center">' +
      '<div class="dlg-visual">' + ic('headphones', 'ic-lg') + '</div>' +
      '<div id="dlgstatus" class="dlg-status" aria-live="polite">' +
        (A.plays ? 'Escuchado ' + A.plays + (A.plays === 1 ? ' vez' : ' veces') : 'Sin texto: solo el oído') + '</div>' +
      '<div class="btn-row" style="margin:16px 0 8px">' +
        (A.playing
          ? '<button class="btn btn-accent btn-block" data-act="dlg-stop">' + ic('pause') + ' Detener</button>'
          : '<button class="btn btn-primary" data-act="dlg-play" data-rate="1">' + ic('play') + ' Reproducir</button>' +
            '<button class="btn btn-ghost" data-act="dlg-play" data-rate="0.7">' + ic('play') + ' Despacio</button>') +
      '</div>' +
      '<p class="tiny muted">Escúchalo entero al menos una vez. Si no pillas todo, no pasa nada: repítelo antes de mirar nada.</p>' +
      (A.plays
        ? '<div class="divider"></div><button class="btn btn-primary btn-block" data-act="dlg-quiz">Responder las preguntas ' + ic('right') + '</button>'
        : '') +
    '</div><div style="height:22px"></div>';
  }

  /* --- 2. Preguntas --- */
  if (A.stage === 'quiz') {
    const q = d.questions[A.qi];
    return atras +
    '<div class="ex-progress" role="progressbar" aria-valuemin="1" aria-valuemax="' + d.questions.length + '" aria-valuenow="' + (A.qi + 1) + '">' +
      d.questions.map((_, i) => '<i class="' + (i < A.qi ? 'on' : i === A.qi ? 'cur' : '') + '"></i>').join('') +
    '</div>' +
    '<div class="card">' +
      '<div class="ex-kind">Comprensión · ' + (A.qi + 1) + ' de ' + d.questions.length + '</div>' +
      '<div class="ex-q">' + esc(q.q) + '</div>' +
      '<div class="opts">' +
        q.opts.map((o, i) => {
          let cls = '';
          if (A.answered) { if (i === q.a) cls = ' correct'; else if (i === A.picked) cls = ' wrong'; }
          return '<button class="opt' + cls + '" data-act="dlg-answer" data-i="' + i + '"' + (A.answered ? ' disabled' : '') + '>' + esc(o) + '</button>';
        }).join('') +
      '</div>' +
      (A.answered
        ? '<div class="feedback ' + (A.picked === q.a ? 'ok' : 'no') + '" role="status">' +
            '<b>' + (A.picked === q.a ? '¡Correcto!' : 'La respuesta era: ' + esc(q.opts[q.a])) + '</b>' + esc(q.why) + '</div>' +
          '<div class="btn-row" style="margin-top:12px">' +
            '<button class="btn btn-ghost" data-act="dlg-replay">' + ic('volume') + ' Volver a oírlo</button>' +
            '<button class="btn btn-primary" data-act="dlg-next-q" data-autofocus>' +
              (A.qi + 1 < d.questions.length ? 'Siguiente ' : 'Al dictado ') + ic('right') + '</button>' +
          '</div>'
        : '<button class="btn btn-ghost btn-block btn-sm" style="margin-top:12px" data-act="dlg-replay">' + ic('volume') + ' Volver a oír el diálogo</button>') +
    '</div><div style="height:22px"></div>';
  }

  /* --- 3. Dictado --- */
  if (A.stage === 'dict') {
    const linea = d.lines[d.dictation];
    const r = A.dictResult;
    let marcado = '';
    if (r) {
      const tokens = linea.en.split(/(\s+)/);
      let wi = -1;
      marcado = tokens.map(t => {
        if (/^\s+$/.test(t)) return t;
        wi++;
        return '<span class="w ' + (r.marks[wi] ? 'hit' : 'miss') + '">' + esc(t) + '</span>';
      }).join('');
    }
    return atras +
    '<div class="card">' +
      '<div class="ex-kind">Dictado</div>' +
      '<div class="ex-q">Escribe exactamente lo que oigas</div>' +
      '<div class="btn-row" style="margin-bottom:14px">' +
        '<button class="btn btn-primary" data-act="say" data-text="' + esc(linea.en) + '">' + ic('volume') + ' Escuchar la frase</button>' +
        '<button class="btn btn-ghost" data-act="say-slow" data-text="' + esc(linea.en) + '">' + ic('volume') + ' Despacio</button>' +
      '</div>' +
      (r
        ? '<div class="pron-phrase" style="font-size:1.15rem;padding:14px 4px">' + marcado + '</div>' +
          '<div class="score-ring"><div class="num" style="color:' + (r.score >= 80 ? 'var(--ok)' : r.score >= 50 ? 'var(--accent)' : 'var(--err)') + '">' + r.score + '%</div>' +
          '<div class="lab">' + (r.score >= 90 ? 'Oído fino' : r.score >= 70 ? 'Muy bien' : r.score >= 40 ? 'Vas cogiendo el hilo' : 'Vuelve a escucharla despacio') + '</div></div>' +
          '<p class="small muted center">' + esc(linea.es) + '</p>' +
          '<button class="btn btn-primary btn-block" style="margin-top:10px" data-act="dlg-finish" data-autofocus>Ver la transcripción ' + ic('right') + '</button>'
        : '<div class="field">' +
            '<label class="sr-only" for="dictinput">Escribe la frase que oíste</label>' +
            '<textarea id="dictinput" placeholder="Write what you hear…" spellcheck="false" style="min-height:80px" data-autofocus></textarea>' +
          '</div>' +
          '<button class="btn btn-primary btn-block" data-act="dlg-check-dict">Comprobar</button>' +
          '<button class="btn btn-ghost btn-block btn-sm" style="margin-top:8px" data-act="dlg-skip-dict">Saltar el dictado</button>') +
    '</div><div style="height:22px"></div>';
  }

  /* --- 4. Transcripción --- */
  const score = d.questions.length ? Math.round((A.right / d.questions.length) * 100) : 0;
  return atras +
  '<div class="card center">' +
    '<div style="color:var(--ok)">' + ic('check', 'ic-lg') + '</div>' +
    '<h1 style="margin:8px 0 2px">' + score + '%</h1>' +
    '<p class="muted small">' + A.right + ' de ' + d.questions.length + ' preguntas. ' +
      (score >= 80 ? 'Lo entendiste sin leer: eso es lo que cuenta.' : score >= 50 ? 'Vas bien. Vuelve a escucharlo ahora con la transcripción delante.' : 'Escúchalo otra vez siguiendo el texto, y luego sin él.') + '</p>' +
  '</div>' +
  '<div class="card">' +
    '<div class="card-title"><h3>Transcripción</h3>' +
      '<button class="btn btn-sm btn-ghost" style="margin-left:auto" data-act="dlg-play" data-rate="1">' + ic('play') + ' Todo</button></div>' +
    d.lines.map((l, i) =>
      '<div class="dlg-line ' + (l.who === 'A' ? 'a' : 'b') + '">' +
        '<div class="dlg-who">' + esc(l.who === 'A' ? d.speakers.A : d.speakers.B) + '</div>' +
        '<div class="msg-row">' +
          '<div class="dlg-text"><b>' + esc(l.en) + '</b><br><span class="muted small">' + esc(l.es) + '</span></div>' +
          '<button class="spk" data-act="say" data-text="' + esc(l.en) + '" aria-label="Escuchar este turno">' + ic('volume') + '</button>' +
        '</div>' +
      '</div>'
    ).join('') +
  '</div>' +
  '<div class="btn-row" style="margin-bottom:22px">' +
    '<button class="btn btn-ghost" data-act="dlg-restart">' + ic('refresh') + ' Repetirlo</button>' +
    '<button class="btn btn-primary" data-act="close-dlg">Otro diálogo</button>' +
  '</div>';
}

/* ══════════════════ 13b. PRONUNCIACIÓN ══════════════════ */
function pronPool() {
  const lv = currentLevel().id;
  let pool = (PRONUNCIATION_SETS[lv] || []).slice();
  allUnits().filter(u => S.completed[u.id]).forEach(u => u.phrases.forEach(p => pool.push(p.en)));
  if (!pool.length) pool = PRONUNCIATION_SETS.A1.slice();
  return Array.from(new Set(pool));
}
function pronState() {
  if (!V.pron) {
    const pool = shuffle(pronPool());
    V.pron = { pool, i: 0, rec: false, heard: '', marks: null, score: null, err: '' };
  }
  return V.pron;
}

function lcsMarks(target, heard) {
  const t = words(target), h = words(heard);
  const dp = Array.from({ length: t.length + 1 }, () => new Array(h.length + 1).fill(0));
  for (let i = 1; i <= t.length; i++)
    for (let j = 1; j <= h.length; j++)
      dp[i][j] = t[i - 1] === h[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const marks = new Array(t.length).fill(false);
  let i = t.length, j = h.length;
  while (i > 0 && j > 0) {
    if (t[i - 1] === h[j - 1]) { marks[i - 1] = true; i--; j--; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
    else j--;
  }
  return { marks, score: t.length ? Math.round((marks.filter(Boolean).length / t.length) * 100) : 0 };
}

/* ---- Sonidos difíciles: pares mínimos ---- */
function soundState() {
  if (!V.sound) V.sound = { id: null, i: 0, objetivo: 0, rec: false, oido: '', ok: null, aciertos: 0, hechos: 0, err: '' };
  return V.sound;
}
function soundById(id) { return SOUND_SETS.find(s => s.id === id); }

function viewSounds() {
  const G = soundState();

  if (!G.id) {
    return '<div class="card">' +
      '<div class="card-title"><span style="color:var(--accent)">' + ic('ear') + '</span><h3>Sonidos difíciles</h3></div>' +
      '<p class="small muted" style="margin-top:-4px">Ocho sonidos que el español no tiene o confunde. Cada uno se entrena con <b>pares mínimos</b>: dos palabras que solo se diferencian en ese sonido. Si el micrófono entiende la que tocaba, lo estás distinguiendo.</p>' +
      '<div class="tile-list">' +
        SOUND_SETS.map(s => {
          const best = (S.soundBest || {})[s.id];
          return '<button class="tile' + (best >= 80 ? ' done' : '') + '" data-act="open-sound" data-id="' + s.id + '">' +
            '<span class="tile-ico">' + ic(best >= 80 ? 'check' : 'ear') + '</span>' +
            '<span class="tile-body">' +
              '<span class="tile-t">' + esc(s.titulo) + (best !== undefined ? ' <span class="pill">' + best + '%</span>' : '') + '</span>' +
              '<span class="tile-d">' + esc(s.sonido) + '</span>' +
            '</span>' +
            '<span class="tile-go">' + ic('right') + '</span>' +
          '</button>';
        }).join('') +
      '</div>' +
      (!micSupported ? '<div class="notice warn" style="margin-top:14px"><b>Sin micrófono</b>Puedes leer las explicaciones y escuchar las palabras, pero no comprobar tu pronunciación. El micrófono funciona en Chrome, Edge y Safari.</div>' : '') +
    '</div>';
  }

  const g = soundById(G.id);
  const par = g.pares[G.i % g.pares.length];
  const objetivo = G.objetivo === 0 ? par.a : par.b;
  const otro = G.objetivo === 0 ? par.b : par.a;

  return '' +
  '<button class="back-link" data-act="close-sound">' + ic('left') + ' Sonidos</button>' +
  '<div class="row-between"><h2 style="margin-bottom:2px">' + esc(g.titulo) + '</h2><span class="pill">' + esc(g.sonido) + '</span></div>' +

  '<div class="card">' +
    '<div class="grammar">' +
      '<h3>Qué pasa aquí</h3>' +
      paras(g.es) +
      '<div class="ex-head">El truco</div>' +
      '<p style="margin:0">' + esc(g.consejo) + '</p>' +
    '</div>' +
  '</div>' +

  '<div class="card">' +
    '<div class="card-title"><h3>Escucha la diferencia</h3><span class="pill" style="margin-left:auto">' + (G.i + 1) + ' / ' + g.pares.length + '</span></div>' +
    '<div class="par-fila">' +
      '<button class="par-btn" data-act="say-slow" data-text="' + esc(par.a) + '">' +
        '<b>' + esc(par.a) + '</b><span>' + esc(par.aEs) + '</span>' + ic('volume') + '</button>' +
      '<button class="par-btn" data-act="say-slow" data-text="' + esc(par.b) + '">' +
        '<b>' + esc(par.b) + '</b><span>' + esc(par.bEs) + '</span>' + ic('volume') + '</button>' +
    '</div>' +
  '</div>' +

  '<div class="card center">' +
    '<div class="ex-kind">Ahora dilo tú</div>' +
    '<div class="par-objetivo">' + esc(objetivo) + '</div>' +
    '<p class="tiny muted" style="margin-top:-6px">No vale la otra: di exactamente esta.</p>' +
    (G.ok !== null
      ? '<div class="feedback ' + (G.ok ? 'ok' : 'no') + '" style="text-align:left">' +
          '<b>' + (G.ok ? '¡Lo distinguió!' : 'No lo distinguió') + '</b>' +
          (G.ok
            ? 'El micrófono entendió <b>' + esc(objetivo) + '</b>. Ese sonido lo tienes.'
            : 'Entendió <b>' + esc(G.oido || '—') + '</b>' + (norm(G.oido) === norm(otro) ? ', que es justo la otra palabra del par. ' : '. ') + esc(g.consejo)) +
        '</div>' +
        '<button class="btn btn-primary btn-block" style="margin-top:12px" data-act="sound-next" data-autofocus>' +
          (G.hechos >= g.pares.length ? 'Ver resultado ' : 'Siguiente par ') + ic('right') + '</button>'
      : (micSupported
          ? '<button class="mic-btn' + (G.rec ? ' rec' : '') + '" data-act="sound-mic" aria-label="' + (G.rec ? 'Detener' : 'Grabar') + '">' + ic('mic') + '</button>' +
            '<p class="tiny muted" style="margin-top:12px">' + (G.rec ? 'Escuchando…' : 'Toca y di la palabra') + '</p>'
          : '<p class="small muted">Sin micrófono no puedo comprobarlo. Escucha las dos y repítelas en voz alta.</p>' +
            '<button class="btn btn-ghost btn-block" data-act="sound-next">Siguiente par ' + ic('right') + '</button>')) +
    (G.err ? '<div class="notice err" style="margin-top:12px">' + esc(G.err) + '</div>' : '') +
    (G.hechos ? '<p class="tiny muted" style="margin:12px 0 0">Aciertos: ' + G.aciertos + ' de ' + G.hechos + '</p>' : '') +
  '</div><div style="height:22px"></div>';
}

function viewPron() {
  const P = pronState();
  const phrase = P.pool[P.i % P.pool.length];
  const tw = phrase.split(/(\s+)/);
  let wi = -1;
  const phraseHtml = tw.map(tok => {
    if (/^\s+$/.test(tok)) return tok;
    wi++;
    if (!P.marks) return '<span class="w">' + esc(tok) + '</span>';
    return '<span class="w ' + (P.marks[wi] ? 'hit' : 'miss') + '">' + esc(tok) + '</span>';
  }).join('');

  return '<h1>Pronunciación</h1>' +
  '<p class="muted" style="margin-top:-6px">Escucha la frase, dila en voz alta y mira qué palabras te salieron bien.</p>' +

  (!micSupported ? '<div class="notice warn"><b>Micrófono no disponible</b>Tu navegador no soporta reconocimiento de voz. Funciona en Chrome y Edge de escritorio y en Android. Aun así puedes escuchar y repetir en voz alta.</div>' : '') +

  '<div class="card">' +
    '<div class="pron-phrase">' + phraseHtml + '</div>' +
    (P.score !== null
      ? '<div class="score-ring"><div class="num" style="color:' + (P.score >= 80 ? 'var(--ok)' : P.score >= 55 ? 'var(--accent)' : 'var(--err)') + '">' + P.score + '%</div>' +
        '<div class="lab">' + (P.score >= 90 ? 'Excelente, casi nativo' : P.score >= 75 ? 'Muy bien, se te entiende' : P.score >= 50 ? 'Vas bien, repite despacio' : 'Escúchalo otra vez y repite') + '</div></div>' +
        (P.heard ? '<p class="tiny muted center">Escuché: “' + esc(P.heard) + '”</p>' : '')
      : '') +
    (P.err ? '<div class="notice err">' + esc(P.err) + '</div>' : '') +
    '<div class="btn-row" style="margin:6px 0 18px">' +
      '<button class="btn btn-ghost" data-act="say" data-text="' + esc(phrase) + '">' + ic('volume') + ' Escuchar</button>' +
      '<button class="btn btn-ghost" data-act="say-slow" data-text="' + esc(phrase) + '">' + ic('volume') + ' Despacio</button>' +
    '</div>' +
    (micSupported
      ? '<button class="mic-btn' + (P.rec ? ' rec' : '') + '" data-act="pron-mic" aria-label="' + (P.rec ? 'Detener' : 'Grabar tu voz') + '">' + ic('mic') + '</button>' +
        '<p class="tiny muted center" style="margin-top:12px">' + (P.rec ? 'Escuchando… habla ahora' : 'Toca el micrófono y di la frase') + '</p>'
      : '') +
    '<button class="btn btn-primary btn-block" style="margin-top:14px" data-act="pron-next">Siguiente frase ' + ic('right') + '</button>' +
  '</div>' +

  '<div class="stats-grid" style="margin-bottom:22px">' +
    '<div class="stat-box" style="grid-column:span 2"><div class="stat-num">' + S.pronBest + '%</div><div class="stat-lab">Tu mejor puntaje</div></div>' +
    '<div class="stat-box" style="grid-column:span 2"><div class="stat-num">' + S.pronCount + '</div><div class="stat-lab">Frases practicadas</div></div>' +
  '</div>';
}

/* ══════════════════ 14. REPASO (SRS) ══════════════════ */
function reviewState() {
  if (!V.review) V.review = { queue: null, i: 0, flipped: false, done: 0, prodResult: null, prodTyped: '' };
  return V.review;
}

function viewReview() {
  if (!V.reviewTab) V.reviewTab = 'vocab';
  const n = S.mistakes.length;
  const tabs = '<div class="tabs" role="tablist">' +
    '<button class="tab" role="tab" aria-selected="' + (V.reviewTab === 'vocab') + '" data-act="review-tab" data-t="vocab">' + ic('cards') + ' Vocabulario</button>' +
    '<button class="tab" role="tab" aria-selected="' + (V.reviewTab === 'errors') + '" data-act="review-tab" data-t="errors">' + ic('note') + ' Mis errores' + (n ? ' (' + n + ')' : '') + '</button>' +
  '</div>';
  return tabs + (V.reviewTab === 'errors' ? viewMistakes() : viewVocabReview());
}

/* ---- Libreta de errores ---- */
function viewMistakes() {
  const groups = mistakesByTag();
  const M = V.drill || (V.drill = { busy: false, err: '' });

  if (!S.mistakes.length) {
    return '<div class="empty">' + ic('note') +
      '<p><b>Tu libreta está vacía.</b><br>Cada vez que el tutor te corrija en Conversar o en Correo de negocios, el error se guarda aquí con su categoría.<br>Así ves cuáles repites y puedes atacarlos.</p>' +
      '<button class="btn btn-primary" data-act="tab" data-tab="talk">Ir a Conversar</button></div>';
  }

  const top = groups.slice(0, 3);
  let html = '<h1 style="margin-bottom:4px">Mis errores</h1>' +
    '<p class="muted small">' + S.mistakes.length + ' correcciones guardadas. Lo que repites es lo que más te frena.</p>';

  html += '<div class="card">' +
    '<div class="card-title"><span style="color:var(--accent)">' + ic('target') + '</span><h3>Lo que más repites</h3></div>' +
    top.map((g, i) => {
      const pct = Math.round((g.total / groups.reduce((a, x) => a + x.total, 0)) * 100);
      return '<div style="margin-bottom:12px">' +
        '<div class="row-between small" style="margin-bottom:5px"><b>' + (i + 1) + '. ' + esc(g.tag) + '</b>' +
        '<span class="muted">' + g.total + ' ' + (g.total === 1 ? 'vez' : 'veces') + '</span></div>' +
        '<div class="bar accent"><i style="width:' + Math.max(8, pct) + '%"></i></div></div>';
    }).join('') +
    '<button class="btn btn-primary btn-block" style="margin-top:6px" data-act="drill-mistakes"' + (M.busy ? ' disabled' : '') + '>' +
      (M.busy ? 'Preparando tu práctica…' : ic('sparkle') + ' Practicar justo estos errores') + '</button>' +
    (M.err ? '<div class="notice err" style="margin:12px 0 0"><b>No se pudo preparar</b>' + esc(M.err) + '</div>' : '') +
  '</div>';

  groups.forEach(g => {
    html += '<div class="level-head">' + esc(g.tag) + ' · ' + g.total + '</div><div class="tile-list">';
    g.list.slice(0, 12).forEach(m => {
      html += '<div class="card tight" style="margin-bottom:0">' +
        (m.wrong ? '<div class="small"><span style="color:var(--err);text-decoration:line-through">' + esc(m.wrong) + '</span>' +
          (m.right ? ' <span class="muted">→</span> <b style="color:var(--ok)">' + esc(m.right) + '</b>' : '') + '</div>' : '') +
        (m.note ? '<div class="tiny muted" style="margin-top:5px">' + esc(m.note) + '</div>' : '') +
        '<div class="row-between" style="margin-top:8px">' +
          '<span class="tiny muted">' + esc(m.source || '') + (m.count > 1 ? ' · ' + m.count + ' veces' : '') + '</span>' +
          '<span class="btn-row" style="flex:none">' +
            (m.right ? '<button class="spk" data-act="say" data-text="' + esc(m.right) + '" aria-label="Escuchar la versión correcta">' + ic('volume') + '</button>' : '') +
            '<button class="btn btn-ghost btn-sm" data-act="drop-mistake" data-id="' + m.id + '">' + ic('check') + ' Ya lo domino</button>' +
          '</span>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
  });
  return html + '<div style="height:20px"></div>';
}

async function drillMistakes() {
  const M = V.drill || (V.drill = { busy: false, err: '' });
  const groups = mistakesByTag().slice(0, 3);
  if (!groups.length) return;
  M.busy = true; M.err = ''; render();

  const lista = groups.map(g =>
    g.tag + ': ' + g.list.slice(0, 4).map(m => '"' + (m.wrong || '?') + '"' + (m.right ? ' → "' + m.right + '"' : '') + ' (' + (m.note || '') + ')').join(' | ')
  ).join('\n');

  const system =
    'You are an English tutor for a Spanish-speaking sales manager in foreign trade, CEFR level ' + currentLevel().id + '. ' +
    'Below are the mistakes this student actually keeps making. Build a short targeted practice unit that drills EXACTLY those weaknesses, ' +
    'using realistic work situations (clients, suppliers, quotations, shipments). Do not drill anything else. ' +
    'ALL explanations in SPANISH. Use ' + (S.settings.accent === 'en-GB' ? 'British' : 'American') + ' English. ' +
    'Reply with ONE valid JSON object and nothing else — no markdown, no code fences. Exact shape:\n' +
    '{"title": Spanish title (max 5 words), "goal": one Spanish sentence,\n' +
    ' "grammar": {"title": Spanish title, "es": SPANISH explanation of the rule they keep breaking, "examples": [3 objects {"en","es"}]},\n' +
    ' "vocab": [8-10 objects {"en","es"}], "phrases": [4-5 objects {"en","es"}],\n' +
    ' "exercises": [6-7 objects mixing types:\n' +
    '    {"t":"mc","q":Spanish question,"opts":[3 English options],"a":index,"why":SPANISH},\n' +
    '    {"t":"fill","q":English sentence with ___ ,"a":[accepted words],"why":SPANISH},\n' +
    '    {"t":"tr","q":Spanish sentence,"a":[2-3 English translations],"why":SPANISH},\n' +
    '    {"t":"order","words":[4-9 English words in correct order],"why":SPANISH}]}\n' +
    'At least half the exercises must directly target the listed mistakes.';

  try {
    const raw = await callClaude(system, [{ role: 'user', content: 'Errores que repite:\n' + lista }], 3500);
    const j = parseJson(raw);
    if (!j) throw new Error('La IA no devolvió una práctica legible. Vuelve a intentar.');
    const res = sanitizeUnit(j, currentLevel().id);
    if (res.error) throw new Error(res.error);
    res.unit.title = res.unit.title || 'Práctica de tus errores';
    res.unit.drill = true;
    S.customUnits.unshift(res.unit);
    save();
    M.busy = false;
    V.tab = 'lessons'; V.unit = res.unit.id;
    V.lesson = { step: 'ex', i: 0, right: 0, answered: false, picked: null, correct: false, solution: '', typed: '' };
    window.scrollTo(0, 0); render();
    toast('Práctica lista, hecha con tus errores');
    return;
  } catch (err) {
    M.err = err.code ? apiErrorText(err) : err.message;
  }
  M.busy = false; render();
}

function viewVocabReview() {
  const R = reviewState();
  if (R.queue === null) {
    R.queue = shuffle(dueCards());
    R.i = 0; R.flipped = false; R.done = 0;
  }
  const total = Object.keys(S.srs).length;

  if (!total) {
    return '<h1>Repaso</h1>' +
      '<div class="empty">' + ic('cards') +
      '<p>Todavía no hay nada que repasar.<br>Completa una lección y su vocabulario aparecerá aquí automáticamente.</p>' +
      '<button class="btn btn-primary" data-act="tab" data-tab="lessons">Ir a lecciones</button></div>';
  }

  if (R.i >= R.queue.length) {
    const manana = startOfDay(Date.now()) + 86400000 - 1;
    const upcoming = Object.values(S.srs).concat(Object.values(S.srsProd)).filter(c => c.due > manana).length;
    const st = srsStats();
    const pct = st.rec ? Math.round((st.prod / st.rec) * 100) : 0;
    return '<h1>Repaso</h1>' +
      '<div class="card center" style="margin-top:20px">' +
        '<div style="color:var(--ok)">' + ic('check', 'ic-lg') + '</div>' +
        '<h2 style="margin:10px 0 4px">' + (R.done ? 'Repaso terminado' : 'Nada pendiente por hoy') + '</h2>' +
        '<p class="muted small">' + (R.done ? 'Repasaste ' + R.done + ' tarjeta' + (R.done === 1 ? '' : 's') + '. ' : '') +
          upcoming + ' tarjeta' + (upcoming === 1 ? '' : 's') + ' volverán en los próximos días, justo antes de que las olvides.</p>' +
        '<div class="divider"></div>' +
        '<button class="btn btn-ghost btn-block" data-act="review-extra">Adelantar repaso de otras palabras</button>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><span style="color:var(--brand)">' + ic('target') + '</span><h3>Reconocer no es hablar</h3></div>' +
        '<p class="small muted" style="margin-top:-4px">Entender una palabra al leerla es fácil. Sacarla tú cuando la necesitas es lo que de verdad cuenta, y por eso se mide aparte.</p>' +
        '<div class="stats-grid" style="margin-bottom:12px">' +
          '<div class="stat-box" style="grid-column:span 2"><div class="stat-num">' + st.rec + '</div><div class="stat-lab">Palabras que reconoces</div></div>' +
          '<div class="stat-box" style="grid-column:span 2"><div class="stat-num" style="color:var(--brand)">' + st.prod + '</div><div class="stat-lab">Que ya sabes producir</div></div>' +
        '</div>' +
        '<div class="row-between small muted" style="margin-bottom:6px"><span>Activas de tu vocabulario</span><span>' + pct + '%</span></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<p class="tiny muted" style="margin:10px 0 0">Cada palabra pasa a producción cuando la aciertas dos veces reconociéndola. Entonces te la pedimos al revés: verás el español y tendrás que escribir el inglés.</p>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-title"><h3>Tu vocabulario</h3><span class="pill" style="margin-left:auto">' + total + '</span></div>' +
        '<div class="vocab-list">' +
          Object.values(S.srs).sort((a, b) => a.due - b.due).slice(0, 40).map(c =>
            '<div class="vocab-row"><span><span class="vocab-en">' + esc(c.en) + '</span><br><span class="vocab-es">' + esc(c.es) + '</span></span>' +
            (S.srsProd[c.en] ? '<span class="pill A1" style="margin-left:auto" title="Ya la practicas en producción">activa</span>' : '<span style="margin-left:auto"></span>') +
            '<span class="pill">' + (c.due <= startOfDay(Date.now()) + 86400000 - 1 ? 'hoy' : 'en ' + Math.max(1, Math.round((c.due - startOfDay(Date.now())) / 86400000)) + ' d') + '</span></div>'
          ).join('') +
        '</div>' +
      '</div><div style="height:20px"></div>';
  }

  const item = R.queue[R.i];
  const card = deck(item.dir)[item.en];
  if (!card) { R.i++; return viewVocabReview(); }          // la tarjeta se borró: sigue
  const audio = esc(card.en.replace(/^to /, '').replace(/\s*\(.*\)/, ''));

  const cabecera =
    '<div class="row-between"><h1 style="margin:0">Repaso</h1><span class="pill">' + (R.i + 1) + ' / ' + R.queue.length + '</span></div>' +
    '<div class="dir-tag ' + item.dir + '">' + ic(item.dir === 'prod' ? 'pen' : 'cards') +
      (item.dir === 'prod' ? 'Producción · escribe el inglés' : 'Reconocimiento · recuerda el significado') + '</div>';

  /* ---- Dirección PRODUCCIÓN: ves el español y escribes el inglés ---- */
  if (item.dir === 'prod') {
    const res = R.prodResult;
    return cabecera +
    '<p class="muted small">Esta es la que te hace hablar: no vale con reconocerla, tienes que sacarla tú.</p>' +
    '<div class="card">' +
      '<div class="prod-prompt">' + esc(card.es) + '</div>' +
      '<div class="field" style="margin-bottom:10px">' +
        '<label class="sr-only" for="prodinput">Escribe la palabra en inglés</label>' +
        '<input type="text" id="prodinput" placeholder="Escríbelo en inglés…" autocomplete="off" autocapitalize="off" spellcheck="false"' +
          (res ? ' disabled value="' + esc(R.prodTyped || '') + '"' : ' data-autofocus') + '>' +
      '</div>' +
      (!res
        ? '<button class="btn btn-primary btn-block" data-act="check-prod">Comprobar</button>' +
          '<button class="btn btn-ghost btn-block btn-sm" style="margin-top:8px" data-act="prod-blank">No me sale</button>'
        : '<div class="feedback ' + (res.estado === 'mal' ? 'no' : 'ok') + '" role="status">' +
            '<b>' + (res.estado === 'bien' ? '¡Exacto!' : res.estado === 'hermano' ? 'Correcto, aunque buscábamos otra' : res.estado === 'blanco' ? 'Sin problema, así se aprende' : 'Casi. Era:') + '</b>' +
            '<div class="sol" style="font-size:1.05rem">' + esc(card.en) + '</div>' +
            (res.estado === 'hermano' ? '<div class="tiny muted" style="margin-top:4px">Lo que escribiste (' + esc(res.otra) + ') también significa "' + esc(card.es) + '".</div>' : '') +
          '</div>' +
          '<div class="btn-row" style="margin-top:12px">' +
            '<button class="btn btn-ghost" data-act="say" data-text="' + audio + '">' + ic('volume') + ' Escuchar</button>' +
            (res.estado === 'mal' || res.estado === 'blanco'
              ? '<button class="btn btn-primary" data-act="grade" data-g="0" data-autofocus>Continuar</button>'
              : '<button class="btn btn-primary" data-act="grade" data-g="' + (res.estado === 'bien' ? '2' : '1') + '" data-autofocus>Continuar</button>') +
          '</div>' +
          (res.estado === 'mal'
            ? '<button class="btn btn-ghost btn-block btn-sm" style="margin-top:8px" data-act="grade" data-g="1">Fue solo un error de tecleo</button>'
            : '')) +
    '</div><div style="height:22px"></div>';
  }

  /* ---- Dirección RECONOCIMIENTO: ves el inglés y recuerdas el español ---- */
  return cabecera +
  '<p class="muted small">Recuerda el significado antes de girar la tarjeta. El esfuerzo de recordar es lo que fija la palabra.</p>' +
  '<div class="card flashcard" data-act="flip" role="button" tabindex="0" aria-label="Girar tarjeta">' +
    '<div>' +
      '<div class="fc-front">' + esc(card.en) + '</div>' +
      (R.flipped ? '<div class="fc-back">' + esc(card.es) + '</div>' : '<div class="fc-tap">Toca para ver la traducción</div>') +
    '</div>' +
  '</div>' +
  '<div class="btn-row" style="margin-bottom:12px">' +
    '<button class="btn btn-ghost btn-sm" data-act="say" data-text="' + audio + '">' + ic('volume') + ' Escuchar</button>' +
  '</div>' +
  (R.flipped
    ? '<div class="btn-row" style="margin-bottom:22px">' +
        '<button class="btn btn-ghost" data-act="grade" data-g="0">Otra vez</button>' +
        '<button class="btn btn-soft" data-act="grade" data-g="1">Casi</button>' +
        '<button class="btn btn-primary" data-act="grade" data-g="2">Lo sabía</button>' +
      '</div>'
    : '<button class="btn btn-primary btn-block" style="margin-bottom:22px" data-act="flip">Ver traducción</button>');
}

/* ══════════════════ 15. AJUSTES ══════════════════ */
function viewSettings() {
  const st = S.settings;
  const voices = Voice.englishVoices();
  return '<h1>Ajustes</h1>' +

  '<div class="card">' +
    '<div class="card-title"><h3>Tu perfil</h3></div>' +
    '<div class="field"><label for="setname">Nombre</label>' +
      '<input type="text" id="setname" value="' + esc(S.name) + '" placeholder="Tu nombre"></div>' +
    '<div class="field"><label for="setgoal">Meta diaria</label>' +
      '<select id="setgoal">' +
        [30, 50, 80, 120].map(g => '<option value="' + g + '"' + (st.dailyGoal === g ? ' selected' : '') + '>' + g + ' XP · ' + (g <= 30 ? 'ligera (5 min)' : g <= 50 ? 'normal (10 min)' : g <= 80 ? 'intensa (15 min)' : 'máxima (25 min)') + '</option>').join('') +
      '</select></div>' +
    '<div class="field"><label for="setlevel">Nivel de partida</label>' +
      '<select id="setlevel">' +
        LEVELS.map(l => '<option value="' + l.id + '"' + (currentLevel().id === l.id ? ' selected' : '') + '>' + esc(l.name) + '</option>').join('') +
      '</select>' +
      '<div class="hint">Cambiarlo ajusta tu XP al mínimo de ese nivel. Tu vocabulario y tu racha no se pierden.</div></div>' +
  '</div>' +

  '<div class="card">' +
    '<div class="card-title"><h3>Idioma y voz</h3></div>' +
    '<div class="field"><label for="setaccent">Acento del inglés</label>' +
      '<select id="setaccent">' +
        '<option value="en-US"' + (st.accent === 'en-US' ? ' selected' : '') + '>Inglés americano (predeterminado)</option>' +
        '<option value="en-GB"' + (st.accent === 'en-GB' ? ' selected' : '') + '>Inglés británico</option>' +
      '</select></div>' +
    '<div class="field"><label for="setvoice">Voz del tutor</label>' +
      '<select id="setvoice">' +
        '<option value="">Automática (la mejor disponible)</option>' +
        voices.map(v => '<option value="' + esc(v.voiceURI) + '"' + (st.voiceURI === v.voiceURI ? ' selected' : '') + '>' + esc(v.name) + ' · ' + esc(v.lang) + '</option>').join('') +
      '</select>' +
      '<div class="hint">' + (voices.length ? 'Las voces dependen de tu sistema operativo y navegador.' : 'No se detectaron voces en inglés. Prueba en Chrome o Edge.') + '</div></div>' +
    '<button class="btn btn-ghost btn-sm" data-act="say" data-text="This is how your tutor will sound. Let\'s practice together.">' + ic('volume') + ' Probar la voz</button>' +
  '</div>' +

  '<div class="card">' +
    '<div class="card-title">' +
      '<span style="color:' + (hayTutor() ? 'var(--ok)' : 'var(--text-dim)') + '">' + ic(hayTutor() ? 'check' : 'lock') + '</span>' +
      '<h3>Tutor con IA</h3>' +
      '<span class="pill' + (hayTutor() ? ' A1' : '') + '" style="margin-left:auto">' + (hayTutor() ? 'activo' : 'inactivo') + '</span></div>' +
    '<p class="small muted" style="margin-top:-4px">Hace falta para Conversar, el Correo de negocios, el generador de lecciones y el asistente de dudas. El resto de la app funciona sin esto.</p>' +

    '<div class="divider"></div>' +
    '<b class="small">Opción 1 · Código del equipo</b>' +
    '<p class="small muted" style="margin:4px 0 10px">Si alguien te pasó un código, ponlo aquí y listo. No necesitas cuenta ni clave propia.</p>' +
    '<div class="field"><label class="sr-only" for="setcodigo">Código de acceso</label>' +
      '<input type="text" id="setcodigo" value="' + esc(st.codigo || '') + '" placeholder="Código de acceso" autocomplete="off" spellcheck="false"></div>' +
    '<div class="field"><label for="setproxy">Dirección del servicio <span class="muted" style="font-weight:400">(la rellena el enlace)</span></label>' +
      '<input type="text" id="setproxy" value="' + esc(st.proxyUrl || '') + '" placeholder="https://…workers.dev" autocomplete="off" spellcheck="false">' +
      '<div class="hint">Si abriste la app con el enlace que te compartieron, esto ya viene puesto.</div></div>' +

    '<div class="divider"></div>' +
    '<b class="small">Opción 2 · Tu propia clave</b>' +
    '<p class="small muted" style="margin:4px 0 10px">Para ir por tu cuenta, con tu propio saldo de Anthropic. Se guarda <b>solo en este navegador</b>.</p>' +
    '<div class="field"><label class="sr-only" for="setkey">Clave de API de Anthropic</label>' +
      '<input type="password" id="setkey" value="' + esc(st.apiKey) + '" placeholder="sk-ant-…" autocomplete="off" spellcheck="false">' +
      '<div class="hint">Se consigue en console.anthropic.com → API Keys. Si tienes código de equipo, se usa ese antes que la clave.</div></div>' +

    '<div class="field"><label for="setmodel">Modelo</label>' +
      '<select id="setmodel">' +
        '<option value="claude-sonnet-5"' + (st.model === 'claude-sonnet-5' ? ' selected' : '') + '>Claude Sonnet 5 — equilibrado (recomendado)</option>' +
        '<option value="claude-haiku-4-5-20251001"' + (st.model === 'claude-haiku-4-5-20251001' ? ' selected' : '') + '>Claude Haiku 4.5 — más rápido y económico</option>' +
        '<option value="claude-opus-5"' + (st.model === 'claude-opus-5' ? ' selected' : '') + '>Claude Opus 5 — correcciones más profundas</option>' +
      '</select></div>' +
    '<button class="btn btn-ghost btn-block" data-act="test-api">Probar la conexión</button>' +
  '</div>' +

  App.tarjeta() +

  '<div class="card">' +
    '<div class="card-title"><h3>Apariencia</h3></div>' +
    '<div class="field"><label for="settheme">Tema</label>' +
      '<select id="settheme">' +
        ['auto', 'light', 'dark'].map(t => '<option value="' + t + '"' + (st.theme === t ? ' selected' : '') + '>' + (t === 'auto' ? 'Automático (según el sistema)' : t === 'light' ? 'Claro' : 'Oscuro') + '</option>').join('') +
      '</select></div>' +
  '</div>' +

  '<button class="btn btn-primary btn-block" data-act="save-settings">Guardar cambios</button>' +

  '<div class="card" style="margin-top:14px">' +
    '<div class="card-title"><h3>Copia de seguridad</h3></div>' +
    '<p class="small muted">Tu progreso vive solo en este navegador. Exporta un archivo e impórtalo en tu teléfono o en otro equipo para seguir donde ibas.</p>' +
    '<div class="btn-row">' +
      '<button class="btn btn-ghost" data-act="export">' + ic('note') + ' Exportar</button>' +
      '<button class="btn btn-ghost" data-act="import">' + ic('upload') + ' Importar</button>' +
    '</div>' +
    '<input type="file" id="importfile" accept="application/json,.json" class="sr-only" tabindex="-1" aria-hidden="true">' +
    '<div class="hint">Al importar se reemplaza el progreso de este navegador por el del archivo.</div>' +
  '</div>' +

  '<div style="height:8px"></div>' +
  '<button class="btn btn-ghost btn-block" data-act="reset" style="color:var(--err)">Borrar todo y empezar de cero</button>' +
  '<p class="tiny muted center" style="margin:16px 0 24px">SpeakUp · Tu progreso vive en este navegador. Si borras los datos del sitio, se pierde.</p>';
}

function applyTheme() {
  const t = S.settings.theme;
  const dark = t === 'dark' || (t === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
}

/* ══════════════════ 16. ACCIONES ══════════════════ */
document.addEventListener('click', async (e) => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const act = t.dataset.act;

  /* --- onboarding --- */
  if (act === 'onb-next') {
    const n = document.getElementById('onbname');
    S.name = n ? n.value.trim() : '';
    V.onbStep = 2; save(); render(); return;
  }
  if (act === 'onb-back') { V.onbStep = 1; render(); return; }
  if (act === 'onb-level') {
    const lv = LEVELS.find(l => l.id === t.dataset.level);
    S.xp = lv.xp;
    S.onboarded = true;
    S.lastActive = todayKey();
    S.streak = 1;
    S.dailyDate = todayKey();
    S.dailyXp = 0;
    save(); V.tab = 'home'; render();
    toast('¡Empezamos! Meta: llegar a B2.');
    return;
  }

  /* --- navegación --- */
  if (act === 'tab') { go(t.dataset.tab); return; }
  if (act === 'go-mistakes') { V.reviewTab = 'errors'; go('review'); return; }

  /* --- audio --- */
  if (act === 'say')      { Voice.speak(t.dataset.text); return; }
  if (act === 'say-slow') { Voice.speak(t.dataset.text, 0.62); return; }
  if (act === 'say-all') {
    const u = unitById(t.dataset.id);
    if (!u) return;
    const token = ++sayAllToken;
    let i = 0;
    const next = () => {
      if (token !== sayAllToken || i >= u.vocab.length) return;   // se cancela al salir de la unidad
      const word = u.vocab[i++].en.replace(/^to /, '').replace(/\s*\(.*\)/, '');
      Voice.speak(word);
      setTimeout(next, 1300);
    };
    next();
    return;
  }

  /* --- generador de lecciones --- */
  if (act === 'open-create') { V.tab = 'create'; V.unit = null; window.scrollTo(0, 0); render(); return; }
  if (act === 'use-topic') {
    createState().topic = t.dataset.topic;
    const inp = document.getElementById('ctopic');
    if (inp) { inp.value = t.dataset.topic; inp.focus(); } else render();
    return;
  }
  if (act === 'gen-unit') { generateUnit(); return; }
  if (act === 'del-unit') {
    if (!confirm('¿Borrar esta lección que creaste? No se puede deshacer.')) return;
    S.customUnits = S.customUnits.filter(u => u.id !== t.dataset.id);
    delete S.completed[t.dataset.id];
    save(); V.unit = null; V.lesson = null; V.tab = 'lessons'; render();
    toast('Lección borrada');
    return;
  }

  /* --- libreta de errores --- */
  if (act === 'review-tab')     { V.reviewTab = t.dataset.t; window.scrollTo(0, 0); render(); return; }
  if (act === 'drill-mistakes') { drillMistakes(); return; }
  if (act === 'drop-mistake')   {
    S.mistakes = S.mistakes.filter(m => m.id !== t.dataset.id);
    save(); render(); toast('Fuera de la libreta');
    return;
  }

  /* --- lecciones --- */
  if (act === 'open-pack') {
    const p = packPorId(t.dataset.id);
    if (!p) return;
    V.tab = 'vocab'; V.pack = p.id; V.packQuiz = null;
    window.scrollTo(0, 0); render(); return;
  }

  if (act === 'say-pack') {
    const p = packPorId(t.dataset.id);
    if (!p) return;
    const token = ++sayAllToken;
    let i = 0;
    const next = () => {
      if (token !== sayAllToken || i >= p.words.length) return;
      Voice.speak(p.words[i++].ex);          // se lee la frase, no la palabra suelta
      setTimeout(next, 2600);
    };
    next(); return;
  }

  if (act === 'pack-srs') {
    const p = packPorId(t.dataset.id);
    if (!p) return;
    let n = 0;
    for (const w of p.words) if (!S.srs[w.en]) { addSrs(w.en, w.es, p.id); n++; }
    save();
    toast(n + ' palabra' + (n === 1 ? '' : 's') + ' añadida' + (n === 1 ? '' : 's') + ' a tu repaso');
    render(); return;
  }

  if (act === 'pack-quiz') {
    const p = packPorId(t.dataset.id);
    if (!p) return;
    V.tab = 'vocab'; V.pack = p.id;
    iniciarPackQuiz(p);
    window.scrollTo(0, 0); render(); return;
  }

  if (act === 'pack-salir-quiz') {
    V.packQuiz = null; window.scrollTo(0, 0); render(); return;
  }

  if (act === 'pack-answer') {
    const q = V.packQuiz;
    if (!q || q.elegida !== null) return;
    q.elegida = Number(t.dataset.i);
    if (q.elegida === q.preguntas[q.i].a) q.aciertos++;
    render(); return;
  }

  if (act === 'pack-next') {
    const q = V.packQuiz;
    if (!q) return;
    q.i++; q.elegida = null;
    if (q.i >= q.preguntas.length) {
      addXp(q.aciertos * 3);                 // 3 XP por acierto
      save();
    }
    window.scrollTo(0, 0); render(); return;
  }

  if (act === 'unit-plus-srs') {
    const u = unitById(t.dataset.id);
    if (!u || !u.vocabPlus) return;
    let n = 0;
    for (const w of u.vocabPlus) if (!S.srs[w.en]) { addSrs(w.en, w.es, u.id); n++; }
    save();
    toast(n + ' palabra' + (n === 1 ? '' : 's') + ' añadida' + (n === 1 ? '' : 's') + ' a tu repaso');
    render(); return;
  }

  if (act === 'say-plus') {
    const u = unitById(t.dataset.id);
    if (!u || !u.vocabPlus) return;
    const token = ++sayAllToken;
    let i = 0;
    const next = () => {
      if (token !== sayAllToken || i >= u.vocabPlus.length) return;
      Voice.speak(u.vocabPlus[i++].en.replace(/^to /, '').replace(/\s*\(.*\)/, ''));
      setTimeout(next, 1500);
    };
    next(); return;
  }

  if (act === 'open-unit') {
    V.tab = 'lessons'; V.unit = t.dataset.id; V.lesson = { step: 'study' };
    window.scrollTo(0, 0); render(); return;
  }
  if (act === 'start-ex' || act === 'restart-ex') {
    V.unit = t.dataset.id;
    V.lesson = { step: 'ex', i: 0, right: 0, answered: false, picked: null, correct: false, solution: '', typed: '' };
    window.scrollTo(0, 0); render(); return;
  }
  if (act === 'quit-ex') { V.lesson = { step: 'study' }; window.scrollTo(0, 0); render(); return; }

  if (act === 'answer-mc') {
    const u = unitById(V.unit), L = V.lesson, ex = u.exercises[L.i];
    if (L.answered) return;
    L.picked = Number(t.dataset.i);
    L.correct = L.picked === ex.a;
    L.solution = ex.opts[ex.a];
    L.answered = true;
    if (L.correct) L.right++;
    addXp(L.correct ? 10 : 2, true);
    Sesion.avanzar('lesson');
    render(); return;
  }
  if (act === 'pick' || act === 'unpick') {
    const L = V.lesson;
    L.picked = L.picked || [];
    const i = Number(t.dataset.i);
    if (act === 'pick') L.picked.push(i);
    else L.picked = L.picked.filter(x => x !== i);
    render(); return;
  }
  if (act === 'check-order') {
    const u = unitById(V.unit), L = V.lesson, ex = u.exercises[L.i];
    const built = (L.picked || []).map(i => ex.words[i]).join(' ');
    L.correct = norm(built) === norm(ex.a);
    L.solution = ex.a;
    L.answered = true;
    if (L.correct) L.right++;
    addXp(L.correct ? 10 : 2, true);
    Sesion.avanzar('lesson');
    render(); return;
  }
  if (act === 'check-text') {
    const u = unitById(V.unit), L = V.lesson, ex = u.exercises[L.i];
    const input = document.getElementById('exinput');
    const val = input ? input.value : '';
    if (!val.trim()) { toast('Escribe tu respuesta.'); return; }
    L.typed = val;
    const answers = (ex.a || []).map(norm);
    L.correct = answers.indexOf(norm(val)) >= 0;
    L.solution = ex.a[0];
    L.answered = true;
    if (L.correct) L.right++;
    addXp(L.correct ? 10 : 2, true);
    Sesion.avanzar('lesson');
    render(); return;
  }
  if (act === 'next-ex') {
    const u = unitById(V.unit), L = V.lesson;
    if (L.i + 1 < u.exercises.length) {
      L.i++; L.answered = false; L.picked = null; L.correct = false; L.solution = ''; L.typed = ''; L.bankOrder = null;
      window.scrollTo(0, 0); render(); return;
    }
    // fin de la lección
    const score = Math.round((L.right / u.exercises.length) * 100);
    const first = !S.completed[u.id];
    S.completed[u.id] = { score: Math.max(score, (S.completed[u.id] || {}).score || 0), date: todayKey() };
    u.vocab.forEach(v => addSrs(v.en, v.es, u.id));
    u.phrases.slice(0, 3).forEach(p => addSrs(p.en, p.es, u.id));
    addXp(first ? 30 : 10, true);
    L.step = 'done';
    save(); window.scrollTo(0, 0); render(); return;
  }

  /* --- conversar --- */
  if (act === 'talk-mode') { talkState().mode = t.dataset.mode; render(); return; }
  if (act === 'pick-scenario') {
    const T = talkState();
    const sc = SCENARIOS.find(s => s.id === t.dataset.id);
    T.scenario = sc.id;
    T.msgs = [{ who: 'them', text: sc.opener, coach: '', hint: 'Responde con una frase completa. No pasa nada si te equivocas: para eso está el coach.' }];
    T.showHint = -1;
    render();
    setTimeout(() => Voice.speak(sc.opener), 250);
    return;
  }
  if (act === 'leave-scenario') { const T = talkState(); T.scenario = null; T.msgs = []; render(); return; }
  if (act === 'reset-chat') {
    const T = talkState();
    const sc = SCENARIOS.find(s => s.id === T.scenario);
    T.msgs = [{ who: 'them', text: sc.opener, coach: '', hint: 'Responde con una frase completa.' }];
    T.showHint = -1; render(); return;
  }
  if (act === 'show-hint') { talkState().showHint = Number(t.dataset.i); render(); return; }
  if (act === 'send-chat') {
    const box = document.getElementById('chatinput');
    if (box) sendChat(box.value);
    return;
  }
  if (act === 'chat-mic') {
    const T = talkState();
    if (T.rec) { stopListening(); T.rec = false; render(); return; }
    T.rec = true; render();
    recognizer = startListening(
      txt => { T.rec = false; recognizer = null; sendChat(txt); },
      () => { if (T.rec) { T.rec = false; render(); } },
      err => { T.rec = false; recognizer = null; toast(err === 'not-allowed' ? 'Permite el micrófono en tu navegador para hablar.' : 'No se pudo escuchar. Puedes escribir tu respuesta.'); render(); }
    );
    return;
  }

  /* --- correo --- */
  if (act === 'pick-email')   { const T = talkState(); T.emailTask = t.dataset.id; T.emailText = ''; T.emailResult = null; render(); return; }
  if (act === 'leave-email')  { const T = talkState(); T.emailTask = null; T.emailResult = null; render(); return; }
  if (act === 'review-email') { reviewEmail(); return; }

  /* --- escuchar: diálogos --- */
  if (act === 'audio-tab') { stopDialogue(); audioState().tab = t.dataset.t; window.scrollTo(0, 0); render(); return; }
  if (act === 'open-dlg') {
    const A = audioState();
    A.id = t.dataset.id; A.stage = 'intro'; A.qi = 0; A.answered = false; A.picked = null;
    A.right = 0; A.plays = 0; A.dictTyped = ''; A.dictResult = null;
    window.scrollTo(0, 0); render(); return;
  }
  if (act === 'close-dlg')  { stopDialogue(); audioState().id = null; window.scrollTo(0, 0); render(); return; }
  if (act === 'dlg-stop')   { stopDialogue(); render(); return; }
  if (act === 'dlg-play') {
    const A = audioState();
    const d = dialogueById(A.id);
    if (!d) return;
    A.rate = Number(t.dataset.rate) || 1;
    playLines(d.lines, A.rate, () => { A.plays++; render(); }, d);
    render(); return;
  }
  if (act === 'dlg-replay') {
    const A = audioState();
    const d = dialogueById(A.id);
    if (d) playLines(d.lines, A.rate || 1, null, null);
    return;
  }
  if (act === 'dlg-quiz')   { stopDialogue(); const A = audioState(); A.stage = 'quiz'; A.qi = 0; A.answered = false; A.picked = null; A.right = 0; window.scrollTo(0, 0); render(); return; }
  if (act === 'dlg-answer') {
    const A = audioState();
    const d = dialogueById(A.id);
    if (A.answered) return;
    A.picked = Number(t.dataset.i);
    A.answered = true;
    if (A.picked === d.questions[A.qi].a) { A.right++; addXp(8, true); } else addXp(2, true);
    Sesion.avanzar('listen');
    render(); return;
  }
  if (act === 'dlg-next-q') {
    const A = audioState();
    const d = dialogueById(A.id);
    if (A.qi + 1 < d.questions.length) { A.qi++; A.answered = false; A.picked = null; }
    else { A.stage = 'dict'; }
    window.scrollTo(0, 0); render(); return;
  }
  if (act === 'dlg-check-dict') {
    const A = audioState();
    const d = dialogueById(A.id);
    const box = document.getElementById('dictinput');
    const val = box ? box.value : '';
    if (!val.trim()) { toast('Escribe lo que oíste, o salta el dictado.'); return; }
    A.dictTyped = val;
    A.dictResult = lcsMarks(d.lines[d.dictation].en, val);
    addXp(Math.max(3, Math.round(A.dictResult.score / 6)), true);
    render(); return;
  }
  if (act === 'dlg-skip-dict') { audioState().stage = 'script'; guardarDialogo(); window.scrollTo(0, 0); render(); return; }
  if (act === 'dlg-finish')    { audioState().stage = 'script'; guardarDialogo(); window.scrollTo(0, 0); render(); return; }
  if (act === 'dlg-restart') {
    const A = audioState();
    A.stage = 'intro'; A.qi = 0; A.answered = false; A.picked = null; A.right = 0; A.plays = 0; A.dictResult = null; A.dictTyped = '';
    window.scrollTo(0, 0); render(); return;
  }

  /* --- sonidos difíciles --- */
  if (act === 'open-sound') {
    const G = soundState();
    G.id = t.dataset.id; G.i = 0; G.objetivo = Math.random() < 0.5 ? 0 : 1;
    G.ok = null; G.oido = ''; G.err = ''; G.aciertos = 0; G.hechos = 0;
    window.scrollTo(0, 0); render(); return;
  }
  if (act === 'close-sound') { stopListening(); soundState().id = null; soundState().rec = false; window.scrollTo(0, 0); render(); return; }
  if (act === 'sound-next') {
    const G = soundState();
    const g = soundById(G.id);
    if (G.hechos >= g.pares.length) {
      const pct = G.hechos ? Math.round((G.aciertos / G.hechos) * 100) : 0;
      if (!S.soundBest) S.soundBest = {};
      S.soundBest[g.id] = Math.max(pct, S.soundBest[g.id] || 0);
      addXp(Math.max(5, Math.round(pct / 5)), true);
      save();
      toast(pct + '% en ' + g.titulo);
      G.id = null;
    } else {
      G.i++; G.objetivo = Math.random() < 0.5 ? 0 : 1; G.ok = null; G.oido = ''; G.err = '';
    }
    window.scrollTo(0, 0); render(); return;
  }
  if (act === 'sound-mic') {
    const G = soundState();
    const g = soundById(G.id);
    const par = g.pares[G.i % g.pares.length];
    const objetivo = G.objetivo === 0 ? par.a : par.b;
    const otro = G.objetivo === 0 ? par.b : par.a;
    if (G.rec) { stopListening(); G.rec = false; render(); return; }
    G.rec = true; G.err = ''; render();
    recognizer = startListening(
      txt => {
        G.rec = false; recognizer = null; G.oido = txt;
        const dicho = norm(txt).split(' ').filter(Boolean);
        G.ok = dicho.indexOf(norm(objetivo)) >= 0 && dicho.indexOf(norm(otro)) < 0;
        G.hechos++; if (G.ok) G.aciertos++;
        addXp(G.ok ? 4 : 1, true);
        save(); render();
      },
      () => { if (G.rec) { G.rec = false; render(); } },
      err => {
        G.rec = false; recognizer = null;
        G.err = err === 'not-allowed' ? 'Necesitas permitir el micrófono en tu navegador.'
              : err === 'no-speech' ? 'No se escuchó nada. Acércate e inténtalo otra vez.'
              : 'No se pudo capturar el audio. Prueba de nuevo.';
        render();
      }
    );
    return;
  }

  /* --- pronunciación --- */
  if (act === 'pron-mic') {
    const P = pronState();
    if (P.rec) { stopListening(); P.rec = false; render(); return; }
    P.rec = true; P.err = ''; P.marks = null; P.score = null; P.heard = ''; render();
    const phrase = P.pool[P.i % P.pool.length];
    recognizer = startListening(
      txt => {
        P.rec = false; recognizer = null; P.heard = txt;
        const r = lcsMarks(phrase, txt);
        P.marks = r.marks; P.score = r.score;
        S.pronCount++; S.pronBest = Math.max(S.pronBest, r.score);
        addXp(Math.max(3, Math.round(r.score / 10)), true);
        save(); render();
      },
      () => { if (P.rec) { P.rec = false; render(); } },
      err => {
        P.rec = false; recognizer = null;
        P.err = err === 'not-allowed' ? 'Necesitas permitir el acceso al micrófono en tu navegador.'
              : err === 'no-speech' ? 'No se escuchó nada. Acércate al micrófono e inténtalo otra vez.'
              : 'No se pudo capturar el audio. Prueba de nuevo.';
        render();
      }
    );
    return;
  }
  if (act === 'pron-next') {
    const P = pronState();
    P.i++; P.marks = null; P.score = null; P.heard = ''; P.err = '';
    render(); return;
  }

  /* --- repaso --- */
  if (act === 'flip') { reviewState().flipped = true; render(); return; }
  if (act === 'check-prod') {
    const R = reviewState();
    const item = R.queue[R.i];
    const card = deck(item.dir)[item.en];
    const input = document.getElementById('prodinput');
    const val = input ? input.value : '';
    if (!val.trim()) { toast('Escríbelo, o pulsa "No me sale".'); return; }
    R.prodTyped = val;
    R.prodResult = checkProduction(card, val);
    render(); return;
  }
  if (act === 'prod-blank') {
    const R = reviewState();
    R.prodTyped = '';
    R.prodResult = { estado: 'blanco' };
    render(); return;
  }
  if (act === 'grade') {
    const R = reviewState();
    const item = R.queue[R.i];
    const card = deck(item.dir)[item.en];
    const g = Number(t.dataset.g);
    if (card) {
      scheduleCard(card, g);
      // acertar dos veces reconociendo abre la tarjeta de producción
      if (item.dir === 'rec' && g === 2 && unlockProduction(item.en)) {
        R.queue.push({ en: item.en, dir: 'prod' });
        toast('"' + item.en + '" pasa a producción');
      }
    }
    if (g === 0) R.queue.push(item);
    R.done++; R.i++; R.flipped = false; R.prodResult = null; R.prodTyped = '';
    addXp(item.dir === 'prod' ? (g === 0 ? 2 : 6) : 3, true);
    Sesion.avanzar('review');
    save(); render(); return;
  }
  if (act === 'review-extra') {
    const R = reviewState();
    const todas = Object.keys(S.srs).map(en => ({ en, dir: 'rec' }))
      .concat(Object.keys(S.srsProd).map(en => ({ en, dir: 'prod' })));
    R.queue = shuffle(todas).slice(0, 15);
    R.i = 0; R.flipped = false; R.done = 0; R.prodResult = null; R.prodTyped = '';
    render(); return;
  }

  /* --- ajustes --- */
  if (act === 'save-settings') {
    const g = id => (document.getElementById(id) || {}).value;
    S.name = (g('setname') || '').trim();
    S.settings.dailyGoal = Number(g('setgoal')) || 50;
    S.settings.accent = g('setaccent') || 'en-US';
    S.settings.voiceURI = g('setvoice') || '';
    S.settings.apiKey = (g('setkey') || '').trim();
    S.settings.codigo = (g('setcodigo') || '').trim();
    S.settings.proxyUrl = (g('setproxy') || '').trim();
    S.settings.model = g('setmodel') || 'claude-sonnet-5';
    S.settings.theme = g('settheme') || 'auto';
    const lv = LEVELS.find(l => l.id === g('setlevel'));
    if (lv && lv.id !== currentLevel().id) S.xp = lv.xp;
    save(); applyTheme(); render();
    toast('Ajustes guardados');
    return;
  }
  if (act === 'test-api') {
    t.disabled = true; t.textContent = 'Probando…';
    try {
      const r = await callClaude('Reply with exactly: {"ok":true}', [{ role: 'user', content: 'ping' }], 40);
      const via = (proxyUrl() && codigoEquipo()) ? ' (por el servicio del equipo)' : ' (con tu clave)';
      toast(parseJson(r) ? 'Conexión correcta' + via + '. El tutor está listo.' : 'Respondió, pero con un formato inesperado.');
    } catch (err) { toast(apiErrorText(err)); }
    t.disabled = false; t.textContent = 'Probar la conexión';
    return;
  }
  if (act === 'export') {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'speakup-progreso.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('Copia de seguridad descargada');
    return;
  }
  /* --- sesión guiada --- */
  if (act === 'ses-empezar') { V.sesionResumen = null; Sesion.empezar(); return; }
  if (act === 'ses-salir')   { Sesion.cancelar(); toast('Sesión cancelada. Sigue a tu ritmo.'); return; }
  if (act === 'ses-cerrar')  { V.sesionResumen = null; render(); return; }

  /* --- asistente flotante --- */
  if (act === 'ask-open')  { Ask.abierto = true;  renderAsk(); return; }
  if (act === 'ask-close') { Ask.abierto = false; renderAsk(); return; }
  if (act === 'ask-clear') { Ask.msgs = []; Ask.draft = ''; renderAsk(); return; }
  if (act === 'ask-send')  { const b = document.getElementById('askinput'); if (b) Ask.enviar(b.value); return; }
  if (act === 'ask-sug')   { Ask.enviar(t.dataset.q); return; }

  if (act === 'instalar') { App.instalar(); return; }
  if (act === 'save-theme') {
    const sel = document.getElementById('settheme');
    S.settings.theme = (sel && sel.value) || 'auto';
    save(); applyTheme(); render(); toast('Guardado');
    return;
  }
  if (act === 'import') {
    const f = document.getElementById('importfile');
    if (f) f.click();
    return;
  }
  if (act === 'reset') {
    if (!confirm('Se borrará tu racha, tu XP, tu vocabulario y tus lecciones. Esta acción no se puede deshacer. ¿Continuar?')) return;
    localStorage.removeItem(KEY);
    S = JSON.parse(JSON.stringify(DEFAULT_STATE));
    V.onbStep = 1; V.tab = 'home'; V.talk = null; V.pron = null; V.review = null; V.lesson = null; V.unit = null;
    render(); return;
  }
});

/* --- Enter en formularios --- */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const el = e.target;
    if (el.id === 'exinput' && !e.shiftKey) {
      e.preventDefault();
      const b = document.querySelector('[data-act="check-text"]') || document.querySelector('[data-act="next-ex"]');
      if (b) b.click();
    }
    if (el.id === 'chatinput' && !e.shiftKey) {
      e.preventDefault();
      sendChat(el.value);
    }
    if (el.id === 'onbname') {
      e.preventDefault();
      const b = document.querySelector('[data-act="onb-next"]'); if (b) b.click();
    }
    if (el.id === 'prodinput') {
      e.preventDefault();
      const b = document.querySelector('[data-act="check-prod"]'); if (b) b.click();
    }
    if (el.id === 'askinput' && !e.shiftKey) {
      e.preventDefault();
      Ask.enviar(el.value);
    }
    if (el.id === 'ctopic') {
      e.preventDefault();
      const b = document.querySelector('[data-act="gen-unit"]'); if (b && !b.disabled) b.click();
    }
    if (el.classList && el.classList.contains('flashcard')) { e.preventDefault(); reviewState().flipped = true; render(); }
  }
  if (e.key === ' ' && e.target.classList && e.target.classList.contains('flashcard')) {
    e.preventDefault(); reviewState().flipped = true; render();
  }
});

/* --- guardar el borrador del chat --- */
document.addEventListener('input', e => {
  if (e.target.id === 'chatinput') talkState().draft = e.target.value;
  if (e.target.id === 'emailtext') talkState().emailText = e.target.value;
  if (e.target.id === 'askinput')  Ask.draft = e.target.value;
});

/* --- importar una copia de seguridad --- */
document.addEventListener('change', e => {
  if (e.target.id !== 'importfile') return;
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try { data = JSON.parse(reader.result); }
    catch (err) { toast('Ese archivo no es una copia válida de SpeakUp.'); return; }
    if (!data || typeof data !== 'object' || typeof data.xp !== 'number' || !data.settings) {
      toast('Ese archivo no parece una copia de SpeakUp.'); return;
    }
    const resumen = (data.name ? data.name + ', ' : '') + data.xp + ' XP · ' +
      Object.keys(data.srs || {}).length + ' palabras · ' + Object.keys(data.completed || {}).length + ' lecciones';
    if (!confirm('Se reemplazará el progreso de este navegador por:\n\n' + resumen + '\n\n¿Continuar?')) return;
    const claveActual = S.settings.apiKey;
    const proxyActual = S.settings.proxyUrl;
    const codigoActual = S.settings.codigo;
    S = Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_STATE)), data);
    S.settings = Object.assign({}, DEFAULT_STATE.settings, data.settings || {});
    if (!S.settings.apiKey && claveActual) S.settings.apiKey = claveActual;   // no pierdas la clave de este equipo
    if (!S.settings.proxyUrl && proxyActual) S.settings.proxyUrl = proxyActual;
    if (!S.settings.codigo && codigoActual) S.settings.codigo = codigoActual;
    S.customUnits = Array.isArray(S.customUnits) ? S.customUnits : [];
    S.mistakes = Array.isArray(S.mistakes) ? S.mistakes : [];
    if (!S.srsProd || typeof S.srsProd !== 'object') S.srsProd = {};
    save();
    V.tab = 'home'; V.unit = null; V.lesson = null; V.review = null; V.talk = null; V.pron = null;
    render();
    toast('Progreso importado');
  };
  reader.readAsText(file);
  e.target.value = '';
});

/* --- reaccionar al tema del sistema --- */
if (window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = () => { if (S.settings.theme === 'auto') applyTheme(); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
}

/* ══════════════════ 16b. ASISTENTE FLOTANTE ══════════════════
   Un botón siempre a mano para preguntar cualquier duda. Sabe en qué
   pantalla estás, qué unidad tienes abierta y qué errores repites, así
   que puede responder "¿por qué esto es así?" sin que expliques nada.  */

const Ask = {
  abierto: false,
  msgs: [],
  busy: false,
  draft: '',

  /* Dónde está el usuario ahora mismo, en texto para la IA */
  contexto() {
    const partes = [];
    const pantallas = {
      home: 'la pantalla de Inicio', lessons: 'las Lecciones', create: 'el generador de lecciones',
      talk: 'Conversar con el tutor', pron: 'Escuchar', review: 'el Repaso', settings: 'los Ajustes'
    };
    partes.push('Está en ' + (pantallas[V.tab] || 'la app') + '.');
    partes.push('Su nivel actual es ' + currentLevel().id + ' (' + S.xp + ' XP).');

    if (V.unit) {
      const u = unitById(V.unit);
      if (u) {
        partes.push('Tiene abierta la unidad "' + u.title + '" (' + u.level + '), sobre: ' + u.grammar.title + '.');
        if (V.lesson && V.lesson.step === 'ex') {
          const ex = u.exercises[V.lesson.i];
          if (ex) {
            partes.push('Está en el ejercicio ' + (V.lesson.i + 1) + ': ' + JSON.stringify(ex).slice(0, 500));
            if (V.lesson.answered) partes.push('Ya respondió y ' + (V.lesson.correct ? 'acertó' : 'falló') + '.');
          }
        }
      }
    }
    if (V.tab === 'pron' && V.audio && V.audio.id) {
      const d = dialogueById(V.audio.id);
      if (d) partes.push('Está con el diálogo "' + d.title + '".');
    }
    if (V.tab === 'talk' && V.talk && V.talk.scenario) {
      const sc = SCENARIOS.find(s => s.id === V.talk.scenario);
      if (sc) partes.push('Está conversando en el escenario "' + sc.title + '".');
    }
    const top = mistakesByTag().slice(0, 3).map(g => g.tag + ' (' + g.total + ')');
    if (top.length) partes.push('Sus errores más repetidos: ' + top.join(', ') + '.');
    return partes.join(' ');
  },

  sistema() {
    return 'Eres el asistente de SpeakUp, una app que enseña inglés a Diego, un hispanohablante que es Jefe Zonal de Ventas en comercio exterior y va de A1 a B2.\n\n' +
      'RESPONDE SIEMPRE EN ESPAÑOL, salvo los ejemplos en inglés. Sé breve: 2 a 5 frases, o una lista corta. Nada de rodeos ni de repetir la pregunta.\n\n' +
      'Puedes resolver dos tipos de duda:\n' +
      '1. DE INGLÉS: gramática, vocabulario, pronunciación, cómo se dice algo, por qué una respuesta es la correcta. Da siempre un ejemplo en inglés con su traducción. Si el error es típico del hispanohablante, dilo.\n' +
      '2. DE LA APP: cómo funciona alguna sección o cómo hacer algo.\n\n' +
      'CÓMO ES SPEAKUP, para las dudas del tipo 2:\n' +
      '· Inicio: meta diaria de XP, racha, palabras aprendidas frente a las que ya sabe producir, y el mapa de ruta A1→A2→B1→B2. El nivel sube solo con el XP: A2 a los 450, B1 a los 1300, B2 a los 2800.\n' +
      '· Lecciones: 22 unidades con gramática explicada, vocabulario con audio, frases y ejercicios. Arriba hay un generador para crear una lección a medida sobre el tema que pida.\n' +
      '· Conversar: 10 escenarios de roleplay con el tutor, por texto o por voz, con nota de coach que corrige en español. Tiene además el modo Correo de negocios, que corrige y reescribe correos.\n' +
      '· Escuchar: 10 diálogos a dos voces que se oyen sin texto, con preguntas de comprensión y un dictado; la transcripción aparece al final. Y una pestaña de Pronunciación con micrófono.\n' +
      '· Repaso: repetición espaciada en dos direcciones. Reconocimiento (ve el inglés, recuerda el español) y Producción (ve el español y escribe el inglés). Una palabra pasa a producción al acertarla dos veces. También está la libreta "Mis errores", que guarda cada corrección con su categoría y genera práctica dirigida.\n' +
      '· Ajustes: nombre, meta diaria, nivel, acento americano o británico, voz, clave de API, tema claro/oscuro, exportar e importar el progreso, e instalar la app.\n' +
      '· Se instala en el móvil y funciona sin internet, salvo Conversar, el Correo y el generador, que necesitan red.\n' +
      '· El progreso se guarda solo en su navegador, no hay servidor ni cuenta.\n\n' +
      'Si te pregunta por algo que la app no hace, dilo con claridad en vez de inventarlo.';
  },

  async enviar(texto) {
    if (!texto.trim() || Ask.busy) return;
    Ask.msgs.push({ who: 'me', text: texto.trim() });
    Ask.draft = '';
    Ask.busy = true;
    renderAsk();

    const historial = Ask.msgs.slice(-10).map(m => ({ role: m.who === 'me' ? 'user' : 'assistant', content: m.text }));
    if (historial.length && historial[0].role !== 'user') historial.shift();
    historial[historial.length - 1].content =
      'CONTEXTO (no lo menciones salvo que venga a cuento): ' + Ask.contexto() + '\n\nPREGUNTA: ' + texto.trim();

    try {
      const raw = await callClaude(Ask.sistema(), historial, 700);
      Ask.msgs.push({ who: 'bot', text: (raw || '').trim() || 'No supe qué responder. Prueba a preguntarlo de otra forma.' });
    } catch (err) {
      Ask.msgs.push({ who: 'bot', text: apiErrorText(err), error: true });
    }
    Ask.busy = false;
    renderAsk();
  },

  /* Sugerencias que cambian según dónde esté */
  sugerencias() {
    if (V.lesson && V.lesson.step === 'ex' && V.lesson.answered) return ['¿Por qué es esa la correcta?', 'Dame otro ejemplo', '¿Cuándo NO se usa así?'];
    if (V.tab === 'lessons' && V.unit) return ['Explícamelo más simple', 'Dame 3 ejemplos de trabajo', '¿Cuál es el error típico aquí?'];
    if (V.tab === 'talk') return ['¿Cómo digo esto en inglés?', '¿Suena natural lo que escribí?', 'Dame una frase para responder'];
    if (V.tab === 'pron') return ['No entendí una parte', '¿Cómo se pronuncia esto?', '¿Qué significa esa expresión?'];
    if (V.tab === 'review') return ['¿Cómo funciona el repaso?', 'Dame un truco para memorizar', '¿Qué es producción?'];
    return ['¿Cómo se dice "cotización"?', '¿Cómo instalo la app?', '¿Qué hago hoy para avanzar?'];
  }
};

function renderAsk() {
  const caja = document.getElementById('ask');
  if (!caja) return;
  if (!S.onboarded) { caja.innerHTML = ''; return; }

  const fab = '<button class="ask-fab" data-act="ask-open" aria-label="Preguntar una duda" title="¿Alguna duda?">' +
    ic('chat') + (Ask.msgs.length ? '<span class="ask-dot"></span>' : '') + '</button>';

  if (!Ask.abierto) { caja.innerHTML = fab; return; }

  const sinClave = !hayTutor();
  const mensajes = Ask.msgs.length
    ? Ask.msgs.map(m => '<div class="ask-msg ' + (m.who === 'me' ? 'me' : 'bot') + (m.error ? ' err' : '') + '">' +
        esc(m.text).replace(/\n/g, '<br>') + '</div>').join('')
    : '<div class="ask-vacio">' + ic('bulb') +
      '<p><b>Pregúntame lo que sea.</b><br>Dudas de inglés o de cómo funciona la app. Sé dónde estás, así que puedes preguntar directamente "¿por qué es así?".</p></div>';

  caja.innerHTML = fab +
    '<div class="ask-fondo" data-act="ask-close"></div>' +
    '<div class="ask-panel" role="dialog" aria-label="Asistente de dudas">' +
      '<div class="ask-cab">' +
        '<b>' + ic('bulb') + ' ¿Alguna duda?</b>' +
        '<span style="margin-left:auto;display:flex;gap:6px">' +
          (Ask.msgs.length ? '<button class="btn btn-ghost btn-sm" data-act="ask-clear" aria-label="Empezar de nuevo">' + ic('refresh') + '</button>' : '') +
          '<button class="btn btn-ghost btn-sm" data-act="ask-close" aria-label="Cerrar">' + ic('x') + '</button>' +
        '</span>' +
      '</div>' +
      (sinClave
        ? '<div class="ask-cuerpo"><div class="notice warn" style="margin:0"><b>' + ic('lock') + ' La IA no está activada</b>' +
          'El asistente usa la IA para responderte. Actívala en Ajustes y podrás preguntarle cualquier cosa.</div></div>'
        : '<div class="ask-cuerpo" id="askcuerpo">' + mensajes +
          (Ask.busy ? '<div class="ask-msg bot"><span class="typing"><i></i><i></i><i></i></span></div>' : '') +
          '</div>' +
          '<div class="ask-sug">' +
            Ask.sugerencias().map(s => '<button class="ask-chip" data-act="ask-sug" data-q="' + esc(s) + '">' + esc(s) + '</button>').join('') +
          '</div>' +
          '<div class="ask-pie">' +
            '<label class="sr-only" for="askinput">Escribe tu duda</label>' +
            '<textarea id="askinput" rows="1" placeholder="Escribe tu duda…"' + (Ask.busy ? ' disabled' : ' data-askfocus') + '>' + esc(Ask.draft) + '</textarea>' +
            '<button class="btn btn-primary btn-icon" data-act="ask-send" aria-label="Enviar"' + (Ask.busy ? ' disabled' : '') + '>' + ic('send') + '</button>' +
          '</div>') +
    '</div>';

  const cuerpo = document.getElementById('askcuerpo');
  if (cuerpo) cuerpo.scrollTop = cuerpo.scrollHeight;
  const campo = caja.querySelector('[data-askfocus]');
  if (campo && Ask.abierto) campo.focus();
}

/* ══════════════════ 17. INSTALAR Y FUNCIONAR SIN CONEXIÓN ══════════════════ */
const App = {
  invitacion: null,          // el evento que Chrome guarda para poder instalar
  instalada: false,
  esIOS: false,
  hayInternet: true,

  init() {
    App.esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    App.esAndroid = /Android/.test(navigator.userAgent);
    App.incognito = false;
    App.instalada = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
                    window.navigator.standalone === true;
    App.hayInternet = navigator.onLine !== false;

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      App.invitacion = e;
      if (V.tab === 'settings' || V.tab === 'home') render();
    });
    window.addEventListener('appinstalled', () => {
      App.invitacion = null; App.instalada = true;
      toast('SpeakUp instalada. Búscala en tu pantalla de inicio.');
      render();
    });
    window.addEventListener('online',  () => { App.hayInternet = true;  render(); });
    window.addEventListener('offline', () => { App.hayInternet = false; render(); });

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
          reg.addEventListener('updatefound', () => {
            const nuevo = reg.installing;
            if (!nuevo) return;
            nuevo.addEventListener('statechange', () => {
              if (nuevo.state === 'installed' && navigator.serviceWorker.controller) {
                toast('Hay una versión nueva. Se aplicará al reabrir la app.');
              }
            });
          });
        }).catch(e => console.warn('No se pudo activar el modo sin conexión:', e));
      });
    }
  },

  async instalar() {
    if (!App.invitacion) return;
    App.invitacion.prompt();
    try {
      const r = await App.invitacion.userChoice;
      if (r && r.outcome === 'accepted') toast('Instalando…');
    } catch (e) {}
    App.invitacion = null;
    render();
  },

  /* Tarjeta de instalación, adaptada a lo que el navegador permita */
  tarjeta() {
    if (App.instalada) {
      return '<div class="card">' +
        '<div class="card-title"><span style="color:var(--ok)">' + ic('check') + '</span><h3>App instalada</h3></div>' +
        '<p class="small muted" style="margin:0">Estás usando SpeakUp como aplicación. Funciona sin conexión: lecciones, escucha y repaso siguen ahí aunque no tengas internet.</p>' +
      '</div>';
    }
    if (App.invitacion) {
      return '<div class="card">' +
        '<div class="card-title"><span style="color:var(--brand)">' + ic('download') + '</span><h3>Instálala en tu teléfono</h3></div>' +
        '<p class="small muted">Queda como una app más, con su icono, sin barra de navegador, y funciona sin internet. Es lo que convierte los diez minutos del taxi en práctica.</p>' +
        '<button class="btn btn-primary btn-block" data-act="instalar">' + ic('download') + ' Instalar SpeakUp</button>' +
      '</div>';
    }
    if (App.esIOS) {
      return '<div class="card">' +
        '<div class="card-title"><span style="color:var(--brand)">' + ic('download') + '</span><h3>Instálala en tu iPhone</h3></div>' +
        '<ol class="pasos">' +
          '<li>Ábrela en <b>Safari</b> (en iPhone, Chrome no puede instalar apps web).</li>' +
          '<li>Toca el botón <b>Compartir</b>, el cuadrado con la flecha hacia arriba.</li>' +
          '<li>Baja y elige <b>Añadir a pantalla de inicio</b>.</li>' +
          '<li>Toca <b>Añadir</b>.</li>' +
        '</ol>' +
        '<p class="tiny muted" style="margin:0">Quedará con su icono, a pantalla completa y funcionando sin internet.</p>' +
      '</div>';
    }
    if (App.esAndroid) {
      return '<div class="card">' +
        '<div class="card-title"><span style="color:var(--brand)">' + ic('download') + '</span><h3>Instálala en tu Android</h3></div>' +
        '<p class="small muted">Chrome a veces tarda en ofrecerlo solo. Puedes hacerlo tú ahora mismo:</p>' +
        '<ol class="pasos">' +
          '<li>Toca los <b>tres puntos</b> ⋮ arriba a la derecha de Chrome.</li>' +
          '<li>Busca <b>Instalar aplicación</b> o <b>Añadir a pantalla de inicio</b>.</li>' +
          '<li>Confirma con <b>Instalar</b>.</li>' +
        '</ol>' +
        '<p class="tiny muted" style="margin:0">Si no ves ninguna de las dos opciones, usa la app un minuto y vuelve a abrir el menú: Chrome la habilita al detectar que la usas.</p>' +
      '</div>';
    }
    return '<div class="card">' +
      '<div class="card-title"><span style="color:var(--brand)">' + ic('download') + '</span><h3>Instalarla en la computadora</h3></div>' +
      '<p class="small muted">En Chrome o Edge queda como programa propio, con su ventana y su icono:</p>' +
      '<ol class="pasos">' +
        '<li>Busca el icono de <b>instalar</b> en la barra de direcciones, a la derecha (una pantalla con una flecha hacia abajo).</li>' +
        '<li>Si no aparece, abre el menú <b>⋮</b> y busca <b>Instalar SpeakUp</b> — puede estar dentro de <i>Guardar y compartir</i> o de <i>Más herramientas</i>.</li>' +
      '</ol>' +
      '<p class="tiny muted" style="margin:0">No funciona en ventanas de <b>incógnito</b>: ahí Chrome bloquea la instalación y además no guarda tu progreso.</p>' +
    '</div>';
  },

  /* Aviso cuando algo necesita internet y no lo hay */
  avisoSinConexion(queNecesita) {
    if (App.hayInternet) return '';
    return '<div class="notice warn"><b>' + ic('x') + ' Sin conexión</b>' + esc(queNecesita) +
      ' necesita internet. Mientras tanto tienes disponibles las lecciones, la escucha y el repaso, que funcionan sin red.</div>';
  }
};

/* ══════════════════ 18. ARRANQUE ══════════════════ */
function boot() {
  Voice.init();
  App.init();
  vigilarTeclado();
  ensureDay();
  applyTheme();
  try {
    const p = new URLSearchParams(location.search);
    // el enlace del equipo trae el acceso: ?api=...&codigo=...
    let configurado = false;
    const api = p.get('api'), cod = p.get('codigo');
    if (api && /^https:\/\//.test(api)) { S.settings.proxyUrl = api.trim(); configurado = true; }
    if (cod) { S.settings.codigo = cod.trim(); configurado = true; }
    if (configurado) {
      save();
      // limpiar la barra de direcciones para no dejar el código a la vista
      try { history.replaceState(null, '', location.pathname); } catch (e) {}
      setTimeout(() => toast('Tutor con IA activado'), 900);
    }
    // atajos del icono instalado: ?ir=review, ?ir=talk, ?ir=pron
    const destino = p.get('ir');
    if (destino && ['home', 'lessons', 'talk', 'pron', 'review'].indexOf(destino) >= 0 && S.onboarded) V.tab = destino;
  } catch (e) {}
  document.getElementById('nav').innerHTML =
    '<div class="bottomnav-in">' +
      [['home', 'home', 'Inicio'], ['lessons', 'book', 'Lecciones'], ['talk', 'chat', 'Conversar'],
       ['pron', 'headphones', 'Escuchar'], ['review', 'cards', 'Repaso']]
      .map(([tab, icon, label]) =>
        '<button class="navbtn" data-act="tab" data-tab="' + tab + '">' + ic(icon) + '<span>' + label + '</span></button>'
      ).join('') +
    '</div>';
  render();

  // Retirar la pantalla de arranque. Se queda quieta el tiempo suficiente
  // para leer el nombre, y luego se desvanece. Cambia este número si la
  // quieres más corta o más larga (está en milisegundos).
  const ESPERA_ARRANQUE = 1900;
  const arranque = document.getElementById('arranque');
  if (arranque) {
    setTimeout(() => {
      arranque.classList.add('fuera');
      setTimeout(() => { if (arranque.parentNode) arranque.remove(); }, 550);
    }, ESPERA_ARRANQUE);
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();

})();
