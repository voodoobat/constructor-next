import scss from './CanvasCell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as fn from '@src/functions'

function CanvasCell ({
  className,
  cell,
  children,
  select,
  change,
  commit,
  onClick,
  setStartCell,
  isDrawning,
  activeTool,
  dispatch
}) {

  const onMouseDown = () => {
    dispatch(fn.setDrawning(true))
    setStartCell(cell)

    if (activeTool == 'Eraze' || !activeTool) {
      change(cell)
    }
  }

  const onMouseEnter = () => {
    if (isDrawning && activeTool == 'Group') {
      select(cell)
    }
  }

  const onMouseUp = () => {
    dispatch(fn.setDrawning(false))
    commit()
  }

  return (
    <div className={classNames(className, scss._, cell.selected ? scss.is_selected : '')}
         data-selected={cell.selected ? 'true' : ''}
         onClick={onClick}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseEnter={onMouseEnter}>
      {children}
    </div>
  )
}

export default connect(s => ({ ...s }))(CanvasCell)
