import scss from './CanvasContainer.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Canvas from '@components/canvas/Canvas/Canvas'
import Zoom from '@components/canvas/Zoom/Zoom'

function CanvasContainer ({ className  }) {
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

export default connect(state => ({ ...state }))(CanvasContainer)
