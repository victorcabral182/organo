import "./Button.css"

export const Button = ({ children }) => {
  return (
    <>
      <div className="container">
        <button>
          {children}
        </button>
      </div>
    </>
  )
}