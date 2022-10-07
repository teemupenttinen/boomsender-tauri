import { CSSProperties, PropsWithChildren, ReactElement, useRef } from 'react'

import { assignInlineVars } from '@vanilla-extract/dynamic'
import cx from 'classnames'

import useOnClickOutside from '../utils/useOnClickOutside'
import { PencilIcon } from './icons/PencilIcon'
import { TrashIcon } from './icons/TrashIcon'

import {
  content,
  icon as iconStyle,
  tooltip,
  tooltipMenuItemStyle,
  tooltipMenuItemStyleTextColor,
  visible,
} from './TooltipMenu.css'

interface TooltipProps {
  icon: ReactElement
  show: boolean
  close: () => void
  onClick: () => void
}

const TooltipMenuItem: React.FC<{ text: string; color?: CSSProperties['color']; icon?: ReactElement }> = ({
  text,
  color = 'black',
  icon,
}) => {
  return (
    <div className={tooltipMenuItemStyle} style={assignInlineVars({ [tooltipMenuItemStyleTextColor]: color })}>
      <p>{text}</p>
      {icon}
    </div>
  )
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({ show, icon, close, onClick }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(tooltipRef, () => {
    if (close) close()
  })

  return (
    <div onClick={onClick} ref={tooltipRef} className={cx(tooltip, { [visible]: show })}>
      <div className={iconStyle}>{icon}</div>
      <div className={content}>
        <TooltipMenuItem text="Delete" color="red" icon={<TrashIcon />} />
        <TooltipMenuItem text="Edit" icon={<PencilIcon />} />
      </div>
    </div>
  )
}
