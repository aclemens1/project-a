interface SavedRegionsItemProps {
  name: string
  price: number
  isEditDisabled? : boolean
  onDelete: (state: string) => void
  onEdit: (state: string) => void
}

const SavedRegionsItem : React.FC<SavedRegionsItemProps> = ( { name, price, isEditDisabled, onDelete, onEdit } ) => {
  return (
    <div className="flex">
      <div>image</div>
      <div className="flex flex-1">
        <div className="flex-1">
          <div>{name}</div>
          <div>{price.toFixed(2)}</div>
        </div>
        <div>
          <button disabled={isEditDisabled} onClick={() => onEdit(name)}>edit</button>
          <button onClick={() => onDelete(name)}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default SavedRegionsItem
