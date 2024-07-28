import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Space, Image } from '@arco-design/web-react'
import './ForgotPassword.css'
import imgCodingConstruction from '../../assets/images/icon/coding_construction.png'; // Adjust the path as necessary

const Register: React.FC = () => { 
  const navigate = useNavigate()

  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }
  
  return (   
    <div className='forgot-password-content'>
        <Space direction='vertical' style={{alignItems: 'center'}}>
        <Image preview={false}
          width={400}
          src={imgCodingConstruction}
        />
       <h2 style={{color:'white'}}>Please contact administrator to reset your password.</h2>
       <Button shape='round' long onClick={() => goToPage('/')}>Back</Button>
       </Space>
    </div>
  )
}

export default Register
