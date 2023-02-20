import React from 'react'
import { Container } from '@mui/material'

interface MainProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  children: React.ReactNode
}
const Main: React.FC<MainProps> = ({ maxWidth = 'xl', children }) => {
  return (
    <main>
      <Container maxWidth={maxWidth}>{children}</Container>
    </main>
  )
}

export default React.memo(Main)
