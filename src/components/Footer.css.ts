import { style, globalStyle } from '@vanilla-extract/css'

export const footerWrapperStyle = style({
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
})

export const footerIconSelectedStyle = style({})

globalStyle(`${footerIconSelectedStyle} path`, {
  fill: 'blue',
})

globalStyle(`${footerWrapperStyle} ul`, {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '8px',
  padding: '0 16px',
})

globalStyle(`${footerWrapperStyle} li`, {
  listStyle: 'none',
  cursor: 'pointer',
})
