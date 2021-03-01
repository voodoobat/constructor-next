import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

import CellNumbers from '@components/canvas/CellNumbers/CellNumbers'

function CanvasBox ({ className, activeTool, canvas, children }) {
  const disabled = activeTool != 'Move'

  return (
    <Draggable disabled={disabled}>
      <div className={classNames(className, scss._)}>
        {children}
        <CellNumbers cells={canvas[0]} />
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
