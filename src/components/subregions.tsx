import { ISubregionEntry } from "~/interfaces"

interface SubregionsProps {
  subregions: ISubregionEntry[] | undefined
}

const Subregions : React.FC<SubregionsProps> = ( { subregions } ) => {

  return (
    <>
      {
        subregions && subregions.map((subregion : ISubregionEntry) => (
          <span className="inline-block mr-5" key={subregion.id}>{subregion.name}</span>
        ))
      }
    </>
  )

}

export default Subregions
