import React, { useMemo, useState } from 'react'
import {
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    label: '系统管理',
    icon: <SettingOutlined />,
    children: [
      {
        key: '/setting',
        label: <Link to="/setting">用户设置</Link>,
        icon: <SettingOutlined />
      }
    ]
  },
  {
    key: '2', 
    label: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        key: '/userlist',
        label: <Link to="/userlist">用户列表</Link>,
        icon: <UserOutlined />
      }
    ]
  }
]


const Aside: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()


  const defaultOpenKeys = useMemo(() => {
    const keys: string[] = []
    items.forEach(val => {
      (val as any).children.forEach((v: any) => {
        if (v.key === location.pathname) {
          keys.push(val?.key as string)
        }
      })
    })
    return keys
  }, [])
  
  return (
    <Sider theme="light" style={{ height: '100%' }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        items={items}
      />
    </Sider>
  )
}

export default Aside