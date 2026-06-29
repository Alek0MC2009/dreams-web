import { useState } from 'react'
import { Button } from './button'
import { englishTexts, spanishTexts, getCurrentLang } from '@/data/texts'
export default function Header() {
  const [language, setLanguage] = useState('en')

  const texts = getCurrentLang(language)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  return (
    <header className="bg-gray-700 text-white font-pixel text-3xl">
      <div className="flex justify-between">
        <ul className="flex gap-4 text-center w-screen justify-between p-2 mx-4 my-2">
          {texts.navHeader.map((item) => (
            <li key={item} className="cursor-pointer">
              <a href="#">{item}</a>
            </li>
          ))}

          <Button onClick={toggleLanguage}>
            {language === 'en' ? '🇪🇸' : '🇬🇧'}
          </Button>
        </ul>
      </div>
    </header>
  )
}
