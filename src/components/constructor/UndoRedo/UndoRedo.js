import scss from './UndoRedo.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { mapMatrix } from '@components/canvas/Canvas/Canvas.fn'

import Undo from './svg/undo.svg'
import Redo from './svg/redo.svg'

import * as fn from './UndoRedo.fn'
import * as store from '@store/functions'

const reset = {
  selected: false,
  confirm: false
}

function UndoRedo ({
  className,
  dispatch,
  schemeHistory,
  schemeHistoryStep
}) {

  const jump = location => {
    const step = fn.getStep(schemeHistory, schemeHistoryStep)[location]

    if (step) {
      const { canvas, uid } = step
      const cnvs = mapMatrix(canvas, cell => ({
        ...cell,
        ...reset
      })) 

      dispatch(store.commitCanvas(cnvs, false))
      dispatch(store.setSchemeHistorytStep(uid))
    }
  }

  return (
    <div className={classNames(className, scss._)}>
      <button className={scss.button}
              onClick={() => jump('prev')}
              type="button">
        <Undo />
      </button>
      <button className={scss.button}
              onClick={() => jump('next')}
              type="button">
        <Redo />
      </button>
    </div>
  )
}

export default connect(s => ({ ...s}))(UndoRedo)
