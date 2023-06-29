import "./Collaborator.css"


export const Collaborator = ({ name, role, image, primaryColor, secondaryColor }) => {
  return (
    <>
      <div className="collaborator">
        <div className="header" style={{ backgroundColor: primaryColor }} >
          <img src={image} alt={name} />
        </div>
        <div className="footer" >
          <h4>{name}</h4>
          <h5>{role}</h5>
        </div>
      </div>
    </>
  )
}