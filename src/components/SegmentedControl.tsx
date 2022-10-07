import { segmentedControlInput, segmentedControlLabelStyle, segmentedControlWrapper } from './SegmentedControl.css'

export interface SegmentedControlOption {
  value: string
  name: string
}

export const SegmentedControl: React.FC<{
  firstOption: SegmentedControlOption
  secondOption: SegmentedControlOption
  currentValue: SegmentedControlOption
  onChange: (option: SegmentedControlOption) => void
}> = ({ firstOption, secondOption, currentValue, onChange }) => {
  return (
    <div className={segmentedControlWrapper}>
      <input
        className={segmentedControlInput}
        type="radio"
        name="segmentedControl"
        id={firstOption.value}
        checked={currentValue.value === firstOption.value}
        onChange={() => onChange(firstOption)}
      />
      <label className={segmentedControlLabelStyle} htmlFor={firstOption.value}>
        {firstOption.name}
      </label>
      <input
        className={segmentedControlInput}
        type="radio"
        name="segmentedControl"
        id={secondOption.value}
        checked={currentValue.value === secondOption.value}
        onChange={() => onChange(secondOption)}
      />
      <label className={segmentedControlLabelStyle} htmlFor={secondOption.value}>
        {secondOption.name}
      </label>
    </div>
  )
}
