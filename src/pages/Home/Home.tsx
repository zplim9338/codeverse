import React from 'react'

interface HomeProps {
  username: string
}

const Home: React.FC<HomeProps> = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your home page.</p>
    </div>
  )
}

export default Home
