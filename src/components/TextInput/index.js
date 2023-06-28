import "./TextInput.css"

export const TextInput = ({ label, placeholder, required, value, onChange }) => {
  const onDigit = (event) => {
    onChange(event.target.value)
  }

  return (
    <>
      <div className="container">
        <label>{label}</label>
        <input value={value} required={required} onChange={onDigit} placeholder={placeholder} />
      </div>
    </>
  )
}