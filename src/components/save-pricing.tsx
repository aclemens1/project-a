import { ChangeEvent, useEffect } from "react"

interface SavePricingProps {
  disabled?: boolean
  currentPrice: number
  setCurrentPrice: React.Dispatch<React.SetStateAction<number>>
  onSaveClick: () => void
}

const SavePricing: React.FC<SavePricingProps> = ({
    disabled = false,
    currentPrice,
    setCurrentPrice,
    onSaveClick,
  }) => {

  useEffect(() => {
    setCurrentPrice(currentPrice)
  }, [])

  const handleSaveClick = () : void => {
    onSaveClick()
  }

  const isSaveButtonDisabled = () : boolean | undefined => {
    return disabled || currentPrice < 0
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    const price: number = Number.parseFloat(inputValue);
    setCurrentPrice(price >= 0 && !isNaN(price) ? price : -1);
  }

  return (
    <>
      <label>Enter Pricing</label>
      <input type="number"
        disabled={disabled}
        min="0" step="10"
        value={currentPrice >= 0 ? currentPrice : ""}
        onChange={(e) => handleInputChange(e)} />
      <button disabled={isSaveButtonDisabled()}
        onClick={handleSaveClick}>Save Pricing</button>
    </>
  )
}

export default SavePricing
