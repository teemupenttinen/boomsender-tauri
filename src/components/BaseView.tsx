import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useRouter } from 'next/router'
import { PropsWithChildren, useMemo } from 'react'
import { backButtonStyle, baseViewStyle, baseViewTopContainer } from './BaseView.css'

export const BaseView: React.FC<PropsWithChildren> = ({ children }) => {
  const { asPath, back } = useRouter()
  const showBack = useMemo(() => asPath !== '/', [asPath])
  return (
    <div className={baseViewStyle}>
      <div className={baseViewTopContainer}>
        {showBack && (
          <button className={backButtonStyle} onClick={back}>
            Back
          </button>
        )}
      </div>
      {children}
    </div>
  )
}
