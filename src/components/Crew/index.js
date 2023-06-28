import "./Crew.css"

export const Crew = ({ title, primaryColor, secondaryColor }) => {
  return (
    <>
      <section className="crew" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }}>{title}</h3>
      </section>
    </>
  )
}