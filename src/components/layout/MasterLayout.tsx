import React, { useState } from 'react'
import { Layout, Breadcrumb } from '@arco-design/web-react'
import MasterHeader from '../header/MasterHeader'
import MasterSidebarMenu from '../sidebar/MasterSidebarMenu'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './MasterLayout.css'

const Sider = Layout.Sider
const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

const MasterLayout: React.FC = () => {
  const [collapsed, setCollapsedStatus] = useState(false)
  const navigate = useNavigate()
  const handleCollapsed = () => {
    setCollapsedStatus(!collapsed)
  }
  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }

  return (
    <Layout className='layout-collapse-demo'>
      <Sider collapsed={collapsed} collapsible trigger={null} breakpoint='xl'>
        <MasterSidebarMenu />
      </Sider>
      <Layout>
        <Header>
          <MasterHeader
            collapsed={collapsed}
            handleCollapsed={handleCollapsed}
          />
        </Header>
        <Layout>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/test'>Test</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <Outlet />
          </Content>
          <Footer>Developed By: Lim Zhong Peng</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MasterLayout
