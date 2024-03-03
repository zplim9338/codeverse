import { Button, Input, Link, Space } from '@arco-design/web-react'
import React from 'react'
import { Card } from '@arco-design/web-react'
import './Login.css'

const Login: React.FC = () => {
  return (
    <div className='login-content'>
      <Space size='medium' style={{ padding: 10 }} direction='vertical'>
        <Card title='Login' style={{ textAlign: 'left' }}>
          <p>Username/Email:</p>
          <Input type='text' name='loginId' placeholder='Username/Email' />
          <p>Password:</p>
          <Input.Password placeholder='Password' />
          <div style={{ textAlign: 'right' }}>
            <Link>Forgot password?</Link>
          </div>
        </Card>
        <Space direction='horizontal'>
          <Button>Login</Button>
          <p>or</p>
          <Link>Sign Up</Link>
        </Space>
      </Space>
    </div>
  )
}

export default Login
