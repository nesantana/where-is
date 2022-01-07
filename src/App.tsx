import React, { useEffect } from 'react';
import { Address } from './Components/Address';
import { Header } from './Components/Header';
import { Weather } from './Components/Weather';
import { UseAddressContext } from './Contexts/Address.context';
import { UseWeatherContext } from './Contexts/Weather.context';
import { AppStyled, Col, Container, GlobalStyle, Row } from './Styled';
import Skeleton from 'react-loading-skeleton';
import useCoords from './Hooks/useCoords';

const App: React.FC<any> = () => {
  const { searchWeather, loadingWeather } = UseWeatherContext()
  const { searchAddress, loadingAddress } = UseAddressContext()
  const { coord } = useCoords()

  useEffect(() => {
    if (coord.lat && coord.lon) {
      searchWeather(coord)
      searchAddress(coord)
    }
  }, [coord])

  return (
    <AppStyled>
      <GlobalStyle />
      <Header />
      {
        loadingWeather && loadingAddress
        ? (
          <Container mt="100px" mb="30px">
            <Row gap="30px">
              <Col width="40%">
                <Skeleton height={320}/>
              </Col>
              <Col width="60%">
                <Skeleton height={320}/>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container mt="100px" mb="30px">
            <Row gap="30px">
              <Col width="40%">
                <Address />
              </Col>
              <Col width="60%">
                <Weather />
              </Col>
            </Row>
          </Container>
        )
      }
    </AppStyled>
  );
}

export default App;
