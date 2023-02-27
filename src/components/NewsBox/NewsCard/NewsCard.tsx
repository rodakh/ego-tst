import React, { FC } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface NewsCardProps {
  title: string
  description: string
  onClick?: () => void
  isDeleting: boolean
  imageId: number
}

const NewsCard: FC<NewsCardProps> = ({ title, description, onClick, isDeleting, imageId }) => {
  const { t } = useTranslation(['news'])
  const mockImage = `https://picsum.photos/id/${imageId}/600/400`

  return (
    <Card sx={{ maxWidth: 600, width: '100%', borderRadius: '10px' }}>
      <CardMedia
        component='img'
        alt='mockedNewsImage'
        height='140'
        image={mockImage}
        sx={{
          height: '200px',
        }}
      />
      <CardContent sx={{ backgroundColor: '#3b3737', overflow: 'hidden' }}>
        <Typography
          gutterBottom
          variant='h5'
          color={'#fff'}
          sx={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color={'#fff'}
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: '#3b3737', padding: '16px' }}>
        <Button
          size='small'
          onClick={onClick}
          disabled={isDeleting}
          sx={{
            backgroundColor: '#fff',
            color: '#3b3737',
            '&:hover': {
              color: 'red',
            },
          }}
        >
          {isDeleting
            ? t('helpers.deleting', { ns: ['news'] })
            : t('helpers.delete', { ns: ['news'] })}
        </Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard
