import { useState } from 'react'
import { Button } from './Button'
import { listItemStyle, listStyle, listTitleStyle } from './List.css'
import { Tooltip } from './TooltipMenu'

type RowItemType = Record<string, unknown> & {
  content: string
  value: string | number
}

const RowItem: React.FC<RowItemType> = ({ content, value }) => {
  const [show, setShow] = useState(false)
  return (
    <li className={listItemStyle} key={value}>
      <p>{content}</p>
      <Tooltip close={() => setShow(false)} onClick={() => setShow(true)} icon={<p>Menu</p>} show={show}>
        <div>
          <Button style={'primary'}>Delete</Button>
          <Button style={'primary'}>Edit</Button>
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
        {items.map((item) => {
          return <RowItem content={item.content} value={item.value} />
        })}
      </ul>
    </div>
  )
}
