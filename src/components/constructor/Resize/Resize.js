import scss from './Resize.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@store/functions'

import * as fn from './Resize.fn'

function Resize ({
  className,
  schemeCanvas,
  dispatch
}) {

  return (
    <div className={classNames(className, scss._)}>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addTopRow(schemeCanvas)))}
              type="button">
        Добавить строку сверху
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeTopRow(schemeCanvas)))}
              type="button">
        Удалить строку сверху
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addCellLeft(schemeCanvas)))}
              type="button">
        Добавить ряд слева
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addCellRight(schemeCanvas)))}
              type="button">
        Добавить ряд справа
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeCellLeft(schemeCanvas)))}
              type="button">
        Удалить ряд слева
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeCellRight(schemeCanvas)))}
              type="button">
        Удалить ряд справа
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.addRowBottom(schemeCanvas)))}
              type="button">
        Добавить строку снизу
      </button>
      <button className={scss.button}
              onClick={() => dispatch(store.commitCanvas(fn.removeRowBottom(schemeCanvas)))}
              type="button">
        Удалить строку снизу
      </button>
    </div>
  )
}

export default connect(state => ({ ...state }))(Resize)
