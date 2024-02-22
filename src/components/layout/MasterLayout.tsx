import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Button } from '@arco-design/web-react'
import MasterHeader from '../header/MasterHeader'
import MasterSidebarMenu from '../sidebar/MasterSidebarMenu'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../../pages/Home'
import Test from '../../pages/Test'

const Sider = Layout.Sider
const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

const MasterLayout: React.FC = () => {
  const username = 'John Doe'
  const [collapsed, setCollapsedStatus] = useState(false)
  const navigate = useNavigate()
  const handleCollapsed = () => {
    setCollapsedStatus(!collapsed)
  }
  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }

  return (
    <div>
      <Layout className='layout-collapse-demo'>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          breakpoint='xl'
          style={{ height: '100vh' }}
        >
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
              <Button type='primary' onClick={() => goToPage('/')}>
                Back To Home
              </Button>
              <Button type='primary' onClick={() => goToPage('/test')}>
                Test
              </Button>
              <Routes>
                <Route path='/' element={<Home username={username} />} />
                <Route path='/test' element={<Test username={username} />} />
              </Routes>
            </Content>
            <Footer>FOOTER</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default MasterLayout
