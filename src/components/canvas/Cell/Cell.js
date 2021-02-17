import scss from './Cell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as fn from '@src/functions'

function Cell ({
  className,
  cell,
  dispatch,
  select,
  commit,
  setStartCell,
  children,
  isDrawning,
  activeTool
}) {

  const onMouseDown = () => {
    dispatch(fn.setDrawning(true))
    dispatch(fn.changeScheme(cell))
    setStartCell(cell)
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
    <div className={classNames(className, scss._, cell?.selected ? scss.is_selected : '')}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseEnter={onMouseEnter}>
      {children}
    </div>
  )
}


const mapState = state => ({
  isDrawning: state.isDrawning,
  activeTool: state.activeTool
})

export default connect(mapState)(Cell)
