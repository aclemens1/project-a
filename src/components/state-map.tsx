import React from "react"

interface StateMapProps {
  selectedRegion? : string
  onClick : (state: string) => void
}

const StateMap : React.FC<StateMapProps> = ( { selectedRegion, onClick } ) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 320 800 200"
        width="300"
        height="160"
      >
        <path
          d="M100,200 L300,200 L300,400 L100,400 Z"
          fill={selectedRegion === "New South Wales" ? "blue" : "gray"}
          onClick={() => onClick("New South Wales")}
        />
        <path
          d="M350,200 L550,200 L550,400 L350,400 Z"
          fill={selectedRegion === "Victoria" ? "blue" : "gray"}
          onClick={() => onClick("Victoria")}
        />
        <path
          d="M600,200 L800,200 L800,400 L600,400 Z"
          fill={selectedRegion === "Queensland" ? "blue" : "gray"}
          onClick={() => onClick("Queensland")}
        />
        <path
          d="M200,450 L400,450 L400,650 L200,650 Z"
          fill={selectedRegion === "South Australia" ? "blue" : "gray"}
          onClick={() => onClick("South Australia")}
        />
        <path
          d="M450,450 L650,450 L650,650 L450,650 Z"
          fill={selectedRegion === "Western Australia" ? "blue" : "gray"}
          onClick={() => onClick("Western Australia")}
        />
        <path
          d="M700,450 L900,450 L900,650 L700,650 Z"
          fill={selectedRegion === "Tasmania" ? "blue" : "gray"}
          onClick={() => onClick("Tasmania")}
        />
      </svg>
    </>
  )
}

export default StateMap
