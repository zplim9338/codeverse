import React from 'react'
import { getUserAccountList } from '../../api/userService'
import { Message } from '@arco-design/web-react'

interface HomeProps {
  username: string
}

const Home: React.FC<HomeProps> = ({ username }) => {
  const handleGetUserAccountList = async () => {
    try {
      const { data } = await getUserAccountList()

      console.log(data)
    } catch (error) {
      Message.error(`Login error: ${error}`)
    }
  }

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your home page.</p>
      <button onClick={() => handleGetUserAccountList()}>HELLO WORLD</button>
    </div>
  )
}

export default Home
