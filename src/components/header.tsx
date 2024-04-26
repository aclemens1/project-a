import { useState } from "react"
import Burger from "./burger"
import UserInfo from "./user-info"

const Header = () => {

  return (
    <div className="flex bg-teal-800 p-4">
      <div>
        <Burger />
      </div>
      <div className="flex-1">
        <UserInfo theme="light" />
      </div>
    </div>
  )
}

export default Header
