import type { ISubregionEntry } from "~/interfaces";

interface ISubregionsProps {
  subregions: ISubregionEntry[] | null
}

const Subregions: React.FC<ISubregionsProps> = ({ subregions }) => {
  return (
    <>
      {
        subregions?.map((subregion: ISubregionEntry, index: number) => (
          <div key={index} className="inline-block me-3">
            <span className="inline-block text-foboh-text text-xs bg-foboh-field px-2 py-0 leading-tight" key={subregion?.id}>{subregion?.name}</span>{index !== subregions.length - 1 ? ", " : ""}
          </div>
        ))
      }
    </>
  );
};

export default Subregions
