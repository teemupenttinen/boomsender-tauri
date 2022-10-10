import { PropsWithChildren } from 'react'

import { buttonStyle } from './Button.css'

export const Button: React.FC<PropsWithChildren<{ style: 'primary' | 'secondary'; onClick: () => void }>> = ({
  children,
  onClick,
}) => {
  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}
