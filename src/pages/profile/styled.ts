import styled from 'styled-components'
import img from '../../assets/images/profile-bg.jpg'

export const ProfileLayout = styled.div`
  background: url(${img}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledImgWrapper = styled.div`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-color: #000;
`
export const StyledImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`

export const Front = styled.div``
export const Back = styled.div``
