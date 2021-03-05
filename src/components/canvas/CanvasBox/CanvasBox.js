import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

import CellNumbers from '@components/canvas/CellNumbers/CellNumbers'
import ReportContainer from '@components/canvas/ReportContainer/ReportContainer'


function CanvasBox ({
  className,
  activeTool,
  schemeCanvas,
  scale,
  children
}) {

  const disabled = activeTool != 'Move'
  const style = {
    transform: `scale(${scale / 100})`
  }

  return (
    <Draggable disabled={disabled}>
      <div className={classNames(className, scss._)}>
        <div className={scss.scale_box}
             style={style}>
          {children}
          <CellNumbers cells={schemeCanvas[0]} />
          <ReportContainer />
        </div>
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
