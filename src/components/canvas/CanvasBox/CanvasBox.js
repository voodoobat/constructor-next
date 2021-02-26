import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

function CanvasBox ({ className, activeTool, children }) {
  const disabled = activeTool != 'Move'

  return (
    <Draggable disabled={disabled}>
      <div className={classNames(className, scss._)}>
          {children}
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
