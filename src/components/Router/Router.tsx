import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute, { PrivateRouteLogin } from './PrivateRoute/PrivateRoute'

const Home = React.lazy(() => import('../../pages/home/HomePage'))
const News = React.lazy(() => import('../../pages/news/NewsPage'))
const Profile = React.lazy(() => import('../../pages/profile/ProfilePage'))
const Login = React.lazy(() => import('../../pages/login/LoginPage'))
const NotFound = React.lazy(() => import('../../pages/notfound/NotFoundPage'))

const Router: FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route
          path='/profile/:id'
          element={
            <PrivateRoute user={null}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PrivateRouteLogin user={null}>
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
