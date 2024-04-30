import { MouseEventHandler } from "react"

interface IButtonProps {
  children: React.ReactNode
  type?: "primary" | "secondary"
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({type, children, className, disabled, onClick}) => {
  const viewClasses = (type?: "primary" | "secondary", disabled?: boolean): string => {
    switch(type) {
      case "secondary":
        return `border-gray-200 ${disabled && "text-gray-300"}`
      case "primary":
      default:
          return `bg-teal-700 border-teal-700 text-white ${disabled && "bg-teal-disabled border-teal-disabled"}`
    }
  }

  return (
    <button className={`"inline-block px-10 py-3 rounded-md font-semibold border ${className} ${viewClasses(type, disabled)}`} onClick={onClick}>{children}</button>
  )
}

export default Button
