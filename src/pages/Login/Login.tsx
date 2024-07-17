import { Button, Input, Link, Space } from '@arco-design/web-react'
import React from 'react'
import { Card } from '@arco-design/web-react'
import './Login.css'

const Login: React.FC = () => {
  return (
    <div className='login-content'>
        <Card className='transparent-card' title='Login'>
          <Space direction='vertical'>
            <Input type='text' name='loginId' placeholder='Username/Email' />
            <Input.Password placeholder='Password' />
            <div style={{ textAlign: 'right' }}>
              <Link hoverable={false}>Forgot password?</Link>
            </div>
            <Button shape='round' long>Login</Button>
            <p>Don't have an account? <Link hoverable={false}>Register</Link></p>
          </Space>        
        </Card>
    </div>
  )
}

export default Login
