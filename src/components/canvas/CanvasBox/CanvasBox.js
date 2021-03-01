import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

import Report from '@components/canvas/Report/Report'
import CellNumbers from '@components/canvas/CellNumbers/CellNumbers'


function CanvasBox ({ className, activeTool, reports, canvas, scale, children }) {
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
          <div className={scss.report}>
            {reports.map(rep => <Report report={rep} key={rep.uid} />)}
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
