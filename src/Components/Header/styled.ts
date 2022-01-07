import { FiRotateCw } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components'

export const HeaderStyled = styled.div`
  height: 120px;
  background: #FFFFFF;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ButtonReload = styled.div`
  background: #000000;
  height: 59px;
  width: 59px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const keyframeRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconRotate = styled(FiRotateCw)`
  display: inline-block;
  font-size: 20px;
  color: #FFFFFF;

  &.rotate {
    animation: ${keyframeRotate} 2s linear infinite;
  }
`;