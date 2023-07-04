import { Collaborator } from "../Collaborator"
import "./Crew.css"

export const Crew = ({
  title,
  primaryColor,
  color,
  collaborators,
  onDelete,
  id,
  changeColor,
}) => {
  return (
    <>
      {collaborators.length > 0 &&
        <section className="crew" style={{ backgroundColor: color }}>
          <input
            onChange={(event) => changeColor(event.target.value, title)}
            value={color}
            type="color"
            className="input-color"
          />
          <h3 style={{ borderColor: primaryColor }}>{title}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator) => {
              return <Collaborator
                primaryColor={primaryColor}
                key={collaborator.name}
                name={collaborator.name}
                role={collaborator.role}
                image={collaborator.image}
                id={collaborator.id}
                onDelete={onDelete}
              />
            })}
          </div>
        </section>}
    </>
  )
}