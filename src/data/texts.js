const englishTexts = {
  title: 'Dreams?',
  // TODO: Update the text, it sucks!
  desc: 'What if you where in the dreams world? What if... you were the choosen to save the world\n that is "Dreams?"',
  navHeader: ['ABOUT', 'DEMO', 'TEAM', 'CONTACT'], // I use an array cuz it's easier to mantain
}

const spanishTexts = {
  title: 'Dreams?',
  desc: '¿Que pasaria si estuvieses en el mundo de los sueños?, ¿Que pasaria si... tu fueses el elegido para salvar el mundo?, eso es "Dreams?"',
  navHeader: ['SOBRE EL JUEGO', 'DEMO', 'EQUIPO', 'CONTACTO'],
}

function getCurrentLang(lang) {
  switch (lang) {
    case 'es':
      return spanishTexts
    case 'en':
      return englishTexts
  }
}
