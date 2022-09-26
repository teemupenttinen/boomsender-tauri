import { BaseView } from '../components/BaseView'
import { List } from '../components/List'
import { newDeviceStyle } from './newdevice.css'

function newdevice() {
  return (
    <BaseView>
      <div className={newDeviceStyle}>
        <List
          label="Commands"
          items={[
            { value: 1, content: 'Power On' },
            { value: 2, content: 'Power off' },
          ]}
        />
      </div>
    </BaseView>
  )
}

export default newdevice
