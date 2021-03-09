import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

import Numbers from '@components/canvas/Numbers/Numbers'
import ReportContainer from '@components/canvas/ReportContainer/ReportContainer'


function CanvasBox ({
  className,
  activeTool,
  schemeCanvas,
  schemeOnlyOddCells,
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
          <Numbers cells={schemeCanvas[0]}
                   onlyOdd={schemeOnlyOddCells} />
          <ReportContainer type="cell" />
        </div>
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
