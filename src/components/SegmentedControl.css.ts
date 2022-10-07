import { style, globalStyle } from '@vanilla-extract/css'

const borderRadius = '8px'

export const segmentedControlWrapper = style({
  display: 'flex',
  height: '50px',
  background: '#FAFAFA',
  position: 'relative',
  borderRadius: borderRadius,
  userSelect: 'none',
  zIndex: '1',
})

export const segmentedControlInput = style({})

export const segmentedControlLabelStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  flex: '1',
  cursor: 'pointer',
  borderRadius: borderRadius,
  transition: 'color 500ms cubic-bezier(0,.95,.38,.98)',
  selectors: {
    '&:before': {
      background: '#4f4d65',
      transition: 'all 500ms cubic-bezier(0,.95,.38,.98)',
    },
  },
})

globalStyle(`${segmentedControlLabelStyle}:last-of-type:before`, {
  display: 'block',
  content: '',
  borderRadius: borderRadius,
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: '-1',
  transform: 'translateX(0)',
})

globalStyle(`${segmentedControlInput}:checked + label`, {
  color: 'white',
})

globalStyle(`${segmentedControlInput}:nth-of-type(1):checked ~ label:last-of-type:before`, {
  transform: 'translateX(-100%)',
})
