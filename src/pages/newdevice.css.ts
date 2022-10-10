import { globalStyle, style } from '@vanilla-extract/css'

export const newDeviceStyle = style({
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
})

export const saveNewDeviceWrapperStyle = style({
  display: 'flex',
  height: '60px',
  flexGrow: '1',
  justifySelf: 'flex-end',
})

globalStyle(`${newDeviceStyle} h2`, {
  margin: '0',
  padding: '0',
  marginBottom: '8px',
})

globalStyle(`${newDeviceStyle} h2:not(:first-of-type)`, {
  marginTop: '8px',
})
