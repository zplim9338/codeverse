import React, { useState } from 'react'
import { Layout, Breadcrumb } from '@arco-design/web-react'
import Login from '../../pages/Login/Login'
import './GuestLayout.css'

const Footer = Layout.Footer
const Content = Layout.Content

const GuestLayout: React.FC = () => {
  return (
    <div className='layout-basic-demo'>
      <Layout style={{ height: '100vh' }}>
        <Content>
          <Login />
        </Content>
        <Footer>Developed By: Lim Zhong Peng</Footer>
      </Layout>
    </div>
  )
}

export default GuestLayout
