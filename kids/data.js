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
      { en: 'rabbit',   es: 'conejo',   art: 'rabbit',   frase: 'The rabbit jumps.',      fraseEs: 'El conejo salta.' }
    ],
    charla: {
      quien: 'Un gato llamado Milo', art: 'cat',
      pasos: [
        { dice: 'Hello! I am Milo. What is your name?', diceEs: '¡Hola! Soy Milo. ¿Cómo te llamas?',
          opciones: ['My name is...', 'Hello Milo!', 'Hi!'] },
        { dice: 'Nice to meet you! Do you like animals?', diceEs: '¡Mucho gusto! ¿Te gustan los animales?',
          opciones: ['Yes, I do!', 'I love animals!', 'A little.'] },
        { dice: 'Me too! What is your favourite animal?', diceEs: '¡A mí también! ¿Cuál es tu animal favorito?',
          opciones: ['The dog!', 'The cat!', 'The elephant!'] },
        { dice: 'Great choice. See you later!', diceEs: 'Buena elección. ¡Hasta luego!',
          opciones: ['Bye Milo!', 'See you!', 'Goodbye!'] }
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
      { en: 'white',  es: 'blanco',   art: 'white',  frase: 'The milk is white.',   fraseEs: 'La leche es blanca.' }
    ],
    charla: {
      quien: 'Lía, la pintora', art: 'girl',
      pasos: [
        { dice: 'Hi! I am painting. What colour do you like?', diceEs: '¡Hola! Estoy pintando. ¿Qué color te gusta?',
          opciones: ['I like blue.', 'I like red.', 'I like green.'] },
        { dice: 'Nice! Look at my flower. What colour is it?', diceEs: '¡Bonito! Mira mi flor. ¿De qué color es?',
          opciones: ['It is pink.', 'It is yellow.', 'It is purple.'] },
        { dice: 'Yes! Do you want to paint with me?', diceEs: '¡Sí! ¿Quieres pintar conmigo?',
          opciones: ['Yes, please!', 'Of course!', 'Later, thank you.'] },
        { dice: 'Yay! Here is your brush.', diceEs: '¡Bien! Aquí tienes tu pincel.',
          opciones: ['Thank you!', 'Thanks Lia!', 'Cool!'] }
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
      { en: 'ten',   es: 'diez',   art: 'num10', frase: 'I can count to ten!',  fraseEs: '¡Puedo contar hasta diez!' }
    ],
    charla: {
      quien: 'Tomi el conejo', art: 'rabbit',
      pasos: [
        { dice: 'Hello! How old are you?', diceEs: '¡Hola! ¿Cuántos años tienes?',
          opciones: ['I am five.', 'I am seven.', 'I am nine.'] },
        { dice: 'Wow! Can you count to five?', diceEs: '¡Guau! ¿Puedes contar hasta cinco?',
          opciones: ['One, two, three, four, five!', 'Yes, I can!', 'Let me try!'] },
        { dice: 'Very good! How many carrots do I have?', diceEs: '¡Muy bien! ¿Cuántas zanahorias tengo?',
          opciones: ['Three!', 'Six!', 'Ten!'] },
        { dice: 'You are so smart. Bye!', diceEs: 'Eres muy listo. ¡Adiós!',
          opciones: ['Bye Tomi!', 'See you!', 'Thank you!'] }
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
      { en: 'home',    es: 'casa',    art: 'house',  frase: 'I am at home.',         fraseEs: 'Estoy en casa.' }
    ],
    charla: {
      quien: 'Ana', art: 'girl',
      pasos: [
        { dice: 'Hi! Do you have a brother?', diceEs: '¡Hola! ¿Tienes un hermano?',
          opciones: ['Yes, I do.', 'No, I do not.', 'I have a sister.'] },
        { dice: 'Nice! Who do you play with?', diceEs: '¡Qué bien! ¿Con quién juegas?',
          opciones: ['With my friend.', 'With my sister.', 'With my dog!'] },
        { dice: 'That is fun! Do you love your family?', diceEs: '¡Qué divertido! ¿Quieres a tu familia?',
          opciones: ['Yes, a lot!', 'Of course!', 'I love them!'] },
        { dice: 'Me too. Say hi to them!', diceEs: 'Yo también. ¡Salúdalos de mi parte!',
          opciones: ['I will!', 'Okay!', 'Bye Ana!'] }
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
      { en: 'cake',    es: 'pastel',  art: 'cake',    frase: 'Happy birthday cake!', fraseEs: '¡Pastel de cumpleaños!' }
    ],
    charla: {
      quien: 'Chef Beto', art: 'bear',
      pasos: [
        { dice: 'Welcome! Are you hungry?', diceEs: '¡Bienvenido! ¿Tienes hambre?',
          opciones: ['Yes, I am!', 'A little bit.', 'Very hungry!'] },
        { dice: 'What do you want to eat?', diceEs: '¿Qué quieres comer?',
          opciones: ['Rice, please.', 'Chicken, please.', 'Bread, please.'] },
        { dice: 'Good choice! And to drink?', diceEs: '¡Buena elección! ¿Y de tomar?',
          opciones: ['Water, please.', 'Milk, please.', 'Just water.'] },
        { dice: 'Here you are. Enjoy your meal!', diceEs: 'Aquí tienes. ¡Buen provecho!',
          opciones: ['Thank you!', 'Thanks a lot!', 'It looks great!'] }
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
      { en: 'phone',  es: 'teléfono',  art: 'phone',  frase: 'That is my phone.',     fraseEs: 'Ese es mi teléfono.' }
    ],
    charla: {
      quien: 'Milo otra vez', art: 'cat',
      pasos: [
        { dice: 'Can I come in?', diceEs: '¿Puedo pasar?',
          opciones: ['Yes, come in!', 'Of course!', 'Welcome!'] },
        { dice: 'Thank you! Where can I sit?', diceEs: '¡Gracias! ¿Dónde me siento?',
          opciones: ['On the chair.', 'On the bed.', 'Here, please.'] },
        { dice: 'Nice house! Is that your phone?', diceEs: '¡Bonita casa! ¿Ese es tu teléfono?',
          opciones: ['Yes, it is.', 'No, it is my mom’s.', 'It is my dad’s.'] },
        { dice: 'Cool. Thank you for the visit!', diceEs: 'Genial. ¡Gracias por la visita!',
          opciones: ['You are welcome!', 'Come again!', 'Bye Milo!'] }
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
      { en: 'bus',      es: 'bus',      art: 'bus',      frase: 'I go by bus.',         fraseEs: 'Voy en bus.' }
    ],
    charla: {
      quien: 'La maestra Sara', art: 'girl',
      pasos: [
        { dice: 'Good morning! How are you today?', diceEs: '¡Buenos días! ¿Cómo estás hoy?',
          opciones: ['I am fine, thank you.', 'I am happy!', 'Very good!'] },
        { dice: 'Do you have your book?', diceEs: '¿Tienes tu libro?',
          opciones: ['Yes, here it is.', 'Yes, I do.', 'It is in my bag.'] },
        { dice: 'Perfect. Can you read this word?', diceEs: 'Perfecto. ¿Puedes leer esta palabra?',
          opciones: ['Yes, I can!', 'Let me try.', 'Help me, please.'] },
        { dice: 'Very well done! See you tomorrow.', diceEs: '¡Muy bien hecho! Hasta mañana.',
          opciones: ['Bye teacher!', 'See you tomorrow!', 'Thank you!'] }
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
      { en: 'small', es: 'pequeño',art: 'bird',  frase: 'The bird is small.', fraseEs: 'El pájaro es pequeño.' }
    ],
    charla: {
      quien: 'Doctor Oso', art: 'bear',
      pasos: [
        { dice: 'Hello! How do you feel today?', diceEs: '¡Hola! ¿Cómo te sientes hoy?',
          opciones: ['I am happy!', 'I am fine.', 'A little sad.'] },
        { dice: 'Show me your hands, please.', diceEs: 'Muéstrame las manos, por favor.',
          opciones: ['Here they are!', 'Okay!', 'Look!'] },
        { dice: 'Very clean! Can you close your eyes?', diceEs: '¡Muy limpias! ¿Puedes cerrar los ojos?',
          opciones: ['Yes, I can.', 'Like this?', 'Done!'] },
        { dice: 'You are very healthy. Well done!', diceEs: 'Estás muy sano. ¡Muy bien!',
          opciones: ['Thank you doctor!', 'Yay!', 'Bye!'] }
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
      { en: 'water',  es: 'agua',    art: 'water',  frase: 'The water is cold.',   fraseEs: 'El agua está fría.' }
    ],
    charla: {
      quien: 'Rana Renata', art: 'frog',
      pasos: [
        { dice: 'Hi! Look at the sky. What do you see?', diceEs: '¡Hola! Mira el cielo. ¿Qué ves?',
          opciones: ['I see the sun!', 'I see a cloud.', 'I see a bird!'] },
        { dice: 'Do you like the rain?', diceEs: '¿Te gusta la lluvia?',
          opciones: ['Yes, I do!', 'No, I do not.', 'A little.'] },
        { dice: 'Let us sit under the tree!', diceEs: '¡Sentémonos bajo el árbol!',
          opciones: ['Good idea!', 'Yes, let us go!', 'I am coming!'] },
        { dice: 'What a nice day. Thank you!', diceEs: 'Qué lindo día. ¡Gracias!',
          opciones: ['Thank you too!', 'See you Renata!', 'Bye bye!'] }
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
      { en: 'heart',   es: 'corazón', art: 'heart',   frase: 'I love you!',          fraseEs: '¡Te quiero!' }
    ],
    charla: {
      quien: 'Tu amigo Leo', art: 'lion',
      pasos: [
        { dice: 'Wow! Is this your toy?', diceEs: '¡Guau! ¿Este es tu juguete?',
          opciones: ['Yes, it is mine.', 'Yes, I love it.', 'It is my favourite!'] },
        { dice: 'Can I play with you?', diceEs: '¿Puedo jugar contigo?',
          opciones: ['Yes, of course!', 'Sure!', 'Let us play!'] },
        { dice: 'Thank you! What is your favourite colour?', diceEs: '¡Gracias! ¿Cuál es tu color favorito?',
          opciones: ['Blue!', 'Red!', 'Green!'] },
        { dice: 'You are a good friend. Bye!', diceEs: 'Eres un buen amigo. ¡Adiós!',
          opciones: ['Bye Leo!', 'See you soon!', 'Thank you!'] }
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
