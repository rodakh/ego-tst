import { styled } from '@mui/material'

export const HeaderStyled = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.2);',
  padding: '14px 24px',
})

export const LogoStyled = styled('span')({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#fff',
})

export const LogoLetterStyled = styled('span')({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'red',
})
