import React, { useEffect, useState } from 'react'
import { HeaderStyled, ButtonReload, IconRotate } from './styled'
import { Container } from '../../Styled'
import { UseWeatherContext } from '../../Contexts/Weather.context'
import { UseAddressContext } from '../../Contexts/Address.context'
import useCoords from '../../Hooks/useCoords'

// SVGs
import LogoSVG from '../../SVGs/logo.svg'

export const Header: React.FC<any> = () => {
  const { loadingWeather, searchWeather } = UseWeatherContext()
  const { loadingAddress, searchAddress } = UseAddressContext()
  const { coord, searchCoord } = useCoords()

  const [ rotate, setRotate ] = useState<boolean>(true)
  
  useEffect(() => {
    if (loadingWeather || loadingAddress) {
      setRotate(true)
      return
    }

    setRotate(false)
  }, [loadingWeather, loadingAddress])

  const clickReload = () => {
    searchCoord()
    searchAddress(coord)
    searchWeather(coord)
  }
  
  return (
    <HeaderStyled>
      <Container>
        <img src={LogoSVG} alt='Where is logo' data-testid="logo"/>
        <ButtonReload onClick={clickReload}>
          <IconRotate data-testid="iconReload" className={rotate ? 'rotate' : ''}/>
        </ButtonReload>
      </Container>
    </HeaderStyled>
  )
}