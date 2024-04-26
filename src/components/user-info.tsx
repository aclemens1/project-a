interface UserInfoProps {
  theme: "dark" | "light"
}

const UserInfo : React.FC<UserInfoProps> = ({theme}) => {
  return (
    <div className={`flex flex-1 justify-end ${theme === "light" ? "text-white" : ""}`}>
      <div className="text-right">
        <div className="text-bold">Ekemini Mark</div>
        <div className={`text-xs ${theme === "dark" ? "text-slate-500" : ""}`}>Heaps Normal</div>
      </div>
      <img src="./images/checker.png" alt="User Picture" className="w-10 h-10 rounded-full ms-4" />
    </div>
  )
}

export default UserInfo
