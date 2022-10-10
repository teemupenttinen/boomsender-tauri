import { BaseView } from '../components/BaseView'
import { List } from '../components/List'

const settings: React.FC = () => {
  return (
    <BaseView>
      <div>
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

export default settings
