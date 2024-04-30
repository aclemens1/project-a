import { useEffect, useState } from "react"
import type { ChangeEvent, MutableRefObject } from "react"
import Button from "./button"

interface ISavePricingProps {
  disabled?: boolean
  currentPrice: number | null
  setCurrentPrice: React.Dispatch<React.SetStateAction<number | null>>
  onSaveClick: () => void
  inputRef: MutableRefObject<HTMLInputElement | null>
}

const SavePricing: React.FC<ISavePricingProps> = ({
    disabled,
    currentPrice,
    setCurrentPrice,
    onSaveClick,
    inputRef
  }) => {

  const [, setCurrentValue] = useState<string>("")

  useEffect(() => {
    setCurrentPrice(currentPrice)
    setCurrentValue(currentPrice ? currentPrice.toString() : "")
  }, [currentPrice])

  const handleSaveClick = () : void => {
    onSaveClick()
  }

  const isSaveButtonDisabled = () : boolean | undefined => {
    return disabled || !currentPrice
  }

  const checkPriceValue = (value: string) : string =>{
    const regex = /([0-9]*[\.]{0,1}[0-9]{0,2})/
    const match: RegExpMatchArray | null = value.match(regex)
    return match && match.length > 0 ? match[0] : ""
 }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const check: string = checkPriceValue(e.target.value)
    if(check || e.target.value === "") {
      setCurrentValue(check)
      const inputValue: string = e.target.value.trim()
      const price: number = Number.parseFloat(inputValue)
      setCurrentPrice(price >= 0 && !isNaN(price) ? price : null)  
    } 
  }

  return (
    <>
      <label className="block text-xs mb-3 w-full">Enter Pricing</label>
      <div className="flex items-center border border-gray-200 rounded-md mb-3 bg-white">
        <span className="text-gray-300 ps-4 pe-1">A$</span>
        <input
          ref={inputRef}
          disabled={disabled}
          value={currentPrice ? currentPrice.toString() : ""}
          className="w-full ps-2 pe-1 py-3 bg-transparent flex-1 focus:outline-none"
          onChange={handleInputChange} />
      </div>
      <Button disabled={isSaveButtonDisabled()}
        onClick={handleSaveClick} className="w-full">Save Pricing</Button>
    </>
  )
}

export default SavePricing
