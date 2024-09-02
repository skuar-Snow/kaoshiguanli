import React, { useEffect } from 'react'
import style from './Index.module.scss'
import { useAppDispatch } from '../hooks/store'
import { getUserInfo } from '../store/models/user'
import Header from '../components/header/Header'
import Aside from '../components/aside/Aside'
import { Layout } from 'antd';

const { Content } = Layout;

interface Props {
  children: JSX.Element
}

const Index: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <div className={style.layout}>
      <Header />
      <Layout>
        <Aside />
        <Content className={style.content}>
          {props.children}
        </Content>
      </Layout>
    </div>
  )
}

export default Index