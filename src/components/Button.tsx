import { PropsWithChildren } from 'react'

import { buttonStyle } from './Button.css'

export const Button: React.FC<PropsWithChildren<{ style: 'primary' | 'secondary' }>> = ({ children }) => {
  return <button className={buttonStyle}>{children}</button>
}
