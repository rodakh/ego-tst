import React, { FC } from 'react'
import Main from '../../components/Main/Main'
import { Link } from 'react-router-dom'

const NotFoundPage: FC = () => {
  return (
    <>
      <Main>
        Sorry, this page does not exist. go back to <Link to={'/'}>Home</Link>
      </Main>
    </>
  )
}

export default NotFoundPage
