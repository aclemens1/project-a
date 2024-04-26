import NavIcon from "./nav-icon"

const Burger = () => {
  return (
    <button className="text-white order-first ms-0 md:ms-4 justify-self-start md:order-last bg-teal-800 flex items-center justify-center w-10 h-10 rounded-full border-gray-200 border">
      <NavIcon><path d="M17.5 10a.624.624 0 0 1-.625.625H3.125a.625.625 0 1 1 0-1.25h13.75A.625.625 0 0 1 17.5 10ZM3.125 5.625h13.75a.625.625 0 1 0 0-1.25H3.125a.625.625 0 0 0 0 1.25Zm13.75 8.75H3.125a.625.625 0 1 0 0 1.25h13.75a.624.624 0 1 0 0-1.25Z"/></NavIcon>
    </button>
  )
}

export default Burger
