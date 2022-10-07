import { BaseView } from '../components/BaseView'
import { List } from '../components/List'
import { useViews } from '../utils/useViews'

import { homeStyle } from './index.css'

function App() {
  const { gotoView } = useViews()

  return (
    <BaseView>
      <div className={homeStyle}>
        <List
          label="Devices"
          items={[
            { value: 1, content: 'Projector 1' },
            { value: 2, content: 'Projector 2' },
          ]}
          onAdd={() => gotoView('newDevice', true)}
        />
      </div>
    </BaseView>
  )
}

export default App
