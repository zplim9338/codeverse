import { useRef, useEffect, useState } from 'react'
import {
  Form,
  Input,
  Button,
  Card,
  Link,
  Message,
} from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import { RegistrationForm } from '../../models/RegistrationForm'
import { RegisterUserRequest } from '../../api/userTypes'
import { registerUser } from '../../api/userService'
import './Register.css'

const FormItem = Form.Item

const Register: React.FC = () => {
  const [form] = Form.useForm<RegistrationForm>()
  const navigate = useNavigate()

  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }

  const handleSubmit = async (values: RegistrationForm) => {
    const data: RegisterUserRequest = {
      username: values.username,
      email: values.email,
      raw_password: values.password,
      confirm_password: values.confirmPassword,
    }

    try {
      const response = await registerUser(data)

      if (response.status === 200) {
        if (response.data.status) {
          form.clearFields()
          Message.success(response.data.message)
        } else {
          Message.error(response.data.message)
        }
      } else {
        Message.error(response.data.message)
      }
    } catch (error) {
      Message.error(`${error}`)
    }
  }

  return (
    <div className='register-content'>
      <Card className='transparent-card' title='Register your account'>
        <Form form={form} onSubmit={handleSubmit} layout='vertical'>
          <FormItem
            label='Name'
            field='name'
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder='Enter your full name...' />
          </FormItem>
          <FormItem
            label='Username'
            field='username'
            rules={[{ required: true, message: 'Please enter a username' }]}
          >
            <Input placeholder='Enter a username...' />
          </FormItem>
          <FormItem
            label='Email address'
            field='email'
            rules={[
              { required: true, message: 'Please enter your email address' },
            ]}
          >
            <Input placeholder='Enter your email address...' />
          </FormItem>
          <FormItem
            label='Password'
            field='password'
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder='Enter your password...' />
          </FormItem>
          <FormItem
            label='Confirm Password'
            field='confirmPassword'
            rules={[
              { required: true, message: 'Please confirm your password' },
            ]}
          >
            <Input.Password placeholder='Enter your password again...' />
          </FormItem>
          <FormItem>
            <Button shape='round' type='primary' long htmlType='submit'>
              Sign up
            </Button>
          </FormItem>
        </Form>
        <p style={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link hoverable={false} onClick={() => goToPage('/')}>
            Sign in.
          </Link>
        </p>
      </Card>
    </div>
  )
}

export default Register
