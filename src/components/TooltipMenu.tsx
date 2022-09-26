import { PropsWithChildren, useRef } from 'react'

import cx from 'classnames'

import { content, icon as iconStyle, tooltip, tooltipMenuItemStyle, visible } from './TooltipMenu.css'
import useOnClickOutside from '../utils/useOnClickOutside'

interface TooltipProps {
  icon: JSX.Element
  show: boolean
  close: () => void
  onClick: () => void
}

const TooltipMenuItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={tooltipMenuItemStyle}>
      <p>{text}</p>
    </div>
  )
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({ show, icon, children, close, onClick }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(tooltipRef, () => {
    if (close) close()
  })

  return (
    <div onClick={onClick} ref={tooltipRef} className={cx(tooltip, { [visible]: show })}>
      <div className={iconStyle}>{icon}</div>
      <div className={content}>
        <TooltipMenuItem text="Delete" />
        <TooltipMenuItem text="Edit" />
      </div>
    </div>
  )
}
