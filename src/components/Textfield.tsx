import { textfieldStyle, textfieldWrapperStyle } from './Textfield.css'

export const Textfield: React.FC<{ label: string; onChange: (text: string) => void }> = ({ label, onChange }) => {
  return (
    <div className={textfieldWrapperStyle}>
      <h2>{label}</h2>
      <input className={textfieldStyle} onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}
