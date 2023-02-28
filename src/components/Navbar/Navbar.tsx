import React, { FC } from 'react'
import { LogoutStyled, NavbarStyled } from './styled'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { UserState } from '../../interfaces/user.interface'
import { logout } from '../../features/userSlice'
import { useTranslation } from 'react-i18next'

const Navbar: FC = () => {
  const user = useSelector((state: { user: UserState }) => state.user.user)
  const navigate = useNavigate()
  const { t } = useTranslation(['common'])
  const dispatch = useDispatch()
  const isUser = !!user
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isUser) e.preventDefault()
  }

  function handleLogout() {
    dispatch(logout())
    navigate('/')
  }

  return (
    <NavbarStyled>
      <NavLink to={`/news`} className={'nav-link'}>
        {t('navbar.news', { ns: ['common'] })}
      </NavLink>
      <Tooltip
        title={'Need to login'}
        arrow
        disableHoverListener={isUser}
        disableInteractive={isUser}
        disableFocusListener={isUser}
      >
        <NavLink
          onClick={handleClick}
          className={isUser ? 'nav-link' : 'nav-link nav-link--disabled'}
          to={`/profile/${user?.id}`}
        >
          {t('navbar.profile', { ns: ['common'] })}
        </NavLink>
      </Tooltip>
      {isUser ? (
        <LogoutStyled onClick={handleLogout} className={'nav-user'}>
          {t('navbar.logout', { ns: ['common'] })}
        </LogoutStyled>
      ) : (
        <Link to={'/login'} className={'nav-user'}>
          {t('navbar.login', { ns: ['common'] })}
        </Link>
      )}
    </NavbarStyled>
  )
}

export default Navbar
