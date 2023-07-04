import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Crew } from "./components/Crew";
import { crews } from "./components/Arrays";

function App() {
  const [collaborators, setCollaborators] = useState([])

  const [crews, setCrews] = useState([{
    name: "Programação",
    color: "#D9F7E9"
  },
  {
    name: "Front-End",
    color: "#E8F8FF"
  },
  {
    name: "Data Science",
    color: "#F0F8E2"
  },
  {
    name: "DevOps",
    color: "#FDE7E8"
  },
  {
    name: "UX e Design",
    color: "#FAE9F5"
  },
  {
    name: "Mobile",
    color: "#FFF5D9"
  },
  {
    name: "Inovação e Gestão",
    color: "#FFEEDF"
  }])

  const onNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  function changeCrewColor(color, name) {
    setCrews(crews.map(crew => {
      if (crew.name === name) {
        crew.color = color
      }
      return crew
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        crews={crews.map((crew) => crew.name)}
        onRegisteredCollaborator={collaborator => onNewCollaboratorAdded(collaborator)}
      />
      {crews.map(crews => <Crew
        changeColor={changeCrewColor}
        key={crews.name}
        title={crews.name}
        primaryColor={crews.primaryColor}
        secondaryColor={crews.color}
        collaborators={collaborators.filter(collaborator => collaborator.crew === crews.name)}
        onDelete={deleteCollaborator}
      />)}
    </div>
  );
}

export default App;

// PAREI EM 05/03
