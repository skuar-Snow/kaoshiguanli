import { Navigate } from 'react-router-dom'
import Login from '../pages/login/Login'
import UserList from '../pages/userlist/UserList'
import Setting from '../pages/setting/Setting'
import Layout from '../layout/Index'
import Auth from '../auth/Auth'

const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/userlist',
    element: (
      <Auth>
        <Layout>
          <UserList />
        </Layout>
      </Auth>
    )
  },
  {
    path: '/setting',
    element: (
      <Auth>
        <Layout>
          <Setting />
        </Layout>
      </Auth>
    )
  },
  {
    path: '/',
    element: <Navigate to="/userlist" />
  }
]



export default routes