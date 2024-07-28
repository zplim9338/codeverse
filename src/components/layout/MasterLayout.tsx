import './MasterLayout.css'
import React, { useState } from 'react'
import { Layout, Breadcrumb } from '@arco-design/web-react'
import MasterHeader from '../header/MasterHeader'
import MasterSidebarMenu from '../sidebar/MasterSidebarMenu'
import { Link, Outlet } from 'react-router-dom'

const Sider = Layout.Sider
const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

const MasterLayout: React.FC = () => {
  const [collapsed, setCollapsedStatus] = useState(false)
  const handleCollapsed = () => {
    setCollapsedStatus(!collapsed)
  }

  return (
    <Layout className='layout-collapse-demo'>
        <Sider collapsed={collapsed} onCollapse={handleCollapsed} collapsible breakpoint='xl'> {/*trigger={null} */}
          <MasterSidebarMenu />
        </Sider>
      <Layout>
        <Header>
          <MasterHeader />
        </Header>
        <Layout style={{ padding: '0 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/test'>Test</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: '0 24px' }}>
            <Outlet />
          </Content>
          <Footer>Developed By: Lim Zhong Peng</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MasterLayout
