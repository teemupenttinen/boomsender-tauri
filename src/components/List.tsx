import { useState } from 'react'

import { Button } from './Button'
import { EllipseIcon } from './icons/EllipseIcon'
import { Tooltip } from './TooltipMenu'

import { listItemStyle, listStyle, listTitleStyle } from './List.css'

type RowItemType = Record<string, unknown> & {
  content: string
  value: string | number
}

const RowItem: React.FC<RowItemType> = ({ content, value }) => {
  const [show, setShow] = useState(false)
  return (
    <li className={listItemStyle} key={value}>
      <p>{content}</p>
      <Tooltip close={() => setShow(false)} onClick={() => setShow(true)} icon={<EllipseIcon />} show={show}>
        <div>
          <Button style={'primary'} onClick={() => null}>
            Delete
          </Button>
          <Button style={'primary'} onClick={() => null}>
            Edit
          </Button>
        </div>
      </Tooltip>
    </li>
  )
}

export const List: React.FC<{ label: string; items: RowItemType[]; onAdd?: () => void }> = ({
  label,
  items,
  onAdd,
}) => {
  return (
    <div className={listStyle}>
      <div className={listTitleStyle}>
        <h2>{label}</h2>
        {onAdd && <button onClick={onAdd}>+</button>}
      </div>
      <ul>
        {items.map((item, index) => {
          return <RowItem key={index} content={item.content} value={item.value} />
        })}
      </ul>
    </div>
  )
}
