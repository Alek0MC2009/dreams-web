import { Button } from './button'
export default function Header() {
  function SwitchLang() {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {}
  }
  return (
    <header className="bg-gray-700 text-white font-pixel text-3xl">
      {/* Div principal que envuelve todo */}
      <div className="flex justify-between">
        <ul className="flex gap-4 text-center w-screen justify-between p-2 mx-4 my-2">
          <li className="cursor-pointer">
            <a href="">ABOUT</a>
          </li>
          <li className="cursor-pointer">
            <a href=""></a>DEMO
          </li>
          <li className="cursor-pointer">
            <a href=""></a>TEAM
          </li>
          <li className="cursor-pointer">
            <a href=""></a>CONTACT
          </li>
          <Button></Button>
        </ul>
      </div>
    </header>
  )
}
