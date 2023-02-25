export interface ICommonTrails {
  config?: {
    mass?: number
    tension?: number
    friction?: number
    clamp?: boolean
    precision?: number
    velocity?: number
  }
  delay?: number
  duration?: number
  opacity?: number
  x?: number
  y?: number
  height?: number
  from?: {
    opacity?: number
    x?: number
    y?: number
    height?: number
  }
}
