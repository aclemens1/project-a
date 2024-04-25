import SavedRegionsItem from "./saved-regions-item"
import type { IRegionPricing } from "../interfaces"

interface RegionsPricingProps {
  data: IRegionPricing[]
  currentRegion: string
  setData: React.Dispatch<React.SetStateAction<IRegionPricing[]>>
  onRegionChange: (region: string) => void
}

const RegionsPricing : React.FC<RegionsPricingProps> = ( { data, setData, currentRegion, onRegionChange } ) => {
  
  const handleDelete = (regionName: string) => {
    const updatedData: IRegionPricing[] = data.filter(region => region.name !== regionName);
  
    setData(updatedData);
  }

  const handleEdit = (regionName: string) => {
    onRegionChange(regionName)
  }

  return (
    <>
      {
        data && data.length > 0 ? (data.map((region: IRegionPricing, i) => {
          return <SavedRegionsItem key={i}
            {...region}
            isEditDisabled={region.name === currentRegion}
            onDelete={handleDelete}
            onEdit={handleEdit} />
        })) : (
          <p>No Saved Regions Yet</p>
        )
      }
    </>
  )
}

export default RegionsPricing
