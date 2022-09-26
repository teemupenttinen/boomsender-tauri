import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: 'blue',
    secondary: 'red',
  },
})
