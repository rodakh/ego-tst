import React, { FC, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import { NewsLayout } from './styled'
import { useDeleteNewsMutation, useGetNewsQuery } from '../../features/newsApi'
import { NewsItem } from '../../interfaces/news.interface'
import { areArraysEqual } from '../../utils/areEqual'

const NewsPage: FC = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const [limit, setLimit] = useState<number>(10)
  const { data, isLoading, isError } = useGetNewsQuery(limit)
  const [deleteNews, { isLoading: isDeleting }] = useDeleteNewsMutation()

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteNews(id).unwrap()
      setNews((prevNews) => prevNews?.filter((item) => item.id !== id))
    } catch (error) {
      console.error('Error deleting news item:', error)
    }
  }

  useEffect(() => {
    const areEqual = data && areArraysEqual(data, news)

    if (data && !news.length) {
      setNews(data)
    }

    if (data && !areEqual && limit > 10) {
      const dataCopy = [...data]
      setNews((prevNews) => [...prevNews, ...dataCopy.splice(0, limit - 10)])
    }
  }, [data])

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10)
  }

  return (
    <NewsLayout>
      <Header />
      <Main>
        <h1>News Page</h1>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching news</div>}
        {news && (
          <>
            <ul>
              {news.map((item) => (
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
