import React from 'react'
import api from './services/api'
import './App.css'
import Header from './Header'

const App = () => {
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`])

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Daniel Santana"
    });

    // console.log(response.data)
    const project = response.data

    setProjects([...projects, project])
  }

  return (
  <>
  <Header title="Projects" />

  <ul>
    {projects.map(project => <li key={project.id}>{project.title}</li>)}
  </ul>

  <buton type="button" onClick={handleAddProject}>Adicionar Projeto</buton>
  </>)
}

export default App;