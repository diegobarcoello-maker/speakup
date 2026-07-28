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
  { id: 'A2', name: 'A2 · Básico',       xp: 450,  desc: 'Rutinas, trabajo, viajes y situaciones cotidianas.' },
  { id: 'B1', name: 'B1 · Intermedio',   xp: 1300, desc: 'Pasado, futuro, opiniones y conversación real.' },
  { id: 'B2', name: 'B2 · Avanzado',     xp: 2800, desc: 'Hablar y entender con fluidez: negociar, presentar, debatir.' }
];

const UNITS = [

/* ══════════════════ A1 ══════════════════ */
{
  id: 'a1-1', level: 'A1', title: 'Saludos y presentaciones',
  goal: 'Saludar, presentarte, despedirte y sostener el primer minuto de una conversación.',
  grammar: {
    title: 'El verbo TO BE: la primera pieza de todo',
    es: 'TO BE significa SER y ESTAR a la vez. En inglés no se distingue: "I am tired" es "estoy cansado" y "I am an engineer" es "soy ingeniero". El mismo verbo.\n\n' +
        'Tiene tres formas en presente: AM solo con I · IS con he, she, it · ARE con you, we, they. No hay más.\n\n' +
        'Y aquí viene la regla que más cuesta al hispanohablante: en inglés SIEMPRE hay que decir el sujeto. En español dices "Soy Diego" y se entiende quién. En inglés "Am Diego" no existe: tiene que ser "I am Diego". Nunca omitas I, you, he, she, we, they.\n\n' +
        'En el habla real casi nadie dice las formas completas. Se contraen: I am → I’m · you are → you’re · he is → he’s · it is → it’s. Si dices todo completo suenas a robot, así que acostúmbrate a la contracción desde hoy.',
    examples: [
      { en: "I'm Diego.", es: 'Soy Diego.' },
      { en: "You're my teacher.", es: 'Tú eres mi profesor.' },
      { en: "She's from Peru.", es: 'Ella es de Perú.' },
      { en: "It's nice to meet you.", es: 'Es un gusto conocerte.' },
      { en: "We're ready.", es: 'Estamos listos.' }
    ],
    more: [
      {
        title: 'Los pronombres personales',
        es: 'I (yo) · you (tú / usted / ustedes) · he (él) · she (ella) · it (ello, para cosas y animales) · we (nosotros) · they (ellos/ellas).\n\n' +
            'Dos cosas que sorprenden: YOU sirve para tú, usted, vosotros y ustedes — el inglés no distingue. Y I se escribe SIEMPRE con mayúscula, esté donde esté en la frase.\n\n' +
            'IT es la que no existe en español. Se usa para objetos, animales y situaciones: "It’s Monday", "It’s cold", "Where is my phone? — It’s on the table".',
        examples: [
          { en: "I think it's a good price.", es: 'Creo que es un buen precio.' },
          { en: "They are our suppliers.", es: 'Ellos son nuestros proveedores.' },
          { en: "It's Monday today.", es: 'Hoy es lunes.' }
        ]
      },
      {
        title: 'A / AN: el artículo indefinido',
        es: 'A y AN significan lo mismo (un, una). Se usa AN cuando la palabra siguiente empieza por SONIDO de vocal: an engineer, an hour, an apple. Se usa A en los demás casos: a manager, a university (suena "yu"), a client.\n\n' +
            'Ojo con las profesiones: en inglés SIEMPRE llevan artículo. En español dices "Soy gerente"; en inglés hay que decir "I am A manager". Omitirlo es uno de los errores más marcados.',
        examples: [
          { en: "I'm a sales manager.", es: 'Soy gerente de ventas.' },
          { en: "She's an engineer.", es: 'Ella es ingeniera.' },
          { en: "It's a good idea.", es: 'Es una buena idea.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'Am Diego.', good: "I'm Diego.", es: 'Nunca se omite el sujeto en inglés.' },
      { bad: 'I am engineer.', good: "I'm an engineer.", es: 'Las profesiones llevan a/an.' },
      { bad: 'i think so.', good: 'I think so.', es: 'El pronombre I va siempre en mayúscula.' },
      { bad: 'Nice to meet you too much.', good: 'Nice to meet you too.', es: '"Too" al final es "también"; "too much" es "demasiado".' },
      { bad: 'How are you? — I am good, thanks you.', good: "How are you? — I'm good, thank you.", es: 'Es "thank you" o "thanks", nunca "thanks you".' }
    ]
  },
  vocab: [
    { en: 'hello', es: 'hola' },
    { en: 'hi', es: 'hola (informal)' },
    { en: 'good morning', es: 'buenos días' },
    { en: 'good afternoon', es: 'buenas tardes' },
    { en: 'good evening', es: 'buenas noches (al llegar)' },
    { en: 'good night', es: 'buenas noches (al irse a dormir)' },
    { en: 'goodbye', es: 'adiós' },
    { en: 'bye', es: 'chao' },
    { en: 'see you later', es: 'hasta luego' },
    { en: 'please', es: 'por favor' },
    { en: 'thank you', es: 'gracias' },
    { en: "you're welcome", es: 'de nada' },
    { en: 'sorry', es: 'perdón / lo siento' },
    { en: 'excuse me', es: 'disculpe (para llamar la atención)' },
    { en: 'yes', es: 'sí' },
    { en: 'no', es: 'no' },
    { en: 'name', es: 'nombre' },
    { en: 'first name', es: 'nombre de pila' },
    { en: 'last name', es: 'apellido' },
    { en: 'nice to meet you', es: 'encantado de conocerte' },
    { en: 'fine', es: 'bien' },
    { en: 'and you?', es: '¿y tú?' },
    { en: 'Mr.', es: 'señor' },
    { en: 'Ms.', es: 'señora / señorita' },
    { en: 'welcome', es: 'bienvenido' },
    { en: 'have a nice day', es: 'que tengas buen día' }
  ],
  phrases: [
    { en: "Hello, my name is Diego.", es: 'Hola, me llamo Diego.' },
    { en: "What's your name?", es: '¿Cómo te llamas?' },
    { en: "Nice to meet you.", es: 'Encantado de conocerte.' },
    { en: "Nice to meet you too.", es: 'Encantado yo también.' },
    { en: "How are you?", es: '¿Cómo estás?' },
    { en: "I'm fine, thank you. And you?", es: 'Estoy bien, gracias. ¿Y tú?' },
    { en: "Sorry, could you repeat that?", es: 'Perdón, ¿podría repetirlo?' },
    { en: "Sorry, I don't understand.", es: 'Perdón, no entiendo.' },
    { en: "How do you spell that?", es: '¿Cómo se escribe eso?' },
    { en: "See you tomorrow.", es: 'Nos vemos mañana.' },
    { en: "Have a nice day.", es: 'Que tengas buen día.' },
    { en: "It was nice talking to you.", es: 'Fue un gusto hablar contigo.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cómo saludas a un cliente a las 9 de la mañana?', opts: ['Good night', 'Good morning', 'Good evening'], a: 1,
      why: '"Good morning" va desde que amanece hasta el mediodía. "Good night" solo sirve para despedirse antes de dormir.' },
    { t: 'fill', q: "Hello, ___ name is Ana.", a: ['my'],
      why: '"My" = mi. El posesivo va siempre antes del sustantivo: my name, my job, my client.' },
    { t: 'mc', q: 'Elige la frase correcta.', opts: ['I am engineer', "I'm an engineer", 'I am a engineer'], a: 1,
      why: 'Las profesiones llevan artículo, y "engineer" empieza con sonido vocálico, así que es AN.' },
    { t: 'tr', q: 'Encantado de conocerte.', a: ['nice to meet you', 'pleased to meet you', "it's nice to meet you"],
      why: 'La forma estándar es "Nice to meet you". No se traduce literal "enchanted".' },
    { t: 'order', words: ['How', 'are', 'you', 'today?'], a: 'How are you today?',
      why: 'En preguntas con palabra interrogativa el orden es: How + are + you. El verbo va antes del sujeto.' },
    { t: 'listen', audio: "Good afternoon. How are you?", opts: ['Buenas tardes. ¿Cómo estás?', 'Buenas noches. ¿Qué haces?', 'Buenos días. ¿Dónde estás?'], a: 0,
      why: '"Afternoon" es la tarde. Distínguelo de "evening" (noche temprana) y "morning" (mañana).' },
    { t: 'mc', q: 'Chocas con alguien en el pasillo. ¿Qué dices?', opts: ['Excuse me', "I'm sorry", 'Please'], a: 1,
      why: '"Sorry" pide disculpas por algo ya ocurrido. "Excuse me" sirve para interrumpir o pedir paso ANTES.' },
    { t: 'fill', q: "___ is my colleague, Ana.", a: ['she'],
      why: 'SHE para una mujer. Recuerda que "it" solo se usa para cosas y animales, nunca para personas.' },
    { t: 'tr', q: 'Perdón, ¿podría repetirlo?', a: ['sorry could you repeat that', 'sorry, could you repeat that', 'excuse me could you repeat that'],
      why: 'Frase salvavidas: apréndela de memoria, la vas a usar mil veces.' },
    { t: 'order', words: ['It', 'was', 'nice', 'talking', 'to', 'you.'], a: 'It was nice talking to you.',
      why: 'Cierre profesional estándar. Fíjate en el "It" inicial: en inglés no se puede omitir.' },
    { t: 'listen', audio: "Hi, I'm Sarah. Nice to meet you.", opts: ['Hola, soy Sarah. Encantada de conocerte.', 'Hola, ¿eres Sarah? Un gusto.', 'Adiós Sarah, fue un gusto.'], a: 0,
      why: '"I’m" es la contracción de "I am". En el habla rápida casi se pierde: escucha el ritmo, no cada letra.' }
  ]
},

{
  id: 'a1-2', level: 'A1', title: 'Información personal',
  goal: 'Decir de dónde eres, dónde vives, a qué te dedicas, y preguntar lo mismo.',
  grammar: {
    title: 'TO BE completo: preguntas y negaciones',
    es: 'Ya sabes afirmar con to be. Ahora las otras dos formas.\n\n' +
        'PARA PREGUNTAR mueves el verbo delante del sujeto. "You are from Ecuador" → "Are you from Ecuador?". Eso es todo: se da la vuelta. No se añade nada.\n\n' +
        'PARA NEGAR pones NOT justo después del verbo: "I am not from Spain". En el habla se contrae de dos maneras y las dos son correctas: "he isn’t" o "he’s not". Elige la que te salga.\n\n' +
        'Y las respuestas cortas: en inglés no se responde solo "Yes" o "No" a secas, suena brusco. Se responde "Yes, I am" / "No, I’m not". Fíjate en el detalle: la afirmativa NUNCA se contrae. Se dice "Yes, I am", jamás "Yes, I’m".',
    examples: [
      { en: "Are you from Ecuador?", es: '¿Eres de Ecuador?' },
      { en: "Yes, I am. / No, I'm not.", es: 'Sí, lo soy. / No, no lo soy.' },
      { en: "She isn't in the office today.", es: 'Ella no está hoy en la oficina.' },
      { en: "Where are you from?", es: '¿De dónde eres?' },
      { en: "Is he the new manager?", es: '¿Es él el nuevo gerente?' }
    ],
    more: [
      {
        title: 'Las palabras interrogativas',
        es: 'WHAT (qué) · WHERE (dónde) · WHO (quién) · WHEN (cuándo) · WHY (por qué) · HOW (cómo) · WHICH (cuál, entre opciones) · HOW MUCH (cuánto, incontable o precio) · HOW MANY (cuántos, contable).\n\n' +
            'El orden es siempre el mismo: palabra interrogativa + verbo + sujeto. "Where are you from?", "What is your job?", "How many clients do you have?".\n\n' +
            'Cuidado con la trampa de "from": en inglés la preposición se queda al final. "¿De dónde eres?" es "Where are you FROM?", no "From where are you?".',
        examples: [
          { en: "Where do you live?", es: '¿Dónde vives?' },
          { en: "What do you do?", es: '¿A qué te dedicas?' },
          { en: "How many people work here?", es: '¿Cuánta gente trabaja aquí?' }
        ]
      },
      {
        title: 'La edad y la nacionalidad: dos trampas clásicas',
        es: 'LA EDAD va con TO BE, no con HAVE. En español "tienes" años; en inglés "eres" años: "I’m 40 years old". Decir "I have 40 years" es probablemente el error más reconocible de un hispanohablante.\n\n' +
            'LAS NACIONALIDADES E IDIOMAS se escriben con MAYÚSCULA inicial siempre: Ecuadorian, Spanish, English, Colombian. En español van en minúscula, en inglés no.\n\n' +
            'Y ojo con la diferencia: el país es Spain, el gentilicio es Spanish. Ecuador → Ecuadorian. The United States → American.',
        examples: [
          { en: "I'm thirty-eight years old.", es: 'Tengo treinta y ocho años.' },
          { en: "She's Ecuadorian and she speaks Spanish and English.", es: 'Ella es ecuatoriana y habla español e inglés.' },
          { en: "How old is your company?", es: '¿Qué antigüedad tiene tu empresa?' }
        ]
      }
    ],
    mistakes: [
      { bad: 'I have 40 years.', good: "I'm 40 years old.", es: 'La edad va con TO BE.' },
      { bad: 'From where are you?', good: 'Where are you from?', es: 'La preposición se queda al final.' },
      { bad: 'I am ecuadorian.', good: "I'm Ecuadorian.", es: 'Nacionalidades siempre con mayúscula.' },
      { bad: 'Yes, I’m.', good: 'Yes, I am.', es: 'La respuesta corta afirmativa nunca se contrae.' },
      { bad: 'I live in Ecuador since 2010.', good: "I've lived in Ecuador since 2010.", es: 'Con "since" se usa present perfect (lo verás en B1).' }
    ]
  },
  vocab: [
    { en: 'country', es: 'país' },
    { en: 'city', es: 'ciudad' },
    { en: 'job', es: 'trabajo / puesto' },
    { en: 'work', es: 'trabajo (en general)' },
    { en: 'company', es: 'empresa' },
    { en: 'office', es: 'oficina' },
    { en: 'boss', es: 'jefe' },
    { en: 'manager', es: 'gerente' },
    { en: 'sales manager', es: 'gerente de ventas' },
    { en: 'colleague', es: 'colega / compañero de trabajo' },
    { en: 'team', es: 'equipo' },
    { en: 'engineer', es: 'ingeniero/a' },
    { en: 'teacher', es: 'profesor/a' },
    { en: 'student', es: 'estudiante' },
    { en: 'driver', es: 'conductor' },
    { en: 'married', es: 'casado/a' },
    { en: 'single', es: 'soltero/a' },
    { en: 'children', es: 'hijos' },
    { en: 'years old', es: 'años (de edad)' },
    { en: 'to live', es: 'vivir' },
    { en: 'to work', es: 'trabajar' },
    { en: 'to speak', es: 'hablar (un idioma)' },
    { en: 'Ecuadorian', es: 'ecuatoriano/a' },
    { en: 'Spanish', es: 'español (idioma o gentilicio)' },
    { en: 'English', es: 'inglés' },
    { en: 'phone number', es: 'número de teléfono' },
    { en: 'email address', es: 'correo electrónico' },
    { en: 'business card', es: 'tarjeta de presentación' }
  ],
  phrases: [
    { en: "I'm from Ecuador.", es: 'Soy de Ecuador.' },
    { en: "I live in Cuenca.", es: 'Vivo en Cuenca.' },
    { en: "I work as a sales manager.", es: 'Trabajo como gerente de ventas.' },
    { en: "I work for a foreign trade company.", es: 'Trabajo para una empresa de comercio exterior.' },
    { en: "I'm thirty-eight years old.", es: 'Tengo treinta y ocho años.' },
    { en: "I'm married and I have two children.", es: 'Estoy casado y tengo dos hijos.' },
    { en: "Where are you from?", es: '¿De dónde eres?' },
    { en: "What do you do?", es: '¿A qué te dedicas?' },
    { en: "How long have you been there?", es: '¿Cuánto llevas ahí?' },
    { en: "Here's my business card.", es: 'Aquí tiene mi tarjeta.' },
    { en: "Can I have your email address?", es: '¿Me da su correo?' },
    { en: "I speak Spanish and a little English.", es: 'Hablo español y un poco de inglés.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cómo dices "Tengo 40 años"?', opts: ['I have 40 years', "I'm 40 years old", 'I make 40 years'], a: 1,
      why: 'La edad se dice con TO BE. "I have 40 years" es el error clásico del hispanohablante.' },
    { t: 'fill', q: "Where ___ you from?", a: ['are'],
      why: 'Con "you" siempre va ARE. Y fíjate en que "from" se queda al final.' },
    { t: 'tr', q: 'Trabajo en una empresa de comercio exterior.', a: ['i work in a foreign trade company', 'i work for a foreign trade company', 'i work at a foreign trade company'],
      why: '"Foreign trade" = comercio exterior. Con empresas funcionan work for / at / in.' },
    { t: 'order', words: ['She', 'is', 'not', 'the', 'manager.'], a: 'She is not the manager.',
      why: 'Negación con to be: sujeto + is + not. En el habla: "She isn’t the manager".' },
    { t: 'mc', q: '¿Cuál es la respuesta corta correcta a "Are you the manager?"', opts: ["Yes, I'm.", 'Yes, I am.', 'Yes, I are.'], a: 1,
      why: 'La respuesta corta afirmativa nunca se contrae: "Yes, I am".' },
    { t: 'listen', audio: "I'm a sales manager. I work for an export company.", opts: ['Soy gerente de ventas. Trabajo para una empresa exportadora.', 'Soy vendedor. Busco una empresa exportadora.', 'Fui gerente de ventas en una empresa exportadora.'], a: 0,
      why: '"I work" es presente. Si fuera pasado escucharías "I worked" o "I used to work".' },
    { t: 'mc', q: 'Un cliente pregunta "What do you do?". Está preguntando por...', opts: ['qué estás haciendo ahora', 'tu profesión', 'qué vas a hacer mañana'], a: 1,
      why: '"What do you do?" = ¿a qué te dedicas? Para lo que haces ahora sería "What are you doing?".' },
    { t: 'tr', q: '¿De qué ciudad eres?', a: ['what city are you from', 'which city are you from'],
      why: 'La preposición "from" al final: es normal y correcto en inglés.' },
    { t: 'fill', q: "___ many people work in your team?", a: ['how'],
      why: 'HOW MANY para cosas contables (personas, clientes, unidades). HOW MUCH para incontables y precios.' },
    { t: 'order', words: ['I', 'work', 'for', 'a', 'company', 'in', 'Cuenca.'], a: 'I work for a company in Cuenca.',
      why: '"Work for" + empresa, "in" + ciudad. Fíjate también en el artículo "a" antes de "company".' },
    { t: 'listen', audio: "She's Ecuadorian, but she lives in Miami now.", opts: ['Ella es ecuatoriana, pero ahora vive en Miami.', 'Ella es de Miami, pero visita Ecuador.', 'Ella vivía en Miami cuando era ecuatoriana.'], a: 0,
      why: '"But" marca el contraste. Escucha la -s de "lives": es tercera persona.' }
  ]
},

{
  id: 'a1-3', level: 'A1', title: 'Números, horas y días',
  goal: 'Decir la hora, agendar reuniones, manejar fechas y hablar de precios y cantidades.',
  grammar: {
    title: 'AT / ON / IN: las preposiciones de tiempo',
    es: 'Tres preposiciones y tres usos. Memorízalos así, de lo pequeño a lo grande:\n\n' +
        'AT para horas y momentos puntuales: at 3 o’clock, at noon, at midnight, at lunchtime, at the weekend (en inglés británico).\n\n' +
        'ON para días y fechas: on Monday, on May 3rd, on Friday morning, on the weekend (en inglés americano).\n\n' +
        'IN para períodos largos: meses (in May), años (in 2026), estaciones (in summer), y partes del día (in the morning, in the afternoon, in the evening). Excepción que hay que memorizar: AT night, no "in the night".\n\n' +
        'Y una regla que ahorra errores: cuando aparece la palabra next, last, this o every, NO se usa preposición. Se dice "next Monday", no "on next Monday". "Last year", no "in last year".',
    examples: [
      { en: "The meeting is at ten o'clock.", es: 'La reunión es a las diez.' },
      { en: "I'll call you on Friday.", es: 'Te llamo el viernes.' },
      { en: "We deliver in March.", es: 'Entregamos en marzo.' },
      { en: "I see him every Monday.", es: 'Lo veo todos los lunes.' },
      { en: "Let's meet next week.", es: 'Reunámonos la próxima semana.' }
    ],
    more: [
      {
        title: 'Decir la hora: las dos maneras',
        es: 'FORMA DIRECTA (la más fácil y muy usada): dices los números tal cual. 7:30 → "seven thirty". 9:15 → "nine fifteen". 10:05 → "ten oh five" (la cero se dice "oh").\n\n' +
            'FORMA CLÁSICA: usas past (y) y to (menos). 7:30 → "half past seven". 9:15 → "quarter past nine". 10:45 → "quarter to eleven". Fíjate en que con TO se nombra la hora SIGUIENTE.\n\n' +
            'Para el día se usa a.m. (mañana) y p.m. (tarde/noche), porque el reloj de 24 horas casi no se usa en inglés. "Las 15:00" es "3 p.m.".',
        examples: [
          { en: "It's half past nine.", es: 'Son las nueve y media.' },
          { en: "The call is at a quarter to five.", es: 'La llamada es a las cinco menos cuarto.' },
          { en: "We open at eight thirty a.m.", es: 'Abrimos a las ocho y media de la mañana.' }
        ]
      },
      {
        title: 'Números grandes, precios y porcentajes',
        es: 'Los números grandes en inglés NO llevan "and" en el uso americano: 250 es "two hundred fifty". Y ojo: hundred, thousand y million nunca llevan -s cuando van con un número: "three thousand dollars", no "three thousands".\n\n' +
            'Los decimales usan PUNTO, no coma: 12.5 se lee "twelve point five". Y los miles se separan con coma: 1,500.\n\n' +
            'Para precios: "It’s twenty dollars" o "It costs twenty dollars". Para porcentajes: "ten percent" (una sola palabra en inglés americano).',
        examples: [
          { en: "The total is two thousand five hundred dollars.", es: 'El total es dos mil quinientos dólares.' },
          { en: "We need five hundred units.", es: 'Necesitamos quinientas unidades.' },
          { en: "Sales went up ten percent.", es: 'Las ventas subieron un diez por ciento.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'On next Monday.', good: 'Next Monday.', es: 'Con next/last/this/every no se usa preposición.' },
      { bad: 'Three thousands dollars.', good: 'Three thousand dollars.', es: 'Thousand no lleva -s cuando va con número.' },
      { bad: 'In the night.', good: 'At night.', es: 'Es la excepción: night va con AT.' },
      { bad: 'What hour is it?', good: 'What time is it?', es: 'Se pregunta por el "time", no por la "hour".' },
      { bad: 'The meeting is in Monday.', good: 'The meeting is on Monday.', es: 'Los días llevan ON.' }
    ]
  },
  vocab: [
    { en: 'Monday', es: 'lunes' },
    { en: 'Tuesday', es: 'martes' },
    { en: 'Wednesday', es: 'miércoles' },
    { en: 'Thursday', es: 'jueves' },
    { en: 'Friday', es: 'viernes' },
    { en: 'Saturday', es: 'sábado' },
    { en: 'Sunday', es: 'domingo' },
    { en: 'weekend', es: 'fin de semana' },
    { en: 'today', es: 'hoy' },
    { en: 'tomorrow', es: 'mañana' },
    { en: 'yesterday', es: 'ayer' },
    { en: 'week', es: 'semana' },
    { en: 'month', es: 'mes' },
    { en: 'year', es: 'año' },
    { en: 'hour', es: 'hora (duración)' },
    { en: 'minute', es: 'minuto' },
    { en: "o'clock", es: 'en punto' },
    { en: 'half past', es: 'y media' },
    { en: 'quarter past', es: 'y cuarto' },
    { en: 'quarter to', es: 'menos cuarto' },
    { en: 'early', es: 'temprano' },
    { en: 'late', es: 'tarde' },
    { en: 'on time', es: 'a tiempo' },
    { en: 'how much', es: 'cuánto (precio)' },
    { en: 'how many', es: 'cuántos' },
    { en: 'hundred', es: 'cien' },
    { en: 'thousand', es: 'mil' },
    { en: 'million', es: 'millón' },
    { en: 'percent', es: 'por ciento' },
    { en: 'free (available)', es: 'libre / disponible' }
  ],
  phrases: [
    { en: "What time is it?", es: '¿Qué hora es?' },
    { en: "It's half past nine.", es: 'Son las nueve y media.' },
    { en: "The meeting is on Monday at ten.", es: 'La reunión es el lunes a las diez.' },
    { en: "Are you free on Thursday morning?", es: '¿Estás libre el jueves por la mañana?' },
    { en: "I'm free after three.", es: 'Estoy libre después de las tres.' },
    { en: "Sorry, I'm busy at that time.", es: 'Perdón, estoy ocupado a esa hora.' },
    { en: "How much is it?", es: '¿Cuánto cuesta?' },
    { en: "It's two thousand dollars.", es: 'Cuesta dos mil dólares.' },
    { en: "How many units do you need?", es: '¿Cuántas unidades necesita?' },
    { en: "Let's say Friday at nine.", es: 'Digamos el viernes a las nueve.' },
    { en: "I'll be there in ten minutes.", es: 'Llego en diez minutos.' },
    { en: "Sorry I'm late.", es: 'Perdón por la demora.' }
  ],
  exercises: [
    { t: 'fill', q: "The call is ___ Tuesday.", a: ['on'],
      why: 'Los días de la semana siempre llevan ON: on Monday, on Tuesday.' },
    { t: 'fill', q: "Let's meet ___ 4 p.m.", a: ['at'],
      why: 'Las horas llevan AT: at 4 p.m., at noon, at midnight.' },
    { t: 'mc', q: 'Elige la correcta.', opts: ['See you on next Monday', 'See you next Monday', 'See you in next Monday'], a: 1,
      why: 'Con next, last, this y every NO se usa preposición.' },
    { t: 'mc', q: '¿Cómo se dice "las siete y media"?', opts: ["half past seven", "seven and half", "half to seven"], a: 0,
      why: '"Half past + hora". También vale simplemente "seven thirty".' },
    { t: 'tr', q: '¿Cuánto cuesta el envío?', a: ['how much is the shipping', 'how much is shipping', 'how much does the shipping cost'],
      why: '"How much is...?" es la forma más rápida y natural de preguntar precios.' },
    { t: 'listen', audio: "The shipment arrives on Thursday at eight thirty.", opts: ['El envío llega el jueves a las ocho y media.', 'El envío salió el martes a las ocho y media.', 'El envío llega el jueves a las ocho y cuarto.'], a: 0,
      why: 'Thursday y Tuesday suenan parecido: Thursday empieza con el sonido "th".' },
    { t: 'order', words: ['I', 'have', 'a', 'meeting', 'on', 'Friday', 'morning.'], a: 'I have a meeting on Friday morning.',
      why: 'Cuando el día acompaña a la parte del día se usa ON: on Friday morning.' },
    { t: 'mc', q: '¿Cuál está bien escrito?', opts: ['Three thousands dollars', 'Three thousand dollars', 'Three thousand of dollars'], a: 1,
      why: 'Hundred, thousand y million no llevan -s cuando van precedidos de un número.' },
    { t: 'fill', q: "___ many units do you need?", a: ['how'],
      why: 'HOW MANY para contables (units, clients). HOW MUCH para incontables y precios.' },
    { t: 'tr', q: '¿Estás libre el jueves por la mañana?', a: ['are you free on thursday morning', 'are you free thursday morning'],
      why: '"Free" aquí es "disponible", no "gratis". Para gratis se dice "free of charge".' },
    { t: 'listen', audio: "Sorry, I'm busy at that time. How about four thirty?", opts: ['Perdón, estoy ocupado a esa hora. ¿Qué tal a las cuatro y media?', 'Perdón, estoy ocupado. Nos vemos a las cuatro.', 'Perdón por llegar tarde. Eran las cuatro y media.'], a: 0,
      why: '"How about...?" es la forma más natural de proponer una alternativa.' }
  ]
},

{
  id: 'a1-4', level: 'A1', title: 'Posesivos, plurales y pronombres',
  goal: 'Decir de quién es algo, hablar en plural y no repetir el nombre en cada frase.',
  grammar: {
    title: 'El genitivo sajón: la clave para no sonar traducido',
    es: 'En español dices "el pedido DEL cliente". En inglés se le da la vuelta: el dueño va PRIMERO y lleva apóstrofo + s. "The CLIENT’S order".\n\n' +
        'Esta es probablemente la construcción que más delata a un hispanohablante, porque la traducción literal ("the order of the client") es gramaticalmente posible pero suena rarísima con personas.\n\n' +
        'LA REGLA: dueño + ’s + cosa poseída. My boss’s office · the company’s policy · Diego’s phone.\n\n' +
        'Si el dueño es PLURAL y ya termina en -s, solo se añade el apóstrofo: the clients’ orders (los pedidos de los clientes). Si el plural es irregular, lleva ’s normal: the children’s books.\n\n' +
        'CUÁNDO SÍ SE USA "OF": con cosas y conceptos, no con personas. "The end of the year", "the price of the product". Con personas y organizaciones, casi siempre ’s.\n\n' +
        'Y ojo con el falso amigo del apóstrofo: "it’s" es "it is". El posesivo de it es ITS, sin apóstrofo. "The company and ITS clients".',
    examples: [
      { en: "This is the client's order.", es: 'Este es el pedido del cliente.' },
      { en: "My boss's name is Sarah.", es: 'Mi jefa se llama Sarah.' },
      { en: "The clients' complaints went up.", es: 'Las quejas de los clientes subieron.' },
      { en: "The price of the product is fixed.", es: 'El precio del producto es fijo.' },
      { en: "The company and its suppliers.", es: 'La empresa y sus proveedores.' }
    ],
    more: [
      {
        title: 'Posesivos y pronombres de objeto',
        es: 'ADJETIVOS POSESIVOS (van antes del sustantivo): my, your, his, her, its, our, their. "This is MY office".\n\n' +
            'Dos avisos importantes. Primero: NO cambian con el plural. Se dice "my clients", no "mys clients". Segundo: el género lo marca el DUEÑO, no la cosa. "Her office" es la oficina de ella; "his office", la de él. En español dices "su oficina" para los dos.\n\n' +
            'PRONOMBRES POSESIVOS (van solos, sin sustantivo detrás): mine, yours, his, hers, ours, theirs. "That desk is MINE".\n\n' +
            'PRONOMBRES DE OBJETO (reciben la acción): me, you, him, her, it, us, them. "Call HIM tomorrow", "Send it to THEM". Van SIEMPRE después del verbo, nunca antes: se dice "I called him", jamás "I him called".',
        examples: [
          { en: "Her office is next to mine.", es: 'Su oficina (de ella) está al lado de la mía.' },
          { en: "I'll send them the invoice today.", es: 'Les enviaré la factura hoy.' },
          { en: "Their prices are lower than ours.", es: 'Sus precios son más bajos que los nuestros.' }
        ]
      },
      {
        title: 'Plurales: regulares e irregulares',
        es: 'REGLA GENERAL: + s. client → clients · price → prices.\n\n' +
            '+ ES cuando la palabra acaba en -s, -ss, -sh, -ch, -x, -o: boxes, watches, potatoes.\n\n' +
            'CONSONANTE + Y → IES: company → companies · country → countries. Pero si hay vocal antes de la y, solo -s: day → days, key → keys.\n\n' +
            '-F / -FE → VES: shelf → shelves · life → lives · knife → knives.\n\n' +
            'IRREGULARES que hay que memorizar: man → men · woman → women · child → children · person → people · foot → feet · tooth → teeth.\n\n' +
            'Y los que NO cambian: sheep, fish, aircraft, series, equipment.\n\n' +
            'Aviso: "people" ya es plural. Se dice "three people", nunca "three peoples". Y lleva verbo plural: "People ARE waiting".',
        examples: [
          { en: "We work with twelve companies.", es: 'Trabajamos con doce empresas.' },
          { en: "Three people are waiting for you.", es: 'Tres personas te están esperando.' },
          { en: "The boxes are in the warehouse.", es: 'Las cajas están en la bodega.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'The order of the client.', good: "The client's order.", es: 'Con personas se usa el genitivo sajón.' },
      { bad: 'The company and it’s clients.', good: 'The company and its clients.', es: '"It’s" es "it is". El posesivo es "its", sin apóstrofo.' },
      { bad: 'Mys clients.', good: 'My clients.', es: 'Los posesivos no tienen plural.' },
      { bad: 'Three peoples.', good: 'Three people.', es: '"People" ya es plural.' },
      { bad: 'I him called yesterday.', good: 'I called him yesterday.', es: 'El pronombre de objeto va después del verbo.' }
    ]
  },
  vocab: [
    { en: 'my', es: 'mi' }, { en: 'your', es: 'tu / su (de usted)' },
    { en: 'his', es: 'su (de él)' }, { en: 'her', es: 'su (de ella)' },
    { en: 'its', es: 'su (de ello)' }, { en: 'our', es: 'nuestro' },
    { en: 'their', es: 'su (de ellos)' }, { en: 'mine', es: 'el mío' },
    { en: 'yours', es: 'el tuyo' }, { en: 'ours', es: 'el nuestro' },
    { en: 'theirs', es: 'el suyo (de ellos)' },
    { en: 'me', es: 'me / a mí' }, { en: 'him', es: 'lo / le (a él)' },
    { en: 'her (object)', es: 'la / le (a ella)' }, { en: 'us', es: 'nos / a nosotros' },
    { en: 'them', es: 'los / les (a ellos)' },
    { en: 'people', es: 'personas / gente' }, { en: 'children', es: 'niños / hijos' },
    { en: 'women', es: 'mujeres' }, { en: 'men', es: 'hombres' },
    { en: 'companies', es: 'empresas' }, { en: 'countries', es: 'países' },
    { en: 'boxes', es: 'cajas' }, { en: 'shelves', es: 'estantes' },
    { en: 'colleague', es: 'compañero de trabajo' }, { en: 'department', es: 'departamento' },
    { en: 'branch', es: 'sucursal' }, { en: 'staff', es: 'personal' },
    { en: 'owner', es: 'dueño' }, { en: 'to belong to', es: 'pertenecer a' }
  ],
  phrases: [
    { en: "This is the client's order.", es: 'Este es el pedido del cliente.' },
    { en: "What's your boss's name?", es: '¿Cómo se llama tu jefe?' },
    { en: "Her office is next to mine.", es: 'Su oficina está al lado de la mía.' },
    { en: "Is this yours?", es: '¿Esto es tuyo?' },
    { en: "No, it's theirs.", es: 'No, es de ellos.' },
    { en: "I'll send them the invoice.", es: 'Les enviaré la factura.' },
    { en: "Could you call him back?", es: '¿Podrías devolverle la llamada?' },
    { en: "Our prices are lower than theirs.", es: 'Nuestros precios son más bajos que los suyos.' },
    { en: "Three people are waiting for you.", es: 'Tres personas te están esperando.' },
    { en: "We have branches in four countries.", es: 'Tenemos sucursales en cuatro países.' },
    { en: "The boxes are in the warehouse.", es: 'Las cajas están en la bodega.' },
    { en: "That desk belongs to my colleague.", es: 'Ese escritorio es de mi compañero.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cómo dices "el pedido del cliente"?', opts: ['The order of the client', "The client's order", 'The client order'], a: 1, why: 'Con personas se usa el genitivo sajón: dueño + ’s + cosa.' },
    { t: 'fill', q: "The company and ___ suppliers work well together.", a: ['its'], why: 'Posesivo de "it" es ITS, sin apóstrofo. "It’s" significa "it is".' },
    { t: 'mc', q: 'El plural de "company" es...', opts: ['companys', 'companies', 'companyes'], a: 1, why: 'Consonante + y se convierte en -ies.' },
    { t: 'tr', q: 'Su oficina (de ella) está al lado de la mía.', a: ['her office is next to mine', "her office's next to mine"], why: 'HER porque la dueña es mujer, y MINE porque va solo, sin sustantivo detrás.' },
    { t: 'order', words: ['I', 'called', 'him', 'yesterday', 'afternoon.'], a: 'I called him yesterday afternoon.', why: 'El pronombre de objeto va después del verbo, nunca antes.' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ['Three peoples are waiting', 'Three people is waiting', 'Three people are waiting'], a: 2, why: '"People" ya es plural y lleva verbo plural.' },
    { t: 'fill', q: "Is this desk yours? No, it's ___.", a: ['theirs', 'his', 'hers', 'mine'], why: 'Los pronombres posesivos van solos: mine, yours, his, hers, ours, theirs.' },
    { t: 'tr', q: 'Les enviaré la factura mañana.', a: ["i'll send them the invoice tomorrow", 'i will send them the invoice tomorrow'], why: 'THEM es el pronombre de objeto de "they".' },
    { t: 'listen', audio: "My boss's assistant sent us the contract this morning.", opts: ['La asistente de mi jefe nos envió el contrato esta mañana.', 'Mi jefe le envió el contrato a la asistente.', 'La asistente nos pidió el contrato esta mañana.'], a: 0, why: 'Escucha el "boss’s" con dos sonidos de s seguidos, y el "us" del final.' },
    { t: 'mc', q: 'El plural de "child" es...', opts: ['childs', 'children', 'childes'], a: 1, why: 'Es irregular, como man→men, woman→women, person→people.' },
    { t: 'order', words: ['Our', 'prices', 'are', 'lower', 'than', 'theirs.'], a: 'Our prices are lower than theirs.', why: 'OUR va antes del sustantivo; THEIRS va solo al final.' }
  ]
},

/* ══════════════════ A2 ══════════════════ */
{
  id: 'a2-4', level: 'A2', title: 'Presente simple: tu rutina',
  goal: 'Contar lo que haces cada día, con qué frecuencia, y preguntárselo a otro.',
  grammar: {
    title: 'Presente simple: la temida -s de la tercera persona',
    es: 'El presente simple sirve para rutinas, hábitos y verdades generales: lo que haces normalmente, no lo que estás haciendo ahora mismo.\n\n' +
        'La forma es el verbo tal cual… salvo con he, she, it, donde hay que añadir -s: I work / he workS. Es la única terminación del presente en inglés, y aun así es donde más se falla.\n\n' +
        'Reglas de esa -s: la mayoría solo añade -s (works, sells, calls). Si el verbo acaba en -o, -ch, -sh, -ss, -x se añade -ES (goes, watches, finishes). Si acaba en consonante + y, la y se convierte en -IES (study → studies, but play → plays porque lleva vocal antes).\n\n' +
        'PARA PREGUNTAR Y NEGAR entra el auxiliar DO / DOES, y aquí está la clave: cuando aparece do o does, el verbo principal PIERDE la -s. Se dice "Does he work?" y "He doesn’t work", nunca "Does he works?". La -s ya está en el "does".',
    examples: [
      { en: "I check my email every morning.", es: 'Reviso mi correo cada mañana.' },
      { en: "She travels to Quito once a month.", es: 'Ella viaja a Quito una vez al mes.' },
      { en: "Do you work on Saturdays?", es: '¿Trabajas los sábados?' },
      { en: "He doesn't answer the phone after six.", es: 'Él no contesta el teléfono después de las seis.' },
      { en: "Our office closes at five.", es: 'Nuestra oficina cierra a las cinco.' }
    ],
    more: [
      {
        title: 'Los adverbios de frecuencia y dónde colocarlos',
        es: 'De más a menos: always (siempre) · usually (normalmente) · often (a menudo) · sometimes (a veces) · rarely (rara vez) · never (nunca).\n\n' +
            'La posición es fija y es lo que más se equivoca: van ANTES del verbo principal ("I always check my email") pero DESPUÉS del verbo to be ("I am always busy"). Esa es toda la regla.\n\n' +
            'Never ya es negativo por sí solo: se dice "I never work on Sundays", jamás "I don’t never work".\n\n' +
            'Para expresiones más largas (once a week, twice a month, every day) la posición normal es al final de la frase.',
        examples: [
          { en: "I usually start work at eight.", es: 'Normalmente empiezo a trabajar a las ocho.' },
          { en: "He's always late for meetings.", es: 'Él siempre llega tarde a las reuniones.' },
          { en: "We visit that client twice a month.", es: 'Visitamos a ese cliente dos veces al mes.' }
        ]
      },
      {
        title: 'Presente simple vs. presente continuo',
        es: 'Son dos presentes distintos y el español los mezcla.\n\n' +
            'PRESENTE SIMPLE = rutina, lo habitual. "I work in Cuenca" (es mi trabajo, siempre).\n' +
            'PRESENTE CONTINUO (am/is/are + verbo-ING) = lo que ocurre AHORA MISMO o en esta temporada. "I’m working from home this week" (esta semana, no siempre).\n\n' +
            'Truco práctico: si en español puedes decir "estoy + gerundio", usa el continuo. Si dirías el presente a secas, usa el simple.\n\n' +
            'Excepción importante: hay verbos que casi nunca van en continuo porque no son acciones sino estados: know, want, need, like, love, understand, believe, have (cuando es poseer). Se dice "I need it now", no "I’m needing it".',
        examples: [
          { en: "I work in sales. Right now I'm preparing a quotation.", es: 'Trabajo en ventas. Ahora mismo estoy preparando una cotización.' },
          { en: "She's visiting clients this week.", es: 'Ella está visitando clientes esta semana.' },
          { en: "I need the report today.", es: 'Necesito el informe hoy.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'Does he works here?', good: 'Does he work here?', es: 'Con does, el verbo va sin -s.' },
      { bad: "He don't work on Fridays.", good: "He doesn't work on Fridays.", es: 'Con he/she/it el auxiliar es does, no do.' },
      { bad: 'I always am busy.', good: "I'm always busy.", es: 'Los adverbios de frecuencia van después de to be.' },
      { bad: "I don't never work on Sundays.", good: 'I never work on Sundays.', es: 'Never ya es negativo, no se dobla.' },
      { bad: "I'm needing the invoice.", good: 'I need the invoice.', es: 'Need es un verbo de estado: no va en continuo.' }
    ]
  },
  vocab: [
    { en: 'always', es: 'siempre' },
    { en: 'usually', es: 'normalmente' },
    { en: 'often', es: 'a menudo' },
    { en: 'sometimes', es: 'a veces' },
    { en: 'rarely', es: 'rara vez' },
    { en: 'never', es: 'nunca' },
    { en: 'every day', es: 'todos los días' },
    { en: 'once a week', es: 'una vez por semana' },
    { en: 'twice a month', es: 'dos veces al mes' },
    { en: 'to wake up', es: 'despertarse' },
    { en: 'to get up', es: 'levantarse' },
    { en: 'to start', es: 'empezar' },
    { en: 'to finish', es: 'terminar' },
    { en: 'to drive', es: 'conducir / manejar' },
    { en: 'to check', es: 'revisar' },
    { en: 'to answer', es: 'responder' },
    { en: 'to call', es: 'llamar' },
    { en: 'to send', es: 'enviar' },
    { en: 'to visit', es: 'visitar' },
    { en: 'to have lunch', es: 'almorzar' },
    { en: 'to go home', es: 'irse a casa' },
    { en: 'to travel', es: 'viajar' },
    { en: 'busy', es: 'ocupado' },
    { en: 'free time', es: 'tiempo libre' },
    { en: 'schedule', es: 'horario / agenda' },
    { en: 'routine', es: 'rutina' },
    { en: 'early', es: 'temprano' },
    { en: 'usually / normally', es: 'normalmente' }
  ],
  phrases: [
    { en: "I usually start work at eight.", es: 'Normalmente empiezo a trabajar a las ocho.' },
    { en: "I check my email first thing in the morning.", es: 'Reviso el correo lo primero de la mañana.' },
    { en: "I visit clients twice a week.", es: 'Visito clientes dos veces por semana.' },
    { en: "She doesn't work on Sundays.", es: 'Ella no trabaja los domingos.' },
    { en: "How often do you visit your clients?", es: '¿Con qué frecuencia visitas a tus clientes?' },
    { en: "What time do you usually finish?", es: '¿A qué hora sueles terminar?' },
    { en: "It depends on the day.", es: 'Depende del día.' },
    { en: "I'm quite busy this week.", es: 'Estoy bastante ocupado esta semana.' },
    { en: "Right now I'm preparing a quotation.", es: 'Ahora mismo estoy preparando una cotización.' },
    { en: "I don't have much free time.", es: 'No tengo mucho tiempo libre.' },
    { en: "I have lunch around one.", es: 'Almuerzo alrededor de la una.' },
    { en: "My schedule is full today.", es: 'Tengo la agenda llena hoy.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la frase correcta.', opts: ['He work in Guayaquil', 'He works in Guayaquil', 'He does work in Guayaquil'], a: 1,
      why: 'Con he/she/it el verbo lleva -s en presente simple afirmativo.' },
    { t: 'fill', q: "___ she speak English?", a: ['does'],
      why: 'Preguntas con he/she/it usan DOES, y el verbo se queda sin -s.' },
    { t: 'mc', q: '¿Cuál está bien?', opts: ["He doesn't works here", "He don't work here", "He doesn't work here"], a: 2,
      why: 'Con he/she/it es "doesn’t", y después el verbo va en forma base.' },
    { t: 'tr', q: 'Normalmente reviso el correo a las ocho.', a: ['i usually check my email at eight', 'i usually check the email at eight', "i usually check my emails at eight"],
      why: 'Los adverbios de frecuencia van ANTES del verbo principal.' },
    { t: 'order', words: ['I', 'never', 'answer', 'calls', 'after', 'seven.'], a: 'I never answer calls after seven.',
      why: '"Never" ya es negativo: no se dice "I don’t never answer".' },
    { t: 'mc', q: '¿Dónde va "always" en "I am busy"?', opts: ['Always I am busy', "I'm always busy", 'I am busy always'], a: 1,
      why: 'Después del verbo to be. Antes solo va cuando hay otro verbo principal.' },
    { t: 'listen', audio: "She usually sends the report on Friday afternoon.", opts: ['Ella suele enviar el informe el viernes por la tarde.', 'Ella envió el informe el viernes por la tarde.', 'Ella nunca envía el informe los viernes.'], a: 0,
      why: '"Sends" con -s es presente habitual. "Sent" sería pasado.' },
    { t: 'mc', q: '¿Cuál significa "a veces"?', opts: ['often', 'sometimes', 'always'], a: 1,
      why: 'Escala: never < rarely < sometimes < often < usually < always.' },
    { t: 'tr', q: '¿Con qué frecuencia viajas por trabajo?', a: ['how often do you travel for work', 'how often do you travel for business'],
      why: '"How often" es la pregunta estándar de frecuencia.' },
    { t: 'fill', q: "Right now I ___ preparing the quotation.", a: ['am', "'m"],
      why: 'Acción de este momento: presente continuo (am/is/are + -ing).' },
    { t: 'listen', audio: "I don't usually work on Saturdays, but this week I'm working every day.", opts: ['No suelo trabajar los sábados, pero esta semana estoy trabajando todos los días.', 'Nunca trabajo los sábados ni ningún otro día.', 'Trabajo los sábados, pero esta semana descanso.'], a: 0,
      why: 'La frase mezcla los dos presentes: el simple para lo habitual y el continuo para esta semana.' }
  ]
},

{
  id: 'a2-5', level: 'A2', title: 'En el trabajo: clientes y pedidos',
  goal: 'Manejar el vocabulario esencial de ventas y comercio exterior, y pedir cosas con cortesía.',
  grammar: {
    title: 'CAN y COULD: pedir, ofrecer y poder',
    es: 'CAN significa poder: capacidad ("I can speak English"), permiso ("Can I use your phone?") y posibilidad ("We can deliver on Friday").\n\n' +
        'COULD es su versión suave. Literalmente es el pasado de can, pero en la práctica se usa sobre todo para pedir con más cortesía. En negocios, "Could you send me...?" suena claramente más profesional que "Can you send me...?".\n\n' +
        'Después de can y could el verbo va SIEMPRE en forma base, sin "to" y sin -s: "She can help", nunca "She can to help" ni "She cans".\n\n' +
        'Para negar: can’t (cannot) y couldn’t. Y para preguntar solo hay que darle la vuelta: "Can you...?", "Could we...?". No lleva do ni does.\n\n' +
        'Escala de cortesía, de menos a más: "Send me the price" (orden seca, evítala) → "Can you send me the price?" → "Could you send me the price, please?" → "Would you mind sending me the price?". En correos y llamadas de trabajo, quédate del tercer nivel en adelante.',
    examples: [
      { en: "Could you send me a quotation, please?", es: '¿Podría enviarme una cotización, por favor?' },
      { en: "Can we schedule a meeting?", es: '¿Podemos agendar una reunión?' },
      { en: "I can offer you a small discount.", es: 'Puedo ofrecerle un pequeño descuento.' },
      { en: "We can't deliver before Friday.", es: 'No podemos entregar antes del viernes.' },
      { en: "Could you repeat that, please?", es: '¿Podría repetirlo, por favor?' }
    ],
    more: [
      {
        title: 'WOULD LIKE: querer sin sonar brusco',
        es: 'En inglés "I want" suena exigente, casi infantil, en un contexto profesional. La fórmula educada es I WOULD LIKE (normalmente contraída: I’d like).\n\n' +
            '"I’d like a quotation" = quisiera una cotización. "I’d like to visit your factory" = me gustaría visitar su fábrica. Fíjate: si le sigue un verbo, ese verbo lleva TO.\n\n' +
            'Para ofrecer se usa la pregunta "Would you like...?": "Would you like a coffee?", "Would you like me to send the details?".',
        examples: [
          { en: "I'd like to place an order.", es: 'Quisiera hacer un pedido.' },
          { en: "Would you like a copy of the invoice?", es: '¿Quiere una copia de la factura?' },
          { en: "We'd like to see a sample first.", es: 'Nos gustaría ver una muestra primero.' }
        ]
      },
      {
        title: 'THERE IS / THERE ARE: hay',
        es: 'El "hay" español se dice con there is (singular) o there are (plural). "There is a problem with the order" / "There are three options".\n\n' +
            'Negativo: there isn’t / there aren’t. Pregunta: "Is there...?" / "Are there...?".\n\n' +
            'En pasado: there was / there were. "There was a delay last month".\n\n' +
            'Error clásico: traducir "hay" como "have". "Have a problem" significa "tengo un problema", no "hay un problema".',
        examples: [
          { en: "There is a problem with the shipment.", es: 'Hay un problema con el envío.' },
          { en: "Are there any other options?", es: '¿Hay otras opciones?' },
          { en: "There aren't enough units in stock.", es: 'No hay suficientes unidades en inventario.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'Can you to send me the price?', good: 'Can you send me the price?', es: 'Después de can/could el verbo va sin "to".' },
      { bad: 'She cans help you.', good: 'She can help you.', es: 'Can nunca lleva -s.' },
      { bad: 'I want a discount.', good: "I'd like a discount.", es: '"I want" suena exigente en negocios.' },
      { bad: 'Have a problem with the order.', good: 'There is a problem with the order.', es: '"Hay" se dice there is/there are.' },
      { bad: 'We need it until Friday.', good: 'We need it by Friday.', es: 'BY es "a más tardar"; UNTIL es "hasta" (duración).' }
    ]
  },
  vocab: [
    { en: 'meeting', es: 'reunión' },
    { en: 'client / customer', es: 'cliente' },
    { en: 'supplier', es: 'proveedor' },
    { en: 'quotation (quote)', es: 'cotización' },
    { en: 'price', es: 'precio' },
    { en: 'price list', es: 'lista de precios' },
    { en: 'discount', es: 'descuento' },
    { en: 'order', es: 'pedido' },
    { en: 'purchase order', es: 'orden de compra' },
    { en: 'invoice', es: 'factura' },
    { en: 'payment', es: 'pago' },
    { en: 'delivery', es: 'entrega' },
    { en: 'shipment', es: 'envío / embarque' },
    { en: 'deadline', es: 'fecha límite' },
    { en: 'to follow up', es: 'dar seguimiento' },
    { en: 'target', es: 'meta / objetivo' },
    { en: 'sales', es: 'ventas' },
    { en: 'budget', es: 'presupuesto' },
    { en: 'stock', es: 'inventario / existencias' },
    { en: 'sample', es: 'muestra' },
    { en: 'unit', es: 'unidad' },
    { en: 'quantity', es: 'cantidad' },
    { en: 'warehouse', es: 'bodega / almacén' },
    { en: 'to place an order', es: 'hacer un pedido' },
    { en: 'to confirm', es: 'confirmar' },
    { en: 'to check', es: 'verificar' },
    { en: 'available', es: 'disponible' },
    { en: 'in stock', es: 'en existencia' },
    { en: 'out of stock', es: 'agotado' },
    { en: 'by (a date)', es: 'para (a más tardar)' }
  ],
  phrases: [
    { en: "Could you send me a quotation?", es: '¿Podría enviarme una cotización?' },
    { en: "I'd like to place an order.", es: 'Quisiera hacer un pedido.' },
    { en: "I'll follow up with you tomorrow.", es: 'Le doy seguimiento mañana.' },
    { en: "We need it by Friday.", es: 'Lo necesitamos para el viernes.' },
    { en: "What's your best price?", es: '¿Cuál es su mejor precio?' },
    { en: "Let me check and get back to you.", es: 'Déjeme revisar y le respondo.' },
    { en: "Is it available right now?", es: '¿Está disponible ahora mismo?' },
    { en: "I'm afraid it's out of stock.", es: 'Me temo que está agotado.' },
    { en: "The order is ready for shipment.", es: 'El pedido está listo para el envío.' },
    { en: "There is a problem with the delivery.", es: 'Hay un problema con la entrega.' },
    { en: "Could you confirm the quantity?", es: '¿Podría confirmar la cantidad?' },
    { en: "Can we meet next week to discuss it?", es: '¿Podemos reunirnos la próxima semana para verlo?' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál es la forma MÁS cortés de pedir el precio?', opts: ['Send me the price.', 'Could you send me your price list, please?', 'I want the price now.'], a: 1,
      why: '"Could you...please?" es el registro estándar en correos y llamadas de negocios.' },
    { t: 'fill', q: "We need the goods ___ Friday at the latest.", a: ['by'],
      why: 'BY = "a más tardar". "Until Friday" significaría que la acción dura hasta el viernes.' },
    { t: 'mc', q: 'Elige la correcta.', opts: ['Can you to help me?', 'Can you help me?', 'Can you helping me?'], a: 1,
      why: 'Después de can/could el verbo va en forma base, sin "to" y sin -ing.' },
    { t: 'tr', q: 'Le daré seguimiento la próxima semana.', a: ["i'll follow up next week", 'i will follow up next week', "i'll follow up with you next week"],
      why: '"Follow up" es el phrasal verb exacto para dar seguimiento comercial.' },
    { t: 'order', words: ['Can', 'you', 'confirm', 'the', 'purchase', 'order?'], a: 'Can you confirm the purchase order?',
      why: 'Después de can el verbo va en base: confirm, no "to confirm" ni "confirms".' },
    { t: 'mc', q: '¿Cómo dices "Hay un problema con el pedido"?', opts: ['Have a problem with the order', 'There is a problem with the order', 'It has a problem with the order'], a: 1,
      why: 'El "hay" español es there is / there are, nunca "have".' },
    { t: 'listen', audio: "The supplier says the shipment will be delayed by two weeks.", opts: ['El proveedor dice que el envío se retrasará dos semanas.', 'El proveedor dice que el envío llega en dos semanas.', 'El cliente dice que el pedido se canceló.'], a: 0,
      why: '"Delayed" es retrasado. Ojo: supplier (proveedor) vs. customer (cliente).' },
    { t: 'mc', q: '"Invoice" significa...', opts: ['cotización', 'factura', 'inventario'], a: 1,
      why: 'Quotation = cotización (antes de vender). Invoice = factura (después de vender).' },
    { t: 'tr', q: 'Necesito una cotización para quinientas unidades.', a: ['i need a quotation for five hundred units', 'i need a quote for five hundred units', 'i need a quotation for 500 units'],
      why: 'En el día a día "quote" es la forma corta y muy usada de "quotation".' },
    { t: 'fill', q: "I'd ___ to see a sample first.", a: ['like'],
      why: '"I’d like to + verbo" = quisiera. Más profesional que "I want".' },
    { t: 'listen', audio: "I'm afraid that model is out of stock, but we could offer an alternative.", opts: ['Me temo que ese modelo está agotado, pero podríamos ofrecer una alternativa.', 'Ese modelo está disponible y podemos enviarlo hoy.', 'Ese modelo se agotó y no hay nada que hacer.'], a: 0,
      why: '"I’m afraid" suaviza la mala noticia y "we could" abre la puerta a una solución.' }
  ]
},

{
  id: 'a2-6', level: 'A2', title: 'Describir y comparar productos',
  goal: 'Describir un producto, compararlo con otro y defender por qué el tuyo conviene.',
  grammar: {
    title: 'Comparativos y superlativos',
    es: 'Para comparar dos cosas hay dos caminos, y el que uses depende de la LONGITUD del adjetivo.\n\n' +
        'ADJETIVOS CORTOS (una sílaba, o dos acabadas en -y): añade -ER + THAN. cheap → cheaper than · fast → faster than · easy → easier than. Si acaba en consonante-vocal-consonante se dobla la última letra: big → bigger.\n\n' +
        'ADJETIVOS LARGOS (dos sílabas o más): MORE + adjetivo + THAN. more expensive than · more reliable than · more efficient than. Nunca las dos cosas a la vez: "more cheaper" no existe.\n\n' +
        'SUPERLATIVOS (el más de todos): THE + -EST para cortos (the cheapest, the fastest) y THE MOST para largos (the most expensive, the most reliable).\n\n' +
        'IRREGULARES que hay que memorizar: good → better → the best · bad → worse → the worst · far → further → the furthest.\n\n' +
        'Y para decir que dos cosas son iguales: AS + adjetivo + AS. "This model is as good as that one".',
    examples: [
      { en: "This model is cheaper than the other one.", es: 'Este modelo es más barato que el otro.' },
      { en: "Their service is more reliable than ours.", es: 'Su servicio es más confiable que el nuestro.' },
      { en: "It's the best price on the market.", es: 'Es el mejor precio del mercado.' },
      { en: "This option is as good as that one.", es: 'Esta opción es tan buena como aquella.' },
      { en: "Delivery is faster from our warehouse.", es: 'La entrega es más rápida desde nuestra bodega.' }
    ],
    more: [
      {
        title: 'Orden de los adjetivos y una diferencia clave con el español',
        es: 'En inglés el adjetivo va SIEMPRE antes del sustantivo: "a good price", no "a price good". Y no cambia nunca: no tiene plural ni femenino. Se dice "two good prices", jamás "two goods prices".\n\n' +
            'Cuando hay varios adjetivos el orden natural es: opinión → tamaño → edad → forma → color → origen → material. "A great new German machine". No hace falta memorizarlo entero, pero la opinión va primero.\n\n' +
            'Ojo con VERY y TOO: very es "muy" (neutro) y too es "demasiado" (negativo). "It’s very expensive" (es muy caro) es distinto de "It’s too expensive" (es demasiado caro, no lo compro).',
        examples: [
          { en: "We offer high quality products.", es: 'Ofrecemos productos de alta calidad.' },
          { en: "It's a very competitive price.", es: 'Es un precio muy competitivo.' },
          { en: "That's too expensive for our budget.", es: 'Eso es demasiado caro para nuestro presupuesto.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'more cheaper', good: 'cheaper', es: 'No se combinan -er y more.' },
      { bad: 'the most cheap', good: 'the cheapest', es: 'Cheap es corto: lleva -est.' },
      { bad: 'more better', good: 'better', es: 'Better ya es comparativo.' },
      { bad: 'two goods options', good: 'two good options', es: 'Los adjetivos en inglés no tienen plural.' },
      { bad: 'a price competitive', good: 'a competitive price', es: 'El adjetivo va antes del sustantivo.' }
    ]
  },
  vocab: [
    { en: 'quality', es: 'calidad' },
    { en: 'size', es: 'tamaño' },
    { en: 'weight', es: 'peso' },
    { en: 'colour / color', es: 'color' },
    { en: 'material', es: 'material' },
    { en: 'brand', es: 'marca' },
    { en: 'model', es: 'modelo' },
    { en: 'feature', es: 'característica' },
    { en: 'cheap', es: 'barato' },
    { en: 'expensive', es: 'caro' },
    { en: 'reliable', es: 'confiable' },
    { en: 'strong', es: 'resistente / fuerte' },
    { en: 'light', es: 'ligero' },
    { en: 'heavy', es: 'pesado' },
    { en: 'fast', es: 'rápido' },
    { en: 'slow', es: 'lento' },
    { en: 'easy', es: 'fácil' },
    { en: 'difficult', es: 'difícil' },
    { en: 'better', es: 'mejor' },
    { en: 'worse', es: 'peor' },
    { en: 'the best', es: 'el mejor' },
    { en: 'competitive', es: 'competitivo' },
    { en: 'high quality', es: 'de alta calidad' },
    { en: 'value for money', es: 'relación calidad-precio' },
    { en: 'warranty', es: 'garantía' },
    { en: 'to compare', es: 'comparar' },
    { en: 'to offer', es: 'ofrecer' },
    { en: 'to recommend', es: 'recomendar' },
    { en: 'advantage', es: 'ventaja' },
    { en: 'difference', es: 'diferencia' }
  ],
  phrases: [
    { en: "This model is cheaper than that one.", es: 'Este modelo es más barato que aquel.' },
    { en: "What's the difference between these two?", es: '¿Cuál es la diferencia entre estos dos?' },
    { en: "It has a two-year warranty.", es: 'Tiene dos años de garantía.' },
    { en: "It's the best value for money.", es: 'Es la mejor relación calidad-precio.' },
    { en: "Our main advantage is delivery time.", es: 'Nuestra principal ventaja es el tiempo de entrega.' },
    { en: "I'd recommend the second option.", es: 'Yo recomendaría la segunda opción.' },
    { en: "It's very competitive for this quality.", es: 'Es muy competitivo para esta calidad.' },
    { en: "That's too expensive for our budget.", es: 'Eso es demasiado caro para nuestro presupuesto.' },
    { en: "How does it compare with the other brand?", es: '¿Cómo se compara con la otra marca?' },
    { en: "This one is lighter and easier to install.", es: 'Este es más ligero y más fácil de instalar.' },
    { en: "They're almost the same price.", es: 'Cuestan casi lo mismo.' },
    { en: "What size do you need?", es: '¿Qué tamaño necesita?' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál está bien?', opts: ['This one is more cheap', 'This one is cheaper', 'This one is more cheaper'], a: 1,
      why: '"Cheap" es corto: lleva -er. Y nunca se combina con "more".' },
    { t: 'fill', q: "Their delivery is ___ reliable than ours.", a: ['more'],
      why: '"Reliable" es largo (tres sílabas): se usa MORE + adjetivo + than.' },
    { t: 'mc', q: 'El superlativo de "good" es...', opts: ['the goodest', 'the best', 'the most good'], a: 1,
      why: 'Good → better → the best. Es irregular, hay que memorizarlo.' },
    { t: 'tr', q: 'Es el mejor precio del mercado.', a: ["it's the best price on the market", 'it is the best price on the market', "it's the best price in the market"],
      why: 'Se dice "on the market" (en el mercado, a la venta).' },
    { t: 'order', words: ['This', 'model', 'is', 'lighter', 'than', 'the', 'other', 'one.'], a: 'This model is lighter than the other one.',
      why: 'Estructura fija: sujeto + be + comparativo + than + comparado.' },
    { t: 'mc', q: '"That’s too expensive" significa...', opts: ['es muy caro pero aceptable', 'es demasiado caro, no me sirve', 'es el más caro'], a: 1,
      why: 'TOO tiene carga negativa: pasa del límite. VERY sería neutro.' },
    { t: 'fill', q: "This option is as good ___ that one.", a: ['as'],
      why: 'Estructura de igualdad: as + adjetivo + as.' },
    { t: 'tr', q: 'Ofrecemos productos de alta calidad.', a: ['we offer high quality products', 'we offer high-quality products'],
      why: 'El adjetivo va antes del sustantivo y nunca lleva plural.' },
    { t: 'listen', audio: "This model is more expensive, but it has a longer warranty.", opts: ['Este modelo es más caro, pero tiene una garantía más larga.', 'Este modelo es más barato y la garantía es corta.', 'Este modelo cuesta igual pero dura menos.'], a: 0,
      why: 'Fíjate en los dos comparativos en la misma frase: uno con "more" y otro con "-er".' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ['two goods options', 'two good options', 'two option goods'], a: 1,
      why: 'Los adjetivos en inglés no cambian: ni plural ni género.' },
    { t: 'listen', audio: "What's the difference between these two models?", opts: ['¿Cuál es la diferencia entre estos dos modelos?', '¿Cuál de los dos modelos prefiere?', '¿Estos dos modelos son diferentes?'], a: 0,
      why: '"The difference between A and B" es la estructura fija para comparar.' }
  ]
},

{
  id: 'a2-7', level: 'A2', title: 'Viajar por trabajo',
  goal: 'Sobrevivir solo en un viaje de negocios: aeropuerto, hotel, taxi y restaurante.',
  grammar: {
    title: 'Pedir cosas y entender indicaciones',
    es: 'Viajando vas a necesitar tres estructuras, y con ellas se resuelve casi todo.\n\n' +
        'PEDIR ALGO: "Could I have...?" o "I’d like...". "Could I have the bill, please?", "I’d like a table for two". Ambas son educadas y sirven en hotel, restaurante y taxi.\n\n' +
        'PREGUNTAR DÓNDE ESTÁ ALGO: "Where is the...?" o, más natural aún, "Excuse me, where can I find...?". Y para saber si algo existe: "Is there a pharmacy near here?".\n\n' +
        'PEDIR PERMISO O AYUDA: "Can I...?" para ti mismo ("Can I pay by card?") y "Could you...?" para lo que hace el otro ("Could you call me a taxi?").\n\n' +
        'Detalle que salva conversaciones: cuando no entiendas, no asientas. Di "Sorry, could you say that again more slowly?". Nadie se molesta y evitas problemas.',
    examples: [
      { en: "Could I have the bill, please?", es: 'La cuenta, por favor.' },
      { en: "Excuse me, where can I find a taxi?", es: 'Disculpe, ¿dónde puedo encontrar un taxi?' },
      { en: "Is there a pharmacy near here?", es: '¿Hay una farmacia cerca?' },
      { en: "Can I pay by card?", es: '¿Puedo pagar con tarjeta?' },
      { en: "Sorry, could you say that again more slowly?", es: 'Perdón, ¿podría repetirlo más despacio?' }
    ],
    more: [
      {
        title: 'Preposiciones de lugar y movimiento',
        es: 'IN dentro de un espacio cerrado (in the office, in the car, in Cuenca) · ON sobre una superficie o en una línea (on the table, on the second floor, on the plane) · AT en un punto concreto (at the airport, at the hotel, at gate 12).\n\n' +
            'Para moverse: TO indica destino (I’m going TO the airport). Excepción a memorizar: "go home", sin to.\n\n' +
            'Para ubicar: near (cerca de), next to (al lado de), in front of (delante de), behind (detrás de), between (entre dos), opposite (enfrente de).',
        examples: [
          { en: "I'm at the airport, at gate 12.", es: 'Estoy en el aeropuerto, en la puerta 12.' },
          { en: "The hotel is next to the station.", es: 'El hotel está al lado de la estación.' },
          { en: "I'm going to the office now.", es: 'Voy a la oficina ahora.' }
        ]
      },
      {
        title: 'Falsos amigos que te van a traicionar',
        es: 'Estas palabras se parecen al español pero significan otra cosa. Son las que más malentendidos causan:\n\n' +
            'ACTUALLY = en realidad (no "actualmente", que es currently).\n' +
            'ASSIST = ayudar (no "asistir a un evento", que es attend).\n' +
            'CARPET = alfombra (no "carpeta", que es folder).\n' +
            'EMBARRASSED = avergonzado (no "embarazada", que es pregnant).\n' +
            'SENSIBLE = sensato (no "sensible", que es sensitive).\n' +
            'EVENTUALLY = finalmente (no "eventualmente", que es occasionally).\n' +
            'EXIT = salida (no "éxito", que es success).\n' +
            'SUPPORT = apoyar (no "soportar/aguantar", que es put up with).',
        examples: [
          { en: "Actually, the flight leaves at six.", es: 'En realidad, el vuelo sale a las seis.' },
          { en: "I'd like to attend the trade fair.", es: 'Me gustaría asistir a la feria.' },
          { en: "Eventually we found the hotel.", es: 'Finalmente encontramos el hotel.' }
        ]
      }
    ],
    mistakes: [
      { bad: "I'm going to home.", good: "I'm going home.", es: '"Home" no lleva "to".' },
      { bad: 'I want the bill.', good: 'Could I have the bill, please?', es: '"I want" suena brusco pidiendo servicio.' },
      { bad: 'I assist to the meeting.', good: 'I attend the meeting.', es: 'Assist es ayudar; asistir a algo es attend.' },
      { bad: 'Actually I work in Cuenca.', good: 'Currently I work in Cuenca.', es: 'Actually es "en realidad", no "actualmente".' },
      { bad: "How is the way to the hotel?", good: "How do I get to the hotel?", es: 'Fórmula fija para pedir indicaciones.' }
    ]
  },
  vocab: [
    { en: 'flight', es: 'vuelo' },
    { en: 'gate', es: 'puerta de embarque' },
    { en: 'boarding pass', es: 'pase de abordar' },
    { en: 'luggage', es: 'equipaje' },
    { en: 'suitcase', es: 'maleta' },
    { en: 'carry-on', es: 'equipaje de mano' },
    { en: 'to check in', es: 'registrarse' },
    { en: 'departure', es: 'salida' },
    { en: 'arrival', es: 'llegada' },
    { en: 'delayed', es: 'retrasado' },
    { en: 'to board', es: 'abordar' },
    { en: 'aisle seat', es: 'asiento de pasillo' },
    { en: 'window seat', es: 'asiento de ventana' },
    { en: 'customs', es: 'aduana' },
    { en: 'passport', es: 'pasaporte' },
    { en: 'hotel booking', es: 'reserva de hotel' },
    { en: 'room key', es: 'llave de la habitación' },
    { en: 'check-out time', es: 'hora de salida' },
    { en: 'receipt', es: 'recibo' },
    { en: 'the bill / the check', es: 'la cuenta' },
    { en: 'to book', es: 'reservar' },
    { en: 'to pay by card', es: 'pagar con tarjeta' },
    { en: 'cash', es: 'efectivo' },
    { en: 'near here', es: 'cerca de aquí' },
    { en: 'next to', es: 'al lado de' },
    { en: 'straight ahead', es: 'todo recto' },
    { en: 'turn left', es: 'gira a la izquierda' },
    { en: 'turn right', es: 'gira a la derecha' },
    { en: 'How do I get to...?', es: '¿Cómo llego a...?' },
    { en: 'It takes ten minutes', es: 'Toma diez minutos' }
  ],
  phrases: [
    { en: "I have a reservation under Barros.", es: 'Tengo una reserva a nombre de Barros.' },
    { en: "Could I have a window seat, please?", es: '¿Me da un asiento de ventana, por favor?' },
    { en: "Is the flight on time?", es: '¿El vuelo sale a tiempo?' },
    { en: "Where is the baggage claim?", es: '¿Dónde está la entrega de equipaje?' },
    { en: "I'm here on business.", es: 'Vengo por negocios.' },
    { en: "How do I get to the city centre?", es: '¿Cómo llego al centro?' },
    { en: "Could you take me to this address?", es: '¿Podría llevarme a esta dirección?' },
    { en: "How long does it take?", es: '¿Cuánto tarda?' },
    { en: "A table for two, please.", es: 'Una mesa para dos, por favor.' },
    { en: "Could I have the bill, please?", es: 'La cuenta, por favor.' },
    { en: "Can I pay by card?", es: '¿Puedo pagar con tarjeta?' },
    { en: "Could I have a receipt, please?", es: '¿Me da un recibo, por favor?' }
  ],
  exercises: [
    { t: 'mc', q: 'En el restaurante quieres la cuenta. ¿Qué dices?', opts: ['I want the bill.', 'Could I have the bill, please?', 'Give me the bill.'], a: 1,
      why: 'Con servicio siempre "Could I have...?". "I want" suena a exigencia.' },
    { t: 'fill', q: "I'm ___ the airport, at gate 12.", a: ['at'],
      why: 'AT para puntos concretos: at the airport, at the hotel, at gate 12.' },
    { t: 'tr', q: '¿Cómo llego al centro?', a: ['how do i get to the city centre', 'how do i get to the city center', 'how do i get downtown'],
      why: '"How do I get to...?" es la fórmula fija. En EE. UU. se dice "downtown".' },
    { t: 'mc', q: '"Actually" significa...', opts: ['actualmente', 'en realidad', 'eventualmente'], a: 1,
      why: 'Falso amigo clásico. "Actualmente" es currently.' },
    { t: 'order', words: ['Is', 'there', 'a', 'pharmacy', 'near', 'here?'], a: 'Is there a pharmacy near here?',
      why: 'Para preguntar si algo existe: "Is there a...?".' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ["I'm going to home", "I'm going home", "I'm going at home"], a: 1,
      why: '"Home" es la excepción: nunca lleva preposición con verbos de movimiento.' },
    { t: 'listen', audio: "Your flight is delayed by forty minutes. Boarding starts at gate fifteen.", opts: ['Su vuelo está retrasado cuarenta minutos. El embarque es por la puerta quince.', 'Su vuelo sale en cuarenta minutos por la puerta cincuenta.', 'Su vuelo se canceló y el embarque cambió de puerta.'], a: 0,
      why: 'Ojo con fifteen (15) y fifty (50): la diferencia está en la sílaba acentuada.' },
    { t: 'fill', q: "The hotel is ___ to the station.", a: ['next'],
      why: '"Next to" = al lado de. No confundir con "near" (cerca de).' },
    { t: 'tr', q: 'Tengo una reserva a nombre de Barros.', a: ['i have a reservation under barros', 'i have a booking under barros', 'i have a reservation under the name barros'],
      why: 'Se dice "under" + apellido para las reservas.' },
    { t: 'mc', q: 'Quieres asistir a la feria comercial. ¿Cuál es correcta?', opts: ['I want to assist to the trade fair', "I'd like to attend the trade fair", 'I like to assist the trade fair'], a: 1,
      why: 'Asistir a un evento es ATTEND. "Assist" es ayudar.' },
    { t: 'listen', audio: "Go straight ahead and turn left after the bank. It takes about ten minutes.", opts: ['Siga recto y gire a la izquierda después del banco. Toma unos diez minutos.', 'Gire a la derecha antes del banco y camine diez minutos.', 'El banco está a diez minutos a la izquierda.'], a: 0,
      why: '"It takes" es la forma de decir cuánto tiempo lleva algo.' }
  ]
},

{
  id: 'a2-8', level: 'A2', title: 'Contables, incontables y cantidades',
  goal: 'Preguntar y decir cantidades sin equivocarte entre "how much" y "how many".',
  grammar: {
    title: 'Contables e incontables: la división que lo decide todo',
    es: 'En inglés cada sustantivo pertenece a uno de dos grupos, y de ahí sale casi todo lo demás.\n\n' +
        'CONTABLES: se pueden contar de uno en uno y tienen plural. One client, two clients. One box, three boxes.\n\n' +
        'INCONTABLES: se ven como una masa, NO tienen plural y NUNCA llevan "a/an". Money, information, advice, equipment, furniture, luggage, work, time, water, help, feedback, progress, news, software, staff.\n\n' +
        'Aquí está la trampa: varias de estas SÍ son contables en español, y por eso se cometen los errores más marcados. "Una información" no existe: es "some information" o "a piece of information". "Los muebles" es "furniture", en singular. Y "news" acaba en -s pero es singular: "The news IS good".\n\n' +
        'LA CONSECUENCIA PRÁCTICA:\n' +
        '· HOW MANY + contables → How many clients? How many units?\n' +
        '· HOW MUCH + incontables → How much money? How much time?\n\n' +
        'Y ojo: "how much" también sirve para precios, porque el dinero es incontable: "How much is it?".',
    examples: [
      { en: "How many units do you need?", es: '¿Cuántas unidades necesita?' },
      { en: "How much time do we have?", es: '¿Cuánto tiempo tenemos?' },
      { en: "I need some information about the order.", es: 'Necesito información sobre el pedido.' },
      { en: "The news is good.", es: 'Las noticias son buenas.' },
      { en: "Can you give me some advice?", es: '¿Me puedes dar un consejo?' }
    ],
    more: [
      {
        title: 'SOME, ANY, A LOT OF, A FEW, A LITTLE',
        es: 'SOME y ANY significan "algo de / algunos", pero se reparten así: SOME en frases afirmativas ("We have some stock") y ANY en negativas y preguntas ("We don’t have any stock", "Do you have any stock?").\n\n' +
            'La excepción que conviene saber: se usa SOME en preguntas cuando ofreces o pides algo esperando un sí. "Would you like some coffee?", "Could you send me some samples?". Suena más amable que "any".\n\n' +
            'A LOT OF / LOTS OF sirven para los dos grupos y son lo más usado al hablar: "a lot of clients", "a lot of work".\n\n' +
            'MUCH y MANY se usan sobre todo en negativas y preguntas: "We don’t have much time", "Were there many people?". En afirmativas suenan formales; ahí es mejor "a lot of".\n\n' +
            'POCO / UN POCO: A FEW + contables (a few clients = unos cuantos) y A LITTLE + incontables (a little time = un poco de tiempo). Sin el artículo cambian de sentido y se vuelven negativos: FEW clients = pocos clientes (casi ninguno), LITTLE time = poco tiempo (casi nada).',
        examples: [
          { en: "We don't have any samples left.", es: 'No nos quedan muestras.' },
          { en: "Could you send me some samples?", es: '¿Podría enviarme unas muestras?' },
          { en: "I have a little time before the meeting.", es: 'Tengo un poco de tiempo antes de la reunión.' }
        ]
      },
      {
        title: 'Medir lo incontable y hablar de precios',
        es: 'Para contar lo incontable se usa un envase o una unidad de medida: a piece of information · a piece of advice · a bottle of water · a cup of coffee · two kilos of sugar · three items of equipment.\n\n' +
            'PRECIOS Y CANTIDADES EN NEGOCIOS: unit price (precio unitario) · total amount (importe total) · quantity (cantidad) · a batch of (un lote de) · per unit (por unidad) · in bulk (a granel) · minimum order quantity, MOQ (pedido mínimo).\n\n' +
            'Fíjate en el uso de PER: "twelve dollars per unit", "two visits per week". Es más formal que "a": "twelve dollars a unit" también vale y es más coloquial.',
        examples: [
          { en: "What's the minimum order quantity?", es: '¿Cuál es el pedido mínimo?' },
          { en: "The unit price is twelve dollars.", es: 'El precio unitario es doce dólares.' },
          { en: "Let me give you a piece of advice.", es: 'Déjame darte un consejo.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'How much clients do you have?', good: 'How many clients do you have?', es: 'Clients es contable: how many.' },
      { bad: 'I need an information.', good: 'I need some information.', es: 'Information es incontable: sin "a".' },
      { bad: 'The news are good.', good: 'The news is good.', es: '"News" acaba en -s pero es singular.' },
      { bad: 'Do you have some samples?', good: 'Do you have any samples?', es: 'En preguntas neutras se usa "any".' },
      { bad: 'We have many works to do.', good: 'We have a lot of work to do.', es: '"Work" es incontable y no lleva plural.' }
    ]
  },
  vocab: [
    { en: 'money', es: 'dinero (incontable)' }, { en: 'information', es: 'información (incontable)' },
    { en: 'advice', es: 'consejo (incontable)' }, { en: 'equipment', es: 'equipo / equipamiento' },
    { en: 'furniture', es: 'muebles (incontable)' }, { en: 'luggage', es: 'equipaje (incontable)' },
    { en: 'news', es: 'noticias (singular)' }, { en: 'feedback', es: 'comentarios / retroalimentación' },
    { en: 'progress', es: 'avance (incontable)' }, { en: 'work', es: 'trabajo (incontable)' },
    { en: 'some', es: 'algo de / algunos' }, { en: 'any', es: 'algo / alguno (neg. y preg.)' },
    { en: 'a lot of', es: 'mucho / muchos' }, { en: 'much', es: 'mucho (incontable)' },
    { en: 'many', es: 'muchos (contable)' }, { en: 'a few', es: 'unos cuantos' },
    { en: 'a little', es: 'un poco de' }, { en: 'enough', es: 'suficiente' },
    { en: 'too much', es: 'demasiado' }, { en: 'a piece of', es: 'un/una...' },
    { en: 'quantity', es: 'cantidad' }, { en: 'amount', es: 'importe / cantidad' },
    { en: 'unit price', es: 'precio unitario' }, { en: 'total', es: 'total' },
    { en: 'per unit', es: 'por unidad' }, { en: 'in bulk', es: 'a granel' },
    { en: 'batch', es: 'lote' }, { en: 'minimum order', es: 'pedido mínimo' },
    { en: 'to run out of', es: 'quedarse sin' }, { en: 'left (remaining)', es: 'que queda' }
  ],
  phrases: [
    { en: "How many units do you need?", es: '¿Cuántas unidades necesita?' },
    { en: "How much is the total?", es: '¿Cuánto es el total?' },
    { en: "I need some information about the order.", es: 'Necesito información sobre el pedido.' },
    { en: "We don't have any samples left.", es: 'No nos quedan muestras.' },
    { en: "Could you send me some samples?", es: '¿Podría enviarme unas muestras?' },
    { en: "There's a lot of work this week.", es: 'Hay mucho trabajo esta semana.' },
    { en: "We don't have much time.", es: 'No tenemos mucho tiempo.' },
    { en: "I have a few questions.", es: 'Tengo unas cuantas preguntas.' },
    { en: "What's the minimum order quantity?", es: '¿Cuál es el pedido mínimo?' },
    { en: "The unit price is twelve dollars.", es: 'El precio unitario es doce dólares.' },
    { en: "Do we have enough stock?", es: '¿Tenemos suficiente inventario?' },
    { en: "That's too much for our budget.", es: 'Eso es demasiado para nuestro presupuesto.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál es correcta?', opts: ['How much clients do you have?', 'How many clients do you have?', 'How many client do you have?'], a: 1, why: '"Clients" es contable: HOW MANY.' },
    { t: 'fill', q: "___ much time do we have?", a: ['how'], why: '"Time" es incontable: HOW MUCH.' },
    { t: 'mc', q: '¿Cuál está bien?', opts: ['I need an information', 'I need some information', 'I need some informations'], a: 1, why: '"Information" es incontable: ni "a" ni plural.' },
    { t: 'fill', q: "We don't have ___ samples left.", a: ['any'], why: 'ANY en frases negativas y preguntas neutras.' },
    { t: 'tr', q: '¿Podría enviarme unas muestras?', a: ['could you send me some samples', 'could you send me some samples please'], why: 'En peticiones se usa SOME, no ANY: suena más amable.' },
    { t: 'mc', q: '"The news ___ good."', opts: ['is', 'are', 'be'], a: 0, why: '"News" acaba en -s pero es singular.' },
    { t: 'fill', q: "I have ___ few questions before we start.", a: ['a'], why: '"A few" = unos cuantos. Sin el "a" significaría "casi ninguna".' },
    { t: 'tr', q: 'No tenemos mucho tiempo.', a: ["we don't have much time", 'we do not have much time'], why: 'MUCH con incontables, y en negativa es donde más natural suena.' },
    { t: 'order', words: ['What', 'is', 'the', 'minimum', 'order', 'quantity?'], a: 'What is the minimum order quantity?', why: 'MOQ es una pregunta obligatoria al negociar con un proveedor nuevo.' },
    { t: 'listen', audio: "We don't have many units left, but there's still a lot of stock in the other warehouse.", opts: ['No nos quedan muchas unidades, pero todavía hay mucho inventario en la otra bodega.', 'Nos quedan muchas unidades y también hay inventario en la otra bodega.', 'No queda inventario en ninguna de las dos bodegas.'], a: 0, why: 'MANY con "units" (contable) y A LOT OF con "stock" (incontable), en la misma frase.' },
    { t: 'mc', q: '"We have a lot of work" — ¿por qué no "works"?', opts: ['Porque es un error de la app', 'Porque "work" es incontable', 'Porque va detrás de "a lot of"'], a: 1, why: '"Work" no tiene plural cuando significa trabajo en general.' }
  ]
},

/* ══════════════════ B1 ══════════════════ */
{
  id: 'b1-6', level: 'B1', title: 'Hablar del pasado',
  goal: 'Contar lo que pasó: una reunión, una venta, un viaje, un problema.',
  grammar: {
    title: 'Pasado simple: regulares, irregulares y el auxiliar DID',
    es: 'El pasado simple es para acciones terminadas en un momento concreto del pasado. Si puedes decir cuándo pasó, va aquí.\n\n' +
        'REGULARES: verbo + -ED. call → called · visit → visited · deliver → delivered. Si acaba en -e solo se añade -d (arrive → arrived). Si acaba en consonante + y, se convierte en -IED (try → tried).\n\n' +
        'LA PRONUNCIACIÓN DE -ED tiene tres sonidos y casi nadie los enseña: /t/ después de sonido sordo (worked, asked, finished) · /d/ después de sonido sonoro (called, arrived, delivered) · /ɪd/ solo después de T o D (wanted, needed, decided). Solo en este último caso se añade una sílaba. Decir "work-ed" con dos sílabas es un error muy audible.\n\n' +
        'IRREGULARES: no siguen regla y hay que memorizarlos. Los que más vas a usar: go→went, make→made, sell→sold, buy→bought, send→sent, meet→met, take→took, give→gave, say→said, get→got, have→had, do→did, come→came, see→saw, pay→paid, put→put, cost→cost.\n\n' +
        'PREGUNTAS Y NEGACIONES con DID, y aquí está el punto crítico: cuando aparece did o didn’t, el verbo VUELVE A SU FORMA BASE. Se dice "Did you send it?" y "I didn’t send it", jamás "Did you sent" ni "I didn’t sent". El pasado ya está marcado en el "did".',
    examples: [
      { en: "I met the client last Tuesday.", es: 'Me reuní con el cliente el martes pasado.' },
      { en: "We didn't receive the payment.", es: 'No recibimos el pago.' },
      { en: "How did the meeting go?", es: '¿Cómo fue la reunión?' },
      { en: "They sold three hundred units last month.", es: 'Vendieron trescientas unidades el mes pasado.' },
      { en: "Did you call the supplier?", es: '¿Llamaste al proveedor?' }
    ],
    more: [
      {
        title: 'Pasado continuo: lo que estaba pasando',
        es: 'WAS / WERE + verbo-ING describe una acción en curso en un momento del pasado: "I was driving to the office".\n\n' +
            'Su uso más útil es combinarlo con el pasado simple: la acción larga va en continuo y la que la interrumpe va en simple. "I WAS DRIVING when the client CALLED" — estaba conduciendo (fondo) cuando llamó (interrupción).\n\n' +
            'Las palabras clave que los conectan son WHEN (cuando, para la acción corta) y WHILE (mientras, para la larga).',
        examples: [
          { en: "I was driving when the client called.", es: 'Iba conduciendo cuando llamó el cliente.' },
          { en: "While we were negotiating, the price went up.", es: 'Mientras negociábamos, el precio subió.' },
          { en: "What were you doing at six?", es: '¿Qué estabas haciendo a las seis?' }
        ]
      },
      {
        title: 'USED TO: lo que antes hacías y ya no',
        es: 'USED TO + verbo base sirve para hábitos del pasado que ya no existen. "I used to work in Quito" = antes trabajaba en Quito (ya no).\n\n' +
            'No tiene equivalente exacto en español; se traduce por el imperfecto o por "solía". Es muy útil para contar tu trayectoria en una entrevista.\n\n' +
            'En negativo e interrogativo pierde la -d: "I didn’t use to travel much", "Did you use to work there?".\n\n' +
            'Cuidado, no lo confundas con "to be used to + -ing", que significa "estar acostumbrado a": "I’m used to travelling" = estoy acostumbrado a viajar.',
        examples: [
          { en: "I used to work in Quito.", es: 'Antes trabajaba en Quito.' },
          { en: "We used to buy from a local supplier.", es: 'Antes comprábamos a un proveedor local.' },
          { en: "I'm used to working under pressure.", es: 'Estoy acostumbrado a trabajar bajo presión.' }
        ]
      }
    ],
    mistakes: [
      { bad: "I didn't sent the invoice.", good: "I didn't send the invoice.", es: 'Con didn’t el verbo vuelve a la forma base.' },
      { bad: 'Did you went to the fair?', good: 'Did you go to the fair?', es: 'Con did, forma base.' },
      { bad: 'The last week we sold 200 units.', good: 'Last week we sold 200 units.', es: '"Last week" no lleva artículo.' },
      { bad: 'Ago three days.', good: 'Three days ago.', es: '"Ago" va siempre al final.' },
      { bad: 'How was go the meeting?', good: 'How did the meeting go?', es: 'Con "go" se usa did, no was.' }
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
    { en: 'said (say)', es: 'dije (decir)' },
    { en: 'got (get)', es: 'obtuve (conseguir)' },
    { en: 'paid (pay)', es: 'pagué (pagar)' },
    { en: 'saw (see)', es: 'vi (ver)' },
    { en: 'came (come)', es: 'vine (venir)' },
    { en: 'had (have)', es: 'tuve (tener)' },
    { en: 'last week', es: 'la semana pasada' },
    { en: 'last month', es: 'el mes pasado' },
    { en: 'ago', es: 'hace (tiempo)' },
    { en: 'then', es: 'entonces / luego' },
    { en: 'after that', es: 'después de eso' },
    { en: 'finally', es: 'finalmente' },
    { en: 'at first', es: 'al principio' },
    { en: 'in the end', es: 'al final' },
    { en: 'to close a deal', es: 'cerrar un trato' },
    { en: 'to lose (lost)', es: 'perder' },
    { en: 'to win (won)', es: 'ganar' },
    { en: 'to grow (grew)', es: 'crecer' },
    { en: 'to happen', es: 'suceder' },
    { en: 'used to', es: 'solía / antes hacía' },
    { en: 'while', es: 'mientras' },
    { en: 'result', es: 'resultado' }
  ],
  phrases: [
    { en: "I met the client last Tuesday.", es: 'Me reuní con el cliente el martes pasado.' },
    { en: "We sent the quotation two days ago.", es: 'Enviamos la cotización hace dos días.' },
    { en: "They didn't confirm the order.", es: 'No confirmaron el pedido.' },
    { en: "How was the meeting?", es: '¿Cómo estuvo la reunión?' },
    { en: "It went really well.", es: 'Salió muy bien.' },
    { en: "At first they said no, but in the end they agreed.", es: 'Al principio dijeron que no, pero al final aceptaron.' },
    { en: "We closed the deal on Friday.", es: 'Cerramos el trato el viernes.' },
    { en: "What happened with the shipment?", es: '¿Qué pasó con el envío?' },
    { en: "I was driving when he called.", es: 'Iba conduciendo cuando llamó.' },
    { en: "I used to work in Quito.", es: 'Antes trabajaba en Quito.' },
    { en: "Sales grew fifteen percent last year.", es: 'Las ventas crecieron un quince por ciento el año pasado.' },
    { en: "We lost that client to the competition.", es: 'Perdimos ese cliente frente a la competencia.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la frase correcta.', opts: ["I didn't sent the invoice", "I didn't send the invoice", "I didn't sended the invoice"], a: 1,
      why: 'Con DIDN’T el verbo vuelve a su forma base: send.' },
    { t: 'fill', q: "We ___ the contract three weeks ago.", a: ['signed'],
      why: '"Sign" es regular: signed. "Ago" siempre exige pasado simple.' },
    { t: 'tr', q: 'Visité al cliente la semana pasada.', a: ['i visited the client last week', 'i visited the customer last week'],
      why: '"Last week" sin artículo: no se dice "the last week".' },
    { t: 'order', words: ['Did', 'they', 'confirm', 'the', 'order', 'yesterday?'], a: 'Did they confirm the order yesterday?',
      why: 'Did + sujeto + verbo base. Nunca "Did they confirmed".' },
    { t: 'mc', q: '¿En cuál de estos la -ed añade una sílaba?', opts: ['worked', 'called', 'needed'], a: 2,
      why: 'Solo después de T o D la -ed suena /ɪd/: nee-ded. "Worked" y "called" son una sola sílaba.' },
    { t: 'listen', audio: "We sold two hundred units last month, but we didn't reach the target.", opts: ['Vendimos doscientas unidades el mes pasado, pero no alcanzamos la meta.', 'Vendemos doscientas unidades al mes y alcanzamos la meta.', 'Vendimos doscientas unidades y superamos la meta.'], a: 0,
      why: '"Sold" es el pasado irregular de "sell". "Reach the target" = alcanzar la meta.' },
    { t: 'mc', q: '¿Cómo preguntas "¿Cómo te fue en la reunión?"', opts: ['How was the meeting?', 'How is the meeting?', 'How the meeting was?'], a: 0,
      why: 'Con to be en pasado no se usa did: How was...? El verbo va antes del sujeto.' },
    { t: 'tr', q: 'Hablamos con el proveedor hace tres días.', a: ['we talked to the supplier three days ago', 'we spoke to the supplier three days ago', 'we spoke with the supplier three days ago'],
      why: '"Ago" va SIEMPRE al final: three days ago.' },
    { t: 'fill', q: "I ___ driving when the client called.", a: ['was'],
      why: 'Pasado continuo para la acción en curso: was/were + -ing.' },
    { t: 'mc', q: '"I used to work in Quito" significa...', opts: ['suelo trabajar en Quito', 'antes trabajaba en Quito, ya no', 'estoy acostumbrado a trabajar en Quito'], a: 1,
      why: '"Used to" = hábito pasado que terminó. "Be used to" sería estar acostumbrado.' },
    { t: 'order', words: ['At', 'first', 'they', 'said', 'no,', 'but', 'they', 'agreed', 'later.'], a: 'At first they said no, but they agreed later.',
      why: 'Los conectores de secuencia (at first, then, later, in the end) ordenan un relato.' },
    { t: 'listen', audio: "While we were negotiating, the supplier raised the price.", opts: ['Mientras negociábamos, el proveedor subió el precio.', 'Negociamos después de que el proveedor subiera el precio.', 'El proveedor bajó el precio durante la negociación.'], a: 0,
      why: 'WHILE + pasado continuo para el fondo, y la acción que interrumpe en pasado simple.' }
  ]
},

{
  id: 'b1-7', level: 'B1', title: 'Planes y futuro',
  goal: 'Hablar de planes, agendar, comprometerte y hacer previsiones.',
  grammar: {
    title: 'Los tres futuros y cuándo usa cada uno un nativo',
    es: 'El inglés no tiene un futuro, tiene tres, y elegir mal te delata más que un error de vocabulario.\n\n' +
        'GOING TO = plan ya decidido antes de hablar. Ya lo tenías pensado. "I’m going to visit the client on Monday" (ya lo decidí, está en mi agenda). También se usa para predicciones con evidencia visible: "Look at those numbers — we’re going to miss the target".\n\n' +
        'WILL = decisión que tomas EN ESTE INSTANTE, promesa, ofrecimiento o predicción sin evidencia. El cliente pregunta algo y respondes "I’ll check it right now" — lo decides al hablar. También: "I’ll send it today, I promise".\n\n' +
        'PRESENTE CONTINUO = cita ya agendada con otra persona, con hora y lugar. "I’m meeting the supplier at three". Es lo que más usan los nativos para la agenda, y casi nadie lo enseña.\n\n' +
        'Regla práctica para tu día a día: si está en tu calendario, presente continuo. Si es un plan tuyo sin hora fija, going to. Si lo decides mientras hablas, will.',
    examples: [
      { en: "I'm going to visit the client on Monday.", es: 'Voy a visitar al cliente el lunes.' },
      { en: "I'll send you the details right now.", es: 'Le envío los detalles ahora mismo.' },
      { en: "We're meeting the supplier at three.", es: 'Nos reunimos con el proveedor a las tres.' },
      { en: "I think prices will go up next year.", es: 'Creo que los precios subirán el año que viene.' },
      { en: "Don't worry, I'll take care of it.", es: 'No se preocupe, yo me encargo.' }
    ],
    more: [
      {
        title: 'El futuro después de WHEN, IF, AFTER y BEFORE',
        es: 'Regla que rompe la intuición del hispanohablante: después de when, if, as soon as, after, before y until NO se usa will, aunque estés hablando del futuro. Se usa presente.\n\n' +
            '"I’ll call you WHEN I ARRIVE" (no "when I will arrive"). "We’ll ship it AS SOON AS WE RECEIVE the payment" (no "as soon as we will receive").\n\n' +
            'El futuro solo aparece en la otra mitad de la frase. Es exactamente el mismo mecanismo que en los condicionales.',
        examples: [
          { en: "I'll call you when I arrive.", es: 'Te llamo cuando llegue.' },
          { en: "We'll ship it as soon as we receive the payment.", es: 'Lo enviamos en cuanto recibamos el pago.' },
          { en: "Let me know before you send it.", es: 'Avísame antes de enviarlo.' }
        ]
      },
      {
        title: 'Grados de certeza',
        es: 'Rara vez algo es seguro al cien por cien, y el inglés tiene una escala clara para matizarlo.\n\n' +
            'Seguro: "We will deliver on Friday" · "definitely".\n' +
            'Probable: "We should deliver on Friday" · "probably" · "I expect to...".\n' +
            'Posible: "We might deliver on Friday" · "may" · "It’s possible that...".\n' +
            'Improbable: "We probably won’t make it" · "It’s unlikely".\n\n' +
            'En negocios, prometer de menos y cumplir de más te da credibilidad. Usa "should" y "might" cuando no estés seguro: te evita quedar mal.',
        examples: [
          { en: "The shipment should arrive on Tuesday.", es: 'El envío debería llegar el martes.' },
          { en: "We might need an extra week.", es: 'Puede que necesitemos una semana más.' },
          { en: "It's unlikely that the price will change.", es: 'Es poco probable que el precio cambie.' }
        ]
      }
    ],
    mistakes: [
      { bad: "I'll call you when I will arrive.", good: "I'll call you when I arrive.", es: 'Después de when no se usa will.' },
      { bad: 'I will to send it.', good: "I'll send it.", es: 'Después de will el verbo va en base, sin "to".' },
      { bad: "I'm going to send it right now (decidido al hablar).", good: "I'll send it right now.", es: 'Decisión del momento: will.' },
      { bad: 'We will meet him at 3 (ya agendado).', good: "We're meeting him at 3.", es: 'Cita agendada: presente continuo.' },
      { bad: 'Maybe I will can go.', good: 'Maybe I will be able to go.', es: 'Dos modales no van juntos: will + can no existe.' }
    ]
  },
  vocab: [
    { en: 'to schedule', es: 'agendar / programar' },
    { en: 'to arrange', es: 'organizar / coordinar' },
    { en: 'to confirm', es: 'confirmar' },
    { en: 'to postpone', es: 'posponer' },
    { en: 'to reschedule', es: 'reprogramar' },
    { en: 'to cancel', es: 'cancelar' },
    { en: 'to launch', es: 'lanzar' },
    { en: 'to plan', es: 'planificar' },
    { en: 'to expect', es: 'esperar / prever' },
    { en: 'forecast', es: 'pronóstico / proyección' },
    { en: 'lead time', es: 'tiempo de entrega' },
    { en: 'next quarter', es: 'el próximo trimestre' },
    { en: 'deadline', es: 'fecha límite' },
    { en: 'soon', es: 'pronto' },
    { en: 'as soon as possible', es: 'lo antes posible' },
    { en: 'in advance', es: 'con anticipación' },
    { en: 'available', es: 'disponible' },
    { en: 'probably', es: 'probablemente' },
    { en: 'definitely', es: 'sin duda' },
    { en: 'might / may', es: 'puede que' },
    { en: 'should', es: 'debería' },
    { en: 'unlikely', es: 'poco probable' },
    { en: 'to take care of', es: 'encargarse de' },
    { en: 'to look forward to', es: 'esperar con ganas' },
    { en: 'agenda', es: 'orden del día' },
    { en: 'upcoming', es: 'próximo' },
    { en: 'trade fair', es: 'feria comercial' },
    { en: 'launch date', es: 'fecha de lanzamiento' }
  ],
  phrases: [
    { en: "I'm going to visit the client on Monday.", es: 'Voy a visitar al cliente el lunes.' },
    { en: "I'll get back to you as soon as possible.", es: 'Le respondo lo antes posible.' },
    { en: "Are you going to attend the trade fair?", es: '¿Vas a asistir a la feria?' },
    { en: "Let's postpone it until next week.", es: 'Pospongámoslo hasta la próxima semana.' },
    { en: "We're meeting the supplier at three.", es: 'Nos reunimos con el proveedor a las tres.' },
    { en: "I'll take care of it.", es: 'Yo me encargo.' },
    { en: "The shipment should arrive on Tuesday.", es: 'El envío debería llegar el martes.' },
    { en: "We might need an extra week.", es: 'Puede que necesitemos una semana más.' },
    { en: "I'll call you when I arrive.", es: 'Te llamo cuando llegue.' },
    { en: "Could we reschedule for Thursday?", es: '¿Podríamos reprogramar para el jueves?' },
    { en: "I look forward to hearing from you.", es: 'Quedo a la espera de su respuesta.' },
    { en: "We're launching the new line in May.", es: 'Lanzamos la nueva línea en mayo.' }
  ],
  exercises: [
    { t: 'mc', q: 'El cliente pregunta algo y decides responder ahora mismo. ¿Qué dices?', opts: ["I'm going to check it", "I'll check it right now", "I check it now"], a: 1,
      why: 'WILL para decisiones espontáneas. GOING TO es para planes ya pensados.' },
    { t: 'fill', q: "We ___ going to launch the new line in June.", a: ['are'],
      why: 'La estructura es: be + going to + verbo. Con "we" el verbo be es "are".' },
    { t: 'mc', q: 'Tienes la reunión agendada a las 3 con hora y lugar. ¿Cuál suena más nativo?', opts: ["I will meet him at 3", "I'm meeting him at 3", "I meet him at 3"], a: 1,
      why: 'Presente continuo para citas agendadas. Es lo que más usan los nativos.' },
    { t: 'tr', q: 'Te enviaré la factura hoy mismo.', a: ["i'll send you the invoice today", 'i will send you the invoice today', "i'll send the invoice today"],
      why: 'La promesa inmediata se hace con WILL.' },
    { t: 'order', words: ['Are', 'you', 'going', 'to', 'attend', 'the', 'trade', 'fair?'], a: 'Are you going to attend the trade fair?',
      why: 'Pregunta con going to: Are + sujeto + going to + verbo.' },
    { t: 'mc', q: 'Elige la correcta.', opts: ["I'll call you when I will arrive", "I'll call you when I arrive", 'I call you when I will arrive'], a: 1,
      why: 'Después de WHEN no se usa will, aunque hables del futuro.' },
    { t: 'fill', q: "We'll ship it as soon as we ___ the payment.", a: ['receive', 'get'],
      why: 'Tras "as soon as" va presente, nunca will.' },
    { t: 'listen', audio: "I'm meeting the supplier tomorrow, so I'll confirm the lead time after that.", opts: ['Me reúno mañana con el proveedor, así que confirmaré el plazo después.', 'Me reuní ayer con el proveedor y confirmé el plazo.', 'Voy a llamar al proveedor para cancelar la entrega.'], a: 0,
      why: 'Presente continuo para la cita agendada + will para lo que decides ahora.' },
    { t: 'mc', q: '"Lead time" significa...', opts: ['tiempo de entrega', 'hora punta', 'tiempo libre'], a: 0,
      why: 'Término clave en comercio exterior: desde el pedido hasta la entrega.' },
    { t: 'tr', q: 'Puede que necesitemos una semana más.', a: ['we might need an extra week', 'we may need an extra week', 'we might need one more week'],
      why: 'MIGHT expresa posibilidad. Después va verbo base, sin "to".' },
    { t: 'order', words: ['I', 'look', 'forward', 'to', 'hearing', 'from', 'you.'], a: 'I look forward to hearing from you.',
      why: 'Cierre estándar de correo formal. Ojo: tras "look forward to" va -ING, no infinitivo.' },
    { t: 'listen', audio: "The shipment should arrive on Tuesday, but we might need an extra day for customs.", opts: ['El envío debería llegar el martes, pero puede que necesitemos un día más para la aduana.', 'El envío llegará el martes sin problemas de aduana.', 'El envío llegó el martes tras un día en aduana.'], a: 0,
      why: 'SHOULD (probable) y MIGHT (posible): dos grados de certeza en la misma frase.' }
  ]
},

{
  id: 'b1-8', level: 'B1', title: 'Present perfect: experiencia y resultados',
  goal: 'Hablar de tu experiencia y de resultados que siguen vigentes hoy.',
  grammar: {
    title: 'Present perfect: el tiempo que el español no tiene igual',
    es: 'Se forma con HAVE / HAS + participio pasado (worked, sent, been, done). Y es el tiempo que más problemas da, porque en español lo traducimos igual que el pasado simple pero en inglés NO son intercambiables.\n\n' +
        'PRESENT PERFECT se usa cuando el momento exacto no importa o no se dice:\n' +
        '· Experiencias de vida: "I’ve worked with Asian suppliers" (alguna vez, no importa cuándo).\n' +
        '· Algo que empezó en el pasado y SIGUE: "I’ve worked here for five years" (sigo aquí).\n' +
        '· Pasado reciente con efecto en el presente: "I’ve just sent the invoice" (ya está enviada).\n\n' +
        'PASADO SIMPLE en cuanto dices CUÁNDO: "I worked there in 2019", "I sent it yesterday". Si aparece yesterday, last week, in 2019, ago, o cualquier fecha, es pasado simple. Sin excepción.\n\n' +
        'Prueba infalible: si puedes añadir "¿cuándo?" y la respuesta está en la frase, usa pasado simple. Si no, present perfect.\n\n' +
        'FOR vs. SINCE: FOR + duración (for five years, for two months). SINCE + punto de inicio (since 2019, since March, since I joined). "I’ve been here for five years" = "I’ve been here since 2019".',
    examples: [
      { en: "I've worked here for five years.", es: 'Llevo cinco años trabajando aquí.' },
      { en: "Have you ever been to the US?", es: '¿Has estado alguna vez en EE. UU.?' },
      { en: "We haven't received the payment yet.", es: 'Todavía no hemos recibido el pago.' },
      { en: "I've just sent you the invoice.", es: 'Acabo de enviarte la factura.' },
      { en: "I worked in Quito in 2019.", es: 'Trabajé en Quito en 2019.' }
    ],
    more: [
      {
        title: 'JUST, ALREADY, YET, EVER, NEVER: dónde van',
        es: 'Estas cinco palabras acompañan casi siempre al present perfect, y cada una tiene su sitio fijo.\n\n' +
            'JUST (acabar de) va entre have y el participio: "I’ve just sent it".\n' +
            'ALREADY (ya, antes de lo esperado) también en medio: "They’ve already approved it".\n' +
            'YET (todavía / ya) va al FINAL, y solo en negativas y preguntas: "We haven’t signed it yet", "Have you sent it yet?".\n' +
            'EVER (alguna vez) va en medio, solo en preguntas: "Have you ever worked with them?".\n' +
            'NEVER (nunca) va en medio y ya es negativo: "I’ve never been to China" — no lleva "not".',
        examples: [
          { en: "I've just spoken to the client.", es: 'Acabo de hablar con el cliente.' },
          { en: "They've already approved the quotation.", es: 'Ya aprobaron la cotización.' },
          { en: "We haven't signed the contract yet.", es: 'Todavía no hemos firmado el contrato.' }
        ]
      },
      {
        title: 'Present perfect continuo y hablar de cifras',
        es: 'HAVE BEEN + verbo-ING pone el foco en la duración de la actividad: "I’ve been working on this proposal all week". Con verbos de estado (know, be) no se usa: se dice "I’ve known him for years", no "I’ve been knowing".\n\n' +
            'Para resultados y cifras, el present perfect es el tiempo natural del informe de gestión: "Sales HAVE INCREASED by 12%", "We HAVE REDUCED costs".\n\n' +
            'Vocabulario de variación: increase / go up / rise (subir) · decrease / go down / drop / fall (bajar) · remain stable (mantenerse) · reach (alcanzar). Y la preposición: BY para el cambio (increased BY 10%), TO para el destino (increased TO 500 units).',
        examples: [
          { en: "Sales have increased by twelve percent.", es: 'Las ventas han aumentado un doce por ciento.' },
          { en: "I've been working on this proposal all week.", es: 'Llevo toda la semana con esta propuesta.' },
          { en: "Costs have gone down since January.", es: 'Los costos han bajado desde enero.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'I work here since 2019.', good: "I've worked here since 2019.", es: 'Con since se usa present perfect.' },
      { bad: "I've sent it yesterday.", good: 'I sent it yesterday.', es: 'Con "yesterday" va pasado simple.' },
      { bad: "I've worked here since five years.", good: "I've worked here for five years.", es: 'FOR + duración, SINCE + punto de inicio.' },
      { bad: 'Have you already sent it yet?', good: 'Have you sent it yet?', es: 'Yet va al final en preguntas; already no se mezcla ahí.' },
      { bad: "I haven't never been to China.", good: "I've never been to China.", es: 'Never ya es negativo.' }
    ]
  },
  vocab: [
    { en: 'ever', es: 'alguna vez' },
    { en: 'never', es: 'nunca' },
    { en: 'already', es: 'ya' },
    { en: 'yet', es: 'todavía / ya' },
    { en: 'just', es: 'acabar de' },
    { en: 'since', es: 'desde' },
    { en: 'for', es: 'durante' },
    { en: 'so far', es: 'hasta ahora' },
    { en: 'lately', es: 'últimamente' },
    { en: 'experience', es: 'experiencia' },
    { en: 'to achieve', es: 'lograr' },
    { en: 'to increase', es: 'aumentar' },
    { en: 'to decrease', es: 'disminuir' },
    { en: 'to go up', es: 'subir' },
    { en: 'to go down', es: 'bajar' },
    { en: 'to drop', es: 'caer' },
    { en: 'to rise', es: 'subir' },
    { en: 'to improve', es: 'mejorar' },
    { en: 'to reach', es: 'alcanzar' },
    { en: 'to remain stable', es: 'mantenerse estable' },
    { en: 'growth', es: 'crecimiento' },
    { en: 'coverage', es: 'cobertura' },
    { en: 'performance', es: 'desempeño' },
    { en: 'figures', es: 'cifras' },
    { en: 'been (be)', es: 'estado / sido' },
    { en: 'done (do)', es: 'hecho' },
    { en: 'seen (see)', es: 'visto' },
    { en: 'taken (take)', es: 'tomado' },
    { en: 'written (write)', es: 'escrito' },
    { en: 'spoken (speak)', es: 'hablado' }
  ],
  phrases: [
    { en: "I've worked in sales for ten years.", es: 'Llevo diez años trabajando en ventas.' },
    { en: "Have you ever worked with Asian suppliers?", es: '¿Has trabajado alguna vez con proveedores asiáticos?' },
    { en: "We haven't received the payment yet.", es: 'Todavía no hemos recibido el pago.' },
    { en: "I've just sent you the invoice.", es: 'Acabo de enviarte la factura.' },
    { en: "Sales have increased by ten percent.", es: 'Las ventas han aumentado un diez por ciento.' },
    { en: "I've been with the company since 2019.", es: 'Estoy en la empresa desde 2019.' },
    { en: "They've already approved the quotation.", es: 'Ya aprobaron la cotización.' },
    { en: "I've never had a problem with them.", es: 'Nunca he tenido un problema con ellos.' },
    { en: "How long have you been in this role?", es: '¿Cuánto llevas en este puesto?' },
    { en: "So far the results have been good.", es: 'Hasta ahora los resultados han sido buenos.' },
    { en: "Coverage has dropped since March.", es: 'La cobertura ha bajado desde marzo.' },
    { en: "I've been working on this all week.", es: 'Llevo toda la semana con esto.' }
  ],
  exercises: [
    { t: 'mc', q: 'Llevas 5 años en la empresa y sigues ahí. Elige la correcta.', opts: ['I work here since five years', "I've worked here for five years", 'I worked here for five years'], a: 1,
      why: 'Present perfect + FOR (duración). Since se usa con un punto de inicio.' },
    { t: 'fill', q: "We haven't signed the contract ___.", a: ['yet'],
      why: 'YET va al final en frases negativas y preguntas.' },
    { t: 'fill', q: "I have worked here ___ 2019.", a: ['since'],
      why: 'SINCE + momento concreto. FOR + duración.' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ["I've sent it yesterday", 'I sent it yesterday', 'I have sent it yesterday'], a: 1,
      why: 'Con "yesterday" el momento está dicho: pasado simple obligatorio.' },
    { t: 'tr', q: '¿Has visitado alguna vez la feria de Cantón?', a: ['have you ever visited the canton fair', 'have you ever been to the canton fair'],
      why: 'EVER va entre el sujeto y el participio.' },
    { t: 'order', words: ['Sales', 'have', 'increased', 'by', 'fifteen', 'percent.'], a: 'Sales have increased by fifteen percent.',
      why: 'Para porcentajes de cambio se usa BY: increased by 15%.' },
    { t: 'mc', q: '¿Dónde va "just"?', opts: ['I just have sent it', "I've just sent it", "I've sent it just"], a: 1,
      why: 'JUST y ALREADY van entre have y el participio.' },
    { t: 'listen', audio: "I've just spoken to the customer and they've already approved the quotation.", opts: ['Acabo de hablar con el cliente y ya aprobaron la cotización.', 'Voy a hablar con el cliente para que apruebe la cotización.', 'Hablé con el cliente pero no aprobó la cotización.'], a: 0,
      why: 'JUST = acabar de. ALREADY = ya. Señales típicas del present perfect.' },
    { t: 'tr', q: 'Nunca he tenido un problema con ellos.', a: ["i've never had a problem with them", 'i have never had a problem with them'],
      why: 'NEVER ya es negativo: no se añade "not".' },
    { t: 'fill', q: "Coverage has dropped ___ March.", a: ['since'],
      why: 'March es un punto de inicio: SINCE.' },
    { t: 'mc', q: '"Sales increased to 500 units" significa...', opts: ['aumentaron 500 unidades', 'llegaron a 500 unidades', 'bajaron a 500 unidades'], a: 1,
      why: 'TO marca el destino; BY marcaría la magnitud del cambio.' },
    { t: 'listen', audio: "How long have you been in this role? — For about three years now.", opts: ['¿Cuánto llevas en este puesto? — Unos tres años.', '¿Cuándo empezaste en este puesto? — Hace tres años exactos.', '¿Cuánto durará este puesto? — Unos tres años.'], a: 0,
      why: '"How long have you...?" pregunta por duración, y se responde con FOR.' }
  ]
},

{
  id: 'b1-9', level: 'B1', title: 'Opiniones y acuerdos',
  goal: 'Dar tu opinión, estar de acuerdo, discrepar con elegancia y argumentar.',
  grammar: {
    title: 'Conectores para argumentar',
    es: 'Un argumento sólido no depende de palabras difíciles, sino de unir bien las ideas. Estos son los conectores que necesitas.\n\n' +
        'CONTRASTE: however (sin embargo) va al inicio de una frase nueva y lleva coma detrás. Although / though (aunque) va al inicio de una oración con sujeto y verbo. But (pero) une dos partes dentro de la misma frase. Despite / in spite of (a pesar de) va seguido de sustantivo o -ing, nunca de una oración completa.\n\n' +
        'CAUSA Y EFECTO: because (porque) introduce el motivo · so (así que) introduce la consecuencia · therefore (por lo tanto) es su versión formal · that’s why (por eso).\n\n' +
        'AÑADIR: also, in addition, moreover, what’s more.\n\n' +
        'El error más frecuente: usar "however" como si fuera "but" en mitad de la frase. Se dice "The price is good, BUT the lead time is long" o bien "The price is good. HOWEVER, the lead time is long". No las mezcles.',
    examples: [
      { en: "I like the price. However, the lead time is too long.", es: 'Me gusta el precio. Sin embargo, el plazo es muy largo.' },
      { en: "Although it's expensive, the quality is excellent.", es: 'Aunque es caro, la calidad es excelente.' },
      { en: "The price went up, so we changed suppliers.", es: 'El precio subió, así que cambiamos de proveedor.' },
      { en: "Despite the delay, the client was happy.", es: 'A pesar del retraso, el cliente quedó contento.' },
      { en: "We lost the order because our price was too high.", es: 'Perdimos el pedido porque nuestro precio era muy alto.' }
    ],
    more: [
      {
        title: 'Cómo discrepar sin romper la relación',
        es: 'En inglés profesional el desacuerdo directo se percibe como agresivo. La fórmula que funciona tiene tres pasos: reconoce, discrepa suave, propón.\n\n' +
            '1. RECONOCE: "I see your point" · "That’s a fair point" · "I understand where you’re coming from".\n' +
            '2. DISCREPA SUAVE: "but I’m not sure that..." · "I’m afraid I see it differently" · "I’d look at it another way".\n' +
            '3. PROPÓN: "What if we...?" · "How about...?" · "Would it work if...?".\n\n' +
            'Evita "You are wrong" y "That’s not true": son correctas gramaticalmente pero cierran la conversación.\n\n' +
            'Para acordar: "I completely agree" · "Exactly" · "That makes sense" · "Fair enough" (me parece razonable, muy usada y muy natural).',
        examples: [
          { en: "I see your point, but I'm not sure it would work here.", es: 'Entiendo tu punto, pero no sé si funcionaría aquí.' },
          { en: "I'm afraid I see it differently.", es: 'Me temo que lo veo distinto.' },
          { en: "That makes sense. What if we try it next quarter?", es: 'Tiene sentido. ¿Y si lo probamos el próximo trimestre?' }
        ]
      },
      {
        title: 'Verbos de opinión y la estructura THINK THAT',
        es: 'I think / I believe / I feel / In my opinion / From my point of view / As far as I’m concerned.\n\n' +
            'Detalle: se dice IN my opinion, no "for my opinion". Y FROM my point of view, no "in my point of view".\n\n' +
            'La palabra THAT después de think es opcional y los nativos suelen omitirla: "I think (that) we should wait". Suena más natural sin ella.\n\n' +
            'Para negar una opinión, el inglés mueve la negación al primer verbo: no se dice "I think we shouldn’t do it", se dice "I DON’T think we should do it". Se llama negación anticipada y es muy característico.',
        examples: [
          { en: "I don't think we should accept those terms.", es: 'No creo que debamos aceptar esas condiciones.' },
          { en: "In my opinion, the price is too high.", es: 'En mi opinión, el precio es demasiado alto.' },
          { en: "As far as I'm concerned, it's a good deal.", es: 'En lo que a mí respecta, es un buen trato.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'For my opinion...', good: 'In my opinion...', es: 'Es "in my opinion".' },
      { bad: 'In my point of view...', good: 'From my point of view...', es: 'Es "from my point of view".' },
      { bad: 'I think we should not accept.', good: "I don't think we should accept.", es: 'El inglés adelanta la negación.' },
      { bad: 'The price is good, however the lead time is long.', good: 'The price is good. However, the lead time is long.', es: 'However inicia frase y lleva coma.' },
      { bad: 'Despite of the delay...', good: 'Despite the delay... / In spite of the delay...', es: '"Despite" no lleva "of".' }
    ]
  },
  vocab: [
    { en: 'to agree', es: 'estar de acuerdo' },
    { en: 'to disagree', es: 'discrepar' },
    { en: 'to suggest', es: 'sugerir' },
    { en: 'to argue', es: 'argumentar / discutir' },
    { en: 'opinion', es: 'opinión' },
    { en: 'point of view', es: 'punto de vista' },
    { en: 'however', es: 'sin embargo' },
    { en: 'although', es: 'aunque' },
    { en: 'despite', es: 'a pesar de' },
    { en: 'therefore', es: 'por lo tanto' },
    { en: 'because', es: 'porque' },
    { en: 'so', es: 'así que' },
    { en: 'in addition', es: 'además' },
    { en: 'on the other hand', es: 'por otro lado' },
    { en: 'actually', es: 'en realidad' },
    { en: 'to be honest', es: 'para ser sincero' },
    { en: 'it depends', es: 'depende' },
    { en: 'that makes sense', es: 'eso tiene sentido' },
    { en: 'fair enough', es: 'me parece razonable' },
    { en: 'a fair point', es: 'un buen argumento' },
    { en: 'reason', es: 'razón' },
    { en: 'advantage', es: 'ventaja' },
    { en: 'disadvantage', es: 'desventaja' },
    { en: 'risk', es: 'riesgo' },
    { en: 'benefit', es: 'beneficio' },
    { en: 'to consider', es: 'considerar' },
    { en: 'to admit', es: 'admitir' },
    { en: 'to point out', es: 'señalar' }
  ],
  phrases: [
    { en: "In my opinion, we should wait.", es: 'En mi opinión, deberíamos esperar.' },
    { en: "I see your point, but I'd do it differently.", es: 'Entiendo tu punto, pero yo lo haría distinto.' },
    { en: "I completely agree with you.", es: 'Estoy totalmente de acuerdo contigo.' },
    { en: "I'm afraid I don't agree.", es: 'Me temo que no estoy de acuerdo.' },
    { en: "What do you think about this proposal?", es: '¿Qué opinas de esta propuesta?' },
    { en: "That makes sense to me.", es: 'Eso me hace sentido.' },
    { en: "I don't think that's a good idea.", es: 'No creo que sea buena idea.' },
    { en: "On the other hand, it could save us time.", es: 'Por otro lado, podría ahorrarnos tiempo.' },
    { en: "To be honest, I have my doubts.", es: 'Para ser sincero, tengo mis dudas.' },
    { en: "That's a fair point.", es: 'Es un buen argumento.' },
    { en: "What if we try it for one quarter?", es: '¿Y si lo probamos un trimestre?' },
    { en: "It depends on the payment terms.", es: 'Depende de las condiciones de pago.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál es la forma MÁS diplomática de discrepar?', opts: ["You're wrong.", "I'm afraid I see it differently.", "No, that's not true."], a: 1,
      why: '"I’m afraid..." suaviza el desacuerdo. Es el recurso más útil en reuniones.' },
    { t: 'fill', q: "I like the offer. ___, the payment terms are difficult.", a: ['however'],
      why: 'HOWEVER inicia una frase nueva y va seguido de coma.' },
    { t: 'tr', q: 'En mi opinión, el precio es demasiado alto.', a: ['in my opinion the price is too high', 'in my opinion, the price is too high'],
      why: 'Se dice "IN my opinion". Y "too high" (demasiado), no "very high".' },
    { t: 'order', words: ['I', 'see', 'your', 'point,', 'but', 'I', 'disagree.'], a: 'I see your point, but I disagree.',
      why: 'Primero reconoces, luego discrepas: la fórmula estándar del inglés profesional.' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ["I think we shouldn't accept", "I don't think we should accept", "I think not we should accept"], a: 1,
      why: 'El inglés adelanta la negación al primer verbo: "I don’t think...".' },
    { t: 'fill', q: "___ the delay, the client was happy.", a: ['despite'],
      why: 'DESPITE + sustantivo, sin "of". Si fuera oración completa sería "Although...".' },
    { t: 'listen', audio: "To be honest, I think we should look for another supplier.", opts: ['Para ser sincero, creo que deberíamos buscar otro proveedor.', 'Para ser sincero, creo que el proveedor tiene razón.', 'Honestamente, ya encontramos otro proveedor.'], a: 0,
      why: '"To be honest" prepara al oyente para una opinión franca.' },
    { t: 'mc', q: '"Fair enough" se usa para...', opts: ['aceptar el argumento del otro', 'pedir un precio justo', 'decir que algo es suficiente'], a: 0,
      why: 'Es muy natural: "de acuerdo, lo acepto / me parece razonable".' },
    { t: 'tr', q: 'Aunque es caro, la calidad es excelente.', a: ['although it is expensive the quality is excellent', "although it's expensive, the quality is excellent", 'though it is expensive the quality is excellent'],
      why: 'ALTHOUGH va seguido de una oración con sujeto y verbo.' },
    { t: 'fill', q: "That's a fair ___.", a: ['point'],
      why: '"A fair point" = un buen argumento. Sirve para reconocer sin ceder.' },
    { t: 'order', words: ['On', 'the', 'other', 'hand,', 'it', 'could', 'save', 'us', 'time.'], a: 'On the other hand, it could save us time.',
      why: '"On the other hand" introduce el contrapeso de un argumento.' },
    { t: 'listen', audio: "I see where you're coming from, but I'm not sure it would work in our market.", opts: ['Entiendo tu postura, pero no estoy seguro de que funcione en nuestro mercado.', 'No entiendo de dónde vienes ni si funciona el mercado.', 'Estoy de acuerdo en que funcionaría en nuestro mercado.'], a: 0,
      why: '"I see where you’re coming from" es la forma más empática de reconocer antes de discrepar.' }
  ]
},

{
  id: 'b1-10', level: 'B1', title: 'Obligación, prohibición y consejo',
  goal: 'Decir lo que hay que hacer, lo que está prohibido y lo que conviene, sin sonar mandón.',
  grammar: {
    title: 'MUST, HAVE TO, SHOULD: la escala de la obligación',
    es: 'Tres formas de decir "hay que", y elegir mal cambia la relación con quien te escucha.\n\n' +
        'HAVE TO = obligación que viene de fuera: una norma, la ley, el jefe. "I have to send the report every Monday" (me lo exigen). Es la más usada en el día a día.\n\n' +
        'MUST = obligación que sientes tú, o una norma escrita en un documento. "I must call that client today" (me lo impongo yo). En contratos y avisos: "All goods must be inspected".\n\n' +
        'SHOULD = consejo, recomendación. No obliga. "You should confirm it in writing".\n\n' +
        'AQUÍ ESTÁ LA TRAMPA MÁS IMPORTANTE DEL INGLÉS DE NEGOCIOS, y es la negación:\n\n' +
        '· MUSTN’T = PROHIBIDO. "You mustn’t share these prices" = no puedes, está prohibido.\n' +
        '· DON’T HAVE TO = NO HACE FALTA. "You don’t have to come" = puedes venir si quieres, pero no es necesario.\n\n' +
        'Significan cosas opuestas. Confundirlas en un correo puede costarte un cliente o un malentendido serio.\n\n' +
        'Nota de forma: must y should no llevan "to" después ni cambian con la persona. "He must go", no "He musts to go". HAVE TO sí cambia: "He HAS to go".',
    examples: [
      { en: "I have to send the report every Monday.", es: 'Tengo que enviar el informe cada lunes.' },
      { en: "All goods must be inspected before shipping.", es: 'Toda la mercancía debe inspeccionarse antes del envío.' },
      { en: "You should confirm it in writing.", es: 'Deberías confirmarlo por escrito.' },
      { en: "You mustn't share these prices with anyone.", es: 'No debes compartir estos precios con nadie.' },
      { en: "You don't have to come to the meeting.", es: 'No hace falta que vengas a la reunión.' }
    ],
    more: [
      {
        title: 'Obligación en pasado y en futuro',
        es: 'MUST no tiene pasado. Para el pasado de la obligación se usa siempre HAD TO: "I had to cancel the trip". No existe "I musted".\n\n' +
            'En futuro: "I’ll have to check with my boss" · "We’re going to have to postpone it".\n\n' +
            'Para el consejo en pasado se usa SHOULD HAVE + participio, y sirve para reprochar o lamentar: "We should have confirmed it earlier" (deberíamos haberlo confirmado antes, pero no lo hicimos). Su negativo: "You shouldn’t have signed that".\n\n' +
            'Y una alternativa muy útil: HAD BETTER (’d better) para advertencias con cierta urgencia. "We’d better call him now" = más vale que le llamemos ya. Es más fuerte que "should" pero menos que "must".',
        examples: [
          { en: "I had to cancel the trip last week.", es: 'Tuve que cancelar el viaje la semana pasada.' },
          { en: "We should have confirmed it earlier.", es: 'Deberíamos haberlo confirmado antes.' },
          { en: "We'd better call him before five.", es: 'Más vale que le llamemos antes de las cinco.' }
        ]
      },
      {
        title: 'Suavizar la obligación cuando hablas con un cliente',
        es: 'Decirle "you must" o "you have to" a un cliente suena a orden. En su lugar, dale la vuelta:\n\n' +
            'En vez de "You must pay 30% upfront" → "We would need a 30% deposit to start" o "The order requires a 30% deposit".\n' +
            'En vez de "You have to send the PO" → "Could you send us the purchase order?" o "We’ll need the purchase order to proceed".\n' +
            'En vez de "You should choose the other model" → "I’d recommend the other model" o "You might want to consider the other model".\n\n' +
            'La técnica es mover la obligación de la persona al proceso: no es que TÚ debas, es que el proceso lo requiere. Suena impersonal y nadie se ofende.\n\n' +
            'Verbos útiles para eso: require, need, involve. "The process requires...", "This would involve...".',
        examples: [
          { en: "We would need a thirty percent deposit to start.", es: 'Necesitaríamos un treinta por ciento de anticipo para empezar.' },
          { en: "I'd recommend the second option.", es: 'Yo recomendaría la segunda opción.' },
          { en: "You might want to consider a longer lead time.", es: 'Quizá quiera considerar un plazo más largo.' }
        ]
      }
    ],
    mistakes: [
      { bad: "You don't have to share these prices (queriendo prohibir).", good: "You mustn't share these prices.", es: '"Don’t have to" es "no hace falta", no "está prohibido".' },
      { bad: 'He musts to go.', good: 'He must go.', es: 'Must no lleva -s ni "to".' },
      { bad: 'I musted cancel it.', good: 'I had to cancel it.', es: 'Must no tiene pasado: se usa "had to".' },
      { bad: 'You must send me the PO.', good: 'Could you send us the purchase order?', es: 'A un cliente, "must" suena a orden.' },
      { bad: 'We should to confirm it.', good: 'We should confirm it.', es: 'Should no lleva "to".' }
    ]
  },
  vocab: [
    { en: 'must', es: 'deber (obligación propia)' }, { en: 'have to', es: 'tener que' },
    { en: 'should', es: 'debería' }, { en: "mustn't", es: 'no debe (prohibido)' },
    { en: "don't have to", es: 'no hace falta' }, { en: 'had to', es: 'tuve que' },
    { en: 'had better', es: 'más vale que' }, { en: 'to require', es: 'requerir' },
    { en: 'to need', es: 'necesitar' }, { en: 'to involve', es: 'implicar' },
    { en: 'to allow', es: 'permitir' }, { en: 'to forbid', es: 'prohibir' },
    { en: 'allowed', es: 'permitido' }, { en: 'forbidden', es: 'prohibido' },
    { en: 'compulsory', es: 'obligatorio' }, { en: 'optional', es: 'opcional' },
    { en: 'deadline', es: 'fecha límite' }, { en: 'policy', es: 'política / norma' },
    { en: 'rule', es: 'regla' }, { en: 'procedure', es: 'procedimiento' },
    { en: 'to comply with', es: 'cumplir con' }, { en: 'compliance', es: 'cumplimiento' },
    { en: 'to approve', es: 'aprobar' }, { en: 'approval', es: 'aprobación' },
    { en: 'to authorize', es: 'autorizar' }, { en: 'signature', es: 'firma' },
    { en: 'deposit', es: 'anticipo' }, { en: 'in writing', es: 'por escrito' },
    { en: 'to proceed', es: 'proceder / continuar' }, { en: 'to recommend', es: 'recomendar' }
  ],
  phrases: [
    { en: "I have to send the report every Monday.", es: 'Tengo que enviar el informe cada lunes.' },
    { en: "You mustn't share these prices with the competition.", es: 'No debes compartir estos precios con la competencia.' },
    { en: "You don't have to come if you're busy.", es: 'No hace falta que vengas si estás ocupado.' },
    { en: "You should confirm it in writing.", es: 'Deberías confirmarlo por escrito.' },
    { en: "I had to cancel the trip last week.", es: 'Tuve que cancelar el viaje la semana pasada.' },
    { en: "We should have confirmed it earlier.", es: 'Deberíamos haberlo confirmado antes.' },
    { en: "We'd better call him before five.", es: 'Más vale que le llamemos antes de las cinco.' },
    { en: "The order requires a thirty percent deposit.", es: 'El pedido requiere un anticipo del treinta por ciento.' },
    { en: "I'll have to check with my manager.", es: 'Tendré que consultarlo con mi gerente.' },
    { en: "Does it need my approval?", es: '¿Necesita mi aprobación?' },
    { en: "This has to be signed before Friday.", es: 'Esto tiene que firmarse antes del viernes.' },
    { en: "I'd recommend waiting until next month.", es: 'Yo recomendaría esperar hasta el próximo mes.' }
  ],
  exercises: [
    { t: 'mc', q: 'Quieres decir que está PROHIBIDO compartir los precios. ¿Cuál usas?', opts: ["You don't have to share these prices", "You mustn't share these prices", "You shouldn't have to share these prices"], a: 1, why: 'MUSTN’T = prohibido. DON’T HAVE TO significa que no hace falta, que es lo contrario.' },
    { t: 'mc', q: '"You don’t have to come to the meeting" significa...', opts: ['Tienes prohibido venir', 'No hace falta que vengas', 'Deberías venir'], a: 1, why: 'Es ausencia de obligación, no prohibición. Es la confusión más costosa de este tema.' },
    { t: 'fill', q: "I ___ to cancel the trip last week.", a: ['had'], why: 'Must no tiene pasado: se usa HAD TO.' },
    { t: 'mc', q: 'Elige la correcta.', opts: ['He must to sign it', 'He musts sign it', 'He must sign it'], a: 2, why: 'Must no lleva "to" ni -s en tercera persona.' },
    { t: 'tr', q: 'Deberías confirmarlo por escrito.', a: ['you should confirm it in writing', "you should confirm it in writing please"], why: 'SHOULD sin "to" después.' },
    { t: 'order', words: ['We', 'should', 'have', 'confirmed', 'it', 'earlier.'], a: 'We should have confirmed it earlier.', why: 'SHOULD HAVE + participio: lo que convenía haber hecho y no se hizo.' },
    { t: 'mc', q: 'Le escribes a un CLIENTE. ¿Cuál suena mejor?', opts: ['You must pay 30% upfront.', 'We would need a 30% deposit to start.', 'You have to pay us first.'], a: 1, why: 'Mueve la obligación de la persona al proceso: nadie se ofende.' },
    { t: 'fill', q: "The order ___ a thirty percent deposit.", a: ['requires', 'needs'], why: 'REQUIRE despersonaliza la obligación. Es el verbo de los contratos.' },
    { t: 'tr', q: 'Tendré que consultarlo con mi gerente.', a: ["i'll have to check with my manager", 'i will have to check with my manager'], why: 'En futuro la obligación se dice con WILL HAVE TO.' },
    { t: 'listen', audio: "You don't have to sign it today, but you mustn't send it to anyone before we do.", opts: ['No hace falta que lo firmes hoy, pero no debes enviárselo a nadie antes que nosotros.', 'Tienes que firmarlo hoy y puedes enviarlo a quien quieras.', 'No puedes firmarlo hoy ni enviarlo después.'], a: 0, why: 'Las dos negaciones en la misma frase, con significados opuestos. Si distingues esto, ya lo tienes.' },
    { t: 'mc', q: '"We’d better call him now" es...', opts: ['una sugerencia suave', 'una advertencia con urgencia', 'una obligación legal'], a: 1, why: 'HAD BETTER es más fuerte que "should" y menos que "must": implica consecuencia si no se hace.' }
  ]
},

{
  id: 'b1-11', level: 'B1', title: 'Gerundio o infinitivo',
  goal: 'Saber cuándo va -ing y cuándo va to, que es donde más se equivoca un hispanohablante.',
  grammar: {
    title: 'Cuando un verbo va detrás de otro',
    es: 'En español, detrás de un verbo casi siempre va un infinitivo: "quiero trabajar", "disfruto trabajando"... y ya. En inglés hay que elegir entre dos formas, y no hay lógica que valga: se memoriza por listas.\n\n' +
        'VERBOS QUE PIDEN INFINITIVO CON TO: want, need, decide, hope, plan, agree, offer, promise, refuse, learn, manage, expect, would like, seem, afford, arrange.\n' +
        '"I WANT TO place an order" · "We DECIDED TO change suppliers".\n\n' +
        'VERBOS QUE PIDEN -ING: enjoy, finish, avoid, mind, suggest, recommend, consider, keep, practise, miss, risk, involve, deny, imagine.\n' +
        '"I ENJOY WORKING with them" · "We RECOMMEND CHECKING the packaging".\n\n' +
        'DESPUÉS DE UNA PREPOSICIÓN, SIEMPRE -ING. Esta regla no tiene excepciones y resuelve la mitad de los casos: "interested IN WORKING", "before SENDING it", "instead OF CALLING", "good AT NEGOTIATING".\n\n' +
        'Y aquí está el que más falla: LOOK FORWARD TO lleva -ING, porque ese "to" es una preposición, no el infinitivo. Se dice "I look forward to HEARING from you", nunca "to hear". Aparece al final de casi todos los correos formales, así que este error se ve mucho.\n\n' +
        'Igual pasa con: be used to + -ing (estar acostumbrado a), object to + -ing, commit to + -ing.',
    examples: [
      { en: "I want to place an order.", es: 'Quiero hacer un pedido.' },
      { en: "I enjoy working with that supplier.", es: 'Disfruto trabajando con ese proveedor.' },
      { en: "I look forward to hearing from you.", es: 'Quedo a la espera de su respuesta.' },
      { en: "We're interested in working with you.", es: 'Nos interesa trabajar con ustedes.' },
      { en: "Before sending it, check the address.", es: 'Antes de enviarlo, revisa la dirección.' }
    ],
    more: [
      {
        title: 'Verbos que aceptan las dos formas y cambian de significado',
        es: 'Unos pocos verbos admiten -ing e infinitivo, pero significan cosas distintas. Merece la pena saberlos porque el malentendido es serio.\n\n' +
            'REMEMBER: "I remembered TO SEND it" = me acordé de enviarlo (lo envié). "I remember SENDING it" = recuerdo haberlo enviado (el recuerdo es del pasado).\n\n' +
            'FORGET: "I forgot TO CALL him" = se me olvidó llamarle (no llamé). "I’ll never forget MEETING him" = nunca olvidaré haberle conocido.\n\n' +
            'STOP: "We stopped TO TALK" = paramos PARA hablar. "We stopped TALKING" = dejamos de hablar. Opuestos.\n\n' +
            'TRY: "Try TO CALL him" = intenta llamarle (cuesta). "Try CALLING him" = prueba a llamarle (a ver si funciona).\n\n' +
            'Y con LIKE / LOVE / HATE / PREFER las dos formas valen y significan casi lo mismo: "I like travelling" = "I like to travel".',
        examples: [
          { en: "I remembered to send the invoice.", es: 'Me acordé de enviar la factura.' },
          { en: "We stopped to have a coffee.", es: 'Paramos para tomar un café.' },
          { en: "Try calling him on his mobile.", es: 'Prueba a llamarle al celular.' }
        ]
      },
      {
        title: 'El -ING como sujeto y las estructuras con objeto',
        es: 'Cuando la acción es el SUJETO de la frase, va en -ing: "NEGOTIATING with them is difficult", "TRAVELLING takes a lot of time". En español pondrías el infinitivo ("negociar con ellos es difícil"); en inglés, -ing.\n\n' +
            'ESTRUCTURA VERBO + OBJETO + INFINITIVO: want, ask, tell, advise, expect, allow, remind. "I want YOU TO check it", "They asked US TO wait", "Remind ME TO call him".\n\n' +
            'Fíjate en la diferencia con el español: no se dice "I want that you check it". El "que" español desaparece y se usa objeto + to + verbo. Es un error muy frecuente.\n\n' +
            'Excepción: MAKE y LET van sin "to". "That makes me think", "Let me check".',
        examples: [
          { en: "Negotiating with them is not easy.", es: 'Negociar con ellos no es fácil.' },
          { en: "I want you to check the packaging.", es: 'Quiero que revises el embalaje.' },
          { en: "Let me check and get back to you.", es: 'Déjame revisar y te respondo.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'I look forward to hear from you.', good: 'I look forward to hearing from you.', es: 'Ese "to" es preposición: pide -ing.' },
      { bad: 'I enjoy to work with them.', good: 'I enjoy working with them.', es: '"Enjoy" siempre pide -ing.' },
      { bad: 'I want that you check it.', good: 'I want you to check it.', es: 'El "que" español no se traduce: objeto + to + verbo.' },
      { bad: "I'm interested in to work with you.", good: "I'm interested in working with you.", es: 'Tras preposición, siempre -ing.' },
      { bad: 'To negotiate with them is difficult.', good: 'Negotiating with them is difficult.', es: 'Como sujeto, lo natural es -ing.' }
    ]
  },
  vocab: [
    { en: 'to want to', es: 'querer' }, { en: 'to need to', es: 'necesitar' },
    { en: 'to decide to', es: 'decidir' }, { en: 'to plan to', es: 'planear' },
    { en: 'to agree to', es: 'acceder a' }, { en: 'to offer to', es: 'ofrecerse a' },
    { en: 'to refuse to', es: 'negarse a' }, { en: 'to manage to', es: 'lograr' },
    { en: 'to expect to', es: 'esperar' }, { en: 'to afford to', es: 'permitirse' },
    { en: 'to enjoy -ing', es: 'disfrutar' }, { en: 'to avoid -ing', es: 'evitar' },
    { en: 'to mind -ing', es: 'importar / molestar' }, { en: 'to suggest -ing', es: 'sugerir' },
    { en: 'to recommend -ing', es: 'recomendar' }, { en: 'to consider -ing', es: 'considerar' },
    { en: 'to keep -ing', es: 'seguir haciendo' }, { en: 'to involve -ing', es: 'implicar' },
    { en: 'to risk -ing', es: 'arriesgarse a' }, { en: 'to look forward to', es: 'esperar con ganas' },
    { en: 'to be used to -ing', es: 'estar acostumbrado a' }, { en: 'interested in', es: 'interesado en' },
    { en: 'good at', es: 'bueno en' }, { en: 'instead of', es: 'en vez de' },
    { en: 'before -ing', es: 'antes de' }, { en: 'after -ing', es: 'después de' },
    { en: 'to remind', es: 'recordar (a alguien)' }, { en: 'to allow', es: 'permitir' },
    { en: 'to let', es: 'dejar' }, { en: 'to make someone', es: 'hacer que alguien' }
  ],
  phrases: [
    { en: "I want to place an order.", es: 'Quiero hacer un pedido.' },
    { en: "I enjoy working with that supplier.", es: 'Disfruto trabajando con ese proveedor.' },
    { en: "I look forward to hearing from you.", es: 'Quedo a la espera de su respuesta.' },
    { en: "We're interested in working with you.", es: 'Nos interesa trabajar con ustedes.' },
    { en: "Would you mind sending it again?", es: '¿Le importaría enviarlo otra vez?' },
    { en: "I'd recommend checking the packaging.", es: 'Recomendaría revisar el embalaje.' },
    { en: "We decided to change suppliers.", es: 'Decidimos cambiar de proveedor.' },
    { en: "I want you to check the invoice.", es: 'Quiero que revises la factura.' },
    { en: "Let me check and get back to you.", es: 'Déjame revisar y te respondo.' },
    { en: "Remind me to call him tomorrow.", es: 'Recuérdame llamarle mañana.' },
    { en: "Negotiating with them is not easy.", es: 'Negociar con ellos no es fácil.' },
    { en: "Before sending it, check the address.", es: 'Antes de enviarlo, revisa la dirección.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cómo se cierra un correo formal?', opts: ['I look forward to hear from you', 'I look forward to hearing from you', 'I look forward hear from you'], a: 1, why: 'Ese "to" es preposición, así que pide -ING. Es el error más visible porque va en todos los correos.' },
    { t: 'fill', q: "I enjoy ___ with that supplier.", a: ['working'], why: '"Enjoy" siempre va seguido de -ing.' },
    { t: 'mc', q: 'Elige la correcta.', opts: ['I want that you check it', 'I want you to check it', 'I want you check it'], a: 1, why: 'El "que" del español desaparece: objeto + to + verbo.' },
    { t: 'fill', q: "We're interested in ___ with you.", a: ['working'], why: 'Después de preposición, siempre -ing. Sin excepciones.' },
    { t: 'tr', q: 'Decidimos cambiar de proveedor.', a: ['we decided to change suppliers', 'we decided to change supplier'], why: '"Decide" pide infinitivo con TO.' },
    { t: 'mc', q: '"We stopped to have a coffee" significa...', opts: ['dejamos de tomar café', 'paramos para tomar un café', 'seguimos tomando café'], a: 1, why: 'STOP + to = parar PARA hacer algo. STOP + -ing = dejar de hacerlo.' },
    { t: 'order', words: ['Would', 'you', 'mind', 'sending', 'it', 'again?'], a: 'Would you mind sending it again?', why: '"Mind" pide -ing. Es una de las peticiones más educadas que existen.' },
    { t: 'tr', q: 'Recuérdame llamarle mañana.', a: ['remind me to call him tomorrow'], why: 'Estructura verbo + objeto + to + verbo.' },
    { t: 'mc', q: '¿Cuál es correcta como sujeto de la frase?', opts: ['To negotiate with them is hard', 'Negotiating with them is hard', 'Negotiate with them is hard'], a: 1, why: 'Cuando la acción es el sujeto, lo natural en inglés es -ing.' },
    { t: 'listen', audio: "I forgot to send the quotation, but I remember checking the prices last night.", opts: ['Olvidé enviar la cotización, pero recuerdo haber revisado los precios anoche.', 'Recordé enviar la cotización después de revisar los precios.', 'Olvidé revisar los precios y no envié la cotización.'], a: 0, why: 'FORGET + to (no lo hizo) y REMEMBER + -ing (recuerda haberlo hecho), en la misma frase.' },
    { t: 'fill', q: "___ me check and I'll get back to you.", a: ['let'], why: 'LET y MAKE van sin "to": "let me check", "it makes me think".' }
  ]
},

{
  id: 'b1-12', level: 'B1', title: 'Oraciones de relativo',
  goal: 'Unir dos ideas en una sola frase y dejar de hablar a base de frases cortas.',
  grammar: {
    title: 'WHO, WHICH, THAT: describir sin repetirte',
    es: 'Las oraciones de relativo sirven para añadir información sobre algo sin empezar una frase nueva. Son lo que separa un B1 de un A2: dejas de hablar en frases sueltas y empiezas a encadenar.\n\n' +
        'WHO para personas: "The client WHO called yesterday".\n' +
        'WHICH para cosas: "The order WHICH arrived damaged".\n' +
        'THAT sirve para las dos y es lo más usado al hablar: "The client THAT called", "The order THAT arrived".\n' +
        'WHERE para lugares: "The warehouse WHERE we store the samples".\n' +
        'WHOSE para posesión: "The supplier WHOSE prices went up".\n\n' +
        'LA REGLA QUE MÁS AHORRA: si el relativo es el OBJETO de la frase, se puede quitar. "The order (that) we sent yesterday". Los nativos lo omiten casi siempre. Si es el SUJETO, no se puede quitar: "The client THAT called" — ahí es obligatorio.\n\n' +
        'Truco para saberlo: si después del relativo viene directamente un verbo, es sujeto y no se quita. Si viene un sujeto nuevo (we, he, the company), es objeto y sí se puede quitar.\n\n' +
        'Y un error muy hispano: NO se repite el pronombre. Se dice "The client that called me", nunca "The client that HE called me".',
    examples: [
      { en: "The client who called yesterday wants a discount.", es: 'El cliente que llamó ayer quiere un descuento.' },
      { en: "The order that we sent last week arrived today.", es: 'El pedido que enviamos la semana pasada llegó hoy.' },
      { en: "This is the warehouse where we store the samples.", es: 'Esta es la bodega donde guardamos las muestras.' },
      { en: "The supplier whose prices went up is in Asia.", es: 'El proveedor cuyos precios subieron está en Asia.' },
      { en: "The report I sent you has the figures.", es: 'El informe que te envié tiene las cifras.' }
    ],
    more: [
      {
        title: 'Las dos clases de relativo y por qué importa la coma',
        es: 'ESPECIFICATIVAS (sin comas): la información es necesaria para saber de qué hablas. "The client who called yesterday wants a discount" — de todos mis clientes, ese.\n\n' +
            'EXPLICATIVAS (entre comas): la información es un añadido; si la quitas, la frase sigue teniendo sentido. "Mr. Silva, who called yesterday, wants a discount" — ya sabemos quién es, solo damos un dato extra.\n\n' +
            'Dos reglas para las explicativas: NO se puede usar "that" (solo who o which), y NO se puede omitir el relativo.\n\n' +
            'Un detalle elegante: WHICH puede referirse a toda la frase anterior, no solo a un sustantivo. "They cancelled the order, WHICH cost us the quarter" — el "which" es el hecho de cancelar.',
        examples: [
          { en: "Mr. Silva, who called yesterday, wants a discount.", es: 'El Sr. Silva, que llamó ayer, quiere un descuento.' },
          { en: "They cancelled the order, which cost us the quarter.", es: 'Cancelaron el pedido, lo que nos costó el trimestre.' },
          { en: "Our factory, which opened in 2019, is fully automated.", es: 'Nuestra fábrica, que abrió en 2019, está totalmente automatizada.' }
        ]
      },
      {
        title: 'Encadenar ideas: de A2 a B1 en una frase',
        es: 'Compara estas dos formas de decir lo mismo.\n\n' +
            'NIVEL A2: "I have a client. He is in Guayaquil. He buys a lot. He called me yesterday."\n' +
            'NIVEL B1: "I have a client in Guayaquil who buys a lot and who called me yesterday."\n\n' +
            'Mismo contenido, mitad de palabras, y suena mucho más competente. Este salto es exactamente lo que evalúa un examinador y lo que nota un cliente.\n\n' +
            'Otros recursos para encadenar sin relativos: participios ("The goods SHIPPED last week arrived today"), y aposiciones ("Ms. Lee, OUR MAIN BUYER, will attend").\n\n' +
            'Consejo práctico: cuando te oigas encadenando tres frases cortas seguidas, para y únelas con "who" o "that". Es el hábito que más rápido te sube de nivel.',
        examples: [
          { en: "I have a client in Guayaquil who buys a lot.", es: 'Tengo un cliente en Guayaquil que compra mucho.' },
          { en: "The goods shipped last week arrived today.", es: 'La mercancía enviada la semana pasada llegó hoy.' },
          { en: "Ms. Lee, our main buyer, will attend the meeting.", es: 'La Sra. Lee, nuestra compradora principal, asistirá a la reunión.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'The client that he called me.', good: 'The client that called me.', es: 'No se repite el pronombre sujeto.' },
      { bad: 'The client which called me.', good: 'The client who called me.', es: 'WHICH es para cosas; para personas, who o that.' },
      { bad: 'Mr. Silva, that called yesterday...', good: 'Mr. Silva, who called yesterday...', es: 'En las explicativas (con comas) no se usa "that".' },
      { bad: 'The place where I work in.', good: 'The place where I work.', es: '"Where" ya incluye la preposición.' },
      { bad: 'The supplier which prices went up.', good: 'The supplier whose prices went up.', es: 'Para posesión se usa WHOSE.' }
    ]
  },
  vocab: [
    { en: 'who', es: 'que / quien (personas)' }, { en: 'which', es: 'que / lo cual (cosas)' },
    { en: 'that', es: 'que (personas y cosas)' }, { en: 'where', es: 'donde' },
    { en: 'whose', es: 'cuyo' }, { en: 'when', es: 'cuando' },
    { en: 'main', es: 'principal' }, { en: 'to store', es: 'almacenar' },
    { en: 'to attend', es: 'asistir a' }, { en: 'to handle', es: 'manejar / gestionar' },
    { en: 'to deal with', es: 'tratar con' }, { en: 'in charge of', es: 'a cargo de' },
    { en: 'responsible for', es: 'responsable de' }, { en: 'headquarters', es: 'casa matriz' },
    { en: 'branch', es: 'sucursal' }, { en: 'plant', es: 'planta' },
    { en: 'region', es: 'región' }, { en: 'account', es: 'cuenta / cliente' },
    { en: 'key account', es: 'cuenta clave' }, { en: 'portfolio', es: 'cartera' },
    { en: 'to cover', es: 'cubrir' }, { en: 'to report', es: 'reportar' },
    { en: 'figures', es: 'cifras' }, { en: 'issue', es: 'problema / asunto' },
    { en: 'situation', es: 'situación' }, { en: 'reason', es: 'motivo' },
    { en: 'which is why', es: 'por eso' }, { en: 'as well as', es: 'así como' },
    { en: 'in addition to', es: 'además de' }, { en: 'apart from', es: 'aparte de' }
  ],
  phrases: [
    { en: "The client who called yesterday wants a discount.", es: 'El cliente que llamó ayer quiere un descuento.' },
    { en: "The order that we sent last week arrived today.", es: 'El pedido que enviamos la semana pasada llegó hoy.' },
    { en: "This is the warehouse where we store the samples.", es: 'Esta es la bodega donde guardamos las muestras.' },
    { en: "The supplier whose prices went up is in Asia.", es: 'El proveedor cuyos precios subieron está en Asia.' },
    { en: "The report I sent you has all the figures.", es: 'El informe que te envié tiene todas las cifras.' },
    { en: "Mr. Silva, who is our main buyer, will attend.", es: 'El Sr. Silva, que es nuestro comprador principal, asistirá.' },
    { en: "They cancelled the order, which cost us the quarter.", es: 'Cancelaron el pedido, lo que nos costó el trimestre.' },
    { en: "I have a client in Guayaquil who buys a lot.", es: 'Tengo un cliente en Guayaquil que compra mucho.' },
    { en: "The person you spoke to is on holiday.", es: 'La persona con la que hablaste está de vacaciones.' },
    { en: "That's the reason why we changed suppliers.", es: 'Esa es la razón por la que cambiamos de proveedor.' },
    { en: "The team that handles key accounts is small.", es: 'El equipo que maneja las cuentas clave es pequeño.' },
    { en: "Everything we ordered arrived on time.", es: 'Todo lo que pedimos llegó a tiempo.' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál es correcta?', opts: ['The client which called me', 'The client who called me', 'The client that he called me'], a: 1, why: 'WHO para personas. Y nunca se repite el pronombre: "that he called" sobra.' },
    { t: 'fill', q: "The supplier ___ prices went up is in Asia.", a: ['whose'], why: 'WHOSE indica posesión: cuyos precios.' },
    { t: 'mc', q: 'En "The order ___ we sent arrived today", ¿se puede quitar el relativo?', opts: ['Sí, porque es objeto', 'No, porque es sujeto', 'Nunca se puede quitar'], a: 0, why: 'Detrás viene un sujeto nuevo ("we"), así que es objeto y se puede omitir.' },
    { t: 'tr', q: 'Esta es la bodega donde guardamos las muestras.', a: ['this is the warehouse where we store the samples'], why: 'WHERE ya incluye la preposición: no se añade "in" al final.' },
    { t: 'order', words: ['The', 'team', 'that', 'handles', 'key', 'accounts', 'is', 'small.'], a: 'The team that handles key accounts is small.', why: 'Aquí "that" es sujeto (le sigue un verbo), así que no se puede quitar.' },
    { t: 'mc', q: 'Elige la correcta con comas.', opts: ['Mr. Silva, that called yesterday, wants a discount', 'Mr. Silva, who called yesterday, wants a discount', 'Mr. Silva who called yesterday, wants a discount'], a: 1, why: 'En las explicativas no se usa "that", solo who o which.' },
    { t: 'tr', q: 'El informe que te envié tiene todas las cifras.', a: ['the report i sent you has all the figures', 'the report that i sent you has all the figures'], why: 'Aquí el relativo es objeto, así que los nativos lo omiten casi siempre.' },
    { t: 'fill', q: "They cancelled the order, ___ cost us the quarter.", a: ['which'], why: 'WHICH puede referirse a toda la idea anterior, no solo a un sustantivo.' },
    { t: 'mc', q: '¿Cuál suena de nivel B1?', opts: ['I have a client. He is in Guayaquil. He buys a lot.', 'I have a client in Guayaquil who buys a lot.', 'I have a client and Guayaquil and buys a lot.'], a: 1, why: 'Encadenar con relativos es exactamente el salto de A2 a B1.' },
    { t: 'listen', audio: "The person you spoke to last week is the one who handles our key accounts.", opts: ['La persona con la que hablaste la semana pasada es quien maneja nuestras cuentas clave.', 'La persona que habló contigo maneja las cuentas pequeñas.', 'Hablaste la semana pasada con quien maneja el almacén.'], a: 0, why: 'Dos relativos: el primero omitido ("the person [that] you spoke to") y el segundo explícito.' },
    { t: 'order', words: ['Everything', 'we', 'ordered', 'arrived', 'on', 'time.'], a: 'Everything we ordered arrived on time.', why: 'Tras "everything", "something" y "all", el relativo se omite casi siempre.' }
  ]
},

/* ══════════════════ B2 ══════════════════ */
{
  id: 'b2-10', level: 'B2', title: 'Condicionales',
  goal: 'Poner condiciones en una negociación, plantear hipótesis y valorar lo que pudo pasar.',
  grammar: {
    title: 'Los condicionales: cuatro estructuras, un solo mecanismo',
    es: 'Todo condicional tiene dos mitades: la condición (con IF) y el resultado. Lo que cambia es el tiempo verbal de cada mitad.\n\n' +
        'CONDICIONAL CERO — verdades generales. If + presente, presente. "If you order over 500 units, the price DROPS". Se usa para políticas y reglas de la empresa.\n\n' +
        'PRIMER CONDICIONAL — situación real y posible en el futuro. If + presente, WILL + verbo. "If you order 500 units, we WILL give you a discount". Este es el de las negociaciones reales.\n\n' +
        'SEGUNDO CONDICIONAL — hipótesis, poco probable o imaginaria. If + pasado simple, WOULD + verbo. "If we HAD more time, we WOULD test it". Se usa mucho para suavizar: suena menos comprometido que el primero.\n\n' +
        'TERCER CONDICIONAL — el pasado que no fue. If + had + participio, WOULD HAVE + participio. "If we HAD KNOWN, we WOULD HAVE called you". Sirve para explicar y para lamentar.\n\n' +
        'LA REGLA DE ORO, la que más se rompe: después de IF nunca va WILL. "If you will order" no existe. El will vive siempre en la otra mitad de la frase.\n\n' +
        'Y un detalle: la mitad con IF puede ir delante o detrás. Si va delante lleva coma; si va detrás, no. "If you pay upfront, we ship tomorrow" = "We ship tomorrow if you pay upfront".',
    examples: [
      { en: "If you order 500 units, we'll give you 10% off.", es: 'Si pide 500 unidades, le damos un 10% de descuento.' },
      { en: "If I were you, I'd negotiate the terms.", es: 'Yo que usted, negociaría las condiciones.' },
      { en: "If we had known, we would have called you.", es: 'Si lo hubiéramos sabido, le habríamos llamado.' },
      { en: "Unless we receive the payment, we can't ship.", es: 'A menos que recibamos el pago, no podemos enviar.' },
      { en: "If you pay in advance, you get a better price.", es: 'Si paga por adelantado, obtiene un mejor precio.' }
    ],
    more: [
      {
        title: 'UNLESS, PROVIDED THAT, AS LONG AS, OTHERWISE',
        es: 'Alternativas a IF que suenan más profesionales y aparecen mucho en contratos.\n\n' +
            'UNLESS = si no / a menos que. Ya lleva el negativo dentro, así que el verbo va en afirmativo: "Unless they confirm today, we’ll cancel" (= If they don’t confirm...). Decir "unless they don’t confirm" es doble negación.\n\n' +
            'PROVIDED THAT / AS LONG AS = siempre que, con la condición de que. "We can start production provided that you pay 30% upfront".\n\n' +
            'OTHERWISE = de lo contrario. Va en frase aparte: "Please confirm today. Otherwise, we’ll release the stock".\n\n' +
            'IN CASE = por si acaso. Ojo, no es lo mismo que "if": "Take an umbrella in case it rains" (por si llueve, preventivo) frente a "Take an umbrella if it rains" (solo si llueve).',
        examples: [
          { en: "Unless they confirm today, we'll cancel the order.", es: 'Si no confirman hoy, cancelaremos el pedido.' },
          { en: "We can start provided that you pay 30% upfront.", es: 'Podemos empezar siempre que pague el 30% por adelantado.' },
          { en: "Please confirm today. Otherwise, we'll release the stock.", es: 'Confirme hoy, por favor. De lo contrario, liberaremos el inventario.' }
        ]
      },
      {
        title: 'El segundo condicional como herramienta de negociación',
        es: 'Este es un uso que casi nadie enseña y que cambia el resultado de una negociación.\n\n' +
            'El primer condicional compromete: "If you order 500 units, we WILL give you 10%" — eso es una oferta firme.\n' +
            'El segundo condicional explora sin comprometer: "If you ordered 500 units, we COULD look at a better price" — estás tanteando, no prometiendo.\n\n' +
            'Los negociadores experimentados usan el segundo para lanzar globos sonda y solo pasan al primero cuando quieren cerrar. Aprender a alternarlos te da control sobre cuánto te comprometes.\n\n' +
            'Y "If I were you" (no "If I was you") es la fórmula fija para dar consejos. El "were" es un resto del subjuntivo y se usa con todos los sujetos.',
        examples: [
          { en: "If you increased the volume, we could review the price.", es: 'Si aumentara el volumen, podríamos revisar el precio.' },
          { en: "If I were you, I'd get it in writing.", es: 'Yo que usted, lo pediría por escrito.' },
          { en: "What would you say if we offered 60-day terms?", es: '¿Qué diría si le ofreciéramos 60 días de plazo?' }
        ]
      }
    ],
    mistakes: [
      { bad: 'If you will order more, we give a discount.', good: "If you order more, we'll give you a discount.", es: 'Después de IF nunca va will.' },
      { bad: "Unless they don't confirm...", good: 'Unless they confirm...', es: 'Unless ya es negativo.' },
      { bad: 'If I was you...', good: 'If I were you...', es: 'Fórmula fija con "were".' },
      { bad: 'If we would have known...', good: 'If we had known...', es: 'En la parte del IF va "had", no "would have".' },
      { bad: 'Despite of the price...', good: 'Despite the price...', es: 'Despite no lleva "of".' }
    ]
  },
  vocab: [
    { en: 'unless', es: 'a menos que' },
    { en: 'otherwise', es: 'de lo contrario' },
    { en: 'provided that', es: 'siempre que' },
    { en: 'as long as', es: 'mientras / siempre que' },
    { en: 'in case', es: 'por si acaso' },
    { en: 'to depend on', es: 'depender de' },
    { en: 'to guarantee', es: 'garantizar' },
    { en: 'to commit', es: 'comprometerse' },
    { en: 'commitment', es: 'compromiso' },
    { en: 'requirement', es: 'requisito' },
    { en: 'condition', es: 'condición' },
    { en: 'upfront', es: 'por adelantado' },
    { en: 'deposit', es: 'anticipo' },
    { en: 'flexible', es: 'flexible' },
    { en: 'willing to', es: 'dispuesto a' },
    { en: 'to release', es: 'liberar' },
    { en: 'volume', es: 'volumen' },
    { en: 'in writing', es: 'por escrito' },
    { en: 'to review', es: 'revisar' },
    { en: 'to consider', es: 'considerar' },
    { en: 'exception', es: 'excepción' },
    { en: 'penalty', es: 'penalización' },
    { en: 'to breach', es: 'incumplir' },
    { en: 'liability', es: 'responsabilidad' },
    { en: 'binding', es: 'vinculante' },
    { en: 'subject to', es: 'sujeto a' },
    { en: 'to waive', es: 'renunciar a / eximir' },
    { en: 'trade-off', es: 'contrapartida' }
  ],
  phrases: [
    { en: "If you increase the volume, we can improve the price.", es: 'Si aumenta el volumen, podemos mejorar el precio.' },
    { en: "Unless we get the deposit, production won't start.", es: 'Si no recibimos el anticipo, no empieza la producción.' },
    { en: "If I were you, I'd confirm it in writing.", es: 'Yo que usted, lo confirmaría por escrito.' },
    { en: "We'd be willing to review the terms.", es: 'Estaríamos dispuestos a revisar las condiciones.' },
    { en: "That depends on the payment terms.", es: 'Eso depende de las condiciones de pago.' },
    { en: "Provided that you pay 30% upfront, we can start.", es: 'Siempre que pague el 30% por adelantado, podemos empezar.' },
    { en: "If we had known earlier, we would have shipped it.", es: 'Si lo hubiéramos sabido antes, lo habríamos enviado.' },
    { en: "This offer is subject to stock availability.", es: 'Esta oferta está sujeta a disponibilidad.' },
    { en: "Please confirm today. Otherwise we'll release the stock.", es: 'Confirme hoy. De lo contrario liberaremos el inventario.' },
    { en: "As long as the quality is the same, we're interested.", es: 'Mientras la calidad sea la misma, nos interesa.' },
    { en: "What would you say if we offered 60-day terms?", es: '¿Qué diría si le ofreciéramos 60 días de plazo?' },
    { en: "I'll take it in case we need it later.", es: 'Lo llevo por si lo necesitamos después.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la correcta.', opts: ['If you will order more, we give a discount', "If you order more, we'll give you a discount", 'If you order more, we give discount'], a: 1,
      why: 'Regla de oro: después de IF nunca va WILL.' },
    { t: 'fill', q: "If I ___ you, I'd ask for a written confirmation.", a: ['were', 'was'],
      why: 'La forma estándar es "If I were you": es la fórmula fija para dar consejos.' },
    { t: 'tr', q: 'Si tuviéramos más tiempo, revisaríamos el contrato.', a: ['if we had more time we would review the contract', "if we had more time, we'd review the contract", 'if we had more time, we would review the contract'],
      why: 'Segundo condicional: If + pasado simple, would + verbo base.' },
    { t: 'order', words: ['Unless', 'they', 'confirm', 'today,', 'we', 'will', 'cancel', 'the', 'order.'], a: 'Unless they confirm today, we will cancel the order.',
      why: 'UNLESS ya significa "si no": el verbo va en afirmativo.' },
    { t: 'mc', q: '¿Cuál compromete MENOS en una negociación?', opts: ["If you order 500 units, we'll give you 10%", 'If you ordered 500 units, we could look at the price', 'We give 10% on 500 units'], a: 1,
      why: 'El segundo condicional explora sin prometer. El primero es una oferta firme.' },
    { t: 'fill', q: "If we ___ known earlier, we would have shipped it.", a: ['had'],
      why: 'Tercer condicional: If + HAD + participio en la condición.' },
    { t: 'listen', audio: "If you could give us better payment terms, we would be able to increase the volume.", opts: ['Si pudiera darnos mejores condiciones de pago, podríamos aumentar el volumen.', 'Si nos da mejores condiciones, aumentamos el volumen ahora.', 'Aunque nos dio mejores condiciones, no aumentamos el volumen.'], a: 0,
      why: 'Could y would hacen la propuesta hipotética, y por eso más suave y negociable.' },
    { t: 'mc', q: '"Provided that" significa...', opts: ['aunque', 'siempre que / con la condición de que', 'proveído por'], a: 1,
      why: 'Sinónimo formal de "if", muy común en contratos.' },
    { t: 'tr', q: 'Esta oferta está sujeta a disponibilidad.', a: ['this offer is subject to availability', 'this offer is subject to stock availability'],
      why: '"Subject to" es la fórmula estándar para condicionar una oferta.' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ["Unless they don't confirm, we'll cancel", "Unless they confirm, we'll cancel", "Unless they will confirm, we'll cancel"], a: 1,
      why: 'Doble error frecuente: unless no lleva negación ni will.' },
    { t: 'order', words: ['We', 'can', 'start', 'as', 'long', 'as', 'you', 'pay', 'upfront.'], a: 'We can start as long as you pay upfront.',
      why: '"As long as" introduce la condición y va seguido de presente.' },
    { t: 'listen', audio: "Please confirm by Friday. Otherwise, we'll have to release the stock.", opts: ['Confirme antes del viernes. De lo contrario, tendremos que liberar el inventario.', 'Confirme el viernes y liberaremos el inventario.', 'Si confirma el viernes, guardaremos el inventario.'], a: 0,
      why: 'OTHERWISE introduce la consecuencia de no cumplir la condición.' }
  ]
},

{
  id: 'b2-11', level: 'B2', title: 'Phrasal verbs y expresiones',
  goal: 'Sonar natural con los verbos y expresiones que los nativos usan todo el tiempo.',
  grammar: {
    title: 'Phrasal verbs: la parte del inglés que no se puede deducir',
    es: 'Un phrasal verb es un verbo + una partícula (up, out, off, into...) cuyo significado no se deduce de las partes. "Look" es mirar, pero "look into" es investigar y "look after" es cuidar. Por eso hay que aprenderlos como bloques.\n\n' +
        'SEPARABLES: el objeto puede ir en medio o al final. "Call OFF the meeting" = "Call the meeting OFF". PERO si el objeto es un pronombre (it, them, him) OBLIGATORIAMENTE va en medio: "Call it off" ✔ / "Call off it" ✘. Esta es la regla que más se falla.\n\n' +
        'INSEPARABLES: nunca se parten. "Look into the problem" ✔ / "Look the problem into" ✘. También con pronombre: "look into it".\n\n' +
        'No hay forma de saber cuál es cuál sin memorizarlo, pero hay un atajo práctico: los de tres palabras (get back to, come up with, look forward to, put up with) son SIEMPRE inseparables.\n\n' +
        'Consejo de uso: en un correo muy formal a veces conviene el verbo latino (investigate en vez de look into, cancel en vez de call off) porque suena más serio. Pero hablando, los phrasal verbs son lo natural.',
    examples: [
      { en: "Let me look into it and get back to you.", es: 'Déjeme investigarlo y le respondo.' },
      { en: "They called the meeting off.", es: 'Cancelaron la reunión.' },
      { en: "They called it off.", es: 'La cancelaron.' },
      { en: "I'll keep you in the loop.", es: 'Le mantengo al tanto.' },
      { en: "We ran out of stock last week.", es: 'Nos quedamos sin inventario la semana pasada.' }
    ],
    more: [
      {
        title: 'Los phrasal verbs de oficina que más vas a oír',
        es: 'FOLLOW UP (on something) — dar seguimiento · CATCH UP (with someone) — ponerse al día · LOOK INTO — investigar · SORT OUT — resolver · BRING UP — sacar un tema · CALL OFF — cancelar · PUT OFF — posponer · RUN OUT OF — quedarse sin · COME UP WITH — idear · GET BACK TO — responder a alguien · FIGURE OUT — averiguar · CARRY OUT — llevar a cabo · TURN DOWN — rechazar · TAKE OVER — hacerse cargo · SET UP — montar, organizar · GO OVER — repasar · POINT OUT — señalar · BACK UP — respaldar.\n\n' +
            'Fíjate en la diferencia entre PUT OFF (posponer, se hará más tarde) y CALL OFF (cancelar, no se hará).',
        examples: [
          { en: "Let's go over the numbers before the meeting.", es: 'Repasemos las cifras antes de la reunión.' },
          { en: "They turned down our offer.", es: 'Rechazaron nuestra oferta.' },
          { en: "Can you set up a call for Thursday?", es: '¿Puedes organizar una llamada para el jueves?' }
        ]
      },
      {
        title: 'Expresiones idiomáticas de negocios',
        es: 'TOUCH BASE — contactar brevemente. "Let’s touch base next week".\n' +
            'IN THE LOOP — al tanto. "Keep me in the loop".\n' +
            'ON THE SAME PAGE — de acuerdo, alineados. "Let’s make sure we’re on the same page".\n' +
            'A BALLPARK FIGURE — una cifra aproximada. "Can you give me a ballpark figure?".\n' +
            'THE BOTTOM LINE — lo esencial, el resultado final. "The bottom line is we need it by Friday".\n' +
            'TO CUT CORNERS — hacer las cosas a medias para ahorrar.\n' +
            'TO BE ON TOP OF SOMETHING — tenerlo controlado.\n' +
            'IT’S A LONG SHOT — es poco probable.\n' +
            'LET’S PLAY IT BY EAR — vayamos viendo sobre la marcha.\n\n' +
            'Con las expresiones, la regla es: úsalas cuando las entiendas del todo. Una expresión mal usada llama más la atención que una frase simple bien dicha.',
        examples: [
          { en: "Can you give me a ballpark figure?", es: '¿Me puede dar una cifra aproximada?' },
          { en: "The bottom line is we need it by Friday.", es: 'Lo esencial es que lo necesitamos para el viernes.' },
          { en: "Let's make sure we're on the same page.", es: 'Asegurémonos de que estamos alineados.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'Call off it.', good: 'Call it off.', es: 'Con pronombre, el objeto va SIEMPRE en medio.' },
      { bad: 'Look the problem into.', good: 'Look into the problem.', es: '"Look into" es inseparable.' },
      { bad: 'I will follow up you.', good: "I'll follow up with you.", es: 'Se dice "follow up with someone".' },
      { bad: 'We ran out the stock.', good: 'We ran out of stock.', es: '"Run out OF" lleva siempre "of".' },
      { bad: "I'm looking forward to hear from you.", good: "I'm looking forward to hearing from you.", es: 'Tras "look forward to" va -ING.' }
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
    { en: 'to figure out', es: 'averiguar / entender' },
    { en: 'to carry out', es: 'llevar a cabo' },
    { en: 'to turn down', es: 'rechazar' },
    { en: 'to take over', es: 'hacerse cargo' },
    { en: 'to set up', es: 'organizar / montar' },
    { en: 'to go over', es: 'repasar' },
    { en: 'to point out', es: 'señalar' },
    { en: 'to back up', es: 'respaldar' },
    { en: 'to touch base', es: 'contactar brevemente' },
    { en: 'to keep in the loop', es: 'mantener al tanto' },
    { en: 'on the same page', es: 'alineados / de acuerdo' },
    { en: 'a ballpark figure', es: 'una cifra aproximada' },
    { en: 'the bottom line', es: 'lo esencial' },
    { en: 'to cut corners', es: 'hacer las cosas a medias' },
    { en: 'to be on top of it', es: 'tenerlo controlado' },
    { en: "it's a long shot", es: 'es poco probable' },
    { en: 'to play it by ear', es: 'ver sobre la marcha' },
    { en: 'to put up with', es: 'aguantar / soportar' }
  ],
  phrases: [
    { en: "Let me look into it.", es: 'Déjeme revisarlo.' },
    { en: "We ran out of stock last week.", es: 'Nos quedamos sin inventario la semana pasada.' },
    { en: "Can we touch base next Monday?", es: '¿Nos ponemos en contacto el próximo lunes?' },
    { en: "I'll keep you in the loop.", es: 'Le mantengo al tanto.' },
    { en: "They called the meeting off.", es: 'Cancelaron la reunión.' },
    { en: "We need to sort this out today.", es: 'Necesitamos resolver esto hoy.' },
    { en: "Let's go over the numbers first.", es: 'Repasemos primero las cifras.' },
    { en: "They turned down our proposal.", es: 'Rechazaron nuestra propuesta.' },
    { en: "Can you give me a ballpark figure?", es: '¿Me da una cifra aproximada?' },
    { en: "The bottom line is we need it by Friday.", es: 'Lo esencial es que lo necesitamos para el viernes.' },
    { en: "I'll get back to you by the end of the day.", es: 'Le respondo antes de que acabe el día.' },
    { en: "Let's make sure we're on the same page.", es: 'Asegurémonos de estar alineados.' }
  ],
  exercises: [
    { t: 'mc', q: 'Elige la forma correcta con pronombre.', opts: ['Call off it', 'Call it off', 'Off call it'], a: 1,
      why: 'Con phrasal verbs separables, el pronombre SIEMPRE va en medio.' },
    { t: 'fill', q: "We ran ___ of stock before the end of the month.", a: ['out'],
      why: '"Run out of" = quedarse sin. Lleva siempre "of".' },
    { t: 'tr', q: 'Le doy seguimiento y le respondo mañana.', a: ["i'll follow up and get back to you tomorrow", 'i will follow up and get back to you tomorrow'],
      why: '"Get back to you" es la forma natural de decir "le respondo".' },
    { t: 'order', words: ['I', 'need', 'to', 'look', 'into', 'the', 'delay.'], a: 'I need to look into the delay.',
      why: '"Look into" es inseparable: el objeto va después del bloque completo.' },
    { t: 'mc', q: 'La reunión se hará más tarde, no se cancela. ¿Cuál usas?', opts: ['We called it off', 'We put it off', 'We turned it down'], a: 1,
      why: 'PUT OFF = posponer. CALL OFF = cancelar. TURN DOWN = rechazar.' },
    { t: 'listen', audio: "Let's put the decision off until we come up with a better proposal.", opts: ['Pospongamos la decisión hasta que se nos ocurra una propuesta mejor.', 'Tomemos la decisión ahora con la propuesta que tenemos.', 'Cancelemos la decisión porque la propuesta es mala.'], a: 0,
      why: '"Put off" = posponer · "Come up with" = idear.' },
    { t: 'mc', q: '"Touch base" significa...', opts: ['tocar la base', 'ponerse en contacto brevemente', 'llegar a un acuerdo'], a: 1,
      why: 'Del béisbol. En negocios es proponer un contacto rápido.' },
    { t: 'fill', q: "I'm looking forward to ___ from you.", a: ['hearing'],
      why: 'Tras "look forward to" va -ING, no infinitivo. El "to" aquí es preposición.' },
    { t: 'tr', q: '¿Me puede dar una cifra aproximada?', a: ['can you give me a ballpark figure', 'could you give me a ballpark figure'],
      why: '"Ballpark figure" es la expresión estándar para una cifra orientativa.' },
    { t: 'mc', q: '"The bottom line is..." introduce...', opts: ['un detalle menor', 'lo esencial del asunto', 'la última línea del contrato'], a: 1,
      why: 'Sirve para cortar el rodeo e ir al punto clave.' },
    { t: 'order', words: ['Can', 'you', 'set', 'up', 'a', 'call', 'for', 'Thursday?'], a: 'Can you set up a call for Thursday?',
      why: '"Set up" = organizar, montar. Es separable: "set it up".' },
    { t: 'listen', audio: "They turned down our offer, so we'll have to come up with something better.", opts: ['Rechazaron nuestra oferta, así que tendremos que idear algo mejor.', 'Aceptaron nuestra oferta y propondremos algo mejor.', 'Bajaron nuestra oferta para conseguir algo mejor.'], a: 0,
      why: 'TURN DOWN = rechazar. Ojo: no significa "bajar" en este contexto.' }
  ]
},

{
  id: 'b2-12', level: 'B2', title: 'Negociar y presentar',
  goal: 'Negociar precio y condiciones, y presentar cifras con seguridad.',
  grammar: {
    title: 'Lenguaje diplomático: cómo suavizar sin perder firmeza',
    es: 'En inglés profesional casi nada se dice de forma directa. No es hipocresía: es la manera de mantener la relación mientras defiendes tu posición. A esto se le llama hedging.\n\n' +
        'LAS HERRAMIENTAS:\n' +
        '· Adverbios que rebajan: a bit, slightly, a little, somewhat. "That’s slightly above our budget" en lugar de "That’s expensive".\n' +
        '· Verbos modales: would, could, might. "That would be difficult" en lugar de "That is impossible".\n' +
        '· Introductores de mala noticia: "I’m afraid...", "Unfortunately...", "To be honest...".\n' +
        '· Preguntas en vez de afirmaciones: "Would you consider...?" en lugar de "You should...".\n' +
        '· Verbos de distancia: "It seems...", "It appears...", "I understand that...".\n\n' +
        'LA ESTRUCTURA QUE MÁS FUNCIONA es cerrar una puerta y abrir otra en la misma frase: "I’m afraid we can’t go below that price, BUT we could improve the delivery time". Nunca dejes al otro sin salida.\n\n' +
        'Y una advertencia: suavizar no es ceder. "I’m afraid that doesn’t work for us" es un NO rotundo dicho con educación. El contenido manda, la forma acompaña.',
    examples: [
      { en: "That's slightly above our budget.", es: 'Eso está un poco por encima de nuestro presupuesto.' },
      { en: "Would you consider a longer payment term?", es: '¿Consideraría un plazo de pago más largo?' },
      { en: "I'm afraid we can't go below that price.", es: 'Me temo que no podemos bajar de ese precio.' },
      { en: "That would be difficult for us.", es: 'Eso nos resultaría difícil.' },
      { en: "It seems there's been a misunderstanding.", es: 'Parece que ha habido un malentendido.' }
    ],
    more: [
      {
        title: 'Presentar cifras y estructurar una intervención',
        es: 'ABRIR: "Thanks for your time. Today I’d like to walk you through three points."\n' +
            'SECUENCIAR: "First... / Then... / Finally..." o "To begin with... / Moving on to... / Lastly...".\n' +
            'SEÑALAR DATOS: "As you can see here..." · "The figures show..." · "If we look at the numbers...".\n' +
            'DESCRIBIR TENDENCIAS: "Sales rose sharply" (con fuerza) · "grew steadily" (de forma sostenida) · "dropped slightly" (un poco) · "remained flat" (sin cambios) · "peaked in June" (tocó máximo).\n' +
            'CERRAR: "To sum up..." · "In short..." · "So, to recap...".\n' +
            'INVITAR PREGUNTAS: "I’m happy to take any questions."\n\n' +
            'Si te preguntan algo que no sabes: "That’s a good question. Let me look into it and get back to you." Es mucho mejor que improvisar.',
        examples: [
          { en: "Let me walk you through the numbers.", es: 'Déjeme explicarle las cifras.' },
          { en: "Sales grew steadily in the first quarter.", es: 'Las ventas crecieron de forma sostenida en el primer trimestre.' },
          { en: "To sum up, we have three options.", es: 'En resumen, tenemos tres opciones.' }
        ]
      },
      {
        title: 'Incoterms y condiciones: el vocabulario que no se improvisa',
        es: 'EXW (Ex Works) — el comprador recoge en fábrica y asume todo.\n' +
            'FOB (Free On Board) — el vendedor entrega a bordo del buque en el puerto de origen; ahí pasa el riesgo.\n' +
            'CIF (Cost, Insurance and Freight) — el vendedor paga flete y seguro hasta el puerto de destino.\n' +
            'DDP (Delivered Duty Paid) — el vendedor entrega en destino con todo pagado, incluidos aranceles.\n\n' +
            'CONDICIONES DE PAGO: payment in advance (por adelantado) · net 30 / 60 (a 30 o 60 días) · letter of credit, L/C (carta de crédito) · partial payment (pago parcial) · balance on delivery (saldo contra entrega).\n\n' +
            'En una negociación real, precio e Incoterm van juntos. "1,200 dollars" no significa nada sin saber si es FOB o CIF: pregúntalo siempre.',
        examples: [
          { en: "Is that price FOB or CIF?", es: '¿Ese precio es FOB o CIF?' },
          { en: "We work with net 30 payment terms.", es: 'Trabajamos con pago a 30 días.' },
          { en: "Would you accept a letter of credit?", es: '¿Aceptaría una carta de crédito?' }
        ]
      }
    ],
    mistakes: [
      { bad: 'Your price is very expensive.', good: 'Your price is a bit higher than we expected.', es: 'Además, "price" es alto o bajo, no caro.' },
      { bad: 'It is impossible.', good: "I'm afraid that would be difficult.", es: '"Impossible" cierra la negociación.' },
      { bad: 'You must lower the price.', good: 'Would you be able to review the price?', es: '"Must" a un cliente suena a orden.' },
      { bad: 'I am agree with the terms.', good: 'I agree with the terms.', es: '"Agree" ya es verbo.' },
      { bad: 'We can make a discount.', good: 'We can offer a discount / give you a discount.', es: 'El descuento se ofrece o se da, no se "hace".' }
    ]
  },
  vocab: [
    { en: 'to negotiate', es: 'negociar' },
    { en: 'terms and conditions', es: 'términos y condiciones' },
    { en: 'counteroffer', es: 'contraoferta' },
    { en: 'to compromise', es: 'llegar a un punto medio' },
    { en: 'to meet halfway', es: 'partir la diferencia' },
    { en: 'margin', es: 'margen' },
    { en: 'volume', es: 'volumen' },
    { en: 'payment terms', es: 'condiciones de pago' },
    { en: 'net 30', es: 'pago a 30 días' },
    { en: 'letter of credit', es: 'carta de crédito' },
    { en: 'Incoterms', es: 'Incoterms' },
    { en: 'FOB', es: 'Free On Board (libre a bordo)' },
    { en: 'CIF', es: 'Cost, Insurance and Freight' },
    { en: 'EXW', es: 'Ex Works (en fábrica)' },
    { en: 'customs', es: 'aduana' },
    { en: 'freight', es: 'flete' },
    { en: 'duty', es: 'arancel' },
    { en: 'to walk through', es: 'explicar paso a paso' },
    { en: 'to sum up', es: 'resumir' },
    { en: 'slightly', es: 'ligeramente' },
    { en: 'a bit', es: 'un poco' },
    { en: 'to rise sharply', es: 'subir con fuerza' },
    { en: 'to grow steadily', es: 'crecer de forma sostenida' },
    { en: 'to remain flat', es: 'mantenerse sin cambios' },
    { en: 'to peak', es: 'tocar máximo' },
    { en: 'leverage', es: 'poder de negociación' },
    { en: 'concession', es: 'concesión' },
    { en: 'deal breaker', es: 'condición inaceptable' },
    { en: 'win-win', es: 'beneficioso para ambos' }
  ],
  phrases: [
    { en: "We'd be willing to lower the price if you increase the volume.", es: 'Estaríamos dispuestos a bajar el precio si aumenta el volumen.' },
    { en: "That's slightly above our budget.", es: 'Eso está un poco por encima de nuestro presupuesto.' },
    { en: "Would you consider 60-day payment terms?", es: '¿Consideraría un pago a 60 días?' },
    { en: "Let me walk you through the numbers.", es: 'Déjeme explicarle las cifras.' },
    { en: "To sum up, we have three options.", es: 'En resumen, tenemos tres opciones.' },
    { en: "Can we meet halfway?", es: '¿Podemos partir la diferencia?' },
    { en: "Is that price FOB or CIF?", es: '¿Ese precio es FOB o CIF?' },
    { en: "I'm afraid that's a deal breaker for us.", es: 'Me temo que eso es inaceptable para nosotros.' },
    { en: "That's a good question. Let me get back to you.", es: 'Buena pregunta. Déjeme responderle luego.' },
    { en: "Sales grew steadily in the first quarter.", es: 'Las ventas crecieron de forma sostenida en el primer trimestre.' },
    { en: "I think we can find a win-win here.", es: 'Creo que podemos encontrar algo bueno para ambos.' },
    { en: "I'm happy to take any questions.", es: 'Con gusto respondo preguntas.' }
  ],
  exercises: [
    { t: 'mc', q: 'El precio es alto. ¿Cómo lo dices en una negociación profesional?', opts: ['Your price is very expensive.', "That's slightly above what we had in mind.", 'No, too much money.'], a: 1,
      why: 'El hedging mantiene la relación y deja la puerta abierta a negociar.' },
    { t: 'fill', q: "We'd be ___ to review the terms.", a: ['willing'],
      why: '"Be willing to" = estar dispuesto a. Fórmula clave para ofrecer flexibilidad.' },
    { t: 'tr', q: 'Déjeme explicarle las cifras.', a: ['let me walk you through the numbers', 'let me walk you through the figures'],
      why: '"Walk someone through" = llevar paso a paso. Muy usado en presentaciones.' },
    { t: 'order', words: ['Would', 'you', 'consider', 'a', 'longer', 'payment', 'term?'], a: 'Would you consider a longer payment term?',
      why: '"Would you consider...?" consigue mejor respuesta que "Can you give me...?".' },
    { t: 'mc', q: 'Quieres decir que algo es imposible sin cerrar la puerta. ¿Cuál eliges?', opts: ['That is impossible.', "I'm afraid that would be difficult.", 'No, we never do that.'], a: 1,
      why: '"Impossible" corta la negociación; "would be difficult" invita a buscar alternativa.' },
    { t: 'listen', audio: "I'm afraid we can't go below that price, but we could improve the delivery time.", opts: ['Me temo que no podemos bajar de ese precio, pero podríamos mejorar el plazo de entrega.', 'No podemos bajar el precio ni mejorar el plazo.', 'Podemos bajar el precio si mejora el plazo.'], a: 0,
      why: 'Técnica clásica: cierras una puerta y abres otra en la misma frase.' },
    { t: 'mc', q: 'En FOB, el vendedor entrega la mercancía...', opts: ['en la puerta del comprador', 'a bordo del buque en el puerto de origen', 'en la aduana de destino'], a: 1,
      why: 'FOB: el riesgo pasa al comprador una vez la carga está a bordo en el puerto de embarque.' },
    { t: 'fill', q: "Sales grew ___ during the first quarter.", a: ['steadily'],
      why: '"Steadily" = de forma sostenida. Vocabulario clave para presentar tendencias.' },
    { t: 'tr', q: '¿Podemos partir la diferencia?', a: ['can we meet halfway', 'could we meet halfway'],
      why: '"Meet halfway" es la expresión estándar para proponer un punto medio.' },
    { t: 'mc', q: '"Net 30" significa...', opts: ['30% de descuento', 'pago a 30 días', '30 unidades mínimas'], a: 1,
      why: 'Condición de pago habitual: el saldo se paga a los 30 días de la factura.' },
    { t: 'order', words: ['To', 'sum', 'up,', 'we', 'have', 'three', 'options.'], a: 'To sum up, we have three options.',
      why: '"To sum up" cierra una presentación y anuncia el resumen.' },
    { t: 'listen', audio: "That's a good question. Let me look into it and get back to you tomorrow.", opts: ['Buena pregunta. Déjeme revisarlo y le respondo mañana.', 'Buena pregunta, pero no tengo la respuesta.', 'Es una pregunta difícil, búsquelo usted mismo.'], a: 0,
      why: 'Fórmula profesional para ganar tiempo sin improvisar una respuesta.' }
  ]
},

{
  id: 'b2-13', level: 'B2', title: 'Entrevista y debate',
  goal: 'Presentarte con impacto, contar tus logros con cifras y defender tus ideas.',
  grammar: {
    title: 'El método STAR y la mezcla natural de tiempos',
    es: 'En una entrevista buena mezclas tiempos verbales sin darte cuenta, y hacerlo bien es lo que te hace sonar competente.\n\n' +
        'PRESENTE para lo que haces ahora: "I manage a team of eight sales reps."\n' +
        'PRESENT PERFECT para tu trayectoria: "I’ve been in foreign trade for over a decade."\n' +
        'PASADO SIMPLE para ejemplos concretos: "Last year we increased coverage by 20%."\n' +
        'CONDICIONAL para hipótesis: "If I joined your team, I would focus on..."\n\n' +
        'EL MÉTODO STAR estructura cualquier respuesta de comportamiento en cuatro pasos:\n' +
        '· Situation — el contexto. "When I took over the southern region..."\n' +
        '· Task — tu responsabilidad. "My task was to recover portfolio coverage."\n' +
        '· Action — lo que TÚ hiciste. "I redesigned the visit plan and retrained the team."\n' +
        '· Result — el resultado, con número. "As a result, coverage went up 20% in three months."\n\n' +
        'Dos errores típicos: quedarse en la situación y no llegar nunca a la acción, y hablar en "we" todo el tiempo. Di "I" cuando fue tuyo: el entrevistador quiere saber qué hiciste tú.\n\n' +
        'Termina siempre con una cifra. "It went well" no dice nada; "we grew 18%" sí.',
    examples: [
      { en: "I currently manage a team of eight sales reps.", es: 'Actualmente dirijo un equipo de ocho vendedores.' },
      { en: "I've been in foreign trade for over a decade.", es: 'Llevo más de una década en comercio exterior.' },
      { en: "My task was to recover portfolio coverage.", es: 'Mi tarea era recuperar la cobertura de cartera.' },
      { en: "As a result, we increased coverage by twenty percent.", es: 'Como resultado, aumentamos la cobertura un veinte por ciento.' },
      { en: "If I joined your team, I'd focus on the northern region.", es: 'Si me uniera a su equipo, me centraría en la región norte.' }
    ],
    more: [
      {
        title: 'Las preguntas que siempre caen y cómo responderlas',
        es: '"TELL ME ABOUT YOURSELF" — no es tu biografía. Fórmula de 60 segundos: presente ("I’m a regional sales manager at...") + trayectoria ("I’ve spent ten years in foreign trade") + un logro con cifra + por qué estás aquí.\n\n' +
            '"WHAT’S YOUR GREATEST STRENGTH?" — una fortaleza + un ejemplo que la demuestre. Sin ejemplo, no cuenta.\n\n' +
            '"WHAT’S YOUR WEAKNESS?" — una debilidad real pero no letal, y qué haces al respecto. "I used to take on too much myself. I’ve learned to delegate and now I..."\n\n' +
            '"WHY DO YOU WANT TO WORK HERE?" — habla de ellos, no de ti. Menciona algo concreto de la empresa.\n\n' +
            '"WHERE DO YOU SEE YOURSELF IN FIVE YEARS?" — ambición realista alineada con el puesto.\n\n' +
            'Y al final, ten TÚ preguntas preparadas: "What would success look like in the first six months?" es una excelente.',
        examples: [
          { en: "My biggest strength is building long-term client relationships.", es: 'Mi mayor fortaleza es construir relaciones a largo plazo.' },
          { en: "I used to take on too much myself, but I've learned to delegate.", es: 'Antes me cargaba con demasiado, pero he aprendido a delegar.' },
          { en: "What would success look like in the first six months?", es: '¿Cómo se vería el éxito en los primeros seis meses?' }
        ]
      },
      {
        title: 'Defender una postura en un debate',
        es: 'PLANTEAR: "The way I see it..." · "My position is that..." · "I’d argue that...".\n' +
            'APOYAR CON EVIDENCIA: "The figures back this up" · "In my experience..." · "For instance...".\n' +
            'RECONOCER AL OTRO ANTES DE REBATIR: "That’s a valid concern, however..." · "I take your point, but...".\n' +
            'REBATIR: "I’d question whether..." · "That assumes that..." · "There’s another way of looking at it".\n' +
            'CONCEDER SIN PERDER: "You may be right about X, but the core issue is Y".\n' +
            'CERRAR: "So my main point is..." · "That’s why I believe...".\n\n' +
            'Una técnica muy potente: reformular al otro antes de responder. "So if I understand correctly, your concern is the lead time. Is that right?" Demuestra que escuchas y te da tiempo para pensar.',
        examples: [
          { en: "That's a valid concern, however the data suggests otherwise.", es: 'Es una preocupación válida, sin embargo los datos sugieren lo contrario.' },
          { en: "So if I understand correctly, your concern is the lead time?", es: 'Entonces, si entiendo bien, su preocupación es el plazo de entrega.' },
          { en: "I'd argue that the long-term benefit outweighs the cost.", es: 'Yo diría que el beneficio a largo plazo compensa el costo.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'I am working here since 2019.', good: "I've been working here since 2019.", es: 'Con since va present perfect.' },
      { bad: 'I was responsible of the region.', good: 'I was responsible for the region.', es: 'Responsible FOR.' },
      { bad: 'I have experience of ten years.', good: 'I have ten years of experience.', es: 'Orden fijo de la expresión.' },
      { bad: 'My English is more or less.', good: "I'd say my English is intermediate but improving.", es: '"More or less" suena a excusa; sé concreto.' },
      { bad: 'I am agree with your point.', good: 'I agree with your point.', es: 'Agree ya es verbo.' }
    ]
  },
  vocab: [
    { en: 'strength', es: 'fortaleza' },
    { en: 'weakness', es: 'debilidad' },
    { en: 'challenge', es: 'reto' },
    { en: 'responsibility', es: 'responsabilidad' },
    { en: 'achievement', es: 'logro' },
    { en: 'to lead', es: 'liderar' },
    { en: 'to manage', es: 'gestionar / dirigir' },
    { en: 'to deliver', es: 'cumplir / entregar resultados' },
    { en: 'to delegate', es: 'delegar' },
    { en: 'to take over', es: 'hacerse cargo' },
    { en: 'stakeholder', es: 'parte interesada' },
    { en: 'KPI', es: 'indicador clave' },
    { en: 'turnover', es: 'facturación / rotación' },
    { en: 'to overcome', es: 'superar' },
    { en: 'track record', es: 'trayectoria comprobada' },
    { en: 'to stand out', es: 'destacar' },
    { en: 'previous role', es: 'puesto anterior' },
    { en: 'background', es: 'formación / trayectoria' },
    { en: 'skill', es: 'habilidad' },
    { en: 'to be responsible for', es: 'ser responsable de' },
    { en: 'to report to', es: 'reportar a' },
    { en: 'headcount', es: 'plantilla' },
    { en: 'to outweigh', es: 'compensar / pesar más que' },
    { en: 'valid concern', es: 'preocupación válida' },
    { en: 'evidence', es: 'evidencia' },
    { en: 'to back up', es: 'respaldar' },
    { en: 'to question', es: 'cuestionar' },
    { en: 'assumption', es: 'suposición' },
    { en: 'to reframe', es: 'replantear' },
    { en: 'in my experience', es: 'en mi experiencia' }
  ],
  phrases: [
    { en: "My biggest strength is building long-term client relationships.", es: 'Mi mayor fortaleza es construir relaciones a largo plazo con los clientes.' },
    { en: "In my previous role, I was responsible for the whole southern region.", es: 'En mi puesto anterior, era responsable de toda la región sur.' },
    { en: "One challenge I faced was a drop in portfolio coverage.", es: 'Un reto que enfrenté fue una caída en la cobertura de cartera.' },
    { en: "I redesigned the visit plan and retrained the team.", es: 'Rediseñé el plan de visitas y volví a capacitar al equipo.' },
    { en: "As a result, we grew sales by eighteen percent.", es: 'Como resultado, crecimos las ventas un dieciocho por ciento.' },
    { en: "I have ten years of experience in foreign trade.", es: 'Tengo diez años de experiencia en comercio exterior.' },
    { en: "I report directly to the commercial director.", es: 'Reporto directamente al director comercial.' },
    { en: "Where do you see yourself in five years?", es: '¿Dónde te ves en cinco años?' },
    { en: "I'd say my track record speaks for itself.", es: 'Diría que mi trayectoria habla por sí sola.' },
    { en: "That's a valid concern, however the data suggests otherwise.", es: 'Es una preocupación válida, sin embargo los datos sugieren lo contrario.' },
    { en: "So if I understand correctly, your concern is the lead time?", es: 'Si entiendo bien, ¿su preocupación es el plazo de entrega?' },
    { en: "What would success look like in the first six months?", es: '¿Cómo se vería el éxito en los primeros seis meses?' }
  ],
  exercises: [
    { t: 'mc', q: '¿Cuál suena mejor en una entrevista?', opts: ['I am working here since 2019', "I've been working here since 2019", 'I work here since 2019'], a: 1,
      why: 'Con SINCE se usa present perfect. "I am working since" es un error muy frecuente.' },
    { t: 'fill', q: "In my previous role, I was ___ for a team of eight.", a: ['responsible'],
      why: '"Be responsible FOR", no "responsible of".' },
    { t: 'tr', q: 'Como resultado, aumentamos las ventas un veinte por ciento.', a: ['as a result we increased sales by twenty percent', 'as a result, we increased sales by twenty percent', 'as a result we grew sales by twenty percent'],
      why: '"As a result" cierra una respuesta STAR con fuerza. Y BY para el porcentaje.' },
    { t: 'order', words: ['What', 'would', 'you', 'say', 'is', 'your', 'main', 'strength?'], a: 'What would you say is your main strength?',
      why: 'Pregunta indirecta: después de "What would you say" el orden vuelve a ser normal.' },
    { t: 'mc', q: 'En el método STAR, ¿qué falta en "Cuando tomé la región sur, la cobertura había caído. Rediseñé el plan de visitas."?', opts: ['la situación', 'la acción', 'el resultado'], a: 2,
      why: 'Falta el Result con cifra. Sin número, la respuesta no convence.' },
    { t: 'tr', q: 'Tengo diez años de experiencia en comercio exterior.', a: ['i have ten years of experience in foreign trade', "i've got ten years of experience in foreign trade"],
      why: 'Orden fijo: "ten years of experience", no "experience of ten years".' },
    { t: 'listen', audio: "One challenge I faced was a drop in coverage, so I redesigned the visit plan and we recovered it in three months.", opts: ['Un reto que enfrenté fue una caída en la cobertura, así que rediseñé el plan de visitas y la recuperamos en tres meses.', 'Un reto fue el aumento de cobertura, por eso cambiamos el plan.', 'Enfrenté una caída en la cobertura y todavía no la recuperamos.'], a: 0,
      why: 'Respuesta STAR completa: reto, acción y resultado.' },
    { t: 'mc', q: '"Track record" significa...', opts: ['registro de pista', 'trayectoria comprobada', 'seguimiento de pedidos'], a: 1,
      why: 'Es tu historial de resultados. "A proven track record" aparece en casi toda oferta de empleo.' },
    { t: 'fill', q: "That's a valid ___, however the data suggests otherwise.", a: ['concern', 'point'],
      why: 'Reconocer antes de rebatir: "That’s a valid concern, however...".' },
    { t: 'mc', q: '¿Cuál es la mejor forma de ganar tiempo y demostrar que escuchas?', opts: ["I don't understand.", 'So if I understand correctly, your concern is the price?', 'Repeat, please.'], a: 1,
      why: 'Reformular al otro demuestra escucha activa y te da segundos para pensar.' },
    { t: 'order', words: ['I', 'report', 'directly', 'to', 'the', 'commercial', 'director.'], a: 'I report directly to the commercial director.',
      why: '"Report to" = reportar a. Muy usado al describir tu puesto.' },
    { t: 'listen', audio: "I used to take on too much myself, but I've learned to delegate.", opts: ['Antes me cargaba con demasiado, pero he aprendido a delegar.', 'Suelo cargarme con demasiado y no sé delegar.', 'Aprendí a delegar porque me cargaban demasiado.'], a: 0,
      why: 'Fórmula perfecta para la pregunta de la debilidad: el defecto en pasado, la solución en present perfect.' }
  ]
},

{
  id: 'b2-14', level: 'B2', title: 'Voz pasiva',
  goal: 'Escribir como se escribe en los negocios: centrado en el hecho, no en quién lo hizo.',
  grammar: {
    title: 'La pasiva: el registro por defecto del inglés comercial',
    es: 'La pasiva pone el foco en la ACCIÓN o en la COSA, no en quién la hizo. Se forma con el verbo TO BE en el tiempo que toque + el PARTICIPIO del verbo principal.\n\n' +
        'Activa: "We shipped the goods yesterday."\n' +
        'Pasiva: "The goods WERE SHIPPED yesterday."\n\n' +
        'POR QUÉ IMPORTA TANTO EN NEGOCIOS. Se usa cuando:\n' +
        '· No se sabe o no importa quién lo hizo: "Your order has been processed."\n' +
        '· Se quiere sonar objetivo e impersonal: "All prices are quoted in US dollars."\n' +
        '· Y sobre todo, para dar una mala noticia SIN señalar a nadie: "The shipment was delayed" en lugar de "Wei delayed the shipment". Evita la acusación y baja la tensión.\n\n' +
        'Esa última es una herramienta diplomática de primer orden. En un correo delicado, la pasiva te salva la relación.\n\n' +
        'LA FORMA EN CADA TIEMPO:\n' +
        '· Presente: is / are + participio → "The order is processed automatically."\n' +
        '· Pasado: was / were + participio → "The goods were inspected."\n' +
        '· Present perfect: has / have been + participio → "Your order has been shipped."\n' +
        '· Futuro: will be + participio → "You will be contacted tomorrow."\n' +
        '· Modales: must / can / should be + participio → "It must be signed."\n\n' +
        'Si hace falta decir quién, se añade BY: "The contract was signed BY the director". Pero en la mayoría de los casos se omite, y ese es justamente el propósito.',
    examples: [
      { en: "The goods were shipped yesterday.", es: 'La mercancía fue enviada ayer.' },
      { en: "Your order has been processed.", es: 'Su pedido ha sido procesado.' },
      { en: "All prices are quoted in US dollars.", es: 'Todos los precios se cotizan en dólares.' },
      { en: "You will be contacted within 24 hours.", es: 'Se le contactará en 24 horas.' },
      { en: "The contract must be signed before Friday.", es: 'El contrato debe firmarse antes del viernes.' }
    ],
    more: [
      {
        title: 'La pasiva frente al "se" impersonal del español',
        es: 'Aquí hay una equivalencia que resuelve muchísimo. El "se" impersonal español se traduce casi siempre por una pasiva inglesa.\n\n' +
            '"Se enviaron las muestras" → "The samples WERE SENT."\n' +
            '"Se requiere un anticipo del 30%" → "A 30% deposit IS REQUIRED."\n' +
            '"No se permite fumar" → "Smoking IS NOT ALLOWED."\n' +
            '"Se le informará oportunamente" → "You WILL BE INFORMED in due course."\n\n' +
            'Si en español te sale un "se" impersonal, en inglés piensa en pasiva. Es de los atajos más rentables que existen entre los dos idiomas.\n\n' +
            'Y el aviso: en inglés NO existe el "se" reflexivo impersonal. No se dice "It sells well se"; se dice "It sells well" o "It is sold well". Traducir el "se" literalmente produce frases que no significan nada.',
        examples: [
          { en: "A thirty percent deposit is required.", es: 'Se requiere un anticipo del treinta por ciento.' },
          { en: "Smoking is not allowed in the warehouse.", es: 'No se permite fumar en la bodega.' },
          { en: "You will be informed in due course.", es: 'Se le informará oportunamente.' }
        ]
      },
      {
        title: 'Cuándo NO usar la pasiva',
        es: 'La pasiva es potente, pero abusar de ella hace que un texto suene burocrático y confuso. Tres reglas para no pasarse:\n\n' +
            'USA ACTIVA cuando quieras asumir responsabilidad o mostrar iniciativa. "I will send it today" transmite compromiso; "It will be sent today" transmite distancia. En una entrevista o en una promesa a un cliente, usa la activa.\n\n' +
            'USA ACTIVA cuando el sujeto sea importante. "OUR ENGINEERS designed this system" vende más que "This system was designed".\n\n' +
            'USA PASIVA para procesos, normas, malas noticias y comunicaciones oficiales.\n\n' +
            'Prueba rápida: si al leer tu frase te preguntas "¿y quién hizo esto?" y la respuesta importa, ponla en activa.',
        examples: [
          { en: "I'll send you the revised offer today.", es: 'Le envío la oferta revisada hoy.' },
          { en: "Our engineers designed this system.", es: 'Nuestros ingenieros diseñaron este sistema.' },
          { en: "Unfortunately, the shipment was delayed.", es: 'Lamentablemente, el envío se retrasó.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'The goods was shipped.', good: 'The goods were shipped.', es: '"Goods" es plural: were.' },
      { bad: 'Your order has been process.', good: 'Your order has been processed.', es: 'Falta el participio: process → processed.' },
      { bad: 'It was happened yesterday.', good: 'It happened yesterday.', es: '"Happen" no admite pasiva: no tiene objeto.' },
      { bad: 'The report is wrote by Ana.', good: 'The report was written by Ana.', es: 'El participio de write es written, no wrote.' },
      { bad: 'It sells well se.', good: 'It sells well.', es: 'El "se" español no se traduce.' }
    ]
  },
  vocab: [
    { en: 'to be shipped', es: 'ser enviado' }, { en: 'to be processed', es: 'ser procesado' },
    { en: 'to be delivered', es: 'ser entregado' }, { en: 'to be delayed', es: 'ser retrasado' },
    { en: 'to be cancelled', es: 'ser cancelado' }, { en: 'to be approved', es: 'ser aprobado' },
    { en: 'to be signed', es: 'ser firmado' }, { en: 'to be required', es: 'ser requerido' },
    { en: 'to be allowed', es: 'estar permitido' }, { en: 'to be inspected', es: 'ser inspeccionado' },
    { en: 'to be quoted', es: 'ser cotizado' }, { en: 'to be charged', es: 'ser cobrado' },
    { en: 'to be informed', es: 'ser informado' }, { en: 'to be contacted', es: 'ser contactado' },
    { en: 'written (write)', es: 'escrito' }, { en: 'sent (send)', es: 'enviado' },
    { en: 'made (make)', es: 'hecho' }, { en: 'taken (take)', es: 'tomado' },
    { en: 'given (give)', es: 'dado' }, { en: 'paid (pay)', es: 'pagado' },
    { en: 'held (hold)', es: 'retenido / celebrado' }, { en: 'kept (keep)', es: 'guardado' },
    { en: 'in due course', es: 'oportunamente' }, { en: 'upon receipt', es: 'al recibirlo' },
    { en: 'as agreed', es: 'según lo acordado' }, { en: 'as requested', es: 'según lo solicitado' },
    { en: 'attached', es: 'adjunto' }, { en: 'enclosed', es: 'adjunto (en carta)' },
    { en: 'subject to change', es: 'sujeto a cambios' }, { en: 'unless otherwise stated', es: 'salvo indicación contraria' }
  ],
  phrases: [
    { en: "The goods were shipped yesterday.", es: 'La mercancía fue enviada ayer.' },
    { en: "Your order has been processed.", es: 'Su pedido ha sido procesado.' },
    { en: "All prices are quoted in US dollars.", es: 'Todos los precios se cotizan en dólares.' },
    { en: "You will be contacted within 24 hours.", es: 'Se le contactará en 24 horas.' },
    { en: "The contract must be signed before Friday.", es: 'El contrato debe firmarse antes del viernes.' },
    { en: "A thirty percent deposit is required.", es: 'Se requiere un anticipo del treinta por ciento.' },
    { en: "Unfortunately, the shipment was delayed.", es: 'Lamentablemente, el envío se retrasó.' },
    { en: "The documents are attached.", es: 'Los documentos van adjuntos.' },
    { en: "Payment is due upon receipt of the invoice.", es: 'El pago vence al recibir la factura.' },
    { en: "Prices are subject to change without notice.", es: 'Los precios están sujetos a cambio sin previo aviso.' },
    { en: "The samples were sent as requested.", es: 'Las muestras se enviaron según lo solicitado.' },
    { en: "The meeting has been postponed to Thursday.", es: 'La reunión se ha pospuesto para el jueves.' }
  ],
  exercises: [
    { t: 'mc', q: 'Pasa a pasiva: "We shipped the goods yesterday."', opts: ['The goods was shipped yesterday', 'The goods were shipped yesterday', 'The goods are shipped yesterday'], a: 1, why: '"Goods" es plural, así que WERE, y el pasado exige tiempo pasado.' },
    { t: 'fill', q: "Your order has been ___.", a: ['processed', 'shipped', 'delivered', 'approved'], why: 'Present perfect pasivo: has been + participio.' },
    { t: 'tr', q: 'Se requiere un anticipo del treinta por ciento.', a: ['a thirty percent deposit is required', 'a 30% deposit is required', 'a thirty per cent deposit is required'], why: 'El "se" impersonal español se traduce por pasiva.' },
    { t: 'mc', q: 'Quieres dar una mala noticia SIN culpar a nadie. ¿Cuál eliges?', opts: ['Wei delayed the shipment.', 'The shipment was delayed.', 'You caused the delay.'], a: 1, why: 'La pasiva quita el dedo acusador y baja la tensión. Es una herramienta diplomática.' },
    { t: 'order', words: ['The', 'contract', 'must', 'be', 'signed', 'before', 'Friday.'], a: 'The contract must be signed before Friday.', why: 'Pasiva con modal: modal + BE + participio.' },
    { t: 'mc', q: '¿Cuál es el participio de "write"?', opts: ['wrote', 'written', 'writed'], a: 1, why: 'write → wrote (pasado) → written (participio). En pasiva va siempre el participio.' },
    { t: 'fill', q: "You will ___ contacted within 24 hours.", a: ['be'], why: 'Futuro pasivo: will + BE + participio.' },
    { t: 'tr', q: 'La reunión se ha pospuesto para el jueves.', a: ['the meeting has been postponed to thursday', 'the meeting has been postponed until thursday'], why: 'Otro "se" impersonal que pide present perfect pasivo.' },
    { t: 'mc', q: 'Le prometes algo a un cliente. ¿Cuál transmite más compromiso?', opts: ['It will be sent today.', "I'll send it today.", 'The sending will be done today.'], a: 1, why: 'Aquí la activa gana: asume responsabilidad. La pasiva sonaría a evasiva.' },
    { t: 'listen', audio: "The samples were sent as requested, and payment is due upon receipt of the invoice.", opts: ['Las muestras se enviaron según lo solicitado, y el pago vence al recibir la factura.', 'Las muestras se enviarán cuando paguen la factura.', 'Pedimos las muestras y la factura llegó después.'], a: 0, why: 'Dos fórmulas fijas del inglés comercial: "as requested" y "upon receipt".' },
    { t: 'mc', q: '¿Por qué "It was happened yesterday" está mal?', opts: ['Porque falta el "by"', 'Porque "happen" no admite pasiva', 'Porque debería ser "were"'], a: 1, why: 'Solo los verbos con objeto directo pueden ir en pasiva. "Happen" no tiene objeto.' }
  ]
},

{
  id: 'b2-15', level: 'B2', title: 'Reportar lo que dijeron',
  goal: 'Contar a tu jefe lo que dijo el cliente, sin inventarte los tiempos verbales.',
  grammar: {
    title: 'Estilo indirecto: el paso atrás de los tiempos',
    es: 'Cuando cuentas lo que otro dijo, en inglés los tiempos verbales dan UN PASO ATRÁS. Es mecánico y una vez lo ves, no se olvida.\n\n' +
        'presente → pasado · "I need it" → He said he NEEDED it.\n' +
        'presente continuo → pasado continuo · "We are checking" → They said they WERE CHECKING.\n' +
        'pasado simple → past perfect · "We sent it" → They said they HAD SENT it.\n' +
        'present perfect → past perfect · "I have signed" → He said he HAD SIGNED.\n' +
        'will → would · "I will call" → She said she WOULD CALL.\n' +
        'can → could · must → had to · may → might.\n\n' +
        'TAMBIÉN CAMBIAN los pronombres y las referencias de tiempo y lugar: I → he/she · my → his/her · today → that day · tomorrow → the next day · yesterday → the day before · here → there · this → that.\n\n' +
        'SAY frente a TELL: "say" no lleva persona detrás ("He said that..."), "tell" sí y es obligatoria ("He TOLD ME that..."). Decir "He said me" es un error muy frecuente. Y "that" se puede omitir: "He said he needed it".\n\n' +
        'PREGUNTAS REPORTADAS: se pierde el orden de pregunta y el auxiliar. "Where is the invoice?" → He asked where the invoice WAS (no "where was the invoice"). Si la pregunta era de sí/no, se usa IF o WHETHER: "Did you send it?" → She asked IF I HAD SENT it.',
    examples: [
      { en: "He said he needed it by Friday.", es: 'Dijo que lo necesitaba para el viernes.' },
      { en: "They told me they had sent the samples.", es: 'Me dijeron que habían enviado las muestras.' },
      { en: "She said she would call back.", es: 'Dijo que devolvería la llamada.' },
      { en: "He asked where the invoice was.", es: 'Preguntó dónde estaba la factura.' },
      { en: "She asked if I had received the quotation.", es: 'Preguntó si había recibido la cotización.' }
    ],
    more: [
      {
        title: 'Verbos para reportar con precisión',
        es: 'Repetir "he said" todo el rato es de nivel B1. Un B2 elige el verbo que describe la INTENCIÓN, y eso comunica mucho más:\n\n' +
            'AGREE TO — aceptó. "They agreed to extend the deadline."\n' +
            'REFUSE TO — se negó. "He refused to lower the price."\n' +
            'OFFER TO — se ofreció. "She offered to cover the freight."\n' +
            'PROMISE TO — prometió. "They promised to ship on Monday."\n' +
            'THREATEN TO — amenazó con. "He threatened to cancel the order."\n' +
            'SUGGEST + -ing — sugirió. "She suggested meeting next week."\n' +
            'RECOMMEND + -ing — recomendó.\n' +
            'INSIST ON + -ing — insistió en.\n' +
            'APOLOGIZE FOR + -ing — se disculpó por.\n' +
            'DENY + -ing — negó.\n' +
            'ADMIT + -ing — admitió.\n' +
            'WARN someone ABOUT — advirtió.\n\n' +
            'Fíjate en el patrón: unos piden infinitivo (agree, refuse, offer, promise, threaten) y otros -ing (suggest, recommend, insist on, apologize for, deny, admit). Es el mismo mecanismo de la unidad anterior.',
        examples: [
          { en: "They agreed to extend the deadline.", es: 'Aceptaron ampliar el plazo.' },
          { en: "He refused to lower the price.", es: 'Se negó a bajar el precio.' },
          { en: "She suggested meeting next week.", es: 'Sugirió reunirnos la próxima semana.' }
        ]
      },
      {
        title: 'Question tags y cuándo NO hay que retroceder',
        es: 'QUESTION TAGS son esas coletillas que confirman algo: "You sent it, DIDN’T YOU?", "It isn’t ready, IS IT?". La regla: si la frase es afirmativa, la coletilla es negativa, y al revés. Se usa el mismo auxiliar de la frase.\n\n' +
            'En negocios sirven para confirmar sin sonar a interrogatorio: "We agreed on thirty days, didn’t we?".\n\n' +
            'Y una excepción importante del estilo indirecto: NO hay que retroceder el tiempo cuando lo dicho SIGUE SIENDO VERDAD ahora. "He said the factory IS in Guangzhou" — sigue estándolo. Retroceder ahí ("was") sugeriría que ya no.\n\n' +
            'Tampoco se retrocede si reportas algo dicho hace un momento: "She just said she’s on her way".',
        examples: [
          { en: "We agreed on thirty days, didn't we?", es: 'Acordamos treinta días, ¿verdad?' },
          { en: "He said the factory is in Guangzhou.", es: 'Dijo que la fábrica está en Guangzhou.' },
          { en: "She just said she's on her way.", es: 'Acaba de decir que viene en camino.' }
        ]
      }
    ],
    mistakes: [
      { bad: 'He said me that...', good: 'He told me that... / He said that...', es: '"Say" no lleva persona; "tell" la lleva obligatoriamente.' },
      { bad: 'He asked where was the invoice.', good: 'He asked where the invoice was.', es: 'En preguntas reportadas se pierde el orden interrogativo.' },
      { bad: 'She asked me that if I had sent it.', good: 'She asked me if I had sent it.', es: 'No se combinan "that" e "if".' },
      { bad: 'He said he will call.', good: 'He said he would call.', es: 'Will retrocede a would.' },
      { bad: 'They suggested to meet next week.', good: 'They suggested meeting next week.', es: '"Suggest" pide -ing.' }
    ]
  },
  vocab: [
    { en: 'to say', es: 'decir (sin persona)' }, { en: 'to tell', es: 'decir a alguien' },
    { en: 'to ask', es: 'preguntar / pedir' }, { en: 'to reply', es: 'responder' },
    { en: 'to add', es: 'añadir' }, { en: 'to explain', es: 'explicar' },
    { en: 'to agree to', es: 'aceptar' }, { en: 'to refuse to', es: 'negarse a' },
    { en: 'to offer to', es: 'ofrecerse a' }, { en: 'to promise to', es: 'prometer' },
    { en: 'to threaten to', es: 'amenazar con' }, { en: 'to suggest -ing', es: 'sugerir' },
    { en: 'to insist on -ing', es: 'insistir en' }, { en: 'to apologize for -ing', es: 'disculparse por' },
    { en: 'to deny -ing', es: 'negar' }, { en: 'to admit -ing', es: 'admitir' },
    { en: 'to warn about', es: 'advertir sobre' }, { en: 'to confirm', es: 'confirmar' },
    { en: 'to point out', es: 'señalar' }, { en: 'to complain about', es: 'quejarse de' },
    { en: 'whether', es: 'si (alternativa)' }, { en: 'the day before', es: 'el día anterior' },
    { en: 'the next day', es: 'al día siguiente' }, { en: 'according to', es: 'según' },
    { en: 'as far as I know', es: 'que yo sepa' }, { en: 'apparently', es: 'al parecer' },
    { en: 'to follow up on', es: 'dar seguimiento a' }, { en: 'update', es: 'actualización' },
    { en: 'minutes (of a meeting)', es: 'acta' }, { en: 'to summarize', es: 'resumir' }
  ],
  phrases: [
    { en: "He said he needed it by Friday.", es: 'Dijo que lo necesitaba para el viernes.' },
    { en: "They told me they had sent the samples.", es: 'Me dijeron que habían enviado las muestras.' },
    { en: "She said she would call back this afternoon.", es: 'Dijo que devolvería la llamada esta tarde.' },
    { en: "He asked where the invoice was.", es: 'Preguntó dónde estaba la factura.' },
    { en: "She asked if I had received the quotation.", es: 'Preguntó si había recibido la cotización.' },
    { en: "They agreed to extend the deadline.", es: 'Aceptaron ampliar el plazo.' },
    { en: "He refused to lower the price.", es: 'Se negó a bajar el precio.' },
    { en: "She suggested meeting next week.", es: 'Sugirió reunirnos la próxima semana.' },
    { en: "They apologized for the delay.", es: 'Se disculparon por el retraso.' },
    { en: "According to the client, the boxes were wet.", es: 'Según el cliente, las cajas estaban mojadas.' },
    { en: "We agreed on thirty days, didn't we?", es: 'Acordamos treinta días, ¿verdad?' },
    { en: "To summarize, they need it two weeks earlier.", es: 'En resumen, lo necesitan dos semanas antes.' }
  ],
  exercises: [
    { t: 'mc', q: 'El cliente dijo: "I need it by Friday". ¿Cómo lo reportas?', opts: ['He said he need it by Friday', 'He said he needed it by Friday', 'He said he needs it by Friday'], a: 1, why: 'El presente retrocede a pasado en estilo indirecto.' },
    { t: 'mc', q: '¿Cuál es correcta?', opts: ['He said me that he would call', 'He told me that he would call', 'He told that he would call'], a: 1, why: '"Tell" lleva persona obligatoria; "say" no la lleva.' },
    { t: 'fill', q: 'She said she ___ call back this afternoon.', a: ['would'], why: 'WILL retrocede a WOULD.' },
    { t: 'mc', q: 'Reporta "Where is the invoice?"', opts: ['He asked where was the invoice', 'He asked where the invoice was', 'He asked where is the invoice'], a: 1, why: 'En preguntas reportadas se pierde el orden interrogativo: sujeto antes del verbo.' },
    { t: 'tr', q: 'Preguntó si había recibido la cotización.', a: ['she asked if i had received the quotation', 'he asked if i had received the quotation', 'she asked whether i had received the quotation'], why: 'Preguntas de sí/no se reportan con IF o WHETHER.' },
    { t: 'order', words: ['They', 'told', 'me', 'they', 'had', 'sent', 'the', 'samples.'], a: 'They told me they had sent the samples.', why: 'El pasado simple ("we sent") retrocede a past perfect ("they had sent").' },
    { t: 'mc', q: 'El proveedor no quiso bajar el precio. ¿Cuál lo reporta mejor?', opts: ['He said no about the price', 'He refused to lower the price', 'He said he not lower the price'], a: 1, why: 'Elegir el verbo que describe la intención es lo que distingue a un B2.' },
    { t: 'fill', q: 'She suggested ___ next week.', a: ['meeting'], why: '"Suggest" pide -ing, no infinitivo.' },
    { t: 'tr', q: 'Se disculparon por el retraso.', a: ['they apologized for the delay', 'they apologised for the delay'], why: '"Apologize for" + sustantivo o -ing.' },
    { t: 'listen', audio: "He told me they had already shipped it, but he asked if we could confirm the address.", opts: ['Me dijo que ya lo habían enviado, pero preguntó si podíamos confirmar la dirección.', 'Me pidió que enviara la dirección antes de despachar.', 'Dijo que enviarían el pedido cuando confirmáramos la dirección.'], a: 0, why: 'Un reporte con las dos formas: afirmación con "told me" y pregunta con "asked if".' },
    { t: 'mc', q: '"We agreed on thirty days, ___?"', opts: ["didn't we", 'did we', "don't we"], a: 0, why: 'Frase afirmativa en pasado → coletilla negativa con el mismo auxiliar: didn’t we.' }
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

/* ══════════════════ DIÁLOGOS DE COMPRENSIÓN AUDITIVA ══════════════════
   Se escuchan enteros y sin texto. Después se responden preguntas,
   se escribe una frase al dictado y solo entonces se ve la transcripción. */

const DIALOGUES = [
{
  id: 'dlg-1', level: 'A1', title: 'Alguien se acerca a tu stand',
  context: 'Estás en una feria comercial. Un visitante se acerca a tu stand y se presenta.',
  speakers: { A: 'Visitante', B: 'Tú' },
  lines: [
    { who: 'A', en: "Hi there. Is this your stand?", es: '¿Hola? ¿Este es su stand?' },
    { who: 'B', en: "Yes, it is. Welcome. I'm Diego.", es: 'Sí. Bienvenido. Soy Diego.' },
    { who: 'A', en: "Nice to meet you, Diego. I'm Karen, from Miami.", es: 'Encantada, Diego. Soy Karen, de Miami.' },
    { who: 'B', en: "Nice to meet you too. What do you do, Karen?", es: 'Encantado yo también. ¿A qué se dedica, Karen?' },
    { who: 'A', en: "I'm a buyer for a hardware chain. And you?", es: 'Soy compradora de una cadena de ferreterías. ¿Y usted?' },
    { who: 'B', en: "I'm the sales manager here. Here's my card.", es: 'Soy el gerente de ventas. Aquí tiene mi tarjeta.' },
    { who: 'A', en: "Thank you. Can I take a catalogue?", es: 'Gracias. ¿Puedo llevarme un catálogo?' },
    { who: 'B', en: "Of course. Have a nice day.", es: 'Por supuesto. Que tenga buen día.' }
  ],
  questions: [
    { q: '¿Cómo se llama la visitante?', opts: ['Karen', 'Carmen', 'Sharon'], a: 0, why: 'Dice "I’m Karen, from Miami". Fíjate en que el nombre suele venir justo después de "I’m".' },
    { q: '¿A qué se dedica ella?', opts: ['Es vendedora', 'Es compradora', 'Es ingeniera'], a: 1, why: '"I’m a buyer" = soy compradora. Ojo: buyer (compra) y seller (vende) se confunden fácil.' },
    { q: '¿Qué le pide ella a él al final?', opts: ['Una cotización', 'Un catálogo', 'Una reunión'], a: 1, why: '"Can I take a catalogue?" Escucha "catalogue", que en inglés suena "CA-ta-log".' }
  ],
  dictation: 5
},

{
  id: 'dlg-2', level: 'A1', title: 'Pedir en un café',
  context: 'Estás en una cafetería en Estados Unidos antes de una reunión.',
  speakers: { A: 'Barista', B: 'Tú' },
  lines: [
    { who: 'A', en: "Good morning. What can I get for you?", es: 'Buenos días. ¿Qué le sirvo?' },
    { who: 'B', en: "Good morning. A coffee, please.", es: 'Buenos días. Un café, por favor.' },
    { who: 'A', en: "Sure. Hot or iced?", es: 'Claro. ¿Caliente o frío?' },
    { who: 'B', en: "Hot, please. And a sandwich.", es: 'Caliente, por favor. Y un sándwich.' },
    { who: 'A', en: "Anything else?", es: '¿Algo más?' },
    { who: 'B', en: "No, that's all. How much is it?", es: 'No, eso es todo. ¿Cuánto es?' },
    { who: 'A', en: "That'll be eight fifty. Cash or card?", es: 'Son ocho cincuenta. ¿Efectivo o tarjeta?' },
    { who: 'B', en: "Card, please.", es: 'Tarjeta, por favor.' }
  ],
  questions: [
    { q: '¿Qué pide él para beber?', opts: ['Un té', 'Un café caliente', 'Un café frío'], a: 1, why: 'Pide "a coffee" y luego aclara "Hot, please".' },
    { q: '¿Cuánto cuesta todo?', opts: ['8,15', '8,50', '18,50'], a: 1, why: '"Eight fifty" = 8,50. Ojo con fifteen (15) y fifty (50): la diferencia está en dónde cae el acento.' },
    { q: '¿Cómo paga?', opts: ['En efectivo', 'Con tarjeta', 'No paga'], a: 1, why: 'Responde "Card, please" a la pregunta "Cash or card?".' }
  ],
  dictation: 6
},

{
  id: 'dlg-3', level: 'A2', title: 'Confirmar un pedido por teléfono',
  context: 'Llamas a un cliente para confirmar los detalles de su pedido.',
  speakers: { A: 'Tú', B: 'Cliente' },
  lines: [
    { who: 'A', en: "Good afternoon, Mr. Silva. I'm calling about your order.", es: 'Buenas tardes, Sr. Silva. Le llamo por su pedido.' },
    { who: 'B', en: "Hello. Yes, go ahead.", es: 'Hola. Sí, dígame.' },
    { who: 'A', en: "We have your purchase order for three hundred units.", es: 'Tenemos su orden de compra por trescientas unidades.' },
    { who: 'B', en: "That's right. When can you deliver?", es: 'Correcto. ¿Cuándo pueden entregar?' },
    { who: 'A', en: "The goods are in stock, so we can ship on Thursday.", es: 'La mercancía está en inventario, así que podemos enviar el jueves.' },
    { who: 'B', en: "Thursday works. And the payment terms?", es: 'El jueves va bien. ¿Y las condiciones de pago?' },
    { who: 'A', en: "Thirty days from the invoice date, as usual.", es: 'Treinta días desde la fecha de factura, como siempre.' },
    { who: 'B', en: "Perfect. Could you send me the confirmation by email?", es: 'Perfecto. ¿Podría enviarme la confirmación por correo?' },
    { who: 'A', en: "Of course. I'll send it right now.", es: 'Por supuesto. Se la envío ahora mismo.' }
  ],
  questions: [
    { q: '¿Cuántas unidades tiene el pedido?', opts: ['30', '300', '3.000'], a: 1, why: '"Three hundred" = 300. Escucha si dice "hundred" o "thousand".' },
    { q: '¿Cuándo se envía la mercancía?', opts: ['El martes', 'El jueves', 'En treinta días'], a: 1, why: '"We can ship on Thursday". Los treinta días son del pago, no del envío.' },
    { q: '¿Por qué pueden enviar tan rápido?', opts: ['Porque el cliente pagó por adelantado', 'Porque la mercancía está en inventario', 'Porque es un cliente antiguo'], a: 1, why: '"The goods are in stock, SO we can ship" — el "so" marca la causa y la consecuencia.' },
    { q: '¿Qué pide el cliente al final?', opts: ['Una llamada mañana', 'La confirmación por correo', 'Una visita'], a: 1, why: '"Could you send me the confirmation by email?".' }
  ],
  dictation: 4
},

{
  id: 'dlg-4', level: 'A2', title: 'Check-in en el aeropuerto',
  context: 'Vas a un viaje de negocios y estás en el mostrador de la aerolínea.',
  speakers: { A: 'Agente', B: 'Tú' },
  lines: [
    { who: 'A', en: "Good evening. Passport and ticket, please.", es: 'Buenas noches. Pasaporte y boleto, por favor.' },
    { who: 'B', en: "Here you are.", es: 'Aquí tiene.' },
    { who: 'A', en: "Thank you. Are you checking any bags today?", es: 'Gracias. ¿Va a documentar equipaje hoy?' },
    { who: 'B', en: "Just one suitcase. This bag is carry-on.", es: 'Solo una maleta. Este bolso es de mano.' },
    { who: 'A', en: "Fine. Window or aisle?", es: 'Bien. ¿Ventana o pasillo?' },
    { who: 'B', en: "Aisle, please. I'm quite tall.", es: 'Pasillo, por favor. Soy bastante alto.' },
    { who: 'A', en: "No problem. Here's your boarding pass. Gate B twelve.", es: 'Sin problema. Aquí tiene su pase de abordar. Puerta B doce.' },
    { who: 'B', en: "What time does boarding start?", es: '¿A qué hora empieza el abordaje?' },
    { who: 'A', en: "At a quarter to eight. The flight is on time.", es: 'A las ocho menos cuarto. El vuelo sale a tiempo.' }
  ],
  questions: [
    { q: '¿Cuánto equipaje documenta?', opts: ['Ninguno', 'Una maleta', 'Dos maletas'], a: 1, why: '"Just one suitcase". El otro bolso es "carry-on", equipaje de mano.' },
    { q: '¿Qué asiento pide?', opts: ['De ventana', 'De pasillo', 'Le da igual'], a: 1, why: '"Aisle, please". Ojo: "aisle" se pronuncia "áil", la s no suena.' },
    { q: '¿A qué hora empieza el abordaje?', opts: ['7:45', '8:15', '8:45'], a: 0, why: '"A quarter to eight" = las ocho menos cuarto = 7:45. Con TO se nombra la hora siguiente.' },
    { q: '¿El vuelo sale a tiempo?', opts: ['Sí', 'No, está retrasado', 'No lo dice'], a: 0, why: '"The flight is on time" = sale a tiempo. Si estuviera retrasado diría "delayed".' }
  ],
  dictation: 6
},

{
  id: 'dlg-5', level: 'A2', title: 'Reunión semanal de ventas',
  context: 'Tu gerente regional te pide el reporte de la zona en la reunión de los lunes.',
  speakers: { A: 'Sarah, gerente', B: 'Tú' },
  lines: [
    { who: 'A', en: "Good morning, everyone. Diego, how is your region doing?", es: 'Buenos días a todos. Diego, ¿cómo va tu zona?' },
    { who: 'B', en: "Good morning. We're at eighty-five percent of the target.", es: 'Buenos días. Estamos al ochenta y cinco por ciento de la meta.' },
    { who: 'A', en: "That's not bad. What's the main problem?", es: 'No está mal. ¿Cuál es el problema principal?' },
    { who: 'B', en: "Two new sales reps. They need more training.", es: 'Dos vendedores nuevos. Necesitan más capacitación.' },
    { who: 'A', en: "I see. What's your plan for this month?", es: 'Entiendo. ¿Cuál es tu plan para este mes?' },
    { who: 'B', en: "I visit clients with them twice a week.", es: 'Visito clientes con ellos dos veces por semana.' },
    { who: 'A', en: "Good idea. Do you need anything from me?", es: 'Buena idea. ¿Necesitas algo de mí?' },
    { who: 'B', en: "A bigger budget for samples, if possible.", es: 'Un presupuesto mayor para muestras, si es posible.' },
    { who: 'A', en: "Send me the numbers and I'll look at it.", es: 'Mándame las cifras y lo reviso.' }
  ],
  questions: [
    { q: '¿En qué porcentaje de la meta está la zona?', opts: ['75%', '85%', '95%'], a: 1, why: '"Eighty-five percent". Distingue eighty (80) de eighteen (18).' },
    { q: '¿Cuál dice que es el problema?', opts: ['Los precios', 'Dos vendedores nuevos sin capacitar', 'La competencia'], a: 1, why: '"Two new sales reps. They need more training".' },
    { q: '¿Con qué frecuencia sale a visitar clientes con ellos?', opts: ['Una vez al mes', 'Dos veces por semana', 'Todos los días'], a: 1, why: '"Twice a week" = dos veces por semana.' },
    { q: '¿Qué pide él?', opts: ['Más vendedores', 'Más presupuesto para muestras', 'Menos metas'], a: 1, why: '"A bigger budget for samples".' }
  ],
  dictation: 5
},

{
  id: 'dlg-6', level: 'B1', title: 'Un envío se retrasa',
  context: 'Tu proveedor asiático te llama para avisar de un problema con la producción.',
  speakers: { A: 'Wei, proveedor', B: 'Tú' },
  lines: [
    { who: 'A', en: "Diego, I'm afraid I have some bad news about your order.", es: 'Diego, me temo que tengo malas noticias sobre su pedido.' },
    { who: 'B', en: "Oh. What happened?", es: 'Vaya. ¿Qué pasó?' },
    { who: 'A', en: "One of our machines broke down last week.", es: 'Una de nuestras máquinas se averió la semana pasada.' },
    { who: 'B', en: "So the shipment will be delayed?", es: '¿Entonces el envío se retrasará?' },
    { who: 'A', en: "Yes, by about two weeks. I'm really sorry.", es: 'Sí, unas dos semanas. Lo lamento mucho.' },
    { who: 'B', en: "That's a problem. My client needs the goods in May.", es: 'Eso es un problema. Mi cliente necesita la mercancía en mayo.' },
    { who: 'A', en: "We could send half the order now and the rest later.", es: 'Podríamos enviar la mitad ahora y el resto después.' },
    { who: 'B', en: "Who would pay for the extra freight?", es: '¿Quién pagaría el flete adicional?' },
    { who: 'A', en: "We would, of course. It's our fault.", es: 'Nosotros, por supuesto. Es culpa nuestra.' },
    { who: 'B', en: "All right. Send me the new schedule in writing today.", es: 'De acuerdo. Envíeme el nuevo cronograma por escrito hoy.' }
  ],
  questions: [
    { q: '¿Por qué se retrasa el envío?', opts: ['Por la aduana', 'Se averió una máquina', 'Falta materia prima'], a: 1, why: '"One of our machines broke down" — "break down" es averiarse.' },
    { q: '¿Cuánto se retrasa?', opts: ['Dos días', 'Dos semanas', 'Dos meses'], a: 1, why: '"By about two weeks". El "by" indica la magnitud del retraso.' },
    { q: '¿Qué solución propone el proveedor?', opts: ['Cancelar el pedido', 'Enviar la mitad ahora y el resto después', 'Bajar el precio'], a: 1, why: '"Send half the order now and the rest later" — es un envío parcial.' },
    { q: '¿Quién paga el flete adicional?', opts: ['El cliente', 'El proveedor', 'Se reparte'], a: 1, why: '"We would, of course. It’s our fault". El "we" es el proveedor.' },
    { q: '¿Qué pide Diego al final?', opts: ['Un descuento', 'El nuevo cronograma por escrito', 'Hablar con el jefe'], a: 1, why: '"Send me the new schedule in writing" — pedirlo por escrito es lo profesional.' }
  ],
  dictation: 6
},

{
  id: 'dlg-7', level: 'B1', title: 'Un cliente se queja',
  context: 'Un cliente llama molesto porque la mercancía llegó con unidades dañadas.',
  speakers: { A: 'Cliente', B: 'Tú' },
  lines: [
    { who: 'A', en: "I'm calling because we have a problem with the last delivery.", es: 'Llamo porque tenemos un problema con la última entrega.' },
    { who: 'B', en: "I'm sorry to hear that. What exactly happened?", es: 'Lamento oír eso. ¿Qué pasó exactamente?' },
    { who: 'A', en: "About twenty units arrived damaged. The boxes were wet.", es: 'Unas veinte unidades llegaron dañadas. Las cajas estaban mojadas.' },
    { who: 'B', en: "That shouldn't have happened. Have you taken photos?", es: 'Eso no debería haber pasado. ¿Tomaron fotos?' },
    { who: 'A', en: "Yes, I've already sent them to your assistant.", es: 'Sí, ya se las envié a su asistente.' },
    { who: 'B', en: "Good. I'll look into it today and call you back.", es: 'Bien. Lo reviso hoy y le devuelvo la llamada.' },
    { who: 'A', en: "I need those units before the end of the month.", es: 'Necesito esas unidades antes de fin de mes.' },
    { who: 'B', en: "Understood. We'll send a replacement at our cost.", es: 'Entendido. Enviaremos una reposición a nuestro costo.' },
    { who: 'A', en: "That works. But please, check the packaging next time.", es: 'Eso funciona. Pero por favor, revise el embalaje la próxima vez.' }
  ],
  questions: [
    { q: '¿Cuántas unidades llegaron dañadas?', opts: ['Unas 12', 'Unas 20', 'Unas 200'], a: 1, why: '"About twenty units". Distingue twenty (20) de twelve (12).' },
    { q: '¿Cuál fue la causa aparente?', opts: ['Las cajas estaban mojadas', 'El transportista las tiró', 'Vinieron mal de fábrica'], a: 0, why: '"The boxes were wet" — el embalaje se mojó.' },
    { q: '¿Ya envió las fotos el cliente?', opts: ['Sí, al asistente', 'No, las enviará mañana', 'No las tomó'], a: 0, why: '"I’ve already sent them" — el "already" en present perfect indica que ya está hecho.' },
    { q: '¿Qué ofrece Diego?', opts: ['Un descuento', 'Una reposición a su costo', 'Devolver el dinero'], a: 1, why: '"A replacement at our cost" = reposición pagada por nosotros.' }
  ],
  dictation: 7
},

{
  id: 'dlg-8', level: 'B1', title: 'Café antes de la reunión',
  context: 'Charla informal con un colega extranjero mientras esperan que empiece la reunión.',
  speakers: { A: 'Colega', B: 'Tú' },
  lines: [
    { who: 'A', en: "So, how was your flight?", es: 'Bueno, ¿qué tal el vuelo?' },
    { who: 'B', en: "Long, but fine. I got in late last night.", es: 'Largo, pero bien. Llegué anoche tarde.' },
    { who: 'A', en: "Is this your first time in Chicago?", es: '¿Es tu primera vez en Chicago?' },
    { who: 'B', en: "Second, actually. I came here two years ago.", es: 'La segunda, en realidad. Vine hace dos años.' },
    { who: 'A', en: "Nice. Did you get a chance to look around?", es: 'Qué bien. ¿Tuviste ocasión de dar una vuelta?' },
    { who: 'B', en: "Not really. I've been busy with clients all week.", es: 'La verdad no. He estado ocupado con clientes toda la semana.' },
    { who: 'A', en: "That's a shame. The food here is great.", es: 'Qué lástima. La comida de aquí es buenísima.' },
    { who: 'B', en: "Maybe tonight, if the meeting doesn't run late.", es: 'Quizá esta noche, si la reunión no se alarga.' },
    { who: 'A', en: "Fingers crossed. Shall we go in?", es: 'Crucemos los dedos. ¿Entramos?' }
  ],
  questions: [
    { q: '¿Es su primera vez en Chicago?', opts: ['Sí', 'No, es la segunda', 'No, viene cada año'], a: 1, why: '"Second, actually". Recuerda que "actually" es "en realidad", no "actualmente".' },
    { q: '¿Por qué no ha visitado la ciudad?', opts: ['Ha estado ocupado con clientes', 'No le interesa', 'Hace mal tiempo'], a: 0, why: '"I’ve been busy with clients all week".' },
    { q: '¿Qué significa "if the meeting doesn’t run late"?', opts: ['Si la reunión no empieza tarde', 'Si la reunión no se alarga', 'Si la reunión no se cancela'], a: 1, why: '"Run late" es alargarse más de lo previsto, no empezar tarde.' },
    { q: '¿Qué propone el colega al final?', opts: ['Ir a comer', 'Entrar a la reunión', 'Llamar a un taxi'], a: 1, why: '"Shall we go in?" — "shall we" es una propuesta muy educada.' }
  ],
  dictation: 5
},

{
  id: 'dlg-9', level: 'B2', title: 'Negociar precio y volumen',
  context: 'Un comprador exigente quiere mejor precio. Tú defiendes tu margen.',
  speakers: { A: 'Comprador', B: 'Tú' },
  lines: [
    { who: 'A', en: "I've looked at your proposal, and honestly, the price is higher than we expected.", es: 'He visto su propuesta y, sinceramente, el precio es más alto de lo que esperábamos.' },
    { who: 'B', en: "I understand. May I ask what you were expecting?", es: 'Lo entiendo. ¿Puedo preguntar qué esperaban?' },
    { who: 'A', en: "Something around eleven dollars a unit. You quoted twelve fifty.", es: 'Algo cercano a once dólares por unidad. Ustedes cotizaron doce cincuenta.' },
    { who: 'B', en: "That's a significant gap. At that price our margin wouldn't work.", es: 'Es una brecha importante. A ese precio nuestro margen no funcionaría.' },
    { who: 'A', en: "So there's no flexibility at all?", es: '¿Entonces no hay ninguna flexibilidad?' },
    { who: 'B', en: "There would be, if the volume were higher. How many units are we talking about?", es: 'La habría, si el volumen fuera mayor. ¿De cuántas unidades hablamos?' },
    { who: 'A', en: "We were thinking of two thousand for the first order.", es: 'Pensábamos en dos mil para el primer pedido.' },
    { who: 'B', en: "If you committed to five thousand a year, we could go down to eleven eighty.", es: 'Si se comprometieran a cinco mil al año, podríamos bajar a once ochenta.' },
    { who: 'A', en: "Eleven eighty is closer. What about payment terms?", es: 'Once ochenta está más cerca. ¿Y las condiciones de pago?' },
    { who: 'B', en: "Thirty days, and we'd cover the freight to your warehouse.", es: 'Treinta días, y cubriríamos el flete hasta su bodega.' },
    { who: 'A', en: "Put that in writing and I'll take it to my team.", es: 'Póngalo por escrito y lo llevo a mi equipo.' }
  ],
  questions: [
    { q: '¿Cuánto cotizó Diego por unidad?', opts: ['11,00', '11,80', '12,50'], a: 2, why: '"You quoted twelve fifty" = 12,50. El 11,80 aparece después, como concesión.' },
    { q: '¿Qué condición pone Diego para bajar el precio?', opts: ['Pago por adelantado', 'Un compromiso de 5.000 unidades al año', 'Un contrato de dos años'], a: 1, why: '"If you committed to five thousand a year" — segundo condicional, propuesta hipotética.' },
    { q: '¿Cuántas unidades quería el comprador en el primer pedido?', opts: ['500', '2.000', '5.000'], a: 1, why: '"Two thousand for the first order". Las 5.000 son el compromiso anual.' },
    { q: '¿Quién paga el flete en la propuesta final?', opts: ['El comprador', 'Diego', 'Se reparte'], a: 1, why: '"We’d cover the freight to your warehouse".' },
    { q: '¿Por qué Diego usa "if the volume WERE higher" y no "is"?', opts: ['Porque es un error', 'Porque plantea una hipótesis y así no se compromete', 'Porque habla del pasado'], a: 1, why: 'El segundo condicional le permite tantear sin hacer una oferta firme. Es la clave de la negociación.' }
  ],
  dictation: 8
},

{
  id: 'dlg-10', level: 'B2', title: 'Entrevista para gerente comercial',
  context: 'Un reclutador te entrevista para un puesto de gerente comercial regional.',
  speakers: { A: 'Reclutador', B: 'Tú' },
  lines: [
    { who: 'A', en: "Thanks for coming in. Tell me a bit about your background.", es: 'Gracias por venir. Cuénteme un poco sobre su trayectoria.' },
    { who: 'B', en: "Sure. I've spent the last ten years in foreign trade, mostly in regional sales.", es: 'Claro. He pasado los últimos diez años en comercio exterior, sobre todo en ventas regionales.' },
    { who: 'A', en: "And what are you responsible for right now?", es: '¿Y de qué es responsable ahora mismo?' },
    { who: 'B', en: "I manage a team of eight and report to the commercial director.", es: 'Dirijo un equipo de ocho y reporto al director comercial.' },
    { who: 'A', en: "Can you tell me about a difficult situation you handled?", es: '¿Puede contarme una situación difícil que haya manejado?' },
    { who: 'B', en: "Last year our portfolio coverage dropped to sixty percent.", es: 'El año pasado nuestra cobertura de cartera cayó al sesenta por ciento.' },
    { who: 'A', en: "That's quite a drop. What did you do?", es: 'Es una caída considerable. ¿Qué hizo?' },
    { who: 'B', en: "I redesigned the visit plan and retrained the two newest reps.", es: 'Rediseñé el plan de visitas y volví a capacitar a los dos vendedores más nuevos.' },
    { who: 'A', en: "And what was the result?", es: '¿Y cuál fue el resultado?' },
    { who: 'B', en: "Coverage went back up to eighty-two percent in three months.", es: 'La cobertura volvió a subir al ochenta y dos por ciento en tres meses.' },
    { who: 'A', en: "Impressive. Do you have any questions for me?", es: 'Impresionante. ¿Tiene alguna pregunta para mí?' },
    { who: 'B', en: "Yes. What would success look like in the first six months?", es: 'Sí. ¿Cómo se vería el éxito en los primeros seis meses?' }
  ],
  questions: [
    { q: '¿Cuántos años lleva en comercio exterior?', opts: ['Cinco', 'Diez', 'Quince'], a: 1, why: '"The last ten years". Fíjate en el present perfect: "I’ve spent", porque sigue ahí.' },
    { q: '¿A cuánto cayó la cobertura?', opts: ['16%', '60%', '66%'], a: 1, why: '"Sixty percent" = 60%. Sixty y sixteen se distinguen por el acento: SIX-ty frente a six-TEEN.' },
    { q: '¿Qué dos acciones concretas tomó?', opts: ['Bajó precios y contrató gente', 'Rediseñó el plan de visitas y recapacitó a dos vendedores', 'Cambió de proveedor y de zona'], a: 1, why: 'Esa es la "A" del método STAR: la acción concreta que tomó él.' },
    { q: '¿Hasta dónde se recuperó la cobertura?', opts: ['72%', '82%', '92%'], a: 1, why: '"Eighty-two percent". Terminar con la cifra es lo que da fuerza a la respuesta.' },
    { q: '¿Qué pregunta él al reclutador?', opts: ['Cuánto paga el puesto', 'Cómo se vería el éxito en seis meses', 'Cuándo empieza'], a: 1, why: 'Es una pregunta excelente: demuestra que piensa en resultados, no en condiciones.' }
  ],
  dictation: 9
}
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
