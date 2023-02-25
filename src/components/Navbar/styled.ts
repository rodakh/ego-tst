import { styled } from '@mui/material'

export const NavbarStyled = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
})

export const LogoutStyled = styled('button')({
  color: '#000',
  fontSize: '1rem',
  padding: '10px 12px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase',
  '&:hover': {
    color: 'red',
    backgroundColor: 'transparent',
  },
})
