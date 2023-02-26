import React, { FC } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import { NewsLayout } from './styled'

const NewsPage: FC = () => {
  const { t } = useTranslation(['home'])

  return (
    <NewsLayout>
      <Header />
      <Main>
        <h1>News</h1>
        <p>{t('test', { ns: ['home'] })}</p>
      </Main>
      <Footer />
    </NewsLayout>
  )
}

export default NewsPage
