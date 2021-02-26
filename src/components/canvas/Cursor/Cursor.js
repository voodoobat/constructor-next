import scss from './Cursor.module.scss'

import { connect } from 'react-redux'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'

import { useMousePosition } from '@src/hooks'

import Move from './svg/move.svg'
import Eraze from './svg/eraze.svg'
import Report from './svg/report.svg'
import ReportRow from './svg/report_row.svg'
import ReportLoop from './svg/report_loop.svg'
import Color from './svg/color.svg'
import Group from './svg/group.svg'
import Size from './svg/size.svg'


const icon  = {
  Move,
  Eraze,
  Report,
  ReportRow,
  ReportLoop,
  Color,
  Group,
  Size
}

function Cursor ({ className, activeLoopIcon, activeTool }) {
  const { x, y } = useMousePosition()

  let ToolIcon

  if (activeTool && activeTool != 'Size') {
    ToolIcon = icon[activeTool]
  }

  // TODO: refactor this shit
  return <>
    {(ToolIcon || activeLoopIcon) &&
      <div className={classNames(className, scss._)}
           style={{
            position: 'fixed',
            top: y,
            left: x,
            pointerEvents: 'none',
            zIndex: 10
          }}>
        {ToolIcon && <ToolIcon />}
        {activeLoopIcon && <ReactSVG src={`/svg/loop/${activeLoopIcon}`} />}
      </div>
    }
  </>
}

export default connect(state => ({ ...state }))(Cursor)
