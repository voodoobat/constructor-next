import scss from './CanvasContainer.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Canvas from '@components/canvas/Canvas/Canvas'
import Zoom from '@components/canvas/Zoom/Zoom'

export default function CanvasContainer ({ className }) {
  const [scale, setScale] = useState(100)

  return (
    <div className={classNames(className, scss._)}>
      <Canvas scale={scale} />
      <div className={classNames(scss.bottom)}>
        <Zoom scale={scale}
              setScale={setScale} />
      </div>
    </div>
  )
}
