import React from 'react'
import { UseWeatherContext } from '../../Contexts/Weather.context'
import { BoxShadow, DivMarginTop } from '../../Styled'
import { WeatherStyled } from './styled'
import { isEmpty } from 'lodash';

export const Weather: React.FC<any> = () => {
  const { weather } = UseWeatherContext()

  return (
    <WeatherStyled>
      <BoxShadow height='320px' alignItems='center' justifyContent='center' data-testid="box">
        { (!isEmpty(weather) && weather.weather.length) && (
          <>
            <img style={{ width: '300px' }} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={'Icone ' + weather.weather[0].description} />

            <div style={{ flexGrow: '1' }}>
              <DivMarginTop>Tempo: { weather.weather[0].main }, { weather.weather[0].description }</DivMarginTop>
              <DivMarginTop mt="20px">Temp. atual:  { weather.main.temp }</DivMarginTop>
              <DivMarginTop mt="20px">Temp. Max: { weather.main.temp_max }</DivMarginTop>
              <DivMarginTop mt="20px">Temp. Mín: { weather.main.temp_min }</DivMarginTop>
              <DivMarginTop mt="20px">Humidade: { weather.main.humidity }</DivMarginTop>
              <DivMarginTop mt="20px">Pressão: { weather.main.pressure }</DivMarginTop>
              <DivMarginTop mt="20px">Ventos de { weather.wind.speed }km</DivMarginTop>
            </div>
          </>
        )}
      </BoxShadow>
    </WeatherStyled>
  )
}