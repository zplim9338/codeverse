import { Button, Input, Link, Message, Space } from '@arco-design/web-react'
import React, { useState } from 'react'
import { Card } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/userService'
import './Login.css'
import { LoginRequest } from '../../api/userTypes'
import { setTokens } from '../../api/tokenService'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [loginId, setLoginId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }

  const handleLogin = async () => {
    const req: LoginRequest = {
      login_id: loginId,
      password: password,
    }

    try {
      const { status, data } = await loginUser(req)

      if (status === 200) {
        // Handle successful login, e.g., navigate to home page
        if (data.status) {
          setTokens(data.data.access_token, data.data.refresh_token)
          goToPage('/home')
        } else {
          Message.error(`Login failed: ${data.message}`)
        }
      } else {
        // Handle login error
        Message.error(`Login failed: ${data.message}`)
      }
    } catch (error) {
      Message.error(`Login error: ${error}`)
      // console.error('Login error:', error)
    }
  }

  return (
    <div className='login-content'>
      <Card className='transparent-card' title='Login'>
        <Space direction='vertical'>
          <Input
            type='text'
            name='loginId'
            placeholder='Username/Email'
            value={loginId}
            onChange={(e) => setLoginId(e)}
          />
          <Input.Password
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e)}
          />
          <div style={{ textAlign: 'right' }}>
            <Link
              hoverable={false}
              onClick={() => goToPage('/forgot-password')}
            >
              Forgot password?
            </Link>
          </div>
          <Button shape='round' long onClick={handleLogin}>
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
