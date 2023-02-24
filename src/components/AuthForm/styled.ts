import styled from 'styled-components'

export const AuthFormLayout = styled.div`
  max-width: 50vw;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
export const AuthFormStyled = styled.form`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`
