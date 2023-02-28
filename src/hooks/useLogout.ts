import { logout } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = (): void => {
    dispatch(logout())
    navigate('/')
  }

  return { handleLogout }
}
