import scss from './Cursor.module.scss'

import classNames from 'classnames'
import { connect } from 'react-redux'

import { useMousePosition } from '@src/hooks'

import Move from './svg/move.svg'
import Eraze from './svg/eraze.svg'
import ReportRow from './svg/report_row.svg'
import ReportLoop from './svg/report_loop.svg'
import Color from './svg/color.svg'
import Group from './svg/group.svg'
import Size from './svg/size.svg'

const icon  = {
  Move,
  Eraze,
  ReportRow,
  ReportLoop,
  Color,
  Group,
  Size
}

function Cursor ({ className, activeTool }) {
  const Icon = icon[activeTool]

  const { x, y } = useMousePosition()

  return (
    <div className={classNames(className, scss._)}
         style={{
           position: 'fixed',
           top: y,
           left: x,
           pointerEvents: 'none',
           zIndex: 10
         }}>
      <Icon />      
    </div>
  )
}

export default connect(state => ({ ...state }))(Cursor)
