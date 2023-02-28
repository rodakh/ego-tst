import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ProfileLayout, StyledImg, StyledImgWrapper } from './styled'
import { Typography } from '@mui/material'
import VisuallyHidden from '../../components/VisuallyHidden/VisuallyHidden'
import { UserState } from '../../interfaces/user.interface'
import FlipBox from '../../components/Animations/FlipBox'

const ProfilePage = () => {
  const user = useSelector((state: { user: UserState }) => state.user.user)
  const { t } = useTranslation(['profile'])

  return (
    <ProfileLayout>
      <Header />
      <Main style={{ display: 'grid', placeItems: 'center' }}>
        <FlipBox
          front={
            <>
              <StyledImgWrapper>
                <StyledImg src={user?.avatar} alt={`${user?.name} profile avatar`} />
              </StyledImgWrapper>
              <VisuallyHidden>
                {user?.name} {t('hidden.avatar', { ns: ['profile'] })}
              </VisuallyHidden>
            </>
          }
          back={
            <>
              <Typography
                variant={'body1'}
                sx={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                }}
              >
                {user?.name}
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                  wordBreak: 'break-word',
                }}
              >
                {user?.email}
              </Typography>
            </>
          }
        />
      </Main>
      <Footer />
    </ProfileLayout>
  )
}

export default ProfilePage
