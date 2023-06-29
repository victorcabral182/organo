import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Crew } from "./components/Crew";
import { crews } from "./components/Arrays";

function App() {
  const [collaborators, setCollaborators] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }
  return (
    <div className="App">
      <Banner />
      <Form
        crews={crews.map((crew) => crew.name)}
        onRegisteredCollaborator={collaborator => onNewCollaboratorAdded(collaborator)}
      />
      {crews.map(crews => <Crew
        key={crews.name}
        title={crews.name}
        primaryColor={crews.primaryColor}
        secondaryColor={crews.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.crew === crews.name)}
      />)}
    </div>
  );
}

export default App;
