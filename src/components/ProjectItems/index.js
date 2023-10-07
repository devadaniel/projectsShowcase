import './index.css'

const ProjectItems = props => {
  const {projects} = props
  const {name, imageUrl} = projects
  return (
    <li className="projects-items">
      <img src={imageUrl} alt={name} className="project-image" />
      <p className="projects-name">{name}</p>
    </li>
  )
}

export default ProjectItems
