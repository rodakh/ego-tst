import React, { FC, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { NewsLayout } from './styled'
import { useGetNewsQuery } from '../../features/newsApi'
import { areArraysEqual } from '../../helpers/arrayHelpers'
import { useDispatch, useSelector } from 'react-redux'
import { addNews, cacheNews, changeLimit } from '../../features/newsSlice'
import { Box, Button, Typography } from '@mui/material'
import NewsBox from '../../components/NewsBox/NewsBox'
import { useTranslation } from 'react-i18next'
import Loader from '../../components/Loader/Loader'

const NewsPage: FC = () => {
  const { t, i18n } = useTranslation(['news'])
  const news = useSelector((state: any) => state.news)
  const dispatch = useDispatch()
  const { data: newsData, isLoading, isError } = useGetNewsQuery(news.limit)

  useEffect(() => {
    const areEqual = newsData && areArraysEqual(newsData, news.news)

    if (newsData && !areEqual && news.limit === 10) {
      dispatch(addNews(newsData))
      dispatch(cacheNews(newsData))
    }

    if (newsData && !areEqual && news.limit > 10) {
      if (areArraysEqual(news.cachedNews, newsData)) return

      const formattedCopy = [...newsData].slice(news.limit - 10)
      const updatedNews = [...news.news, ...formattedCopy]
      dispatch(cacheNews(newsData))
      dispatch(addNews(updatedNews))
    }
  }, [newsData])

  const handleLoadMore = () => {
    dispatch(changeLimit(news.limit + 10))
  }

  return (
    <NewsLayout>
      <Header />
      <Main>
        <Typography
          variant={'h1'}
          fontSize={'3rem'}
          color={'#fff'}
          fontWeight={700}
          sx={{
            marginBottom: '20px',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          {t('title', { ns: ['news'] })}
        </Typography>

        {isLoading && (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
          >
            <Loader withText={true} />
          </Box>
        )}

        {isError && (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
          >
            <Typography variant={'body2'} color={'red'}>
              {t('helpers.error', { ns: ['news'] })}
            </Typography>
          </Box>
        )}

        <NewsBox key={i18n.language} news={news.news} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            onClick={handleLoadMore}
            sx={{
              backgroundColor: '#3b3737',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#3b3737',
              },
            }}
          >
            {t('helpers.loadMore', { ns: ['news'] })}
          </Button>
        </Box>
      </Main>
      <Footer />
    </NewsLayout>
  )
}

export default NewsPage
