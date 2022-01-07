export type typeAlign = 'space-between' | 'space-around' | 'center' | 'flex-start' | 'flex-end'
export type typeFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse'
export type typeDisplay = 'flex' | 'block'


export interface iPropsContainer {
  mt?: string
  mb?: string
}

export interface iPropsRow {
  gap?: string
}

export interface iPropsCol {
  width?: string
  height?: string
}

export interface iPropsBoxShadow {
  padding?: string
  width?: string
  height?: string
  justifyContent?: typeAlign
  alignItems?: typeAlign
  flexDirection?: typeFlexDirection
  mt?: string
  mb?: string
}

export interface iPropsMarginTop {
  mt?: string
  justifyContent?: typeAlign
  alignItems?: typeAlign
  flexDirection?: typeFlexDirection
  display?: typeDisplay
}