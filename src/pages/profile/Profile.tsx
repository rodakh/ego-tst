import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { t } = useTranslation(['home'])

  return (
    <>
      <Header />
      <Main>
        <h1>Profile</h1>
        <p>{t('test', { ns: ['home'] })}</p>
      </Main>
      <Footer />
    </>
  )
}

export default Profile
