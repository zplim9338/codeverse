import React from 'react'
import ProjectComp from '../../components/project'
import { Button } from '@arco-design/web-react'
import { MOCK_PROJECTS } from '../../models/ProjectCompMock'
import { Project } from '../../models/Project'
import { Link, useNavigate } from 'react-router-dom'

interface TestProps {
  username: string
}

const Home: React.FC<TestProps> = ({ username }) => {
  const handleEdit = (project: Project) => {
    console.log(project)
  }
  const navigate = useNavigate()

  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is a TEST page.</p>
      <ProjectComp projects={MOCK_PROJECTS} onEdit={handleEdit} />
      <Button type='primary' onClick={() => goToPage('/')}>
        Back To Home
      </Button>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Home
