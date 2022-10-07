import { style } from '@vanilla-extract/css'

import { base } from '../styles/app.css'

export const buttonStyle = style([
  base,
  {
    background: '#B88B4A',
    height: '100px',
    width: '100%',
    borderRadius: '6px',
  },
])
