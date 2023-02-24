import React, { FC } from 'react'
import { NavbarStyled } from './styled'
import { NavLink } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { useSelector } from 'react-redux'
import { UserState } from '../../interfaces/user.interface'

const Navbar: FC = () => {
  const user = useSelector((state: { user: UserState }) => state.user.user)
  const isUser = !!user
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!isUser) e.preventDefault()
  }

  return (
    <NavbarStyled>
      <NavLink to={`/news`}>NEWS</NavLink>
      <Tooltip
        title={'Need to login'}
        arrow
        disableHoverListener={isUser}
        disableInteractive={isUser}
        disableFocusListener={isUser}
      >
        <NavLink onClick={handleClick} to={`/profile/${user?.id}`}>
          PROFILE
        </NavLink>
      </Tooltip>
    </NavbarStyled>
  )
}

export default Navbar
