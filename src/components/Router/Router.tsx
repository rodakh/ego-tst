import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute, { PrivateRouteLogin } from './PrivateRoute/PrivateRoute'
import { useSelector } from 'react-redux'
import { UserState } from '../../interfaces/user.interface'
import Loader from '../Loader/Loader'

const Home = React.lazy(() => import('../../pages/home/HomePage'))
const News = React.lazy(() => import('../../pages/news/NewsPage'))
const Profile = React.lazy(() => import('../../pages/profile/ProfilePage'))
const Login = React.lazy(() => import('../../pages/login/LoginPage'))
const NotFound = React.lazy(() => import('../../pages/notfound/NotFoundPage'))

const Router: FC = () => {
  const user = useSelector((state: { user: UserState }) => state.user.user)

  return (
    <React.Suspense fallback={<Loader withLayout={true} />}>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route
          path='/profile/:id'
          element={
            <PrivateRoute user={user}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PrivateRouteLogin user={user}>
              <Login />
            </PrivateRouteLogin>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default Router
