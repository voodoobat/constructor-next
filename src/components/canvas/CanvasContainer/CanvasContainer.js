import scss from './CanvasContainer.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import CanvasBox from '@components/canvas/CanvasBox/CanvasBox'
import Canvas from '@components/canvas/Canvas/Canvas'
import Cursor from '@components/canvas/Cursor/Cursor'
import Zoom from '@components/canvas/Zoom/Zoom'

import { AUTOSAVE_DELAY } from '@src/config'
import * as store from '@store/functions'
import * as util from '@src/util'


function CanvasContainer ({ className, dispatch }) {
  const [scale, setScale] = useState(100)
  const [cursor, setCursor] = useState(false)

  const onMouseEnter = () => setCursor(true)
  const onMouseLeave = () => setCursor(false)

  util.isClient && setTimeout(() => dispatch(store.localSave()), AUTOSAVE_DELAY)

  return (
    <div className={classNames(className, scss._)}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      <CanvasBox scale={scale}>
        <Canvas />
      </CanvasBox>
      {cursor && <Cursor />}
      <div className={classNames(scss.bottom)}>
        <Zoom scale={scale}
              setScale={setScale} />
      </div>
    </div>
  )
}

export default connect(state => ({ ...state }))(CanvasContainer)
