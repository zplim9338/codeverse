import React, { useState } from 'react'
import { Project } from '../../models/Project'
import { Grid, Card, Link } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
import ProjectForm from '../projectForm'

const Row = Grid.Row
const Col = Grid.Col

interface ProjectCompProps {
  projects: Project[]
  onEdit: (project: Project) => void
}

function ProjectComp(props: ProjectCompProps) {
  const { projects, onEdit } = props

  const [projectBeingEdited, setProjectBeingEdited] = useState({})

  const handleEditClick = (project: Project) => {
    setProjectBeingEdited(project)
  }

  return (
    <Row gutter={{ md: 8, lg: 24, xl: 32 }}>
      {projects.map((project) => (
        <Col span={6} key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm cancelEdit={handleEditClick} />
          ) : (
            <Card
              className='card'
              title='Custom hover style'
              style={{ marginBottom: 20 }}
              hoverable
              extra={
                <Link
                  onClick={() => {
                    handleEditClick(project)
                  }}
                >
                  More
                </Link>
              }
            >
              <img src={project.imageUrl} alt={project.name} />
              <section className='section dark'>
                <h5 className='strong'>
                  <strong>{project.name}</strong>
                </h5>
                <p>{project.description}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
              </section>
            </Card>
          )}
        </Col>
      ))}
    </Row>
  )
}

export default ProjectComp
