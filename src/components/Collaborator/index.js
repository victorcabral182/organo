import "./Collaborator.css"
import { AiFillCloseCircle } from "react-icons/ai";

export const Collaborator = ({ name, role, image, primaryColor, secondaryColor, onDelete, id }) => {
  return (
    <>
      <div className="collaborator">
        <div className="deletar" >
          <AiFillCloseCircle
            size={24}
            onClick={() => onDelete(id)} />
        </div>
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