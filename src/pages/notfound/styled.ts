import styled from 'styled-components'
import img from '../../assets/images/404-bg.jpg'

export const NotFoundLayout = styled.div`
  background: url(${img}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
