import scss from './Cell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { changeScheme } from '@src/functions'

function Cell ({ className, cell, x, y, dispatch, children }) {

  const change = () => dispatch(changeScheme(x, y, cell))

  return (
    <div className={classNames(className, scss._, cell?.selected ? scss.is_selected : '')}
         onClick={change}>
      {children}
    </div>
  )
}


const mapState = state => ({
  activeLoop: state.activeLoop,
  canvas: state.canvas
})

export default connect(mapState)(Cell)
