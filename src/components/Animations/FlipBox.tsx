import React, { FC, useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import { Box } from '@mui/material'

interface FlipProps {
  front: React.ReactNode
  back: React.ReactNode
}
const FlipBox: FC<FlipProps> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <>
      {flipped ? (
        <a.div
          style={{
            maxWidth: '400px',
            width: '100%',
            opacity,
            transform: transform.to((t) => `${t} rotateX(180deg)`),
          }}
        >
          <Box
            onClick={() => setFlipped(!flipped)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '400px',
              maxWidth: '400px',
              width: '100%',
              backgroundColor: '#000',
              borderRadius: '10px',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            {back}
          </Box>
        </a.div>
      ) : (
        <a.div
          style={{ maxWidth: '400px', width: '100%', opacity: opacity.to((o) => 1 - o), transform }}
        >
          <Box
            onClick={() => setFlipped(!flipped)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '400px',
              maxWidth: '400px',
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            {front}
          </Box>
        </a.div>
      )}
    </>
  )
}

export default FlipBox
