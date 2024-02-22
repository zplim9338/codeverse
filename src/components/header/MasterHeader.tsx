import React from 'react'
import { Button } from '@arco-design/web-react'
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon'

interface MasterHeaderProps {
  collapsed: boolean
  handleCollapsed: () => void
}

const MasterHeader: React.FC<MasterHeaderProps> = (props) => {
  const { collapsed, handleCollapsed } = props

  return (
    <Button shape='round' className='trigger' onClick={handleCollapsed}>
      {collapsed ? <IconCaretRight /> : <IconCaretLeft />}
    </Button>
  )
}

export default MasterHeader
