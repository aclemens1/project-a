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
    <div className="flex bg-teal-800 p-4">
      <div>
        <Burger onClick={handleClick} />
      </div>
      <div className="flex-1">
        <UserInfo theme="light" />
      </div>
    </div>
  )
}

export default Header
