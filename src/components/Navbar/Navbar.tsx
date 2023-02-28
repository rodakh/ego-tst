import React, { FC } from 'react'
import { LogoutStyled, NavbarStyled } from './styled'
import { Link, NavLink } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { useSelector } from 'react-redux'
import { UserState } from '../../interfaces/user.interface'
import { useTranslation } from 'react-i18next'
import { useLogout } from '../../hooks/useLogout'

const Navbar: FC = () => {
  const user = useSelector((state: { user: UserState }) => state.user.user)
  const { handleLogout } = useLogout()
  const { t } = useTranslation(['common'])
  const isUser = !!user
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isUser) e.preventDefault()
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
