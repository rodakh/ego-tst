import React, { FC } from 'react'
import { useTrail, a } from '@react-spring/web'
import { ICommonTrails } from '../../interfaces/animations.unterface'

interface CommonTrailProps {
  children: JSX.Element | JSX.Element[]
  config: ICommonTrails
  reAnimate?: boolean
}
const CommonTrail: FC<CommonTrailProps> = ({ children, config, reAnimate = true }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, config)

  return (
    <>
      {reAnimate &&
        trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
            <a.div style={style}>{items[index]}</a.div>
          </a.div>
        ))}
    </>
  )
}

export default CommonTrail
