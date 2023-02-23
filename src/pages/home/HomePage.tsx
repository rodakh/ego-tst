import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation(['home'])

  return (
    <>
      <Header />
      <Main>
        <h1>Home</h1>
        <p>{t('test', { ns: ['home'] })}</p>
      </Main>
      <Footer />
    </>
  )
}

export default HomePage
