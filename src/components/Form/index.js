import { useState } from "react"
import { Button } from "../Button"
import { Dropdown } from "../Dropdown/index,"
import { TextInput } from "../TextInput"
import "./Form.css"

export const Form = ({ onRegisteredCollaborator }) => {

  const crews = [
    "Programação",
    "Front-End",
    "DevOps",
    "Back-End",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
  ]

  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")
  const [crew, setCrew] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    onRegisteredCollaborator({ name, role, image, crew })
  }

  return (
    <>
      <div className="form">
        <form onSubmit={onSubmit}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextInput
            label="Nome"
            required
            placeholder="Digite seu nome"
            value={name}
            onChange={value => setName(value)}
          />
          <TextInput
            label="Cargo"
            required
            placeholder="Digite seu cargo"
            value={role}
            onChange={value => setRole(value)}
          />
          <TextInput
            label="Imagem"
            required
            placeholder="Digite a url da sua imagem"
            value={image}
            onChange={value => setImage(value)}
          />
          <Dropdown
            title="Time"
            crews={crews}
            value={crew}
            onChange={value => setCrew(value)}
          />
          <Button>Criar card</Button>
        </form>
      </div>
    </>
  )
}