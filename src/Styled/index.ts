import styled, { createGlobalStyle } from 'styled-components'
import { iPropsBoxShadow, iPropsCol, iPropsContainer, iPropsMarginTop, iPropsRow } from '../Interfaces/iPropsStyled'

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: #f8f8f8;
  }

  * {
    box-sizing: border-box;
    font: normal 16px 'Comfortaa', cursive;
  }
`

export const AppStyled = styled.div``

export const Container = styled.div<iPropsContainer>`
  max-width: 1200px;
  margin: ${ ({mt}) => mt || 0 } auto ${ ({mb}) => mb || 0 };
  width: 100%;
`

export const Row = styled.div<iPropsRow>`
  display: flex;
  gap: ${ ({ gap }) => gap || '' };
`

export const Col = styled.div<iPropsCol>`
  width: ${ ({ width } : any) => width || '50%' };
  height: ${ ({ height } : any) => height || '' };
`

export const BoxShadow = styled.div<iPropsBoxShadow>`
  display: flex;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
  border-radius: 10px;
  padding: ${ ({ padding }) => padding || '0' };
  width: ${ ({ width }) => width || '100%' };
  height: ${ ({ height }) => height || '' };
  justify-content: ${ ({ justifyContent }) => justifyContent || 'flex-start' };
  align-items: ${ ({ alignItems }) => alignItems || 'flex-start' };
  flex-direction: ${ ({ flexDirection }) => flexDirection || 'row' };
  margin-top: ${ ({mt}) => mt || '0px' };
  margin-bottom: ${ ({mb}) => mb || '0px' };
`

export const DivMarginTop = styled.div<iPropsMarginTop>`
  margin-top: ${ ({mt}) => mt || '0px' };
  justify-content: ${ ({ justifyContent }) => justifyContent || 'flex-start' };
  align-items: ${ ({ alignItems }) => alignItems || 'flex-start' };
  flex-direction: ${ ({ flexDirection }) => flexDirection || 'row' };
  display: ${ ({ display }) => display || 'block' };
`