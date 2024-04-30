import Burger from "./burger"
import UserInfo from "./user-info"

interface HeaderProps {
  isMenuOpen : boolean
  setIsMenuOpen: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = ( { isMenuOpen, setIsMenuOpen } ) => {

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex items-center border-b border-foboh-secondary p-4 md:py-7 lg:p-4 lg:border-none bg-foboh-panel lg:bg-foboh-main">
      <div className="flex-1 hidden md:block lg:hidden">
        <img src="./images/kenshi.png" alt="Kenshi Logo" className="h-16" />
      </div>
      <Burger onClick={handleClick} />
      <div className="flex flex-1 lg:text-foboh-panel">
        <div className="hidden lg:block">
          <div className="text-bold">Hello, Ekemini</div>
          <div className="text-xs">Tue, 13 February 2024</div>
        </div>
        <UserInfo subtitleClass="text-foboh-text lg:text-foboh-panel" />
      </div>
    </div>
  )
}

export default Header
