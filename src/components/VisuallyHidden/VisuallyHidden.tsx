import React from 'react'
import { SVisuallyHidden } from './styled'

interface VisuallyHiddenProps {
  children: React.ReactNode | string
}
const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return <SVisuallyHidden>{children}</SVisuallyHidden>
}
export default VisuallyHidden
