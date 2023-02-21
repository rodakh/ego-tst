import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation(['home'])
  function onClickLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const language = event.target.value
    i18n.changeLanguage(language)
    console.log('language', language)
  }

  return (
    <>
      <Header />
      <Main>
        <h1>Home</h1>

        <select className='custom-select' style={{ width: 200 }} onChange={onClickLanguageChange}>
          <option value='en'>en</option>
          <option value='ua'>ua</option>
        </select>

        <p>{t('test', { ns: ['home'] })}</p>
      </Main>
      <Footer />
    </>
  )
}

export default Home
