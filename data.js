/* ============================================================
   SpeakUp — Contenido pedagógico
   Interfaz en español · Contenido de aprendizaje en inglés
   Tipos de ejercicio:
     mc     → opción múltiple
     fill   → completar el espacio
     tr     → traducir ES → EN
     listen → comprensión auditiva
     order  → ordenar las palabras
   ============================================================ */

const LEVELS = [
  { id: 'A1', name: 'A1 · Principiante', xp: 0,    desc: 'Palabras y frases básicas del día a día.' },
  { id: 'A2', name: 'A2 · Básico',       xp: 600,  desc: 'Rutinas, trabajo y situaciones cotidianas.' },
  { id: 'B1', name: 'B1 · Intermedio',   xp: 1800, desc: 'Pasado, futuro, opiniones y conversación real.' },
  { id: 'B2', name: 'B2 · Avanzado',     xp: 4000, desc: 'Hablar y entender con fluidez: negociar, presentar, debatir.' }
];

const UNITS = [

/* ══════════════════ A1 ══════════════════ */
{
  id: 'a1-1', level: 'A1', title: 'Saludos y presentaciones',
  goal: 'Saludar, presentarte y despedirte con naturalidad.',
  grammar: {
    title: 'El verbo to be (ser/estar) — primera mirada',
    es: 'En inglés SIEMPRE hay que decir el sujeto (I, you, he...). No se dice "Am Diego", se dice "I am Diego". En el habla real casi siempre se contrae: I am → I’m, you are → you’re.',
    examples: [
      { en: "I'm Diego.", es: 'Soy Diego.' },
      { en: "You're my teacher.", es: 'Tú eres mi profesor.' },
      { en: "It's nice to meet you.", es: 'Es un gusto conocerte.' }
    ]
  },
  vocab: [
    { en: 'hello', es: 'hola' },
    { en: 'hi', es: 'hola (informal)' },
    { en: 'good morning', es: 'buenos días' },
    { en: 'good afternoon', es: 'buenas tardes' },
    { en: 'good evening', es: 'buenas noches (al llegar)' },
    { en: 'goodbye', es: 'adiós' },
    { en: 'please', es: 'por favor' },
    { en: 'thank you', es: 'gracias' },
    { en: 'sorry', es: 'perdón / lo siento' },
    { en: 'excuse me', es: 'disculpe (para llamar la atención)' },
    { en: 'name', es: 'nombre' },
    { en: 'yes', es: 'sí' },
    { en: 'no', es: 'no' },
    { en: 'nice to meet you', es: 'encantado de conocerte' }
  ],
  phrases: [
    { en: "Hello, my name is Diego.", es: 'Hola, me llamo Diego.' },
    { en: "What's your name?", es: '¿Cómo te llamas?' },
    { en: "Nice to meet you.", es: 'Encantado de conocerte.' },
    { en: "How are you?", es: '¿Cómo estás?' },
    { en: "I'm fine, thank you. And you?", es: 'Estoy bien, gracias. ¿Y tú?' },
    { en: "See you tomorrow.", es: 'Nos vemos mañana.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cómo saludas a un cliente a las 9 de la mañana?', opts: ['Good night', 'Good morning', 'Good evening'], a: 1,
      why: '"Good morning" se usa desde que amanece hasta el mediodía. "Good night" solo sirve para despedirse antes de dormir.' },
    { t: 'fill', q: "Hello, ___ name is Ana.", a: ['my'],
      why: '"My" = mi. En inglés el posesivo va siempre antes del sustantivo: my name, my job, my client.' },
    { t: 'tr', q: 'Encantado de conocerte.', a: ['nice to meet you', 'pleased to meet you', "it's nice to meet you"],
      why: 'La forma estándar y más usada es "Nice to meet you". No se traduce literal "enchanted".' },
    { t: 'order', words: ['How', 'are', 'you', 'today?'], a: 'How are you today?',
      why: 'En las preguntas con palabra interrogativa el orden es: How + are + you. El verbo va antes del sujeto.' },
    { t: 'listen', audio: "Good afternoon. How are you?", opts: ['Buenas tardes. ¿Cómo estás?', 'Buenas noches. ¿Qué haces?', 'Buenos días. ¿Dónde estás?'], a: 0,
      why: '"Afternoon" es la tarde. Fíjate en la diferencia con "evening" (noche temprana) y "morning" (mañana).' },
    { t: 'mc', q: 'Chocas con alguien en el pasillo. ¿Qué dices?', opts: ['Excuse me', "I'm sorry", 'Please'], a: 1,
      why: '"Sorry" pide disculpas por algo que ya pasó. "Excuse me" sirve para interrumpir o pedir paso ANTES.' },
    { t: 'tr', q: 'Gracias. Nos vemos mañana.', a: ['thank you see you tomorrow', 'thanks see you tomorrow', 'thank you. see you tomorrow.'],
      why: '"See you tomorrow" es la despedida natural. Decir "until tomorrow" suena a traducción.' }
  ]
},

{
  id: 'a1-2', level: 'A1', title: 'Información personal',
  goal: 'Decir de dónde eres, dónde vives y a qué te dedicas.',
  grammar: {
    title: 'To be completo + preguntas y negaciones',
    es: 'I am / you are / he-she-it is / we are / they are. Para preguntar, mueve el verbo al frente: "Are you from Spain?". Para negar, añade not: "I’m not from Spain".',
    examples: [
      { en: "She's an engineer.", es: 'Ella es ingeniera.' },
      { en: "Are you from Ecuador?", es: '¿Eres de Ecuador?' },
      { en: "They aren't in the office today.", es: 'Ellos no están hoy en la oficina.' }
    ]
  },
  vocab: [
    { en: 'country', es: 'país' },
    { en: 'city', es: 'ciudad' },
    { en: 'job', es: 'trabajo / puesto' },
    { en: 'company', es: 'empresa' },
    { en: 'manager', es: 'gerente / jefe' },
    { en: 'sales manager', es: 'gerente de ventas' },
    { en: 'engineer', es: 'ingeniero/a' },
    { en: 'teacher', es: 'profesor/a' },
    { en: 'student', es: 'estudiante' },
    { en: 'married', es: 'casado/a' },
    { en: 'single', es: 'soltero/a' },
    { en: 'years old', es: 'años (de edad)' },
    { en: 'to live', es: 'vivir' },
    { en: 'to work', es: 'trabajar' }
  ],
  phrases: [
    { en: "I'm from Ecuador.", es: 'Soy de Ecuador.' },
    { en: "I live in Cuenca.", es: 'Vivo en Cuenca.' },
    { en: "I work as a sales manager.", es: 'Trabajo como gerente de ventas.' },
    { en: "I'm thirty-five years old.", es: 'Tengo treinta y cinco años.' },
    { en: "Where are you from?", es: '¿De dónde eres?' },
    { en: "What do you do?", es: '¿A qué te dedicas?' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cómo dices "Tengo 40 años"?', opts: ['I have 40 years', "I'm 40 years old", 'I make 40 years'], a: 1,
      why: 'La edad se dice con TO BE, no con "have". "I have 40 years" es el error clásico del hispanohablante.' },
    { t: 'fill', q: "Where ___ you from?", a: ['are'],
      why: 'Con "you" siempre va "are". Nunca "Where you from?" en inglés formal ni "Where is you".' },
    { t: 'tr', q: 'Trabajo en una empresa de comercio exterior.', a: ['i work in a foreign trade company', 'i work for a foreign trade company', 'i work at a foreign trade company'],
      why: 'Para empresas se usa "work for/at/in a company". "Foreign trade" = comercio exterior.' },
    { t: 'order', words: ['She', 'is', 'not', 'the', 'manager.'], a: 'She is not the manager.',
      why: 'Negación con to be: sujeto + is + not. En el habla se contrae: "She isn’t the manager."' },
    { t: 'listen', audio: "I'm a sales manager. I work for an export company.", opts: ['Soy gerente de ventas. Trabajo para una empresa exportadora.', 'Soy vendedor. Busco una empresa exportadora.', 'Fui gerente de ventas en una empresa exportadora.'], a: 0,
      why: '"I work" es presente. Si fuera pasado escucharías "I worked" o "I used to work".' },
    { t: 'mc', q: 'Un cliente pregunta "What do you do?". Está preguntando por...', opts: ['qué estás haciendo ahora', 'tu profesión', 'qué vas a hacer mañana'], a: 1,
      why: '"What do you do?" = ¿a qué te dedicas? Si quisiera saber qué haces ahora diría "What are you doing?".' },
    { t: 'tr', q: '¿De qué ciudad eres?', a: ['what city are you from', 'which city are you from'],
      why: 'La preposición "from" se queda al final de la pregunta. Es normal y correcto en inglés.' }
  ]
},

{
  id: 'a1-3', level: 'A1', title: 'Números, días y horas',
  goal: 'Decir la hora, agendar reuniones y hablar de precios.',
  grammar: {
    title: 'Preposiciones de tiempo: at / on / in',
    es: 'AT para horas (at 3 o’clock) · ON para días y fechas (on Monday, on May 3rd) · IN para meses, años y partes del día (in May, in 2026, in the morning).',
    examples: [
      { en: "The meeting is at ten o'clock.", es: 'La reunión es a las diez.' },
      { en: "I'll call you on Friday.", es: 'Te llamo el viernes.' },
      { en: "We deliver in March.", es: 'Entregamos en marzo.' }
    ]
  },
  vocab: [
    { en: 'Monday', es: 'lunes' },
    { en: 'Tuesday', es: 'martes' },
    { en: 'Wednesday', es: 'miércoles' },
    { en: 'Thursday', es: 'jueves' },
    { en: 'Friday', es: 'viernes' },
    { en: 'weekend', es: 'fin de semana' },
    { en: 'today', es: 'hoy' },
    { en: 'tomorrow', es: 'mañana' },
    { en: 'yesterday', es: 'ayer' },
    { en: 'hour', es: 'hora' },
    { en: 'half past', es: 'y media' },
    { en: 'quarter to', es: 'menos cuarto' },
    { en: 'how much', es: 'cuánto (precio)' },
    { en: 'thousand', es: 'mil' }
  ],
  phrases: [
    { en: "What time is it?", es: '¿Qué hora es?' },
    { en: "It's half past nine.", es: 'Son las nueve y media.' },
    { en: "The meeting is on Monday at ten.", es: 'La reunión es el lunes a las diez.' },
    { en: "How much is it?", es: '¿Cuánto cuesta?' },
    { en: "It's two thousand dollars.", es: 'Cuesta dos mil dólares.' },
    { en: "I'm free after three.", es: 'Estoy libre después de las tres.' }
  ],
  exercises: [
    { t: 'fill', q: "The call is ___ Tuesday.", a: ['on'],
      why: 'Los días de la semana siempre llevan ON: on Monday, on Tuesday, on the weekend.' },
    { t: 'fill', q: "Let's meet ___ 4 p.m.", a: ['at'],
      why: 'Las horas exactas llevan AT: at 4 p.m., at noon, at midnight.' },
    { t: 'mc', q: '¿Cómo se dice "las siete y media"?', opts: ["half past seven", "seven and half", "half to seven"], a: 0,
      why: '"Half past + hora" = y media. También puedes decir simplemente "seven thirty".' },
    { t: 'tr', q: '¿Cuánto cuesta el envío?', a: ['how much is the shipping', 'how much is shipping', 'how much does the shipping cost'],
      why: '"How much is...?" es la forma más natural y rápida para preguntar precios.' },
    { t: 'listen', audio: "The shipment arrives on Thursday at eight thirty.", opts: ['El envío llega el jueves a las ocho y media.', 'El envío salió el martes a las ocho y media.', 'El envío llega el jueves a las ocho y cuarto.'], a: 0,
      why: 'Thursday (jueves) y Tuesday (martes) suenan parecido: Thursday empieza con el sonido "th".' },
    { t: 'order', words: ['I', 'have', 'a', 'meeting', 'on', 'Friday', 'morning.'], a: 'I have a meeting on Friday morning.',
      why: 'Cuando el día acompaña a la parte del día, se usa ON: on Friday morning (no "in the Friday morning").' }
  ]
},

/* ══════════════════ A2 ══════════════════ */
{
  id: 'a2-4', level: 'A2', title: 'Presente simple: tu rutina',
  goal: 'Contar lo que haces todos los días y con qué frecuencia.',
  grammar: {
    title: 'Presente simple: la -s de la tercera persona',
    es: 'Con he / she / it el verbo lleva -s: "He works". Para preguntar y negar usas do/does y el verbo vuelve a su forma base: "Does he work?", "He doesn’t work". Error típico: "Does he works?" ❌',
    examples: [
      { en: "I check my email every morning.", es: 'Reviso mi correo cada mañana.' },
      { en: "She travels to Quito once a month.", es: 'Ella viaja a Quito una vez al mes.' },
      { en: "Do you work on Saturdays?", es: '¿Trabajas los sábados?' }
    ]
  },
  vocab: [
    { en: 'always', es: 'siempre' },
    { en: 'usually', es: 'normalmente' },
    { en: 'often', es: 'a menudo' },
    { en: 'sometimes', es: 'a veces' },
    { en: 'never', es: 'nunca' },
    { en: 'to wake up', es: 'despertarse' },
    { en: 'to start', es: 'empezar' },
    { en: 'to finish', es: 'terminar' },
    { en: 'to drive', es: 'conducir / manejar' },
    { en: 'to check', es: 'revisar' },
    { en: 'to answer', es: 'responder' },
    { en: 'to send', es: 'enviar' },
    { en: 'to have lunch', es: 'almorzar' },
    { en: 'every day', es: 'todos los días' }
  ],
  phrases: [
    { en: "I usually start work at eight.", es: 'Normalmente empiezo a trabajar a las ocho.' },
    { en: "I check my email first thing in the morning.", es: 'Reviso el correo lo primero de la mañana.' },
    { en: "She doesn't work on Sundays.", es: 'Ella no trabaja los domingos.' },
    { en: "How often do you visit clients?", es: '¿Con qué frecuencia visitas clientes?' },
    { en: "I visit clients twice a week.", es: 'Visito clientes dos veces por semana.' },
    { en: "I have lunch at one.", es: 'Almuerzo a la una.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la frase correcta.', opts: ['He work in Guayaquil', 'He works in Guayaquil', 'He does work in Guayaquil'], a: 1,
      why: 'Con he/she/it el verbo lleva -s en presente simple afirmativo.' },
    { t: 'fill', q: "___ she speak English?", a: ['does'],
      why: 'Preguntas con he/she/it usan DOES, y el verbo se queda sin -s: "Does she speak?".' },
    { t: 'tr', q: 'Normalmente reviso el correo a las ocho.', a: ['i usually check my email at eight', 'i usually check the email at eight', "i usually check my emails at eight"],
      why: 'Los adverbios de frecuencia (usually, always, never) van ANTES del verbo principal.' },
    { t: 'order', words: ['I', 'never', 'answer', 'calls', 'after', 'seven.'], a: 'I never answer calls after seven.',
      why: '"Never" ya es negativo: no se dice "I don’t never answer".' },
    { t: 'listen', audio: "She usually sends the report on Friday afternoon.", opts: ['Ella suele enviar el informe el viernes por la tarde.', 'Ella envió el informe el viernes por la tarde.', 'Ella nunca envía el informe los viernes.'], a: 0,
      why: '"Sends" (con -s) es presente habitual. "Sent" sería pasado.' },
    { t: 'mc', q: '¿Cuál significa "a veces"?', opts: ['often', 'sometimes', 'always'], a: 1,
      why: 'Escala de frecuencia: never < rarely < sometimes < often < usually < always.' },
    { t: 'tr', q: '¿Con qué frecuencia viajas por trabajo?', a: ['how often do you travel for work', 'how often do you travel for business'],
      why: '"How often" es la pregunta estándar de frecuencia. "For work" o "for business" ambas funcionan.' }
  ]
},

{
  id: 'a2-5', level: 'A2', title: 'En el trabajo: clientes y pedidos',
  goal: 'Manejar el vocabulario esencial de ventas y comercio exterior.',
  grammar: {
    title: 'Can / Could para pedir con cortesía',
    es: 'CAN es directo y neutro; COULD es más suave y educado. En negocios, "Could you...?" suena profesional. Añade "please" y suena aún mejor. Después de can/could el verbo va en forma base, sin "to".',
    examples: [
      { en: "Could you send me a quotation, please?", es: '¿Podría enviarme una cotización, por favor?' },
      { en: "Can we schedule a meeting?", es: '¿Podemos agendar una reunión?' },
      { en: "I can offer you a small discount.", es: 'Puedo ofrecerle un pequeño descuento.' }
    ]
  },
  vocab: [
    { en: 'meeting', es: 'reunión' },
    { en: 'client / customer', es: 'cliente' },
    { en: 'supplier', es: 'proveedor' },
    { en: 'quotation (quote)', es: 'cotización' },
    { en: 'price', es: 'precio' },
    { en: 'discount', es: 'descuento' },
    { en: 'purchase order', es: 'orden de compra' },
    { en: 'invoice', es: 'factura' },
    { en: 'delivery', es: 'entrega' },
    { en: 'shipment', es: 'envío / embarque' },
    { en: 'deadline', es: 'fecha límite' },
    { en: 'to follow up', es: 'dar seguimiento' },
    { en: 'target', es: 'meta / objetivo' },
    { en: 'sales', es: 'ventas' },
    { en: 'budget', es: 'presupuesto' },
    { en: 'stock', es: 'inventario / existencias' }
  ],
  phrases: [
    { en: "Could you send me a quotation?", es: '¿Podría enviarme una cotización?' },
    { en: "I'll follow up with you tomorrow.", es: 'Le doy seguimiento mañana.' },
    { en: "We need it by Friday.", es: 'Lo necesitamos para el viernes.' },
    { en: "What's your best price?", es: '¿Cuál es su mejor precio?' },
    { en: "Let me check and get back to you.", es: 'Déjeme revisar y le respondo.' },
    { en: "The order is ready for shipment.", es: 'El pedido está listo para el envío.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál es la forma MÁS cortés de pedir el precio?', opts: ['Send me the price.', 'Could you send me your price list, please?', 'I want the price now.'], a: 1,
      why: '"Could you...please?" es el registro estándar en correos y llamadas de negocios.' },
    { t: 'fill', q: "We need the goods ___ Friday at the latest.", a: ['by'],
      why: 'BY = "a más tardar / para". "Until Friday" significaría que la acción dura hasta el viernes.' },
    { t: 'tr', q: 'Le daré seguimiento la próxima semana.', a: ["i'll follow up next week", 'i will follow up next week', "i'll follow up with you next week"],
      why: '"Follow up" es el phrasal verb exacto para dar seguimiento comercial.' },
    { t: 'order', words: ['Can', 'you', 'confirm', 'the', 'purchase', 'order?'], a: 'Can you confirm the purchase order?',
      why: 'Después de can/could el verbo va en base: confirm (no "to confirm", no "confirms").' },
    { t: 'listen', audio: "The supplier says the shipment will be delayed by two weeks.", opts: ['El proveedor dice que el envío se retrasará dos semanas.', 'El proveedor dice que el envío llega en dos semanas.', 'El cliente dice que el pedido se canceló.'], a: 0,
      why: '"Delayed" = retrasado. Ojo: "supplier" (proveedor) vs "customer" (cliente).' },
    { t: 'mc', q: '"Invoice" significa...', opts: ['cotización', 'factura', 'inventario'], a: 1,
      why: 'Quotation = cotización (antes de vender). Invoice = factura (después de vender).' },
    { t: 'tr', q: 'Necesito una cotización para quinientas unidades.', a: ['i need a quotation for five hundred units', 'i need a quote for five hundred units', 'i need a quotation for 500 units'],
      why: 'En el día a día "quote" es la forma corta y muy usada de "quotation".' }
  ]
},

/* ══════════════════ B1 ══════════════════ */
{
  id: 'b1-6', level: 'B1', title: 'Hablar del pasado',
  goal: 'Contar lo que pasó: reuniones, ventas, viajes.',
  grammar: {
    title: 'Pasado simple: regulares e irregulares',
    es: 'Regulares: verbo + -ed (called, visited). Irregulares hay que memorizarlos (go→went, make→made, sell→sold). En preguntas y negaciones usas DID y el verbo vuelve a la base: "Did you call?", "I didn’t call". Error típico: "I didn’t called" ❌',
    examples: [
      { en: "I met the client last Tuesday.", es: 'Me reuní con el cliente el martes pasado.' },
      { en: "We didn't receive the payment.", es: 'No recibimos el pago.' },
      { en: "How did the meeting go?", es: '¿Cómo fue la reunión?' }
    ]
  },
  vocab: [
    { en: 'went (go)', es: 'fui / fue (ir)' },
    { en: 'made (make)', es: 'hice (hacer)' },
    { en: 'sold (sell)', es: 'vendí (vender)' },
    { en: 'bought (buy)', es: 'compré (comprar)' },
    { en: 'sent (send)', es: 'envié (enviar)' },
    { en: 'met (meet)', es: 'me reuní (reunirse)' },
    { en: 'took (take)', es: 'tomé (tomar)' },
    { en: 'gave (give)', es: 'di (dar)' },
    { en: 'last week', es: 'la semana pasada' },
    { en: 'ago', es: 'hace (tiempo)' },
    { en: 'then', es: 'entonces / luego' },
    { en: 'finally', es: 'finalmente' },
    { en: 'to close a deal', es: 'cerrar un trato' }
  ],
  phrases: [
    { en: "I met the client last Tuesday.", es: 'Me reuní con el cliente el martes pasado.' },
    { en: "We sent the quotation two days ago.", es: 'Enviamos la cotización hace dos días.' },
    { en: "They didn't confirm the order.", es: 'No confirmaron el pedido.' },
    { en: "How was the meeting?", es: '¿Cómo estuvo la reunión?' },
    { en: "It went really well.", es: 'Salió muy bien.' },
    { en: "We closed the deal on Friday.", es: 'Cerramos el trato el viernes.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la frase correcta.', opts: ["I didn't sent the invoice", "I didn't send the invoice", "I didn't sended the invoice"], a: 1,
      why: 'Con DIDN’T el verbo vuelve a su forma base: send. El pasado ya lo marca "didn’t".' },
    { t: 'fill', q: "We ___ the contract three weeks ago.", a: ['signed'],
      why: '"Sign" es regular: signed. "Ago" siempre exige pasado simple.' },
    { t: 'tr', q: 'Visité al cliente la semana pasada.', a: ['i visited the client last week', 'i visited the customer last week'],
      why: '"Last week" (sin "the"): no se dice "the last week" para referirse a la semana pasada.' },
    { t: 'order', words: ['Did', 'they', 'confirm', 'the', 'order', 'yesterday?'], a: 'Did they confirm the order yesterday?',
      why: 'Pregunta en pasado: Did + sujeto + verbo base. Nunca "Did they confirmed".' },
    { t: 'listen', audio: "We sold two hundred units last month, but we didn't reach the target.", opts: ['Vendimos doscientas unidades el mes pasado, pero no alcanzamos la meta.', 'Vendemos doscientas unidades al mes y alcanzamos la meta.', 'Vendimos doscientas unidades el mes pasado y superamos la meta.'], a: 0,
      why: '"Sold" es el pasado irregular de "sell". "Reach the target" = alcanzar la meta.' },
    { t: 'mc', q: '¿Cómo preguntas "¿Cómo te fue en la reunión?"', opts: ['How was the meeting?', 'How is the meeting?', 'How the meeting was?'], a: 0,
      why: 'Con to be en pasado no se usa "did": How was...? El verbo va antes del sujeto.' },
    { t: 'tr', q: 'Hablamos con el proveedor hace tres días.', a: ['we talked to the supplier three days ago', 'we spoke to the supplier three days ago', 'we spoke with the supplier three days ago'],
      why: '"Ago" va SIEMPRE al final: three days ago, no "ago three days".' }
  ]
},

{
  id: 'b1-7', level: 'B1', title: 'Planes y futuro',
  goal: 'Hablar de planes, agendar y comprometerte a algo.',
  grammar: {
    title: 'Will vs. going to vs. presente continuo',
    es: 'GOING TO = plan ya decidido ("I’m going to visit the client"). WILL = decisión en el momento o promesa ("I’ll send it right now"). PRESENTE CONTINUO = cita ya agendada ("I’m meeting him at 3").',
    examples: [
      { en: "I'm going to visit the client on Monday.", es: 'Voy a visitar al cliente el lunes.' },
      { en: "I'll send you the details today.", es: 'Te envío los detalles hoy.' },
      { en: "We're launching the product in May.", es: 'Lanzamos el producto en mayo.' }
    ]
  },
  vocab: [
    { en: 'to schedule', es: 'agendar / programar' },
    { en: 'to arrange', es: 'organizar / coordinar' },
    { en: 'to confirm', es: 'confirmar' },
    { en: 'to postpone', es: 'posponer' },
    { en: 'to cancel', es: 'cancelar' },
    { en: 'to launch', es: 'lanzar' },
    { en: 'forecast', es: 'pronóstico / proyección' },
    { en: 'lead time', es: 'tiempo de entrega' },
    { en: 'next quarter', es: 'el próximo trimestre' },
    { en: 'soon', es: 'pronto' },
    { en: 'as soon as possible', es: 'lo antes posible' },
    { en: 'in advance', es: 'con anticipación' }
  ],
  phrases: [
    { en: "I'm going to visit the client on Monday.", es: 'Voy a visitar al cliente el lunes.' },
    { en: "I'll get back to you as soon as possible.", es: 'Le respondo lo antes posible.' },
    { en: "Are you going to attend the meeting?", es: '¿Vas a asistir a la reunión?' },
    { en: "Let's postpone it until next week.", es: 'Pospongámoslo hasta la próxima semana.' },
    { en: "We're meeting the supplier at three.", es: 'Nos reunimos con el proveedor a las tres.' },
    { en: "I'll take care of it.", es: 'Yo me encargo.' }
  ],
  exercises: [
    { t: 'mc', q: 'El cliente pregunta algo y tú decides responder ahora mismo. ¿Qué dices?', opts: ["I'm going to check it", "I'll check it right now", "I check it now"], a: 1,
      why: 'WILL para decisiones espontáneas del momento. GOING TO es para planes ya pensados antes.' },
    { t: 'fill', q: "We ___ going to launch the new line in June.", a: ['are'],
      why: 'La estructura es: be + going to + verbo. Con "we" el verbo be es "are".' },
    { t: 'tr', q: 'Te enviaré la factura hoy mismo.', a: ["i'll send you the invoice today", 'i will send you the invoice today', "i'll send the invoice today"],
      why: 'La promesa inmediata se hace con WILL, no con "going to".' },
    { t: 'order', words: ['Are', 'you', 'going', 'to', 'attend', 'the', 'trade', 'fair?'], a: 'Are you going to attend the trade fair?',
      why: 'Pregunta con going to: Are + sujeto + going to + verbo. "Trade fair" = feria comercial.' },
    { t: 'listen', audio: "I'm meeting the supplier tomorrow, so I'll confirm the lead time after that.", opts: ['Me reúno mañana con el proveedor, así que confirmaré el tiempo de entrega después.', 'Me reuní ayer con el proveedor y confirmé el tiempo de entrega.', 'Voy a llamar al proveedor para cancelar la entrega.'], a: 0,
      why: 'Presente continuo ("I’m meeting") para una cita agendada + will para lo que decides ahora.' },
    { t: 'mc', q: '"Lead time" significa...', opts: ['tiempo de entrega', 'hora punta', 'tiempo libre'], a: 0,
      why: 'Es un término clave en comercio exterior: el tiempo desde el pedido hasta la entrega.' }
  ]
},

{
  id: 'b1-8', level: 'B1', title: 'Present perfect: experiencias',
  goal: 'Hablar de tu experiencia y de resultados que siguen vigentes.',
  grammar: {
    title: 'Present perfect vs. pasado simple',
    es: 'PRESENT PERFECT (have/has + participio) para experiencias sin fecha y para cosas que siguen conectadas con el presente: "I’ve worked here for five years" (sigo aquí). PASADO SIMPLE cuando dices CUÁNDO: "I worked there in 2019". Si aparece una fecha concreta, usa pasado simple.',
    examples: [
      { en: "I've worked here for five years.", es: 'Llevo cinco años trabajando aquí.' },
      { en: "Have you ever been to the US?", es: '¿Has estado alguna vez en EE. UU.?' },
      { en: "We haven't received the payment yet.", es: 'Todavía no hemos recibido el pago.' }
    ]
  },
  vocab: [
    { en: 'ever', es: 'alguna vez' },
    { en: 'never', es: 'nunca' },
    { en: 'already', es: 'ya' },
    { en: 'yet', es: 'todavía / ya (en preguntas y negativas)' },
    { en: 'just', es: 'acabar de' },
    { en: 'since', es: 'desde (un punto en el tiempo)' },
    { en: 'for', es: 'durante (un período)' },
    { en: 'experience', es: 'experiencia' },
    { en: 'to achieve', es: 'lograr' },
    { en: 'to increase', es: 'aumentar' },
    { en: 'to improve', es: 'mejorar' },
    { en: 'to reach', es: 'alcanzar' },
    { en: 'growth', es: 'crecimiento' }
  ],
  phrases: [
    { en: "I've worked in sales for ten years.", es: 'Llevo diez años trabajando en ventas.' },
    { en: "Have you ever worked with Asian suppliers?", es: '¿Has trabajado alguna vez con proveedores asiáticos?' },
    { en: "We haven't received the payment yet.", es: 'Todavía no hemos recibido el pago.' },
    { en: "I've just sent you the invoice.", es: 'Acabo de enviarte la factura.' },
    { en: "Sales have increased by ten percent.", es: 'Las ventas han aumentado un diez por ciento.' },
    { en: "I've been with the company since 2019.", es: 'Estoy en la empresa desde 2019.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la correcta: llevas 5 años en la empresa y sigues ahí.', opts: ['I work here since five years', "I've worked here for five years", 'I worked here for five years'], a: 1,
      why: 'Present perfect + FOR (duración). "Since" se usa con un punto de inicio: since 2019.' },
    { t: 'fill', q: "We haven't signed the contract ___.", a: ['yet'],
      why: 'YET va al final en frases negativas y preguntas = "todavía / aún".' },
    { t: 'fill', q: "I have worked here ___ 2019.", a: ['since'],
      why: 'SINCE + momento concreto (2019, March, Monday). FOR + duración (five years, two months).' },
    { t: 'tr', q: '¿Has visitado alguna vez la feria de Cantón?', a: ['have you ever visited the canton fair', 'have you ever been to the canton fair'],
      why: 'EVER va entre el sujeto y el participio: "Have you ever visited...?"' },
    { t: 'order', words: ['Sales', 'have', 'increased', 'by', 'fifteen', 'percent.'], a: 'Sales have increased by fifteen percent.',
      why: 'Para porcentajes de cambio se usa BY: increased by 15%, dropped by 5%.' },
    { t: 'listen', audio: "I've just spoken to the customer and they've already approved the quotation.", opts: ['Acabo de hablar con el cliente y ya aprobaron la cotización.', 'Voy a hablar con el cliente para que apruebe la cotización.', 'Hablé con el cliente pero no aprobó la cotización.'], a: 0,
      why: 'JUST = acabar de. ALREADY = ya. Ambos son señales típicas del present perfect.' }
  ]
},

{
  id: 'b1-9', level: 'B1', title: 'Opiniones y acuerdos',
  goal: 'Dar tu opinión, estar de acuerdo y discrepar con elegancia.',
  grammar: {
    title: 'Conectores para argumentar',
    es: 'HOWEVER (sin embargo) y ALTHOUGH (aunque) unen ideas opuestas. Although va al inicio de una frase con sujeto y verbo; However va aparte, con coma: "However, ...". BECAUSE explica el motivo; SO introduce la consecuencia.',
    examples: [
      { en: "I like the price. However, the lead time is too long.", es: 'Me gusta el precio. Sin embargo, el plazo es muy largo.' },
      { en: "Although it's expensive, the quality is excellent.", es: 'Aunque es caro, la calidad es excelente.' },
      { en: "The price went up, so we changed suppliers.", es: 'El precio subió, así que cambiamos de proveedor.' }
    ]
  },
  vocab: [
    { en: 'to agree', es: 'estar de acuerdo' },
    { en: 'to disagree', es: 'discrepar' },
    { en: 'to suggest', es: 'sugerir' },
    { en: 'opinion', es: 'opinión' },
    { en: 'point of view', es: 'punto de vista' },
    { en: 'however', es: 'sin embargo' },
    { en: 'although', es: 'aunque' },
    { en: 'actually', es: 'en realidad' },
    { en: 'to be honest', es: 'para ser sincero' },
    { en: 'it depends', es: 'depende' },
    { en: 'that makes sense', es: 'eso tiene sentido' },
    { en: 'fair enough', es: 'me parece justo' }
  ],
  phrases: [
    { en: "In my opinion, we should wait.", es: 'En mi opinión, deberíamos esperar.' },
    { en: "I see your point, but I'd do it differently.", es: 'Entiendo tu punto, pero yo lo haría distinto.' },
    { en: "I completely agree with you.", es: 'Estoy totalmente de acuerdo contigo.' },
    { en: "I'm afraid I don't agree.", es: 'Me temo que no estoy de acuerdo.' },
    { en: "What do you think about this proposal?", es: '¿Qué opinas de esta propuesta?' },
    { en: "That makes sense to me.", es: 'Eso me hace sentido.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál es la forma MÁS diplomática de discrepar?', opts: ["You're wrong.", "I'm afraid I see it differently.", "No, that's not true."], a: 1,
      why: '"I’m afraid..." suaviza el desacuerdo. Es el recurso más útil en reuniones de negocios.' },
    { t: 'fill', q: "I like the offer. ___, the payment terms are difficult.", a: ['however'],
      why: 'HOWEVER inicia una frase nueva y va seguido de coma. Une dos ideas contrarias.' },
    { t: 'tr', q: 'En mi opinión, el precio es demasiado alto.', a: ['in my opinion the price is too high', 'in my opinion, the price is too high'],
      why: 'Se dice "IN my opinion", no "for my opinion". Y "too high" (demasiado), no "very high".' },
    { t: 'order', words: ['I', 'see', 'your', 'point,', 'but', 'I', 'disagree.'], a: 'I see your point, but I disagree.',
      why: 'Primero reconoces al otro, luego discrepas. Es la fórmula estándar del inglés profesional.' },
    { t: 'listen', audio: "To be honest, I think we should look for another supplier.", opts: ['Para ser sincero, creo que deberíamos buscar otro proveedor.', 'Para ser sincero, creo que el proveedor tiene razón.', 'Honestamente, ya encontramos otro proveedor.'], a: 0,
      why: '"To be honest" prepara al oyente para una opinión franca. "Should" = deberíamos.' },
    { t: 'mc', q: '"Fair enough" se usa para...', opts: ['aceptar el argumento del otro', 'pedir un precio justo', 'decir que algo es suficiente'], a: 0,
      why: 'Es una expresión muy natural: "de acuerdo, lo acepto / me parece razonable".' }
  ]
},

/* ══════════════════ B2 ══════════════════ */
{
  id: 'b2-10', level: 'B2', title: 'Condicionales',
  goal: 'Poner condiciones en una negociación y hablar de hipótesis.',
  grammar: {
    title: 'Los tres condicionales que más vas a usar',
    es: 'PRIMERO (real, futuro): If + presente, will → "If you order 500 units, we will offer a discount". SEGUNDO (hipotético): If + pasado, would → "If we had more time, we would test it". TERCERO (pasado imposible): If + had + participio, would have → "If we had known, we would have called". Nunca pongas WILL después de IF.',
    examples: [
      { en: "If you order 500 units, we'll give you 10% off.", es: 'Si pide 500 unidades, le damos un 10% de descuento.' },
      { en: "If I were you, I'd negotiate the terms.", es: 'Yo que tú, negociaría las condiciones.' },
      { en: "Unless we receive the payment, we can't ship.", es: 'A menos que recibamos el pago, no podemos enviar.' }
    ]
  },
  vocab: [
    { en: 'unless', es: 'a menos que' },
    { en: 'otherwise', es: 'de lo contrario' },
    { en: 'provided that', es: 'siempre que' },
    { en: 'in case', es: 'por si acaso' },
    { en: 'to depend on', es: 'depender de' },
    { en: 'to guarantee', es: 'garantizar' },
    { en: 'to commit', es: 'comprometerse' },
    { en: 'requirement', es: 'requisito' },
    { en: 'upfront', es: 'por adelantado' },
    { en: 'flexible', es: 'flexible' },
    { en: 'willing to', es: 'dispuesto a' }
  ],
  phrases: [
    { en: "If you increase the volume, we can improve the price.", es: 'Si aumenta el volumen, podemos mejorar el precio.' },
    { en: "Unless we get the deposit, production won't start.", es: 'A menos que recibamos el anticipo, no empieza la producción.' },
    { en: "If I were you, I'd confirm it in writing.", es: 'Yo que tú, lo confirmaría por escrito.' },
    { en: "We'd be willing to review the terms.", es: 'Estaríamos dispuestos a revisar las condiciones.' },
    { en: "That depends on the payment terms.", es: 'Eso depende de las condiciones de pago.' },
    { en: "Provided that you pay 30% upfront, we can start.", es: 'Siempre que pague el 30% por adelantado, podemos empezar.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la correcta.', opts: ['If you will order more, we give a discount', "If you order more, we'll give you a discount", "If you order more, we give discount"], a: 1,
      why: 'Regla de oro: después de IF nunca va WILL. La condición va en presente y el resultado con will.' },
    { t: 'fill', q: "If I ___ you, I'd ask for a written confirmation.", a: ['were', 'was'],
      why: 'La forma estándar es "If I were you" (subjuntivo). Es la fórmula fija para dar consejos.' },
    { t: 'tr', q: 'Si tuviéramos más tiempo, revisaríamos el contrato.', a: ['if we had more time we would review the contract', "if we had more time, we'd review the contract", 'if we had more time, we would review the contract'],
      why: 'Segundo condicional: If + pasado simple, would + verbo base. Es hipotético, no real.' },
    { t: 'order', words: ['Unless', 'they', 'confirm', 'today,', 'we', 'will', 'cancel', 'the', 'order.'], a: 'Unless they confirm today, we will cancel the order.',
      why: 'UNLESS ya significa "si no", así que el verbo va en afirmativo: unless they confirm (no "unless they don’t confirm").' },
    { t: 'listen', audio: "If you could give us better payment terms, we would be able to increase the volume.", opts: ['Si pudiera darnos mejores condiciones de pago, podríamos aumentar el volumen.', 'Si nos da mejores condiciones de pago, aumentamos el volumen ahora.', 'Aunque nos dio mejores condiciones, no aumentamos el volumen.'], a: 0,
      why: '"Could / would" hacen la propuesta hipotética y por eso más suave y negociable.' },
    { t: 'mc', q: '"Provided that" significa...', opts: ['aunque', 'siempre que / con la condición de que', 'proveído por'], a: 1,
      why: 'Es un sinónimo formal de "if", muy común en contratos y condiciones comerciales.' }
  ]
},

{
  id: 'b2-11', level: 'B2', title: 'Phrasal verbs y expresiones',
  goal: 'Sonar natural con los verbos que los nativos usan todo el tiempo.',
  grammar: {
    title: 'Phrasal verbs separables e inseparables',
    es: 'Separables: el objeto puede ir en medio ("call the meeting off" / "call off the meeting"), pero si es pronombre DEBE ir en medio ("call it off" ✔, "call off it" ❌). Inseparables: nunca se separan ("look into the problem", nunca "look the problem into").',
    examples: [
      { en: "Let me look into it and get back to you.", es: 'Déjame investigarlo y te respondo.' },
      { en: "They called the meeting off.", es: 'Cancelaron la reunión.' },
      { en: "I'll keep you in the loop.", es: 'Te mantengo al tanto.' }
    ]
  },
  vocab: [
    { en: 'to follow up', es: 'dar seguimiento' },
    { en: 'to catch up', es: 'ponerse al día' },
    { en: 'to look into', es: 'investigar / revisar' },
    { en: 'to sort out', es: 'resolver' },
    { en: 'to bring up', es: 'sacar un tema' },
    { en: 'to call off', es: 'cancelar' },
    { en: 'to put off', es: 'posponer' },
    { en: 'to run out of', es: 'quedarse sin' },
    { en: 'to come up with', es: 'idear / proponer' },
    { en: 'to get back to', es: 'responder a alguien' },
    { en: 'to touch base', es: 'contactar brevemente' },
    { en: 'to keep in the loop', es: 'mantener al tanto' },
    { en: 'to figure out', es: 'averiguar / entender' }
  ],
  phrases: [
    { en: "Let me look into it.", es: 'Déjame revisarlo.' },
    { en: "We ran out of stock last week.", es: 'Nos quedamos sin inventario la semana pasada.' },
    { en: "Can we touch base next Monday?", es: '¿Nos ponemos en contacto el próximo lunes?' },
    { en: "I'll keep you in the loop.", es: 'Te mantengo al tanto.' },
    { en: "They called the meeting off.", es: 'Cancelaron la reunión.' },
    { en: "We need to sort this out today.", es: 'Necesitamos resolver esto hoy.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la forma correcta con pronombre.', opts: ['Call off it', 'Call it off', 'Off call it'], a: 1,
      why: 'Con phrasal verbs separables, el pronombre SIEMPRE va en medio: call it off, put it off, sort it out.' },
    { t: 'fill', q: "We ran ___ of stock before the end of the month.", a: ['out'],
      why: '"Run out of" = quedarse sin. Es inseparable: run out of stock, run out of time.' },
    { t: 'tr', q: 'Le doy seguimiento y le respondo mañana.', a: ["i'll follow up and get back to you tomorrow", 'i will follow up and get back to you tomorrow'],
      why: '"Get back to you" es la forma natural de decir "le respondo / le contesto".' },
    { t: 'order', words: ['I', 'need', 'to', 'look', 'into', 'the', 'delay.'], a: 'I need to look into the delay.',
      why: '"Look into" es inseparable: el objeto va siempre después del phrasal verb completo.' },
    { t: 'listen', audio: "Let's put the decision off until we come up with a better proposal.", opts: ['Pospongamos la decisión hasta que se nos ocurra una propuesta mejor.', 'Tomemos la decisión ahora con la propuesta que tenemos.', 'Cancelemos la decisión porque la propuesta es mala.'], a: 0,
      why: '"Put off" = posponer · "Come up with" = idear, se nos ocurre.' },
    { t: 'mc', q: '"Touch base" significa...', opts: ['tocar la base', 'ponerse en contacto brevemente', 'llegar a un acuerdo'], a: 1,
      why: 'Viene del béisbol. En negocios es una forma casual y muy común de proponer un contacto rápido.' }
  ]
},

{
  id: 'b2-12', level: 'B2', title: 'Negociar y presentar',
  goal: 'Negociar precio y condiciones, y presentar con seguridad.',
  grammar: {
    title: 'Lenguaje diplomático (hedging)',
    es: 'En negocios el inglés suaviza casi todo. En vez de "The price is high" dices "The price is a bit higher than we expected". Recursos clave: a bit / slightly / I’m afraid / would / might / it seems. Suenan profesionales, no débiles.',
    examples: [
      { en: "That's slightly above our budget.", es: 'Eso está un poco por encima de nuestro presupuesto.' },
      { en: "Would you consider a longer payment term?", es: '¿Consideraría un plazo de pago más largo?' },
      { en: "I'm afraid we can't go below that price.", es: 'Me temo que no podemos bajar de ese precio.' }
    ]
  },
  vocab: [
    { en: 'to negotiate', es: 'negociar' },
    { en: 'terms and conditions', es: 'términos y condiciones' },
    { en: 'counteroffer', es: 'contraoferta' },
    { en: 'to compromise', es: 'llegar a un punto medio' },
    { en: 'margin', es: 'margen' },
    { en: 'volume', es: 'volumen' },
    { en: 'payment terms', es: 'condiciones de pago' },
    { en: 'Incoterms', es: 'Incoterms' },
    { en: 'FOB', es: 'Free On Board (libre a bordo)' },
    { en: 'CIF', es: 'Cost, Insurance and Freight' },
    { en: 'customs', es: 'aduana' },
    { en: 'freight', es: 'flete' },
    { en: 'to walk through', es: 'explicar paso a paso' },
    { en: 'to sum up', es: 'resumir' }
  ],
  phrases: [
    { en: "We'd be willing to lower the price if you increase the volume.", es: 'Estaríamos dispuestos a bajar el precio si aumenta el volumen.' },
    { en: "That's slightly above our budget.", es: 'Eso está un poco por encima de nuestro presupuesto.' },
    { en: "Would you consider 60-day payment terms?", es: '¿Consideraría un pago a 60 días?' },
    { en: "Let me walk you through the numbers.", es: 'Déjeme explicarle las cifras.' },
    { en: "To sum up, we have three options.", es: 'En resumen, tenemos tres opciones.' },
    { en: "Can we meet halfway?", es: '¿Podemos llegar a un punto medio?' }
  ],
  exercises: [
    { t: 'mc', q: 'El precio es alto. ¿Cómo lo dices en una negociación profesional?', opts: ['Your price is very expensive.', "That's slightly above what we had in mind.", 'No, too much money.'], a: 1,
      why: 'El hedging ("slightly", "what we had in mind") mantiene la relación y deja la puerta abierta a negociar.' },
    { t: 'fill', q: "We'd be ___ to review the terms.", a: ['willing'],
      why: '"Be willing to" = estar dispuesto a. Es una fórmula clave para ofrecer flexibilidad.' },
    { t: 'tr', q: 'Déjeme explicarle las cifras.', a: ['let me walk you through the numbers', 'let me walk you through the figures'],
      why: '"Walk someone through" = llevar a alguien paso a paso por algo. Muy usado en presentaciones.' },
    { t: 'order', words: ['Would', 'you', 'consider', 'a', 'longer', 'payment', 'term?'], a: 'Would you consider a longer payment term?',
      why: '"Would you consider...?" es más suave que "Can you give me...?" y suele conseguir mejor respuesta.' },
    { t: 'listen', audio: "I'm afraid we can't go below that price, but we could improve the delivery time.", opts: ['Me temo que no podemos bajar de ese precio, pero podríamos mejorar el plazo de entrega.', 'No podemos bajar el precio ni mejorar el plazo de entrega.', 'Podemos bajar el precio si mejora el plazo de entrega.'], a: 0,
      why: 'Técnica clásica: cierras una puerta ("I’m afraid...") y abres otra ("but we could...").' },
    { t: 'mc', q: 'En FOB, el vendedor entrega la mercancía...', opts: ['en la puerta del comprador', 'a bordo del buque en el puerto de origen', 'en la aduana de destino'], a: 1,
      why: 'FOB (Free On Board): el riesgo pasa al comprador una vez la carga está a bordo en el puerto de embarque.' }
  ]
},

{
  id: 'b2-13', level: 'B2', title: 'Entrevista y debate',
  goal: 'Presentarte con impacto y defender tus ideas.',
  grammar: {
    title: 'Mezclar tiempos con naturalidad (método STAR)',
    es: 'En una entrevista mezclas tiempos sin darte cuenta: presente para lo que haces ahora ("I manage a team of eight"), present perfect para tu trayectoria ("I’ve worked in sales for ten years") y pasado simple para ejemplos concretos ("Last year we increased sales by 18%"). Estructura tus respuestas con STAR: Situation, Task, Action, Result.',
    examples: [
      { en: "I currently manage a team of eight sales reps.", es: 'Actualmente dirijo un equipo de ocho vendedores.' },
      { en: "I've been in foreign trade for over a decade.", es: 'Llevo más de una década en comercio exterior.' },
      { en: "As a result, we increased coverage by 20%.", es: 'Como resultado, aumentamos la cobertura un 20%.' }
    ]
  },
  vocab: [
    { en: 'strength', es: 'fortaleza' },
    { en: 'weakness', es: 'debilidad' },
    { en: 'challenge', es: 'reto' },
    { en: 'responsibility', es: 'responsabilidad' },
    { en: 'achievement', es: 'logro' },
    { en: 'to lead', es: 'liderar' },
    { en: 'to deliver', es: 'cumplir / entregar resultados' },
    { en: 'stakeholder', es: 'parte interesada' },
    { en: 'KPI', es: 'indicador clave' },
    { en: 'turnover', es: 'facturación / rotación' },
    { en: 'to overcome', es: 'superar' },
    { en: 'track record', es: 'trayectoria comprobada' },
    { en: 'to stand out', es: 'destacar' }
  ],
  phrases: [
    { en: "My biggest strength is building long-term client relationships.", es: 'Mi mayor fortaleza es construir relaciones a largo plazo con los clientes.' },
    { en: "In my previous role, I was responsible for the whole southern region.", es: 'En mi puesto anterior, era responsable de toda la región sur.' },
    { en: "One challenge I faced was a drop in portfolio coverage.", es: 'Un reto que enfrenté fue una caída en la cobertura de cartera.' },
    { en: "As a result, we grew sales by eighteen percent.", es: 'Como resultado, crecimos las ventas un dieciocho por ciento.' },
    { en: "Where do you see yourself in five years?", es: '¿Dónde te ves en cinco años?' },
    { en: "I'd say my track record speaks for itself.", es: 'Diría que mi trayectoria habla por sí sola.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál suena mejor en una entrevista?', opts: ['I am working here since 2019', "I've been working here since 2019", 'I work here since 2019'], a: 1,
      why: 'Con SINCE se usa present perfect (continuous). "I am working since" es un error muy frecuente.' },
    { t: 'fill', q: "In my previous role, I was ___ for a team of eight.", a: ['responsible'],
      why: '"Be responsible FOR" (no "responsible of"). Es la preposición correcta.' },
    { t: 'tr', q: 'Como resultado, aumentamos las ventas un veinte por ciento.', a: ['as a result we increased sales by twenty percent', 'as a result, we increased sales by twenty percent', 'as a result we grew sales by twenty percent'],
      why: '"As a result" cierra una respuesta STAR con fuerza. Recuerda BY para el porcentaje.' },
    { t: 'order', words: ['What', 'would', 'you', 'say', 'is', 'your', 'main', 'strength?'], a: 'What would you say is your main strength?',
      why: 'Pregunta indirecta: después de "What would you say" el orden vuelve a ser normal (is your...).' },
    { t: 'listen', audio: "One challenge I faced was a drop in coverage, so I redesigned the visit plan and we recovered it in three months.", opts: ['Un reto que enfrenté fue una caída en la cobertura, así que rediseñé el plan de visitas y la recuperamos en tres meses.', 'Un reto fue el aumento de cobertura, por eso cambiamos el plan de visitas.', 'Enfrenté una caída en la cobertura y todavía no la recuperamos.'], a: 0,
      why: 'Respuesta STAR completa: reto (challenge), acción (redesigned) y resultado (recovered).' },
    { t: 'mc', q: '"Track record" significa...', opts: ['registro de pista', 'trayectoria comprobada', 'seguimiento de pedidos'], a: 1,
      why: 'Es tu historial de resultados. "A proven track record" aparece en casi toda oferta de empleo.' }
  ]
}
];

/* ══════════════════ ESCENARIOS DE CONVERSACIÓN ══════════════════ */

const SCENARIOS = [
  {
    id: 'meet', level: 'A1', title: 'Conocer a alguien', icon: 'user',
    desc: 'Preséntate y conoce a alguien nuevo.',
    role: 'Alex, una persona amable que acaba de conocer al estudiante en un evento.',
    persona: 'You are Alex, a friendly person meeting the student for the first time at a networking event. Keep it very simple and warm.',
    opener: "Hi! I'm Alex. Nice to meet you. What's your name?",
    fallback: [
      "Nice to meet you! Where are you from?",
      "Oh, that sounds great. And what do you do?",
      "Interesting! Do you like your job?",
      "Nice. Well, it was really nice talking to you. See you around!"
    ]
  },
  {
    id: 'cafe', level: 'A1', title: 'En un café', icon: 'cup',
    desc: 'Pide algo de comer y de beber.',
    role: 'Un barista en una cafetería de Estados Unidos.',
    persona: 'You are a barista in a US coffee shop. Be polite and quick, like a real barista.',
    opener: "Good morning! What can I get for you today?",
    fallback: [
      "Sure thing. Would you like that hot or iced?",
      "Great. Anything to eat with that?",
      "Perfect. That'll be four fifty. Cash or card?",
      "Thank you! Have a great day."
    ]
  },
  {
    id: 'airport', level: 'A2', title: 'En el aeropuerto', icon: 'plane',
    desc: 'Check-in, migración y cómo pedir ayuda.',
    role: 'Un agente de aerolínea en el mostrador de check-in.',
    persona: 'You are an airline agent at a check-in counter. Be efficient and polite, ask standard travel questions.',
    opener: "Good afternoon. May I see your passport and ticket, please?",
    fallback: [
      "Thank you. Are you checking any bags today?",
      "Alright. Window or aisle seat?",
      "Here's your boarding pass. Your gate is B12 and boarding starts at 3:40.",
      "Have a nice flight!"
    ]
  },
  {
    id: 'meeting', level: 'A2', title: 'Reunión de trabajo', icon: 'briefcase',
    desc: 'Participa en una reunión de equipo y da tu reporte.',
    role: 'Sarah, gerente regional que dirige la reunión semanal.',
    persona: 'You are Sarah, a regional manager running a weekly sales meeting. Ask the student about numbers, clients and next steps.',
    opener: "Good morning, everyone. Let's start. Could you give us a quick update on your region?",
    fallback: [
      "Thanks. How are we doing against the monthly target?",
      "I see. What's the main issue you're facing right now?",
      "Okay. What's your plan for the next two weeks?",
      "Sounds good. Let's review it again on Friday. Thanks!"
    ]
  },
  {
    id: 'customer', level: 'B1', title: 'Hablar con un cliente', icon: 'handshake',
    desc: 'Atiende a un cliente y resuelve su necesidad.',
    role: 'Un cliente interesado en tus productos, con dudas sobre precio y entrega.',
    persona: 'You are a potential customer interested in the student\'s products. Ask about price, delivery time and payment terms. Be reasonable but curious.',
    opener: "Hello, thanks for taking my call. I'd like to know more about your product range. What can you offer?",
    fallback: [
      "That sounds interesting. What about the price for a first order?",
      "Okay. And how long does delivery usually take?",
      "Good. What payment terms do you offer?",
      "Great, thank you. Could you send me a written quotation?"
    ]
  },
  {
    id: 'supplier', level: 'B1', title: 'Llamada con un proveedor', icon: 'truck',
    desc: 'Coordina un pedido, plazos y un retraso.',
    role: 'Wei, ejecutivo de exportación de un proveedor asiático.',
    persona: 'You are Wei, an export sales rep from an Asian supplier. Discuss the order, lead time and a possible two-week delay. Be professional.',
    opener: "Hello, this is Wei from Nova Trading. I'm calling about your recent purchase order. Do you have a minute?",
    fallback: [
      "Thank you. I'm afraid the production will take two weeks longer than planned.",
      "I understand. We could ship partially, if that helps. Would that work for you?",
      "Alright. And regarding the freight, do you prefer FOB or CIF?",
      "Perfect. I'll send you the revised schedule today. Thank you for your patience."
    ]
  },
  {
    id: 'free', level: 'A1', title: 'Tema libre', icon: 'chat',
    desc: 'Habla de lo que quieras y practica sin guion.',
    role: 'Un tutor de inglés paciente y conversador.',
    persona: 'You are a friendly English tutor having an open conversation. Follow the student\'s topic and keep the conversation going naturally.',
    opener: "Hi! Let's just talk. Tell me about your day so far — what have you been up to?",
    fallback: [
      "That's interesting. Tell me more about that.",
      "I see. And how do you feel about it?",
      "Nice. What are you planning to do next?",
      "Great chat! Want to keep going or try another topic?"
    ]
  },
  {
    id: 'interview', level: 'B2', title: 'Entrevista de trabajo', icon: 'clipboard',
    desc: 'Responde preguntas de una entrevista real.',
    role: 'Un reclutador entrevistando para un puesto de gerente comercial.',
    persona: 'You are a recruiter interviewing the student for a Regional Sales Manager position. Ask standard but challenging interview questions, one at a time.',
    opener: "Thanks for coming in. Let's start simple: could you tell me a bit about yourself and your experience?",
    fallback: [
      "Thank you. What would you say is your greatest strength as a manager?",
      "Interesting. Can you tell me about a difficult challenge you faced and how you handled it?",
      "Good. Why do you want to work with us specifically?",
      "Thank you. Do you have any questions for me?"
    ]
  },
  {
    id: 'negotiate', level: 'B2', title: 'Negociar un trato', icon: 'scale',
    desc: 'Negocia precio, volumen y condiciones de pago.',
    role: 'Un comprador exigente que quiere mejor precio y plazos más largos.',
    persona: 'You are a tough but fair purchasing manager negotiating price, volume and payment terms. Push back politely and make counteroffers.',
    opener: "Thanks for the proposal. Honestly, the price is higher than we expected. What flexibility do you have?",
    fallback: [
      "I appreciate that, but our budget is tighter. Could you do better on volume pricing?",
      "Let's talk payment terms then. We'd need 60 days instead of 30.",
      "Okay. If we commit to a yearly volume, what would you offer?",
      "That could work. Send me the revised offer and I'll take it to my team."
    ]
  },
  {
    id: 'debate', level: 'B2', title: 'Dar tu opinión (debate)', icon: 'bulb',
    desc: 'Defiende una postura y responde a contraargumentos.',
    role: 'Un interlocutor que respetuosamente te lleva la contraria.',
    persona: 'You are a thoughtful debate partner. Take the opposite position from the student, challenge their reasoning politely, and ask them to justify their opinion.',
    opener: "Here's a question: do you think remote work is better than working in an office? I think the office wins — convince me otherwise.",
    fallback: [
      "That's a fair point, but what about team collaboration?",
      "Hmm. Some people would say productivity actually drops at home. How would you respond to that?",
      "Okay, I see your logic. What about new employees who need training?",
      "You've made some strong arguments. Good discussion!"
    ]
  }
];

/* ══════════════════ MODO CORREO DE NEGOCIOS ══════════════════ */

const EMAIL_TASKS = [
  { id: 'quote',    title: 'Pedir una cotización',        brief: 'Escribe a un proveedor pidiendo una cotización de 500 unidades, con precio unitario, plazo de entrega y condiciones de pago.',
    model: "Dear Mr. Chen,\n\nI hope this email finds you well.\n\nWe are interested in placing an order for 500 units of model X-200. Could you please send us a quotation including the unit price, lead time and payment terms?\n\nWe would also appreciate it if you could confirm whether the price is FOB or CIF.\n\nThank you in advance. I look forward to your reply.\n\nBest regards,\nDiego Barros\nRegional Sales Manager" },
  { id: 'followup', title: 'Dar seguimiento',             brief: 'Escribe un correo de seguimiento porque hace una semana enviaste una propuesta y no has recibido respuesta.',
    model: "Dear Ms. Lee,\n\nI hope you are doing well.\n\nI am writing to follow up on the proposal we sent last week. I wanted to check whether you have had a chance to review it and if you need any further information.\n\nPlease let me know if it would be helpful to schedule a short call this week.\n\nKind regards,\nDiego Barros" },
  { id: 'confirm',  title: 'Confirmar un pedido',         brief: 'Confirma la recepción de una orden de compra e indica la fecha estimada de entrega.',
    model: "Dear Mr. Ortiz,\n\nThank you for your purchase order No. 4471, which we received today.\n\nI am pleased to confirm that the order has been processed. The estimated delivery date is May 18th, and we will share the tracking details as soon as the shipment leaves our warehouse.\n\nPlease don't hesitate to contact me if you have any questions.\n\nBest regards,\nDiego Barros" },
  { id: 'apology',  title: 'Disculparse por un retraso',  brief: 'Informa a un cliente de un retraso de dos semanas en el envío, discúlpate y ofrece una solución.',
    model: "Dear Ms. Novak,\n\nI am writing to inform you that your shipment will be delayed by approximately two weeks due to a production issue at our factory.\n\nI sincerely apologize for the inconvenience this may cause. As an alternative, we could send a partial shipment next week and the remaining units once production is complete.\n\nPlease let me know which option works best for you. Again, I apologize for the delay and appreciate your understanding.\n\nBest regards,\nDiego Barros" },
  { id: 'meeting',  title: 'Proponer una reunión',        brief: 'Propón una reunión virtual con un cliente para presentar la nueva línea de productos.',
    model: "Dear Mr. Silva,\n\nI hope you are well.\n\nWe have just launched a new product line that I believe could be a good fit for your market. Would you be available for a short video call next week to go through it?\n\nI am flexible on Tuesday and Thursday morning, but I am happy to adapt to your schedule.\n\nLooking forward to hearing from you.\n\nBest regards,\nDiego Barros" },
  { id: 'free',     title: 'Tema libre',                  brief: 'Escribe cualquier correo de negocios en inglés y recibe corrección detallada.',
    model: null }
];

/* ══════════════════ REGLAS DE CORRECCIÓN SIN IA (respaldo) ══════════════════ */

const OFFLINE_RULES = [
  { re: /\bi have \d{1,2} years\b/i,   tag: 'Verbo to be', fix: 'La edad se dice con el verbo TO BE, no con HAVE: "I’m … years old" en vez de "I have … years".' },
  { re: /\bi am agree\b/i,             tag: 'Verbo to be', fix: '"Agree" ya es un verbo: se dice "I agree", no "I am agree".' },
  { re: /\bhe have\b|\bshe have\b/i,   tag: 'Presente simple', fix: 'Con he/she el verbo es "has": "He has a meeting", no "He have".' },
  { re: /\bdepend of\b/i,              tag: 'Preposiciones', fix: 'Se dice "depend ON", no "depend of".' },
  { re: /\bresponsible of\b/i,         tag: 'Preposiciones', fix: 'Se dice "responsible FOR", no "responsible of".' },
  { re: /\bin my point of view\b/i,    tag: 'Preposiciones', fix: 'Se dice "FROM my point of view" o "IN my opinion".' },
  { re: /\bfor my opinion\b/i,         tag: 'Preposiciones', fix: 'Se dice "IN my opinion".' },
  { re: /\bdidn'?t \w+ed\b/i,          tag: 'Pasado simple', fix: 'Después de "didn’t" el verbo va en forma base: "didn’t send", no "didn’t sent".' },
  { re: /\bdoes \w+ \w+s\b/i,          tag: 'Presente simple', fix: 'Después de "does" el verbo va sin -s: "Does he work?", no "Does he works?".' },
  { re: /\bif [^.?!]*\bwill\b/i,       tag: 'Condicionales', fix: 'Después de IF no se usa WILL: "If you order more, we will give a discount".' },
  { re: /\bpeoples\b/i,                tag: 'Incontables y plurales', fix: '"People" ya es plural. No existe "peoples" en este sentido.' },
  { re: /\binformations\b/i,           tag: 'Incontables y plurales', fix: '"Information" es incontable: nunca lleva -s.' },
  { re: /\badvices\b/i,                tag: 'Incontables y plurales', fix: '"Advice" es incontable: "some advice", "a piece of advice".' },
  { re: /\bthe most cheap\b/i,         tag: 'Comparativos', fix: 'El superlativo de "cheap" es "the cheapest".' },
  { re: /\bmore better\b/i,            tag: 'Comparativos', fix: '"Better" ya es comparativo: solo "better".' },
  { re: /\bi am living here since\b/i, tag: 'Present perfect', fix: 'Con SINCE se usa present perfect: "I’ve been living here since...".' },
  { re: /\bexplain me\b/i,             tag: 'Orden de palabras', fix: 'Se dice "explain to me" o "explain it to me".' },
  { re: /\bi wait you\b/i,             tag: 'Preposiciones', fix: 'Se dice "I’ll wait FOR you".' },
  { re: /\bmake a question\b/i,        tag: 'Vocabulario', fix: 'Se dice "ASK a question", no "make a question".' },
  { re: /\bi am accord\b|\bi am accord/i, tag: 'Verbo to be', fix: 'No existe "I am accord". Para estar de acuerdo: "I agree".' },
  { re: /\bhow is called\b/i,          tag: 'Orden de palabras', fix: 'Se dice "What is it called?", no "How is called?".' },
  { re: /\bi have \d+ years old\b/i,   tag: 'Verbo to be', fix: 'Sobra "have": "I’m 40 years old".' }
];

/* Temas sugeridos para generar lecciones a medida */
const TOPIC_SUGGESTIONS = [
  'Reclamos de calidad de un cliente',
  'Aduanas y documentos de importación',
  'Cobranzas y pagos atrasados',
  'Feria comercial: presentar el stand',
  'Logística y seguimiento de un embarque',
  'Reunión de resultados con la gerencia',
  'Visitar a un cliente nuevo en frío',
  'Small talk antes de una reunión',
  'Viajar: hotel, taxi y restaurante',
  'Presentar un informe de ventas'
];

/* Frases para el módulo de pronunciación, por nivel */
const PRONUNCIATION_SETS = {
  A1: [
    "Hello, my name is Diego.",
    "Nice to meet you.",
    "I'm from Ecuador.",
    "Thank you very much.",
    "What time is the meeting?",
    "See you tomorrow."
  ],
  A2: [
    "I usually start work at eight o'clock.",
    "Could you send me a quotation, please?",
    "We need the delivery by Friday.",
    "She doesn't work on weekends.",
    "How often do you visit your clients?",
    "Let me check and get back to you."
  ],
  B1: [
    "We sent the quotation three days ago.",
    "I've worked in sales for over ten years.",
    "I'm going to visit the client on Monday.",
    "In my opinion, we should wait a little longer.",
    "They haven't confirmed the purchase order yet.",
    "How was the meeting with the supplier?"
  ],
  B2: [
    "If you increase the volume, we could improve the price.",
    "I'm afraid that's slightly above our budget.",
    "Let me walk you through the numbers.",
    "We ran out of stock before the end of the quarter.",
    "One challenge I faced was a drop in portfolio coverage.",
    "Would you consider sixty-day payment terms?"
  ]
};
