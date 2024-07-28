import { Button, Input, Link, Space } from '@arco-design/web-react'
import React from 'react'
import { Card } from '@arco-design/web-react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }
  return (
    <div className='login-content'>
      <Card className='transparent-card' title='Login'>
        <Space direction='vertical'>
          <Input type='text' name='loginId' placeholder='Username/Email' />
          <Input.Password placeholder='Password' />
          <div style={{ textAlign: 'right' }}>
            <Link
              hoverable={false}
              onClick={() => goToPage('/forgot-password')}
            >
              Forgot password?
            </Link>
          </div>
          <Button shape='round' long onClick={() => goToPage('/home')}>
            Login
          </Button>
          <p>
            Don't have an account?{' '}
            <Link hoverable={false} onClick={() => goToPage('/Register')}>
              Register
            </Link>
          </p>
        </Space>
      </Card>
    </div>
  )
}

export default Login
