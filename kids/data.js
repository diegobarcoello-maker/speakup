/* ============================================================
   SpeakUp Kids — Contenido

   Diez mundos, cada uno con sus palabras, sus frases cortas y
   una conversación guionada. El niño nunca escribe texto libre:
   toca, elige y repite con su voz.

   Cada palabra lleva su dibujo, su traducción y una frase de
   ejemplo cortísima, porque es la frase la que enseña a usarla.
   ============================================================ */

const MUNDOS = [
  {
    id: 'animales', titulo: 'Los animales', emoji: 'cat', color: 'verde',
    saludo: '¡Vamos a conocer a los animales en inglés!',
    palabras: [
      { en: 'cat',      es: 'gato',     art: 'cat',      frase: 'The cat is sleeping.',   fraseEs: 'El gato está durmiendo.' },
      { en: 'dog',      es: 'perro',    art: 'dog',      frase: 'My dog is big.',         fraseEs: 'Mi perro es grande.' },
      { en: 'bird',     es: 'pájaro',   art: 'bird',     frase: 'The bird can fly.',      fraseEs: 'El pájaro puede volar.' },
      { en: 'fish',     es: 'pez',      art: 'fish',     frase: 'The fish is orange.',    fraseEs: 'El pez es naranja.' },
      { en: 'horse',    es: 'caballo',  art: 'horse',    frase: 'The horse runs fast.',   fraseEs: 'El caballo corre rápido.' },
      { en: 'cow',      es: 'vaca',     art: 'cow',      frase: 'The cow says moo.',      fraseEs: 'La vaca dice mu.' },
      { en: 'elephant', es: 'elefante', art: 'elephant', frase: 'The elephant is grey.',  fraseEs: 'El elefante es gris.' },
      { en: 'lion',     es: 'león',     art: 'lion',     frase: 'The lion is strong.',    fraseEs: 'El león es fuerte.' },
      { en: 'duck',     es: 'pato',     art: 'duck',     frase: 'The duck likes water.',  fraseEs: 'Al pato le gusta el agua.' },
      { en: 'frog',     es: 'rana',     art: 'frog',     frase: 'The frog is green.',     fraseEs: 'La rana es verde.' },
      { en: 'bear',     es: 'oso',      art: 'bear',     frase: 'The bear is sleepy.',    fraseEs: 'El oso tiene sueño.' },
      { en: 'rabbit',   es: 'conejo',   art: 'rabbit',   frase: 'The rabbit jumps.',      fraseEs: 'El conejo salta.' },
      { en: "pet", es: "mascota", art: "dog", frase: "I have a pet.", fraseEs: "Tengo una mascota." },
      { en: "farm", es: "granja", art: "cow", frase: "The cow is on the farm.", fraseEs: "La vaca está en la granja." },
      { en: "big cat", es: "gato grande", art: "lion", frase: "A lion is a big cat.", fraseEs: "Un león es un gato grande." },
      { en: "wing", es: "ala", art: "bird", frase: "The bird has wings.", fraseEs: "El pájaro tiene alas." }
    ],
    charla: {
      quien: 'Un gato llamado Milo', art: 'cat',
      pasos: [
        { dice: 'Hello! I am Milo. What is your name?', diceEs: '¡Hola! Soy Milo. ¿Cómo te llamas?',
          opciones: [{ en: "My name is...", es: "Me llamo..." }, { en: "Hello Milo!", es: "¡Hola, Milo!" }, { en: "Hi!", es: "¡Hola!" }] },
        { dice: 'Nice to meet you! Do you like animals?', diceEs: '¡Mucho gusto! ¿Te gustan los animales?',
          opciones: [{ en: "Yes, I do!", es: "¡Sí, me gustan!" }, { en: "I love animals!", es: "¡Me encantan los animales!" }, { en: "A little.", es: "Un poquito." }] },
        { dice: 'Me too! What is your favourite animal?', diceEs: '¡A mí también! ¿Cuál es tu animal favorito?',
          opciones: [{ en: "The dog!", es: "¡El perro!" }, { en: "The cat!", es: "¡El gato!" }, { en: "The elephant!", es: "¡El elefante!" }] },
        { dice: 'Great choice. See you later!', diceEs: 'Buena elección. ¡Hasta luego!',
          opciones: [{ en: "Bye Milo!", es: "¡Adiós, Milo!" }, { en: "See you!", es: "¡Nos vemos!" }, { en: "Goodbye!", es: "¡Adiós!" }] }
      ]
    }
  },

  {
    id: 'colores', titulo: 'Los colores', emoji: 'red', color: 'rojo',
    saludo: '¡Hoy pintamos el mundo en inglés!',
    palabras: [
      { en: 'red',    es: 'rojo',     art: 'red',    frase: 'The apple is red.',    fraseEs: 'La manzana es roja.' },
      { en: 'blue',   es: 'azul',     art: 'blue',   frase: 'The sky is blue.',     fraseEs: 'El cielo es azul.' },
      { en: 'yellow', es: 'amarillo', art: 'yellow', frase: 'The sun is yellow.',   fraseEs: 'El sol es amarillo.' },
      { en: 'green',  es: 'verde',    art: 'green',  frase: 'The tree is green.',   fraseEs: 'El árbol es verde.' },
      { en: 'orange', es: 'naranja',  art: 'orange', frase: 'I like orange.',       fraseEs: 'Me gusta el naranja.' },
      { en: 'purple', es: 'morado',   art: 'purple', frase: 'My bag is purple.',    fraseEs: 'Mi mochila es morada.' },
      { en: 'pink',   es: 'rosado',   art: 'pink',   frase: 'The flower is pink.',  fraseEs: 'La flor es rosada.' },
      { en: 'brown',  es: 'café',     art: 'brown',  frase: 'The bear is brown.',   fraseEs: 'El oso es café.' },
      { en: 'black',  es: 'negro',    art: 'black',  frase: 'The night is black.',  fraseEs: 'La noche es negra.' },
      { en: 'white',  es: 'blanco',   art: 'white',  frase: 'The milk is white.',   fraseEs: 'La leche es blanca.' },
      { en: "grey", es: "gris", art: "grey", frase: "The elephant is grey.", fraseEs: "El elefante es gris." },
      { en: "colour", es: "color", art: "flower", frase: "What colour is it?", fraseEs: "¿De qué color es?" },
      { en: "dark", es: "oscuro", art: "night", frase: "It is dark now.", fraseEs: "Ahora está oscuro." },
      { en: "light", es: "claro", art: "day", frase: "The room is light.", fraseEs: "El cuarto está claro." }
    ],
    charla: {
      quien: 'Lía, la pintora', art: 'girl',
      pasos: [
        { dice: 'Hi! I am painting. What colour do you like?', diceEs: '¡Hola! Estoy pintando. ¿Qué color te gusta?',
          opciones: [{ en: "I like blue.", es: "Me gusta el azul." }, { en: "I like red.", es: "Me gusta el rojo." }, { en: "I like green.", es: "Me gusta el verde." }] },
        { dice: 'Nice! Look at my flower. What colour is it?', diceEs: '¡Bonito! Mira mi flor. ¿De qué color es?',
          opciones: [{ en: "It is pink.", es: "Es rosada." }, { en: "It is yellow.", es: "Es amarilla." }, { en: "It is purple.", es: "Es morada." }] },
        { dice: 'Yes! Do you want to paint with me?', diceEs: '¡Sí! ¿Quieres pintar conmigo?',
          opciones: [{ en: "Yes, please!", es: "¡Sí, por favor!" }, { en: "Of course!", es: "¡Por supuesto!" }, { en: "Later, thank you.", es: "Después, gracias." }] },
        { dice: 'Yay! Here is your brush.', diceEs: '¡Bien! Aquí tienes tu pincel.',
          opciones: [{ en: "Thank you!", es: "¡Gracias!" }, { en: "Thanks Lia!", es: "¡Gracias, Lía!" }, { en: "Cool!", es: "¡Genial!" }] }
      ]
    }
  },

  {
    id: 'numeros', titulo: 'Los números', emoji: 'num3', color: 'azul',
    saludo: '¡A contar en inglés!',
    palabras: [
      { en: 'one',   es: 'uno',    art: 'num1',  frase: 'I have one cat.',      fraseEs: 'Tengo un gato.' },
      { en: 'two',   es: 'dos',    art: 'num2',  frase: 'I see two birds.',     fraseEs: 'Veo dos pájaros.' },
      { en: 'three', es: 'tres',   art: 'num3',  frase: 'Three red apples.',    fraseEs: 'Tres manzanas rojas.' },
      { en: 'four',  es: 'cuatro', art: 'num4',  frase: 'Four little ducks.',   fraseEs: 'Cuatro patitos.' },
      { en: 'five',  es: 'cinco',  art: 'num5',  frase: 'I am five years old.', fraseEs: 'Tengo cinco años.' },
      { en: 'six',   es: 'seis',   art: 'num6',  frase: 'Six green frogs.',     fraseEs: 'Seis ranas verdes.' },
      { en: 'seven', es: 'siete',  art: 'num7',  frase: 'Seven days a week.',   fraseEs: 'Siete días a la semana.' },
      { en: 'eight', es: 'ocho',   art: 'num8',  frase: 'Eight yellow stars.',  fraseEs: 'Ocho estrellas amarillas.' },
      { en: 'nine',  es: 'nueve',  art: 'num9',  frase: 'Nine blue balls.',     fraseEs: 'Nueve pelotas azules.' },
      { en: 'ten',   es: 'diez',   art: 'num10', frase: 'I can count to ten!',  fraseEs: '¡Puedo contar hasta diez!' },
      { en: "zero", es: "cero", art: "num1", frase: "Zero, one, two!", fraseEs: "¡Cero, uno, dos!" },
      { en: "count", es: "contar", art: "num5", frase: "Let us count!", fraseEs: "¡Vamos a contar!" },
      { en: "how many", es: "cuántos", art: "num3", frase: "How many apples?", fraseEs: "¿Cuántas manzanas?" },
      { en: "first", es: "primero", art: "num1", frase: "I am first!", fraseEs: "¡Soy el primero!" }
    ],
    charla: {
      quien: 'Tomi el conejo', art: 'rabbit',
      pasos: [
        { dice: 'Hello! How old are you?', diceEs: '¡Hola! ¿Cuántos años tienes?',
          opciones: [{ en: "I am five.", es: "Tengo cinco." }, { en: "I am seven.", es: "Tengo siete." }, { en: "I am nine.", es: "Tengo nueve." }] },
        { dice: 'Wow! Can you count to five?', diceEs: '¡Guau! ¿Puedes contar hasta cinco?',
          opciones: [{ en: "One, two, three, four, five!", es: "¡Uno, dos, tres, cuatro, cinco!" }, { en: "Yes, I can!", es: "¡Sí, puedo!" }, { en: "Let me try!", es: "¡Déjame intentar!" }] },
        { dice: 'Very good! How many carrots do I have?', diceEs: '¡Muy bien! ¿Cuántas zanahorias tengo?',
          opciones: [{ en: "Three!", es: "¡Tres!" }, { en: "Six!", es: "¡Seis!" }, { en: "Ten!", es: "¡Diez!" }] },
        { dice: 'You are so smart. Bye!', diceEs: 'Eres muy listo. ¡Adiós!',
          opciones: [{ en: "Bye Tomi!", es: "¡Adiós, Tomi!" }, { en: "See you!", es: "¡Nos vemos!" }, { en: "Thank you!", es: "¡Gracias!" }] }
      ]
    }
  },

  {
    id: 'familia', titulo: 'Mi familia', emoji: 'family', color: 'rosa',
    saludo: '¡Vamos a hablar de tu familia!',
    palabras: [
      { en: 'mom',     es: 'mamá',    art: 'girl',   frase: 'I love my mom.',        fraseEs: 'Quiero a mi mamá.' },
      { en: 'dad',     es: 'papá',    art: 'boy',    frase: 'My dad is tall.',       fraseEs: 'Mi papá es alto.' },
      { en: 'sister',  es: 'hermana', art: 'girl',   frase: 'My sister is small.',   fraseEs: 'Mi hermana es pequeña.' },
      { en: 'brother', es: 'hermano', art: 'boy',    frase: 'I play with my brother.',fraseEs:'Juego con mi hermano.' },
      { en: 'baby',    es: 'bebé',    art: 'toy',    frase: 'The baby is happy.',    fraseEs: 'El bebé está feliz.' },
      { en: 'family',  es: 'familia', art: 'family', frase: 'This is my family.',    fraseEs: 'Esta es mi familia.' },
      { en: 'friend',  es: 'amigo',   art: 'boy',    frase: 'He is my friend.',      fraseEs: 'Él es mi amigo.' },
      { en: 'home',    es: 'casa',    art: 'house',  frase: 'I am at home.',         fraseEs: 'Estoy en casa.' },
      { en: "grandma", es: "abuela", art: "girl", frase: "I love my grandma.", fraseEs: "Quiero a mi abuela." },
      { en: "grandpa", es: "abuelo", art: "boy", frase: "My grandpa is funny.", fraseEs: "Mi abuelo es gracioso." },
      { en: "pet dog", es: "perrito", art: "dog", frase: "Our pet dog is small.", fraseEs: "Nuestro perrito es pequeño." },
      { en: "together", es: "juntos", art: "family", frase: "We are together.", fraseEs: "Estamos juntos." },
      { en: "love", es: "querer", art: "heart", frase: "I love you!", fraseEs: "¡Te quiero!" }
    ],
    charla: {
      quien: 'Ana', art: 'girl',
      pasos: [
        { dice: 'Hi! Do you have a brother?', diceEs: '¡Hola! ¿Tienes un hermano?',
          opciones: [{ en: "Yes, I do.", es: "Sí, tengo." }, { en: "No, I do not.", es: "No, no tengo." }, { en: "I have a sister.", es: "Tengo una hermana." }] },
        { dice: 'Nice! Who do you play with?', diceEs: '¡Qué bien! ¿Con quién juegas?',
          opciones: [{ en: "With my friend.", es: "Con mi amigo." }, { en: "With my sister.", es: "Con mi hermana." }, { en: "With my dog!", es: "¡Con mi perro!" }] },
        { dice: 'That is fun! Do you love your family?', diceEs: '¡Qué divertido! ¿Quieres a tu familia?',
          opciones: [{ en: "Yes, a lot!", es: "¡Sí, mucho!" }, { en: "Of course!", es: "¡Por supuesto!" }, { en: "I love them!", es: "¡Los quiero mucho!" }] },
        { dice: 'Me too. Say hi to them!', diceEs: 'Yo también. ¡Salúdalos de mi parte!',
          opciones: [{ en: "I will!", es: "¡Lo haré!" }, { en: "Okay!", es: "¡Está bien!" }, { en: "Bye Ana!", es: "¡Adiós, Ana!" }] }
      ]
    }
  },

  {
    id: 'comida', titulo: 'La comida', emoji: 'apple', color: 'naranja',
    saludo: '¡Tengo hambre! ¿Y tú?',
    palabras: [
      { en: 'apple',   es: 'manzana', art: 'apple',   frase: 'I eat an apple.',      fraseEs: 'Como una manzana.' },
      { en: 'banana',  es: 'banano',  art: 'banana',  frase: 'The banana is yellow.',fraseEs: 'El banano es amarillo.' },
      { en: 'bread',   es: 'pan',     art: 'bread',   frase: 'I like bread.',        fraseEs: 'Me gusta el pan.' },
      { en: 'milk',    es: 'leche',   art: 'milk',    frase: 'I drink milk.',        fraseEs: 'Tomo leche.' },
      { en: 'water',   es: 'agua',    art: 'water',   frase: 'I want water, please.',fraseEs: 'Quiero agua, por favor.' },
      { en: 'egg',     es: 'huevo',   art: 'egg',     frase: 'One egg, please.',     fraseEs: 'Un huevo, por favor.' },
      { en: 'cheese',  es: 'queso',   art: 'cheese',  frase: 'I love cheese!',       fraseEs: '¡Me encanta el queso!' },
      { en: 'rice',    es: 'arroz',   art: 'rice',    frase: 'We eat rice today.',   fraseEs: 'Hoy comemos arroz.' },
      { en: 'chicken', es: 'pollo',   art: 'chicken', frase: 'The chicken is hot.',  fraseEs: 'El pollo está caliente.' },
      { en: 'cake',    es: 'pastel',  art: 'cake',    frase: 'Happy birthday cake!', fraseEs: '¡Pastel de cumpleaños!' },
      { en: "apple juice", es: "jugo de manzana", art: "apple", frase: "I want apple juice.", fraseEs: "Quiero jugo de manzana." },
      { en: "breakfast", es: "desayuno", art: "egg", frase: "Breakfast is ready!", fraseEs: "¡El desayuno está listo!" },
      { en: "lunch", es: "almuerzo", art: "rice", frase: "Lunch is at one.", fraseEs: "El almuerzo es a la una." },
      { en: "dinner", es: "cena", art: "chicken", frase: "Dinner is ready.", fraseEs: "La cena está lista." },
      { en: "hungry", es: "con hambre", art: "eat", frase: "I am hungry!", fraseEs: "¡Tengo hambre!" },
      { en: "yummy", es: "rico", art: "cake", frase: "This is yummy!", fraseEs: "¡Esto está rico!" }
    ],
    charla: {
      quien: 'Chef Beto', art: 'bear',
      pasos: [
        { dice: 'Welcome! Are you hungry?', diceEs: '¡Bienvenido! ¿Tienes hambre?',
          opciones: [{ en: "Yes, I am!", es: "¡Sí, tengo!" }, { en: "A little bit.", es: "Un poquito." }, { en: "Very hungry!", es: "¡Mucha hambre!" }] },
        { dice: 'What do you want to eat?', diceEs: '¿Qué quieres comer?',
          opciones: [{ en: "Rice, please.", es: "Arroz, por favor." }, { en: "Chicken, please.", es: "Pollo, por favor." }, { en: "Bread, please.", es: "Pan, por favor." }] },
        { dice: 'Good choice! And to drink?', diceEs: '¡Buena elección! ¿Y de tomar?',
          opciones: [{ en: "Water, please.", es: "Agua, por favor." }, { en: "Milk, please.", es: "Leche, por favor." }, { en: "Just water.", es: "Solo agua." }] },
        { dice: 'Here you are. Enjoy your meal!', diceEs: 'Aquí tienes. ¡Buen provecho!',
          opciones: [{ en: "Thank you!", es: "¡Gracias!" }, { en: "Thanks a lot!", es: "¡Muchas gracias!" }, { en: "It looks great!", es: "¡Se ve buenísimo!" }] }
      ]
    }
  },

  {
    id: 'casa', titulo: 'Mi casa', emoji: 'house', color: 'mora',
    saludo: '¡Bienvenido a casa!',
    palabras: [
      { en: 'house',  es: 'casa',      art: 'house',  frase: 'This is my house.',     fraseEs: 'Esta es mi casa.' },
      { en: 'door',   es: 'puerta',    art: 'door',   frase: 'Open the door.',        fraseEs: 'Abre la puerta.' },
      { en: 'window', es: 'ventana',   art: 'window', frase: 'Look out the window.',  fraseEs: 'Mira por la ventana.' },
      { en: 'chair',  es: 'silla',     art: 'chair',  frase: 'Sit on the chair.',     fraseEs: 'Siéntate en la silla.' },
      { en: 'table',  es: 'mesa',      art: 'table',  frase: 'It is on the table.',   fraseEs: 'Está sobre la mesa.' },
      { en: 'bed',    es: 'cama',      art: 'bed',    frase: 'I sleep in my bed.',    fraseEs: 'Duermo en mi cama.' },
      { en: 'key',    es: 'llave',     art: 'key',    frase: 'Where is the key?',     fraseEs: '¿Dónde está la llave?' },
      { en: 'clock',  es: 'reloj',     art: 'clock',  frase: 'Look at the clock.',    fraseEs: 'Mira el reloj.' },
      { en: 'phone',  es: 'teléfono',  art: 'phone',  frase: 'That is my phone.',     fraseEs: 'Ese es mi teléfono.' },
      { en: "room", es: "cuarto", art: "bed", frase: "This is my room.", fraseEs: "Este es mi cuarto." },
      { en: "kitchen", es: "cocina", art: "table", frase: "Mom is in the kitchen.", fraseEs: "Mamá está en la cocina." },
      { en: "light", es: "luz", art: "sun", frase: "Turn on the light.", fraseEs: "Enciende la luz." },
      { en: "toy box", es: "caja de juguetes", art: "gift", frase: "My toys are in the box.", fraseEs: "Mis juguetes están en la caja." }
    ],
    charla: {
      quien: 'Milo otra vez', art: 'cat',
      pasos: [
        { dice: 'Can I come in?', diceEs: '¿Puedo pasar?',
          opciones: [{ en: "Yes, come in!", es: "¡Sí, pasa!" }, { en: "Of course!", es: "¡Por supuesto!" }, { en: "Welcome!", es: "¡Bienvenido!" }] },
        { dice: 'Thank you! Where can I sit?', diceEs: '¡Gracias! ¿Dónde me siento?',
          opciones: [{ en: "On the chair.", es: "En la silla." }, { en: "On the bed.", es: "En la cama." }, { en: "Here, please.", es: "Aquí, por favor." }] },
        { dice: 'Nice house! Is that your phone?', diceEs: '¡Bonita casa! ¿Ese es tu teléfono?',
          opciones: [{ en: "Yes, it is.", es: "Sí, lo es." }, { en: "No, it is my mom’s.", es: "No, es de mi mamá." }, { en: "It is my dad’s.", es: "Es de mi papá." }] },
        { dice: 'Cool. Thank you for the visit!', diceEs: 'Genial. ¡Gracias por la visita!',
          opciones: [{ en: "You are welcome!", es: "¡De nada!" }, { en: "Come again!", es: "¡Vuelve pronto!" }, { en: "Bye Milo!", es: "¡Adiós, Milo!" }] }
      ]
    }
  },

  {
    id: 'escuela', titulo: 'La escuela', emoji: 'pencil', color: 'amarillo',
    saludo: '¡Vamos a la escuela!',
    palabras: [
      { en: 'book',     es: 'libro',    art: 'book',     frase: 'I read a book.',       fraseEs: 'Leo un libro.' },
      { en: 'pencil',   es: 'lápiz',    art: 'pencil',   frase: 'This is my pencil.',   fraseEs: 'Este es mi lápiz.' },
      { en: 'bag',      es: 'mochila',  art: 'bag',      frase: 'My bag is heavy.',     fraseEs: 'Mi mochila pesa.' },
      { en: 'scissors', es: 'tijeras',  art: 'scissors', frase: 'Be careful, scissors!',fraseEs: '¡Cuidado, tijeras!' },
      { en: 'teacher',  es: 'maestra',  art: 'girl',     frase: 'My teacher is nice.',  fraseEs: 'Mi maestra es amable.' },
      { en: 'friend',   es: 'amigo',    art: 'boy',      frase: 'She is my friend.',    fraseEs: 'Ella es mi amiga.' },
      { en: 'ball',     es: 'pelota',   art: 'ball',     frase: 'Let us play ball!',    fraseEs: '¡Juguemos a la pelota!' },
      { en: 'bus',      es: 'bus',      art: 'bus',      frase: 'I go by bus.',         fraseEs: 'Voy en bus.' },
      { en: "desk", es: "pupitre", art: "table", frase: "My desk is clean.", fraseEs: "Mi pupitre está limpio." },
      { en: "school", es: "escuela", art: "house", frase: "I go to school.", fraseEs: "Voy a la escuela." },
      { en: "paper", es: "papel", art: "book", frase: "I draw on paper.", fraseEs: "Dibujo en papel." },
      { en: "please", es: "por favor", art: "heart", frase: "Please and thank you.", fraseEs: "Por favor y gracias." },
      { en: "write", es: "escribir", art: "pencil", frase: "I write my name.", fraseEs: "Escribo mi nombre." }
    ],
    charla: {
      quien: 'La maestra Sara', art: 'girl',
      pasos: [
        { dice: 'Good morning! How are you today?', diceEs: '¡Buenos días! ¿Cómo estás hoy?',
          opciones: [{ en: "I am fine, thank you.", es: "Estoy bien, gracias." }, { en: "I am happy!", es: "¡Estoy feliz!" }, { en: "Very good!", es: "¡Muy bien!" }] },
        { dice: 'Do you have your book?', diceEs: '¿Tienes tu libro?',
          opciones: [{ en: "Yes, here it is.", es: "Sí, aquí está." }, { en: "Yes, I do.", es: "Sí, tengo." }, { en: "It is in my bag.", es: "Está en mi mochila." }] },
        { dice: 'Perfect. Can you read this word?', diceEs: 'Perfecto. ¿Puedes leer esta palabra?',
          opciones: [{ en: "Yes, I can!", es: "¡Sí, puedo!" }, { en: "Let me try.", es: "Déjame intentar." }, { en: "Help me, please.", es: "Ayúdame, por favor." }] },
        { dice: 'Very well done! See you tomorrow.', diceEs: '¡Muy bien hecho! Hasta mañana.',
          opciones: [{ en: "Bye teacher!", es: "¡Adiós, maestra!" }, { en: "See you tomorrow!", es: "¡Hasta mañana!" }, { en: "Thank you!", es: "¡Gracias!" }] }
      ]
    }
  },

  {
    id: 'cuerpo', titulo: 'Mi cuerpo', emoji: 'hand', color: 'rojo',
    saludo: '¡Toca tu nariz! Ahora en inglés.',
    palabras: [
      { en: 'hand',  es: 'mano',   art: 'hand',  frase: 'Wash your hands.',   fraseEs: 'Lávate las manos.' },
      { en: 'eye',   es: 'ojo',    art: 'eye',   frase: 'Close your eyes.',   fraseEs: 'Cierra los ojos.' },
      { en: 'head',  es: 'cabeza', art: 'boy',   frase: 'Touch your head.',   fraseEs: 'Tócate la cabeza.' },
      { en: 'foot',  es: 'pie',    art: 'shoe',  frase: 'My foot is small.',  fraseEs: 'Mi pie es pequeño.' },
      { en: 'happy', es: 'feliz',  art: 'sun',   frase: 'I am very happy!',   fraseEs: '¡Estoy muy feliz!' },
      { en: 'sad',   es: 'triste', art: 'rain',  frase: 'Do not be sad.',     fraseEs: 'No estés triste.' },
      { en: 'big',   es: 'grande', art: 'elephant', frase: 'The elephant is big.', fraseEs: 'El elefante es grande.' },
      { en: 'small', es: 'pequeño',art: 'bird',  frase: 'The bird is small.', fraseEs: 'El pájaro es pequeño.' },
      { en: "nose", es: "nariz", art: "boy", frase: "Touch your nose!", fraseEs: "¡Tócate la nariz!" },
      { en: "mouth", es: "boca", art: "sing", frase: "Open your mouth.", fraseEs: "Abre la boca." },
      { en: "ear", es: "oreja", art: "rabbit", frase: "I hear with my ears.", fraseEs: "Oigo con las orejas." },
      { en: "tired", es: "cansado", art: "sleep", frase: "I am tired.", fraseEs: "Estoy cansado." },
      { en: "sick", es: "enfermo", art: "rain", frase: "I feel sick.", fraseEs: "Me siento enfermo." }
    ],
    charla: {
      quien: 'Doctor Oso', art: 'bear',
      pasos: [
        { dice: 'Hello! How do you feel today?', diceEs: '¡Hola! ¿Cómo te sientes hoy?',
          opciones: [{ en: "I am happy!", es: "¡Estoy feliz!" }, { en: "I am fine.", es: "Estoy bien." }, { en: "A little sad.", es: "Un poco triste." }] },
        { dice: 'Show me your hands, please.', diceEs: 'Muéstrame las manos, por favor.',
          opciones: [{ en: "Here they are!", es: "¡Aquí están!" }, { en: "Okay!", es: "¡Está bien!" }, { en: "Look!", es: "¡Mira!" }] },
        { dice: 'Very clean! Can you close your eyes?', diceEs: '¡Muy limpias! ¿Puedes cerrar los ojos?',
          opciones: [{ en: "Yes, I can.", es: "Sí, puedo." }, { en: "Like this?", es: "¿Así?" }, { en: "Done!", es: "¡Listo!" }] },
        { dice: 'You are very healthy. Well done!', diceEs: 'Estás muy sano. ¡Muy bien!',
          opciones: [{ en: "Thank you doctor!", es: "¡Gracias, doctor!" }, { en: "Yay!", es: "¡Bien!" }, { en: "Bye!", es: "¡Adiós!" }] }
      ]
    }
  },

  {
    id: 'naturaleza', titulo: 'Afuera', emoji: 'tree', color: 'verde',
    saludo: '¡Vamos a jugar afuera!',
    palabras: [
      { en: 'sun',    es: 'sol',     art: 'sun',    frase: 'The sun is hot.',      fraseEs: 'El sol está caliente.' },
      { en: 'moon',   es: 'luna',    art: 'moon',   frase: 'Good night, moon.',    fraseEs: 'Buenas noches, luna.' },
      { en: 'star',   es: 'estrella',art: 'star',   frase: 'I see a star.',        fraseEs: 'Veo una estrella.' },
      { en: 'cloud',  es: 'nube',    art: 'cloud',  frase: 'The cloud is white.',  fraseEs: 'La nube es blanca.' },
      { en: 'rain',   es: 'lluvia',  art: 'rain',   frase: 'I like the rain.',     fraseEs: 'Me gusta la lluvia.' },
      { en: 'tree',   es: 'árbol',   art: 'tree',   frase: 'The tree is tall.',    fraseEs: 'El árbol es alto.' },
      { en: 'flower', es: 'flor',    art: 'flower', frase: 'A flower for you.',    fraseEs: 'Una flor para ti.' },
      { en: 'water',  es: 'agua',    art: 'water',  frase: 'The water is cold.',   fraseEs: 'El agua está fría.' },
      { en: "sky", es: "cielo", art: "cloud", frase: "The sky is blue.", fraseEs: "El cielo es azul." },
      { en: "grass", es: "pasto", art: "tree", frase: "The grass is green.", fraseEs: "El pasto es verde." },
      { en: "sea", es: "mar", art: "boat", frase: "The sea is big.", fraseEs: "El mar es grande." },
      { en: "bird song", es: "canto del pájaro", art: "bird", frase: "I hear a bird song.", fraseEs: "Oigo el canto de un pájaro." },
      { en: "outside", es: "afuera", art: "run", frase: "Let us go outside!", fraseEs: "¡Vamos afuera!" }
    ],
    charla: {
      quien: 'Rana Renata', art: 'frog',
      pasos: [
        { dice: 'Hi! Look at the sky. What do you see?', diceEs: '¡Hola! Mira el cielo. ¿Qué ves?',
          opciones: [{ en: "I see the sun!", es: "¡Veo el sol!" }, { en: "I see a cloud.", es: "Veo una nube." }, { en: "I see a bird!", es: "¡Veo un pájaro!" }] },
        { dice: 'Do you like the rain?', diceEs: '¿Te gusta la lluvia?',
          opciones: [{ en: "Yes, I do!", es: "¡Sí, me gusta!" }, { en: "No, I do not.", es: "No, no me gusta." }, { en: "A little.", es: "Un poquito." }] },
        { dice: 'Let us sit under the tree!', diceEs: '¡Sentémonos bajo el árbol!',
          opciones: [{ en: "Good idea!", es: "¡Buena idea!" }, { en: "Yes, let us go!", es: "¡Sí, vamos!" }, { en: "I am coming!", es: "¡Ya voy!" }] },
        { dice: 'What a nice day. Thank you!', diceEs: 'Qué lindo día. ¡Gracias!',
          opciones: [{ en: "Thank you too!", es: "¡Gracias a ti!" }, { en: "See you Renata!", es: "¡Nos vemos, Renata!" }, { en: "Bye bye!", es: "¡Chao!" }] }
      ]
    }
  },

  {
    id: 'juguetes', titulo: 'Mis cosas', emoji: 'toy', color: 'mora',
    saludo: '¡Mira todas mis cosas!',
    palabras: [
      { en: 'toy',     es: 'juguete', art: 'toy',     frase: 'This is my toy.',      fraseEs: 'Este es mi juguete.' },
      { en: 'ball',    es: 'pelota',  art: 'ball',    frase: 'Throw the ball!',      fraseEs: '¡Lanza la pelota!' },
      { en: 'car',     es: 'carro',   art: 'car',     frase: 'My car is red.',       fraseEs: 'Mi carro es rojo.' },
      { en: 'bike',    es: 'bicicleta',art:'bike',    frase: 'I ride my bike.',      fraseEs: 'Monto mi bicicleta.' },
      { en: 'balloon', es: 'globo',   art: 'balloon', frase: 'A red balloon!',       fraseEs: '¡Un globo rojo!' },
      { en: 'gift',    es: 'regalo',  art: 'gift',    frase: 'A gift for me?',       fraseEs: '¿Un regalo para mí?' },
      { en: 'shirt',   es: 'camisa',  art: 'shirt',   frase: 'My shirt is blue.',    fraseEs: 'Mi camisa es azul.' },
      { en: 'shoe',    es: 'zapato',  art: 'shoe',    frase: 'Put on your shoes.',   fraseEs: 'Ponte los zapatos.' },
      { en: 'hat',     es: 'gorra',   art: 'hat',     frase: 'I like your hat!',     fraseEs: '¡Me gusta tu gorra!' },
      { en: 'heart',   es: 'corazón', art: 'heart',   frase: 'I love you!',          fraseEs: '¡Te quiero!' },
      { en: "doll", es: "muñeca", art: "toy", frase: "This is my doll.", fraseEs: "Esta es mi muñeca." },
      { en: "book", es: "libro", art: "book", frase: "I read my book.", fraseEs: "Leo mi libro." },
      { en: "game", es: "juego", art: "play", frase: "Let us play a game!", fraseEs: "¡Juguemos un juego!" },
      { en: "my friend", es: "mi amigo", art: "boy", frase: "He is my friend.", fraseEs: "Él es mi amigo." },
      { en: "mine", es: "mío", art: "heart", frase: "That is mine!", fraseEs: "¡Eso es mío!" }
    ],
    charla: {
      quien: 'Tu amigo Leo', art: 'lion',
      pasos: [
        { dice: 'Wow! Is this your toy?', diceEs: '¡Guau! ¿Este es tu juguete?',
          opciones: [{ en: "Yes, it is mine.", es: "Sí, es mío." }, { en: "Yes, I love it.", es: "Sí, me encanta." }, { en: "It is my favourite!", es: "¡Es mi favorito!" }] },
        { dice: 'Can I play with you?', diceEs: '¿Puedo jugar contigo?',
          opciones: [{ en: "Yes, of course!", es: "¡Sí, claro!" }, { en: "Sure!", es: "¡Claro!" }, { en: "Let us play!", es: "¡Juguemos!" }] },
        { dice: 'Thank you! What is your favourite colour?', diceEs: '¡Gracias! ¿Cuál es tu color favorito?',
          opciones: [{ en: "Blue!", es: "¡Azul!" }, { en: "Red!", es: "¡Rojo!" }, { en: "Green!", es: "¡Verde!" }] },
        { dice: 'You are a good friend. Bye!', diceEs: 'Eres un buen amigo. ¡Adiós!',
          opciones: [{ en: "Bye Leo!", es: "¡Adiós, Leo!" }, { en: "See you soon!", es: "¡Hasta pronto!" }, { en: "Thank you!", es: "¡Gracias!" }] }
      ]
    }
  },
  {
    id: "numerosdos", titulo: "Contar más", emoji: "num15", color: "azul",
    saludo: "¡Ahora contamos hasta veinte!",
    palabras: [
      { en: "eleven", es: "once", art: "num11", frase: "Eleven red apples.", fraseEs: "Once manzanas rojas." },
      { en: "twelve", es: "doce", art: "num12", frase: "Twelve months a year.", fraseEs: "Doce meses al año." },
      { en: "thirteen", es: "trece", art: "num13", frase: "Thirteen little stars.", fraseEs: "Trece estrellitas." },
      { en: "fourteen", es: "catorce", art: "num14", frase: "Fourteen blue balls.", fraseEs: "Catorce pelotas azules." },
      { en: "fifteen", es: "quince", art: "num15", frase: "I count to fifteen.", fraseEs: "Cuento hasta quince." },
      { en: "sixteen", es: "dieciséis", art: "num16", frase: "Sixteen green frogs.", fraseEs: "Dieciséis ranas verdes." },
      { en: "seventeen", es: "diecisiete", art: "num17", frase: "Seventeen yellow ducks.", fraseEs: "Diecisiete patos amarillos." },
      { en: "eighteen", es: "dieciocho", art: "num18", frase: "Eighteen small fish.", fraseEs: "Dieciocho peces pequeños." },
      { en: "nineteen", es: "diecinueve", art: "num19", frase: "Nineteen big trees.", fraseEs: "Diecinueve árboles grandes." },
      { en: "twenty", es: "veinte", art: "num20", frase: "I can count to twenty!", fraseEs: "¡Puedo contar hasta veinte!" }
    ],
    charla: {
      quien: "Tomi otra vez", art: "rabbit",
      pasos: [
        { dice: "Hello again! Can you count to twenty?", diceEs: "¡Hola otra vez! ¿Puedes contar hasta veinte?",
          opciones: [{ en: "Yes, I can!", es: "¡Sí, puedo!" }, { en: "Let me try!", es: "¡Déjame intentar!" }, { en: "It is easy!", es: "¡Es fácil!" }] },
        { dice: "How many carrots are here?", diceEs: "¿Cuántas zanahorias hay aquí?",
          opciones: [{ en: "Twelve!", es: "¡Doce!" }, { en: "Fifteen!", es: "¡Quince!" }, { en: "Twenty!", es: "¡Veinte!" }] },
        { dice: "Very good! How old is your sister?", diceEs: "¡Muy bien! ¿Cuántos años tiene tu hermana?",
          opciones: [{ en: "She is eleven.", es: "Tiene once." }, { en: "She is thirteen.", es: "Tiene trece." }, { en: "I do not have a sister.", es: "No tengo hermana." }] },
        { dice: "Thank you! You count very well.", diceEs: "¡Gracias! Cuentas muy bien.",
          opciones: [{ en: "Thank you!", es: "¡Gracias!" }, { en: "Bye Tomi!", es: "¡Adiós, Tomi!" }, { en: "See you!", es: "¡Nos vemos!" }] }
      ]
    }
  },
  {
    id: "ropa", titulo: "Mi ropa", emoji: "shirt", color: "mora",
    saludo: "¡Vamos a vestirnos!",
    palabras: [
      { en: "shirt", es: "camisa", art: "shirt", frase: "My shirt is blue.", fraseEs: "Mi camisa es azul." },
      { en: "pants", es: "pantalón", art: "pants", frase: "These pants are new.", fraseEs: "Este pantalón es nuevo." },
      { en: "dress", es: "vestido", art: "dress", frase: "What a pretty dress!", fraseEs: "¡Qué vestido tan lindo!" },
      { en: "jacket", es: "chaqueta", art: "jacket", frase: "Put on your jacket.", fraseEs: "Ponte la chaqueta." },
      { en: "shoes", es: "zapatos", art: "shoe", frase: "My shoes are red.", fraseEs: "Mis zapatos son rojos." },
      { en: "socks", es: "medias", art: "sock", frase: "Where are my socks?", fraseEs: "¿Dónde están mis medias?" },
      { en: "hat", es: "gorra", art: "hat", frase: "I like your hat!", fraseEs: "¡Me gusta tu gorra!" },
      { en: "bag", es: "mochila", art: "bag", frase: "My bag is heavy.", fraseEs: "Mi mochila pesa." }
    ],
    charla: {
      quien: "Mamá", art: "girl",
      pasos: [
        { dice: "Good morning! Are you ready?", diceEs: "¡Buenos días! ¿Estás listo?",
          opciones: [{ en: "Not yet!", es: "¡Todavía no!" }, { en: "Yes, I am!", es: "¡Sí, estoy listo!" }, { en: "One minute!", es: "¡Un minuto!" }] },
        { dice: "Put on your shoes, please.", diceEs: "Ponte los zapatos, por favor.",
          opciones: [{ en: "Okay, mom!", es: "¡Está bien, mamá!" }, { en: "Where are they?", es: "¿Dónde están?" }, { en: "Yes, mom!", es: "¡Sí, mamá!" }] },
        { dice: "It is cold. Take your jacket.", diceEs: "Hace frío. Lleva tu chaqueta.",
          opciones: [{ en: "Thank you!", es: "¡Gracias!" }, { en: "The blue one?", es: "¿La azul?" }, { en: "Okay!", es: "¡Está bien!" }] },
        { dice: "Perfect. Have a nice day!", diceEs: "Perfecto. ¡Que tengas buen día!",
          opciones: [{ en: "Bye mom!", es: "¡Adiós, mamá!" }, { en: "You too!", es: "¡Tú también!" }, { en: "See you later!", es: "¡Hasta luego!" }] }
      ]
    }
  },
  {
    id: "clima", titulo: "¿Qué tiempo hace?", emoji: "cloud", color: "azul",
    saludo: "¡Mira por la ventana!",
    palabras: [
      { en: "sunny", es: "soleado", art: "sun", frase: "It is sunny today!", fraseEs: "¡Hoy está soleado!" },
      { en: "rainy", es: "lluvioso", art: "rain", frase: "It is a rainy day.", fraseEs: "Es un día lluvioso." },
      { en: "cloudy", es: "nublado", art: "cloud", frase: "The sky is cloudy.", fraseEs: "El cielo está nublado." },
      { en: "windy", es: "ventoso", art: "wind", frase: "It is very windy.", fraseEs: "Hace mucho viento." },
      { en: "snow", es: "nieve", art: "snow", frase: "Look at the snow!", fraseEs: "¡Mira la nieve!" },
      { en: "hot", es: "caliente", art: "hot", frase: "It is hot today.", fraseEs: "Hoy hace calor." },
      { en: "cold", es: "frío", art: "cold", frase: "It is cold outside.", fraseEs: "Hace frío afuera." },
      { en: "night", es: "noche", art: "night", frase: "Good night!", fraseEs: "¡Buenas noches!" },
      { en: "day", es: "día", art: "day", frase: "Have a nice day!", fraseEs: "¡Que tengas buen día!" }
    ],
    charla: {
      quien: "Renata la rana", art: "frog",
      pasos: [
        { dice: "Good morning! How is the weather?", diceEs: "¡Buenos días! ¿Qué tiempo hace?",
          opciones: [{ en: "It is sunny!", es: "¡Está soleado!" }, { en: "It is rainy.", es: "Está lluvioso." }, { en: "It is cloudy.", es: "Está nublado." }] },
        { dice: "Is it hot or cold?", diceEs: "¿Hace calor o frío?",
          opciones: [{ en: "It is hot!", es: "¡Hace calor!" }, { en: "It is cold.", es: "Hace frío." }, { en: "Just right!", es: "¡Está perfecto!" }] },
        { dice: "Do you want to play outside?", diceEs: "¿Quieres jugar afuera?",
          opciones: [{ en: "Yes, let us go!", es: "¡Sí, vamos!" }, { en: "Maybe later.", es: "Tal vez después." }, { en: "Of course!", es: "¡Por supuesto!" }] },
        { dice: "What a beautiful day. Bye!", diceEs: "Qué día tan bonito. ¡Adiós!",
          opciones: [{ en: "Bye Renata!", es: "¡Adiós, Renata!" }, { en: "See you!", es: "¡Nos vemos!" }, { en: "Thank you!", es: "¡Gracias!" }] }
      ]
    }
  },
  {
    id: "acciones", titulo: "¿Qué hago?", emoji: "run", color: "verde",
    saludo: "¡A movernos!",
    palabras: [
      { en: "run", es: "correr", art: "run", frase: "I run very fast!", fraseEs: "¡Corro muy rápido!" },
      { en: "jump", es: "saltar", art: "jump", frase: "Can you jump?", fraseEs: "¿Puedes saltar?" },
      { en: "sleep", es: "dormir", art: "sleep", frase: "I sleep at night.", fraseEs: "Duermo de noche." },
      { en: "eat", es: "comer", art: "eat", frase: "I eat an apple.", fraseEs: "Como una manzana." },
      { en: "play", es: "jugar", art: "play", frase: "Let us play!", fraseEs: "¡Juguemos!" },
      { en: "read", es: "leer", art: "read", frase: "I read a book.", fraseEs: "Leo un libro." },
      { en: "sing", es: "cantar", art: "sing", frase: "I sing a song.", fraseEs: "Canto una canción." },
      { en: "dance", es: "bailar", art: "dance", frase: "I like to dance!", fraseEs: "¡Me gusta bailar!" },
      { en: "walk", es: "caminar", art: "boy", frase: "We walk to school.", fraseEs: "Caminamos a la escuela." },
      { en: "drink", es: "beber", art: "water", frase: "I drink water.", fraseEs: "Tomo agua." }
    ],
    charla: {
      quien: "Leo el león", art: "lion",
      pasos: [
        { dice: "Hi! What do you like to do?", diceEs: "¡Hola! ¿Qué te gusta hacer?",
          opciones: [{ en: "I like to play!", es: "¡Me gusta jugar!" }, { en: "I like to run!", es: "¡Me gusta correr!" }, { en: "I like to sing!", es: "¡Me gusta cantar!" }] },
        { dice: "Can you jump like me?", diceEs: "¿Puedes saltar como yo?",
          opciones: [{ en: "Yes, look!", es: "¡Sí, mira!" }, { en: "I can try!", es: "¡Puedo intentar!" }, { en: "Of course!", es: "¡Por supuesto!" }] },
        { dice: "Wow! Are you tired now?", diceEs: "¡Guau! ¿Estás cansado ahora?",
          opciones: [{ en: "A little.", es: "Un poquito." }, { en: "No, I am fine!", es: "¡No, estoy bien!" }, { en: "Yes, very!", es: "¡Sí, mucho!" }] },
        { dice: "Let us rest. Good job!", diceEs: "Descansemos. ¡Buen trabajo!",
          opciones: [{ en: "Thank you Leo!", es: "¡Gracias, Leo!" }, { en: "That was fun!", es: "¡Fue divertido!" }, { en: "Bye!", es: "¡Adiós!" }] }
      ]
    }
  },
  {
    id: "opuestos", titulo: "Uno y su contrario", emoji: "up", color: "rojo",
    saludo: "¡Grande y pequeño, arriba y abajo!",
    palabras: [
      { en: "big", es: "grande", art: "elephant", frase: "The elephant is big.", fraseEs: "El elefante es grande." },
      { en: "small", es: "pequeño", art: "bird", frase: "The bird is small.", fraseEs: "El pájaro es pequeño." },
      { en: "up", es: "arriba", art: "up", frase: "Look up!", fraseEs: "¡Mira arriba!" },
      { en: "down", es: "abajo", art: "down", frase: "Sit down, please.", fraseEs: "Siéntate, por favor." },
      { en: "open", es: "abierto", art: "open", frase: "The door is open.", fraseEs: "La puerta está abierta." },
      { en: "closed", es: "cerrado", art: "closed", frase: "The door is closed.", fraseEs: "La puerta está cerrada." },
      { en: "fast", es: "rápido", art: "fast", frase: "The car is fast.", fraseEs: "El carro es rápido." },
      { en: "slow", es: "lento", art: "slow", frase: "The turtle is slow.", fraseEs: "La tortuga es lenta." },
      { en: "happy", es: "feliz", art: "sun", frase: "I am happy today!", fraseEs: "¡Hoy estoy feliz!" },
      { en: "sad", es: "triste", art: "rain", frase: "Do not be sad.", fraseEs: "No estés triste." }
    ],
    charla: {
      quien: "Milo el gato", art: "cat",
      pasos: [
        { dice: "Look at me! Am I big or small?", diceEs: "¡Mírame! ¿Soy grande o pequeño?",
          opciones: [{ en: "You are small!", es: "¡Eres pequeño!" }, { en: "You are big!", es: "¡Eres grande!" }, { en: "Just right!", es: "¡Perfecto!" }] },
        { dice: "Is the door open or closed?", diceEs: "¿La puerta está abierta o cerrada?",
          opciones: [{ en: "It is open.", es: "Está abierta." }, { en: "It is closed.", es: "Está cerrada." }, { en: "I do not know.", es: "No sé." }] },
        { dice: "Are you happy or sad today?", diceEs: "¿Estás feliz o triste hoy?",
          opciones: [{ en: "I am happy!", es: "¡Estoy feliz!" }, { en: "A little sad.", es: "Un poco triste." }, { en: "Very happy!", es: "¡Muy feliz!" }] },
        { dice: "Good! Me too. See you!", diceEs: "¡Bien! Yo también. ¡Nos vemos!",
          opciones: [{ en: "Bye Milo!", es: "¡Adiós, Milo!" }, { en: "See you soon!", es: "¡Hasta pronto!" }, { en: "Thank you!", es: "¡Gracias!" }] }
      ]
    }
  },
  {
    id: "transporte", titulo: "¡A viajar!", emoji: "car", color: "naranja",
    saludo: "¿En qué vamos a ir?",
    palabras: [
      { en: "car", es: "carro", art: "car", frase: "My car is red.", fraseEs: "Mi carro es rojo." },
      { en: "bus", es: "bus", art: "bus", frase: "I go by bus.", fraseEs: "Voy en bus." },
      { en: "bike", es: "bicicleta", art: "bike", frase: "I ride my bike.", fraseEs: "Monto mi bicicleta." },
      { en: "train", es: "tren", art: "train", frase: "The train is long.", fraseEs: "El tren es largo." },
      { en: "plane", es: "avión", art: "plane", frase: "The plane flies high.", fraseEs: "El avión vuela alto." },
      { en: "boat", es: "barco", art: "boat", frase: "The boat is on the sea.", fraseEs: "El barco está en el mar." },
      { en: "street", es: "calle", art: "house", frase: "Look at the street.", fraseEs: "Mira la calle." },
      { en: "fast", es: "rápido", art: "fast", frase: "The train is fast!", fraseEs: "¡El tren es rápido!" }
    ],
    charla: {
      quien: "Beto el oso", art: "bear",
      pasos: [
        { dice: "Hello! Where do you want to go?", diceEs: "¡Hola! ¿A dónde quieres ir?",
          opciones: [{ en: "To the park!", es: "¡Al parque!" }, { en: "To school!", es: "¡A la escuela!" }, { en: "To my house!", es: "¡A mi casa!" }] },
        { dice: "How do you want to go?", diceEs: "¿Cómo quieres ir?",
          opciones: [{ en: "By car!", es: "¡En carro!" }, { en: "By bus!", es: "¡En bus!" }, { en: "By bike!", es: "¡En bicicleta!" }] },
        { dice: "Great! Are you ready?", diceEs: "¡Genial! ¿Estás listo?",
          opciones: [{ en: "Yes, let us go!", es: "¡Sí, vamos!" }, { en: "One minute!", es: "¡Un minuto!" }, { en: "I am ready!", es: "¡Estoy listo!" }] },
        { dice: "Here we go! Hold on!", diceEs: "¡Allá vamos! ¡Agárrate!",
          opciones: [{ en: "This is fun!", es: "¡Qué divertido!" }, { en: "Wheee!", es: "¡Yupi!" }, { en: "Thank you Beto!", es: "¡Gracias, Beto!" }] }
      ]
    }
  }
];

/* Frases que se oyen todo el rato y no pertenecen a un solo mundo */
const FRASES_BASE = [
  { en: 'Hello!',          es: '¡Hola!' },
  { en: 'Goodbye!',        es: '¡Adiós!' },
  { en: 'Please.',         es: 'Por favor.' },
  { en: 'Thank you!',      es: '¡Gracias!' },
  { en: 'Yes.',            es: 'Sí.' },
  { en: 'No.',             es: 'No.' },
  { en: 'My name is...',   es: 'Me llamo...' },
  { en: 'How are you?',    es: '¿Cómo estás?' },
  { en: 'I am fine.',      es: 'Estoy bien.' },
  { en: 'I like it!',      es: '¡Me gusta!' },
  { en: 'Look!',           es: '¡Mira!' },
  { en: 'Let us play!',    es: '¡Juguemos!' }
];

/* Lo que dice la app cuando el niño acierta. Variado, para que no canse. */
const PREMIOS = ['¡Muy bien!', '¡Perfecto!', '¡Excelente!', '¡Lo lograste!', '¡Genial!', '¡Bravo!', '¡Qué crack!', '¡Sigue así!'];
const ANIMOS  = ['Casi. ¡Otra vez!', 'Ups, inténtalo de nuevo', 'No pasa nada, prueba otra', 'Casi lo tienes'];
