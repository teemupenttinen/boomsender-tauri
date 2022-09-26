import { globalStyle, style } from '@vanilla-extract/css'

export const base = style({ margin: 12 })

globalStyle('body', {
  background: '#242331',
  fontFamily: 'Helvetica',
  margin: 0,
})

globalStyle('input', {
  WebkitAppearance: 'none',
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
