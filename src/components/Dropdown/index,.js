import "./Dropdown.css"

export const Dropdown = ({ title, crews, required, value, onChange }) => {

  const onSelect = (event) => {
    onChange(event.target.value)
  }

  return (
    <>
      <div className="container">
        <label>
          {title}
        </label>
        <select
          onChange={onSelect}
          required={required}
          value={value}>
          {crews.map(crews => {
            return (
              <option key={crews}>{crews}</option>
            )
          })}
        </select>
      </div>
    </>
  )
}