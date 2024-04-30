interface IUserInfoProps {
  subtitleClass?: string
}

const UserInfo : React.FC<IUserInfoProps> = ({subtitleClass}) => {
  const viewClasses = () => {
    return subtitleClass ? subtitleClass : ""
  }

  return (
    <div className="flex flex-1 justify-end">
      <div className="text-right">
        <div className="text-bold">Ekemini Mark</div>
        <div className={`text-xs ${viewClasses()}`}>Heaps Normal</div>
      </div>
      <img src="./images/checker.png" alt="User Picture" className="w-10 h-10 rounded-full ms-4" />
    </div>
  )
}

export default UserInfo
