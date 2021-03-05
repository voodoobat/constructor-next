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

  const size = schemeHistory.length

  const hasNext = schemeHistory[size - 1].uid != schemeHistoryStep
  const hasPrev = schemeHistory[0].uid != schemeHistoryStep

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
      <button className={classNames(scss.button, hasPrev ? scss.is_active : '')}
              onClick={() => jump('prev')}
              type="button">
        <Undo />
      </button>
      <button className={classNames(scss.button, hasNext ? scss.is_active : '')}
              onClick={() => jump('next')}
              type="button">
        <Redo />
      </button>
    </div>
  )
}

export default connect(s => ({ ...s}))(UndoRedo)
