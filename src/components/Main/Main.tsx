import React from 'react'
import { Container } from '@mui/material'

interface MainProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  children: React.ReactNode
  style?: React.CSSProperties
}
const Main: React.FC<MainProps> = ({ maxWidth = 'lg', children, style }) => {
  return (
    <main>
      <Container maxWidth={maxWidth} sx={style}>
        {children}
      </Container>
    </main>
  )
}

export default React.memo(Main)
