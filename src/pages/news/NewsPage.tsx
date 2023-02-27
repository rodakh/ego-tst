import React, { FC, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { NewsLayout } from './styled'
import { useDeleteNewsMutation, useGetNewsQuery } from '../../features/newsApi'
import { areArraysEqual } from '../../utils/arrayHelpers'
import { useDispatch, useSelector } from 'react-redux'
import { addNews, cacheNews, changeLimit, removeStoredNews } from '../../features/newsSlice'
import { NewsItem } from '../../interfaces/news.interface'

const NewsPage: FC = () => {
  const news = useSelector((state: any) => state.news)
  const dispatch = useDispatch()
  const { data: newsData, isLoading, isError } = useGetNewsQuery(news.limit)
  const [deleteNews, { isLoading: isDeleting }] = useDeleteNewsMutation()

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteNews(id).unwrap()
      dispatch(removeStoredNews(id))
    } catch (error) {
      console.error('Error deleting news item:', error)
    }
  }

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
        <h1>News Page</h1>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching news</div>}
        {news.news && (
          <>
            <ul>
              {news.news.map((item: NewsItem) => (
                <li key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <button onClick={() => handleDelete(item.id)} disabled={isDeleting}>
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleLoadMore}>Load More</button>
          </>
        )}
      </Main>
      <Footer />
    </NewsLayout>
  )
}

export default NewsPage
