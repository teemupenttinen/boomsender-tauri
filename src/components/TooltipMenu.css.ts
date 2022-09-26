import { style } from '@vanilla-extract/css'

export const tooltip = style({
  position: 'relative',
  overflow: 'hidden',
})
export const icon = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export const visible = style({
  overflow: 'visible',
  selectors: {
    '&::after': {
      opacity: '1',
      transition: 'opacity 0.2s ease-out',
    },
  },
})

export const content = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '200px',
  minHeight: '48px',
  // padding: '10px 0px',
  borderRadius: '10px',
  backgroundColor: '#f2f2f2',
  color: 'black',
  textAlign: 'left',
  opacity: 0,
  transition: 'opacity 0.2s ease-out',
  selectors: {
    [`${visible} &`]: {
      opacity: '1',
      top: '50%',
      right: '100%',
      marginRight: '15px',
    },
  },
})

export const tooltipMenuItemStyle = style({
  // width: '100%',
  borderBottom: '1px black solid',
  padding: '0 8px',
  cursor: 'pointer',
  ':last-child': {
    borderBottom: 'none',
  },
})
