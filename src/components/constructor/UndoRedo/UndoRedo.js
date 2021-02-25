import scss from './UndoRedo.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { reselect } from '@components/canvas/Canvas/Canvas.fn'

import Undo from './svg/undo.svg'
import Redo from './svg/redo.svg'

import * as store from '@src/functions'

function UndoRedo ({ className, dispatch, history, currentStep }) {

  const undo = () => {
    const index = history.findIndex(({ uid }) => uid == currentStep) - 1

    if (index > -1) {
      const { canvas, uid } = history[index]

      dispatch(store.commitCanvas(reselect(canvas), false))
      dispatch(store.setCurrentStep(uid))
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
              type="button">
        <Redo />
      </button>
    </div>
  )
}

export default connect(s => ({ ...s}))(UndoRedo)
