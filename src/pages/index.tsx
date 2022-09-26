import { useRouter } from 'next/router'
import { BaseView } from '../components/BaseView'
import { List } from '../components/List'
import { views } from '../utils/views'
import { homeStyle } from './index.css'

function App() {
  const { push } = useRouter()
  return (
    <BaseView>
      <div className={homeStyle}>
        <List
          label="Devices"
          items={[
            { value: 1, content: 'Projector 1' },
            { value: 2, content: 'Projector 2' },
          ]}
          onAdd={() => push(views.newDevice.route)}
        />
      </div>
    </BaseView>
  )
}

export default App
