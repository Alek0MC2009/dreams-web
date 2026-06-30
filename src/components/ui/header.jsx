//import { useState } from 'react'
// import { Button } from './button'
// import { englishTexts, spanishTexts, getCurrentLang } from '@/data/texts'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="bg-gray-700 text-white font-pixel text-3xl">
      <div className="flex justify-between">
        <ul className="flex gap-4 text-center w-screen justify-between p-2 mx-4 my-2">
          <li>
            <Link
              className="text-3xl hover:text-4xl hover:text-cyan-600"
              to="/"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="text-3xl hover:text-4xl hover:text-cyan-600"
              to="/demo-download"
            >
              DEMO
            </Link>
          </li>
          <li>
            <Link
              className="text-3xl hover:text-4xl hover:text-cyan-600"
              to="/team-page"
            >
              TEAM
            </Link>
          </li>
          <li>
            <Link className="text-3xl hover:text-4xl hover:text-cyan-600" to="">
              CONTACT
            </Link>
          </li>
          {/* Eliminamos el i18n por que es demasiado trabajo en una version */}
        </ul>
      </div>
    </header>
  )
}
