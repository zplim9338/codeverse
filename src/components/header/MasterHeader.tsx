import React from 'react'
import {
  Avatar,
  Divider,
  Dropdown,
  Menu,
  Message,
} from '@arco-design/web-react'
import {
  IconDashboard,
  IconExperiment,
  IconHome,
  IconPoweroff,
  IconUser,
} from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const MasterHeader: React.FC = () => {
  const navigate = useNavigate()
  const goToPage = (pagePath: string) => {
    navigate(pagePath)
  }
  const onMenuItemClick = (key: string) => {
    if (key === 'logout') {
      // setUserStatus('logout');
      goToPage('/')
    } else {
      Message.info(`You clicked ${key}`)
    }
  }

  const droplist = (
    <Menu onClickMenuItem={onMenuItemClick}>
      <MenuItem key='0_1' disabled>
        <IconHome />
        Menu 1
      </MenuItem>
      <SubMenu
        key='more'
        title={
          <div style={{ width: 80 }}>
            <IconExperiment />
            See More
          </div>
        }
      >
        <Menu.Item key='workplace'>
          <IconDashboard />
          Workplace
        </Menu.Item>
      </SubMenu>
      <Divider style={{ margin: '4px 0' }} />
      <Menu.Item key='logout'>
        <IconPoweroff />
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <div className='navbar' style={{ paddingLeft: 20 }}>
      <div className='left'>HELLO WORLD</div>
      <ul className='right'>
        <li>
          <Dropdown droplist={droplist} position='br'>
            <Avatar style={{ cursor: 'pointer' }}>
              <IconUser />
              {/* <img alt='avatar' src='' /> */}
            </Avatar>
          </Dropdown>
        </li>
      </ul>
    </div>
  )
}

export default MasterHeader
