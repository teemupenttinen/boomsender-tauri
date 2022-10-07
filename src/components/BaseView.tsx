import { PropsWithChildren } from 'react'

import { baseViewStyle, baseViewTopContainer } from './BaseView.css'

export const BaseView: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={baseViewStyle}>
      <div className={baseViewTopContainer}></div>
      {children}
    </div>
  )
}
