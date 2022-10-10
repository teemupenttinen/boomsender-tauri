import { globalStyle, style } from '@vanilla-extract/css'

export const base = style({ margin: 12 })

export const backButtonStyle = style({
  color: 'white',
})

globalStyle('body', {
  background: '#242331',
  fontFamily: 'Helvetica',
  margin: 0,
  overflow: 'hidden',
})

globalStyle('input', {
  WebkitAppearance: 'none',
  margin: '0',
  padding: '0',
})

globalStyle('button', {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: '0',
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
})

globalStyle('h2', {
  margin: '0',
  padding: '0',
})
