import scss from './Cell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { changeScheme } from '@src/functions'

function Cell ({
  className,
  x, y,
  activeLoop,
  dispatch,
  children }) {

  const clickHandle = () => dispatch(
    changeScheme(x, y, activeLoop)
  )

  return (
    <div className={classNames(className, scss._)}
         onClick={clickHandle}>
      {children}
    </div>
  )
}


const mapState = state => ({
  activeLoop: state.activeLoop,
  canvas: state.canvas
})

export default connect(mapState)(Cell)
