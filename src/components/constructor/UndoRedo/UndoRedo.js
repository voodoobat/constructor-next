import scss from './UndoRedo.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Undo from './svg/undo.svg'
import Redo from './svg/redo.svg'

import * as store from '@src/functions'

function UndoRedo ({ className, history, dispatch }) {

  const undo = () => {
    dispatch(store.commitCanvas(
      history[history.length - 2].map(y => y.map(x => ({ ...x, selected: false })))
    ))
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
