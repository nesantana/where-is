import { useEffect, useState } from "react"
import { iCoord } from "../Interfaces/iCoord"

const useCoords = () => {
  const [ coord, setCoord ] = useState<iCoord>({} as iCoord)

  const searchCoord = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setCoord ({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      })
    }
  }

  useEffect(() => {
    searchCoord()
  }, [])


  return { coord, searchCoord }
}

export default useCoords