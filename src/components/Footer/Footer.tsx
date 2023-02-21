import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation(['home'])

  return (
    <footer>
      <p>{t('test2', { ns: ['home'] })}</p>
    </footer>
  )
}

export default Footer
