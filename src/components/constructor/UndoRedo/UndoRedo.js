import scss from './UndoRedo.module.scss'

import classNames from 'classnames'

import Undo from './svg/undo.svg'
import Redo from './svg/Redo.svg'

export default function UndoRedo ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      <button className={scss.button}
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
