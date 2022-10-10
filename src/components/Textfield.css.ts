import { style } from '@vanilla-extract/css'

export const textfieldWrapperStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const textfieldStyle = style({
  background: '#FAFAFA',
  height: '50px',
  flexGrow: '1',
  borderRadius: '8px',
  fontSize: '20px',
  paddingLeft: '8px',
  outline: 'none',
  border: 'none',
})
