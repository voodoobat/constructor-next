import scss from './Cell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as fn from '@src/functions'

function Cell ({
  className,
  cell,
  dispatch,
  select,
  setStart,
  children,
  isDrawning
}) {

  const onMouseDown = () => {
    dispatch(fn.setIsDrawning(true, { cell }))
    dispatch(fn.changeScheme(cell))
    setStart(cell)
  }

  const onMouseEnter = () => {
    if (isDrawning) {
      select(cell)
    }
  }

  const onMouseUp = () => dispatch(
    fn.setIsDrawning(false)
  )

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
  isDrawning: state.isDrawning
})

export default connect(mapState)(Cell)
