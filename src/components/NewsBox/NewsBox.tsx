import React, { FC } from 'react'
import { NewsItem } from '../../interfaces/news.interface'
import { animated, useChain, useSpringRef, useTransition } from '@react-spring/web'
import NewsCard from './NewsCard/NewsCard'
import { Grid } from '@mui/material'
import { removeStoredNews } from '../../features/newsSlice'
import { useDeleteNewsMutation } from '../../features/newsApi'
import { useDispatch } from 'react-redux'

interface NewsBoxProps {
  news: NewsItem[]
}
const NewsBox: FC<NewsBoxProps> = ({ news }) => {
  const dispatch = useDispatch()
  const [deleteNews, { isLoading: isDeleting }] = useDeleteNewsMutation()

  const transRef = useSpringRef()
  const transitions = useTransition(news, {
    ref: transRef,
    unique: true,
    trail: 400 / news.length,
    from: { opacity: 0, transform: 'scale(0)', width: '100%', overflow: 'hidden' },
    enter: { opacity: 1, transform: 'scale(1)', width: '100%', overflow: 'hidden' },
    leave: { opacity: 0, transform: 'scale(0)', width: '100%', overflow: 'hidden' },
  })
  useChain([transRef], [0.1, 0.3])
  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteNews(id).unwrap()
      dispatch(removeStoredNews(id))
    } catch (error) {
      console.error('Error deleting news item:', error)
    }
  }

  return (
    <Grid
      sx={{
        placeItems: 'center',
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        '& > div:first-of-type': {
          gridColumn: '1 / -1',
          maxWidth: '100%',
          '& > div': {
            maxWidth: '100%',
            '& > img': {
              height: '350px',
            },
          },
        },
      }}
    >
      {news &&
        transitions((props: any, item: NewsItem) => (
          <animated.div key={item.id} style={props}>
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.body}
              onClick={() => handleDelete(item.id)}
              imageId={item.id}
              isDeleting={isDeleting}
            />
          </animated.div>
        ))}
    </Grid>
  )
}

export default NewsBox
