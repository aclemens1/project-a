'use client'

import { useEffect, useState } from "react";
import StateMap from "~/components/state-map";
import { IRegionEntry, IRegionPricing, ISubregionEntry } from "~/interfaces";
import { NextPage } from "next";
import SavePricing from "~/components/save-pricing";
import Subregions from "~/components/subregions";
import RegionsPricing from "~/components/regions-pricing";

const FreightPage: NextPage = () => {

  // Currently selected region
  const [selectedRegion, setSelectedRegion] = useState("")

  // Dictionary of regions which includes a map and a list of subregions
  const [regionsDictionary, setRegionsDictionary] = useState<IRegionEntry[]>([])

  // Data about region pricing we set through the app
  const [regionsPricing, setRegionsPricing] = useState<IRegionPricing[]>([])

  // Current price shown in the "Enter Pricing" field
  const [currentPrice, setCurrentPrice] = useState(-1)

  const handleRegionChange = (name: string) => {
    setSelectedRegion(name)

    const currentPrice: number = findCurrentPriceByRegionName(name, regionsPricing)
    setCurrentPrice(currentPrice ? currentPrice : -1)
  }

  const handleSavePricingClick = () => {

    if (currentPrice < 0) return

    const regionPricing = regionsPricing.find((r) => r.name === selectedRegion)
  
    if (regionPricing) {
      // Region pricing already exists, update it
      const updatedRegionsPricing = regionsPricing.map((rp) =>
        rp.name === selectedRegion ? { ...rp, price: currentPrice } : rp
      )
      setRegionsPricing(updatedRegionsPricing);
    } else {
      // Region pricing doesn't exist, add a new entry
      const newRegionPricing: IRegionPricing = {
        name: selectedRegion,
        price: currentPrice
      };
      setRegionsPricing([...regionsPricing, newRegionPricing]);
    }
  }

  const findCurrentPriceByRegionName = (regionName: string, regionsPricing: IRegionPricing[]) : number => {
    const region = regionsPricing.find((r) => r.name === regionName)
    return region ? region.price : -1
  }
  
  const findSubregionsByRegionName = (regionName: string, regionsDictionary: IRegionEntry[]) : ISubregionEntry[] | undefined => {
    const region = regionsDictionary.find((r) => r.name === regionName)
    return region ? region.subregions : undefined
  }

  useEffect(() => {
    fetch('./regions.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        const transformedData: IRegionEntry[] = data.map((region: IRegionEntry) => ({
          ...region,
          map: ''
        }));
        setRegionsDictionary(transformedData)
      })
      .catch((error) => {
        console.error('Error fetching regions:', error)
      })
  }, [])


  return (
    <>
      <div className="flex items-center">
        <div className="flex-1">
          <h1>Freight Management</h1>
          <p>Select freight zones and assign shipping prices</p>
        </div>
        <div>
          <button disabled>Cancel</button>
          <button disabled>Save</button>
        </div>
      </div>
      <div className="flex">
        <div>
          <StateMap onClick={handleRegionChange} selectedRegion={selectedRegion} />
        </div>
        <div className="flex-1">
          {
            selectedRegion ?
              <p>You selected: {selectedRegion}</p> :
              <p>You&rsquo;ve not selected a region, yet</p>
          }
          {
            selectedRegion && regionsDictionary ? (
              <>
                <p>This includes the following sub-regions:</p>
                <Subregions subregions={findSubregionsByRegionName(selectedRegion, regionsDictionary)} />
              </>
            ) : (
              <p>
                Select a region to see sub-regions
              </p>
            )
          }
          <hr />
          <SavePricing disabled={selectedRegion === ""}
            currentPrice={currentPrice}
            setCurrentPrice={setCurrentPrice}
            onSaveClick={handleSavePricingClick} />
          <hr />
          <RegionsPricing data={regionsPricing}
            setData={setRegionsPricing}
            currentRegion={selectedRegion}
            onRegionChange={handleRegionChange} />
        </div>
      </div>
    </>
  );
}

export default FreightPage
 