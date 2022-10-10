import { useState } from 'react'

import { BaseView } from '../components/BaseView'
import { Button } from '../components/Button'
import { List } from '../components/List'
import { SegmentedControl, SegmentedControlOption } from '../components/SegmentedControl'
import { Textfield } from '../components/Textfield'
import { Command, Device } from '../models'

import { newDeviceStyle, saveNewDeviceWrapperStyle } from './newdevice.css'

type ControlMethod = 'TCP' | 'UDP'

const controlMethods: Record<ControlMethod, SegmentedControlOption> = {
  TCP: {
    name: 'TCP',
    value: 'TCP',
  },
  UDP: {
    name: 'UDP',
    value: 'UDP',
  },
} as const

export default function NewDevice() {
  const [name, setName] = useState('')
  const [controlMethod, setControlMethod] = useState<SegmentedControlOption>(controlMethods.TCP)
  const [port, setPort] = useState(1)
  const [commands, setCommands] = useState<Command[]>([])

  const save = () => null

  return (
    <BaseView>
      <div className={newDeviceStyle}>
        <Textfield label="Name" onChange={(value) => setName(value)} />
        <SegmentedControl
          firstOption={controlMethods.TCP}
          secondOption={controlMethods.UDP}
          currentValue={controlMethod}
          onChange={(option) => setControlMethod(option)}
          label="Control method"
        />
        <Textfield label="Port" onChange={(value) => setPort(parseInt(value))} />
        <List
          label="Commands"
          items={[
            { value: 1, content: 'Power On' },
            { value: 2, content: 'Power off' },
          ]}
          onAdd={() => console.log('jee')}
        />
        <div className={saveNewDeviceWrapperStyle}>
          <Button style={'primary'} onClick={save}>
            Save
          </Button>
        </div>
      </div>
    </BaseView>
  )
}
