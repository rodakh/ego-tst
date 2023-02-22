import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('../../pages/home/Home'))
const News = React.lazy(() => import('../../pages/news/News'))
const Profile = React.lazy(() => import('../../pages/profile/Profile'))
const NotFound = React.lazy(() => import('../../pages/notfound/NotFound'))

const Router: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default Router
