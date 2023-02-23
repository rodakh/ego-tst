import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { IUser } from '../../../interfaces/user.interface'

type PrivateRouteProps = {
  user: IUser | null
  children: JSX.Element
}
const PrivateRoute: FC<PrivateRouteProps> = ({ user, children }) => {
  const location: string = useLocation().pathname

  return user ? children : <Navigate to={'/login'} state={{ from: location }} replace />
}

export const PrivateRouteLogin: FC<PrivateRouteProps> = ({ user, children }) => {
  const location: string = useLocation().pathname

  return user ? <Navigate to={'/'} state={{ from: location }} replace /> : children
}

export default PrivateRoute
