import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

import CellNumbers from '@components/canvas/CellNumbers/CellNumbers'

function CanvasBox ({ className, activeTool, canvas, scale, children }) {
  const disabled = activeTool != 'Move'
  const style = {
    transform: `scale(${scale / 100})`
  }

  return (
    <Draggable disabled={disabled}>
      <div className={classNames(className, scss._)}>
        <div style={style}>
          {children}
          <CellNumbers cells={canvas[0]} />
        </div>
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
