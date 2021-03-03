import scss from './UndoRedo.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { mapMatrix } from '@components/canvas/Canvas/Canvas.fn'

import Undo from './svg/undo.svg'
import Redo from './svg/redo.svg'

import * as store from '@src/functions'

const reset = {
  selected: false,
  confirm: false
}

function UndoRedo ({ className, dispatch, history, currentStep }) {

  const undo = () => {
    const index = history.findIndex(({ uid }) => uid == currentStep) - 1

    if (history[index]) {
      const { canvas, uid } = history[index]
      const cnvs = mapMatrix(canvas, cell => ({
        ...cell,
        ...reset
      })) 

      dispatch(store.commitCanvas(cnvs, false))
      dispatch(store.setSchemeHistorytStep(uid))
    }
  }

  const redo = () => {
    const index = history.findIndex(({ uid }) => uid == currentStep) + 1

    if (history[index]) {
      const { canvas, uid } = history[index]
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
              onClick={undo}
              type="button">
        <Undo />
      </button>
      <button className={scss.button}
              onClick={redo}
              type="button">
        <Redo />
      </button>
    </div>
  )
}

export default connect(s => ({ ...s}))(UndoRedo)
