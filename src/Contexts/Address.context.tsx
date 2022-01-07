import React, { useContext, createContext, useState } from 'react';
import { iCoord } from '../Interfaces/iCoord';
import { addressApi } from '../Services/AddressAPI.service';

interface iAddressContext {
  address: iAddress
  searchAddress(coord: iCoord): void
  loadingAddress: boolean
}

interface iAddress {
  administrative_area: string
  confidence: number
  continent: string
  country: string
  country_code: string
  county: string
  distance: number
  label: string
  latitude: number
  locality: string
  longitude: number
  name: string
  neighbourhood: number | string
  number: string
  postal_code: number | string
  region: string
  region_code: string
  street: string
  type: string
}

export const AddressContext = createContext({} as iAddressContext);

export const UseAddressContext = () => useContext(AddressContext);

export const AddressContextProvider: React.FC<any> = ({ children }) => {
  const [
    address,
    setAddress,
  ] = useState<iAddress>({} as iAddress);
  const [ loadingAddress, setLoadingAddress ] = useState(true)

  const searchAddress = async (coord: iCoord) => {
    setLoadingAddress(true)
    try {
      const { data } : { data: any } = await addressApi.get(coord.lat + ',' + coord.lon)
      
      setAddress(data.data[0])
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingAddress(false)
    }
  }

  return (
    <AddressContext.Provider value={{
      address,
      searchAddress,
      loadingAddress
    }}
    >
      { children }
    </AddressContext.Provider>
  );
};
