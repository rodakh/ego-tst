import React, { FC } from 'react'
import { NativeSelect } from '@mui/material'
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@mui/icons-material/Language'
import VisuallyHidden from '../../VisuallyHidden/VisuallyHidden'
import { LangLabel, LangWrapper } from './styled'

type LangProps = {
  existedLangs: string[]
}
const Lang: FC<LangProps> = ({ existedLangs = ['en'] }) => {
  const { t, i18n } = useTranslation(['common'])
  function languageChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    const language = event.target.value
    i18n.changeLanguage(language)
  }

  return (
    <LangWrapper>
      <LangLabel htmlFor='langSelector'>
        <LanguageIcon
          sx={{
            color: '#fff',
          }}
        />
        <VisuallyHidden>{t('langSelector', { ns: ['common'] })}</VisuallyHidden>
      </LangLabel>
      <NativeSelect
        id='langSelector'
        sx={{
          color: '#fff',
          '&:after': { borderBottomColor: '#fff' },
          '&:before': { borderBottomColor: '#fff' },
          '& > svg': { fill: '#fff' },
        }}
        onChange={languageChange}
        value={i18n.language}
      >
        {existedLangs.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          )
        })}
      </NativeSelect>
    </LangWrapper>
  )
}

export default React.memo(Lang)
