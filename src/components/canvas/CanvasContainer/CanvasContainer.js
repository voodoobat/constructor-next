import scss from './CanvasContainer.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Canvas from '@components/canvas/Canvas/Canvas'
import Zoom from '@components/canvas/Zoom/Zoom'

export default function CanvasContainer ({ className }) {
  const [scale, setScale] = useState(100)

  return (
    <div className={classNames(className, scss._)}>
      <Canvas
        scale={scale}
        matrix={[
          [3,5,3,5,6,3,1,7,1,1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,5,6,7,1,8,9,3,3],
          [3,1,1,7,7,1,1,1,1,1,1,1,1,1,1,1,1,1],
          [1,6,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1],
          [1,1,1,1,5,8,7,8,1,1,1,1,1,1,1,1,1,1],
          [1,1,4,5,1,1,1,1,1,1,1,1,3,3,1,5,1,1],
          [1,1,1,1,1,1,7,7,1,9,1,1,1,1,1,1,1,1],
          [1,1,4,1,1,1,1,1,1,1,1,1,9,3,1,1,1,1]
        ]} />
      <div className={classNames(scss.bottom)}>
        <Zoom scale={scale}
              setScale={setScale}/>
      </div>
    </div>
  )
}
