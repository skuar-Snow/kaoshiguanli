import React from 'react'
import { useAppSelector } from '../../hooks/store'
import style from './Header.module.scss'
import { Space, Avatar, Dropdown } from "antd"
import type { MenuProps } from 'antd'
import { DownOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'


const Header: React.FC = () => {
  const userInfo = useAppSelector(state => state.user.userInfo)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const items: MenuProps['items'] = [
    {
      key: '3',
      label: <Link to="/setting">用户设置</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: '4',
      danger: true,
      icon: <PoweroffOutlined />,
      label: <span onClick={logout}>退出登录</span>,
    }
  ]
  
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img height={40} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
      </div>
      <Space>
        <Avatar
          size={40}
          style={{ backgroundColor: '#f56a00' }}
          src={userInfo.avatar}
        >{userInfo.username && userInfo.username[0]}</Avatar>
        
        <Dropdown menu={{ items }}>
          <span style={{ fontSize: 14 }}>
            <Space>
              {userInfo.username}
              <DownOutlined />
            </Space>
          </span>
        </Dropdown>
      </Space>
    </div>
  )
}

export default Header