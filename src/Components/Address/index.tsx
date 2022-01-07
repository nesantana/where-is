import React from 'react'
import { UseAddressContext } from '../../Contexts/Address.context'
import { BoxShadow, DivMarginTop } from '../../Styled'
import { AddressStyled } from './styled'

export const Address: React.FC<any> = () => {
  const { address } = UseAddressContext()

  return (
    <AddressStyled>
      <BoxShadow height='320px' padding="50px" alignItems='flex-start' justifyContent='center' flexDirection="column"  data-testid="box">
        { address && (
          <>
            <DivMarginTop>{address.street}</DivMarginTop>
            <DivMarginTop mt="20px">{address.locality} - {address.region_code}</DivMarginTop>
            <DivMarginTop mt="20px">{address.country}</DivMarginTop>
          </>
        ) }
      </BoxShadow>
    </AddressStyled>
  )
}