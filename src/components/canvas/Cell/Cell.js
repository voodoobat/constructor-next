import scss from './Cell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as fn from '@src/functions'

function Cell ({ className, cell, x, y, dispatch, children }) {

  const onClick = () => dispatch(fn.changeScheme(x, y, cell))
  // const onMouseDown = () => console.log('mousedown')


  return (
    <div className={classNames(className, scss._, cell?.selected ? scss.is_selected : '')}
         onClick={onClick}>
         {/* onMouseDown={onMouseDown}> */}

      {children}
    </div>
  )
}


const mapState = state => ({
  activeLoop: state.activeLoop,
  canvas: state.canvas
})

export default connect(mapState)(Cell)
