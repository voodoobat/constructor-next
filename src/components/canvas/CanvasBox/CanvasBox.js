import scss from './CanvasBox.module.scss'

import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import classNames from 'classnames'

import Report from '@components/canvas/Report/Report'

function CanvasBox ({ className, activeTool, reports, children }) {
  const disabled = activeTool != 'Move'

  return (
    <Draggable disabled={disabled}>
      <div className={classNames(className, scss._)}>
        {children}

        <div className={scss.report}>
          {reports.map(rep => <Report report={rep} key={rep.uid} />)}
        </div>
      </div>
    </Draggable>
  )
}

export default connect(state => ({ ...state }))(CanvasBox)
