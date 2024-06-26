"use client"

import { MutableRefObject, useEffect, useRef, useState } from "react";
import type { IRegionEntry, IRegionPricing, ISubregionEntry } from "~/interfaces";
import type { NextPage } from "next";
import StateMap from "~/components/state-map";
import SavePricing from "~/components/save-pricing";
import Subregions from "~/components/subregions";
import RegionsPricing from "~/components/regions-pricing";
import Button from "~/components/button";

const findCurrentPriceByRegionName = (regionName: string, regionsPricing: IRegionPricing[]) : number | null => {
  const region: IRegionPricing | undefined = regionsPricing.find((r) => r.name === regionName)
  return region ? region.price : null
}

const findSubregionsByRegionName = (regionName: string, regionsDictionary: IRegionEntry[]) : ISubregionEntry[] | null => {
  const region: IRegionEntry | undefined = regionsDictionary.find((r) => r.name === regionName)
  return region ? region.subregions : null
}

const focusInput = (ref: MutableRefObject<HTMLInputElement | null>): void => {
  setTimeout(() => {
    if (ref.current) ref.current.focus()
  })
}

const FreightPage: NextPage = () => {

  const [selectedRegion, setSelectedRegion] = useState<string>("")
  const [regionsDictionary, setRegionsDictionary] = useState<IRegionEntry[]>([])
  const [regionsPricing, setRegionsPricing] = useState<IRegionPricing[]>([])
  const [currentPrice, setCurrentPrice] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleRegionChange = (name: string) => {
    setSelectedRegion(name)

    const currentPrice: number | null = findCurrentPriceByRegionName(name, regionsPricing)
    setCurrentPrice(currentPrice ? currentPrice : null)
    focusInput(inputRef)
  }

  const handleSavePricingClick = () => {

    if (!currentPrice) return

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

  const cancelRegionSelection = () => {
    setSelectedRegion("")
    setCurrentPrice(null)
  }

  const handleDelete = () => {
    setCurrentPrice(null)
    focusInput(inputRef)
  }

  const handleCancelClick = () => {
    setSelectedRegion("")
    setCurrentPrice(null)
    setRegionsPricing([])
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
        const transformedData: IRegionEntry[] = (data as IRegionEntry[]).map((region: IRegionEntry) => ({
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
    <div className="bg-foboh-panel rounded-xl p-5 grow">
      <div className="md:flex items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-bold leading-tight">Freight Management</h1>
          <p className="text-foboh-text my-3 md:my-0">Select freight zones and assign shipping prices</p>
        </div>
        <div>
          <Button type="secondary" className="me-5" onClick={handleCancelClick} disabled={regionsPricing.length < 1}>Cancel</Button>
          <Button type="primary" disabled={regionsPricing.length < 1}>Save</Button>
        </div>
      </div>
      <div className="lg:flex my-20">
        <div className="flex-1 lg:pe-20">
          <StateMap onClick={handleRegionChange} selectedRegion={selectedRegion} pricingData={regionsPricing} />
        </div>
        <div className="flex-1">
          {
            selectedRegion ?
              <p className="text-xs"><span className="text-foboh-text">You selected:</span> <span className="font-semibold">{selectedRegion}</span> <button className="text-foboh-main font-semibold" onClick={cancelRegionSelection}>Change</button></p> :
              <p className="text-foboh-text text-xs">You&rsquo;ve not selected a region, yet</p>
          }
          <div className="my-5">
            {
              selectedRegion && regionsDictionary ? (
                <>
                  <p className="text-foboh-text text-xs mb-3">This includes the following sub-regions:</p>
                  <div className="h-20">
                    <Subregions subregions={findSubregionsByRegionName(selectedRegion, regionsDictionary)} />
                  </div>
                </>
              ) : (
                <>
                  <p className="text-foboh-text text-xs">
                    Select a region to see sub-regions
                  </p>
                </>
              )
            }
          </div>

          <SavePricing disabled={selectedRegion === ""}
            currentPrice={currentPrice}
            setCurrentPrice={setCurrentPrice}
            onSaveClick={handleSavePricingClick}
            inputRef={inputRef} />
          <RegionsPricing data={regionsPricing}
            setData={setRegionsPricing}
            currentRegion={selectedRegion}
            onRegionChange={handleRegionChange}
            onDelete={handleDelete} />
        </div>
      </div>
    </div>
  )

}

export default FreightPage
 