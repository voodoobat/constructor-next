import scss from './UndoRedo.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { reselect } from '@components/canvas/Canvas/Canvas.fn'

import Undo from './svg/undo.svg'
import Redo from './svg/redo.svg'

import * as store from '@src/functions'

function UndoRedo ({ className, dispatch, history }) {

  const undo = () => {
    dispatch(store.commitCanvas(reselect(history[history.length - 2].canvas)))
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
