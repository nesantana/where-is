import React, { useContext, createContext, useState } from 'react';
import { iCoord } from '../Interfaces/iCoord';
import { weatherApi } from '../Services/WeatherAPI.service';

interface iWeatherContext {
  weather: any
  searchWeather(coord: iCoord): void
  loadingWeather: boolean
}

interface iClouds {
  all: number
}

interface iMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface iSys {
  country: string
}

interface iWeather {
  id: 802
  main: "Clouds"
  description: "scattered clouds"
  icon: "03d"
}

interface iWind {
  speed: number
  deg: number
}

interface iWeatherList {
  clouds: iClouds
  coord: iCoord
  dt: number
  id: number
  main: iMain
  name: string
  rain: string | number
  snow: string | number
  sys: iSys
  weather: iWeather[]
  wind: iWind
}

export const WeatherContext = createContext({} as iWeatherContext);

export const UseWeatherContext = () => useContext(WeatherContext);

export const WeatherContextProvider: React.FC<any> = ({ children }) => {
  const [
    weather,
    setWeather,
  ] = useState<iWeatherList>({} as iWeatherList);
  const [ loadingWeather, setLoadingWeather ] = useState(true)

  const searchWeather = async (coord: iCoord) => {
    setLoadingWeather(true)
    try {
      const { data } : { data: any } = await weatherApi.get(coord)
      
      setWeather(data.list[0] as iWeatherList)
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingWeather(false)
    }
  }

  return (
    <WeatherContext.Provider value={{
      weather,
      searchWeather,
      loadingWeather
    }}
    >
      { children }
    </WeatherContext.Provider>
  );
};
