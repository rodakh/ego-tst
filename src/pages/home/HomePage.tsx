import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { Link } from 'react-router-dom'
import CommonTrail from '../../components/Animations/CommonTrail'
import { HomeLayout } from './styled'

const HomePage = () => {
  const { t } = useTranslation(['home'])

  return (
    <HomeLayout>
      <Header />
      <Main>
        <CommonTrail
          config={{
            config: { mass: 5, tension: 2000, friction: 200 },
            opacity: 1,
            delay: 400,
            x: 0,
            from: { opacity: 0, x: 20, height: 0 },
          }}
        >
          <Typography variant={'h1'} fontSize={'3rem'} color={'#fff'} fontWeight={700}>
            {t('title', { ns: ['home'] })}
          </Typography>
          <Typography variant={'h3'} fontSize={'2rem'} color={'#fff'} fontWeight={700}>
            {t('description1', { ns: ['home'] })}
          </Typography>
          <Typography variant={'h3'} fontSize={'2rem'} color={'#fff'} fontWeight={700}>
            {t('description2', { ns: ['home'] })}
          </Typography>
          <Typography variant={'h3'} fontSize={'2rem'} color={'#fff'} fontWeight={700}>
            {t('description3', { ns: ['home'] })}
          </Typography>
          <Typography
            variant={'body1'}
            fontSize={'1rem'}
            color={'#fff'}
            mt={'20px'}
            fontWeight={700}
          >
            <Link
              to={'/news'}
              style={{
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {t('link', { ns: ['home'] })}
              <ArrowCircleRightOutlinedIcon style={{ marginLeft: '10px' }} />
            </Link>
          </Typography>
        </CommonTrail>
      </Main>
      <Footer />
    </HomeLayout>
  )
}

export default HomePage
