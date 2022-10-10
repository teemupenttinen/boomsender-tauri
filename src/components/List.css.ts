import { globalStyle, style } from '@vanilla-extract/css'

export const listStyle = style({})

export const listItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  height: '60px',
  borderBottom: '1px solid black',
  padding: '0 8px',
  cursor: 'pointer',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
})

globalStyle(`${listItemStyle} p`, {
  flexGrow: 1,
  flexBasis: 0,
})

globalStyle(`${listItemStyle} button`, {
  borderRadius: '50%',
  height: '25px',
  width: '25px',
  backgroundColor: 'grey',
})

globalStyle(`${listStyle} h2`, {
  fontSize: '24px',
  color: 'white',
  flexGrow: 1,
  flexBasis: 0,
})

globalStyle(`${listStyle} ul`, {
  backgroundColor: '#FAFAFA',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  color: 'black',
})

export const listTitleStyle = style({
  display: 'flex',
  flexDirection: 'row',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
})

globalStyle(`${listTitleStyle} button`, {
  fontSize: '32px',
  lineHeight: '32px',
})
