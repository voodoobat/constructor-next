import scss from './Cell.module.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import * as actions from '@src/actions'
import { setNewCanvas } from '@src/functions'

function Cell ({ className, canvas, x, y, activeLoop, setCanvas, children }) {

  return (
    <div className={classNames(className, scss._)}
         onClick={() => setCanvas(
           setNewCanvas(canvas, x, y, activeLoop)
         )}>
      {children}
    </div>
  )
}


const mapState = state => ({
  activeLoop: state.activeLoop,
  canvas: state.canvas
})

const mapDispatch = dispatch => {
  const { setCanvas } = bindActionCreators(actions, dispatch)

  return {
    setCanvas
  }
}

export default connect(mapState, mapDispatch)(Cell)
