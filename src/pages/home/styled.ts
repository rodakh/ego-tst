import styled from 'styled-components'
import img from '../../assets/images/home.jpg'

export const HomeLayout = styled.div`
  background: url(${img}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
