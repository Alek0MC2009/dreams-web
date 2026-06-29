export const englishTexts = {
  title: 'Dreams?',
  desc: 'What if you were in the dream world? What if... you were the chosen one to save the world that is "Dreams?"',
  navHeader: ['ABOUT', 'DEMO', 'TEAM', 'CONTACT'],
}

export const spanishTexts = {
  title: 'Dreams?',
  desc: '¿Qué pasaría si estuvieses en el mundo de los sueños? ¿Y si... tú fueses el elegido para salvar el mundo de "Dreams?"',
  navHeader: ['SOBRE EL JUEGO', 'DEMO', 'EQUIPO', 'CONTACTO'],
}

export function getCurrentLang(lang) {
  switch (lang) {
    case 'es':
      return spanishTexts

    case 'en':
    default:
      return englishTexts
  }
}
