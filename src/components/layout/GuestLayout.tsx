import React, { useState, ReactNode } from 'react'
import { Layout } from '@arco-design/web-react'
import './GuestLayout.css'
import { Outlet } from 'react-router-dom'

const Footer = Layout.Footer
const Content = Layout.Content

const GuestLayout: React.FC = () => {
  return (
    <div className='layout-basic-demo'>
      <Layout style={{ height: '100vh' }}>
        <Content>
          <Outlet />
        </Content>
        <Footer>Developed By: Lim Zhong Peng</Footer>
      </Layout>
    </div>
  )
}

export default GuestLayout
