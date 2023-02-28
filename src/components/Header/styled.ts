import { styled } from '@mui/material'

export const HeaderStyled = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.2);',
  padding: '14px 24px',

  '@media screen and (max-width: 762px)': {
    flexDirection: 'column',
    gap: '10px',
  },
})
