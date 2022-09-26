import { globalStyle, style } from '@vanilla-extract/css'

export const homeStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

globalStyle(homeStyle + ' h1', {
  fontSize: '24px',
  color: 'white',
})

export const homeTitleStyle = style({
  display: 'flex',
  flexDirection: 'row',
})
