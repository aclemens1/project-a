export interface ISubregionEntry {
  id: string;
  name: string;
}

export interface IRegionEntry {
  id: string;
  name: string;
  map: string;
  subregions: ISubregionEntry[];
}

export interface IRegionPricing {
  name: string
  price: number
}
