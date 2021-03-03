import scss from './Resize.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@src/functions'

import * as fn from './Resize.fn'

function Resize ({ className, dispatch, canvas }) {
  return (
    <div className={classNames(className, scss._)}>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addTopRow(canvas)))}
              type="button">
        Добавить строку сверху
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeTopRow(canvas)))}
              type="button">
        Удалить строку сверху
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addCellLeft(canvas)))}
              type="button">
        Добавить ряд слева
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addCellRight(canvas)))}
              type="button">
        Добавить ряд справа
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeCellLeft(canvas)))}
              type="button">
        Удалить ряд слева
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeCellRight(canvas)))}
              type="button">
        Удалить ряд справа
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addRowBottom(canvas)))}
              type="button">
        Добавить строку снизу
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeRowBottom(canvas)))}
              type="button">
        Удалить строку снизу
      </button>
    </div>
  )
}

export default connect(state => ({ ...state }))(Resize)
