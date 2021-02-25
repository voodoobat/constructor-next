import scss from './Resize.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@src/functions'

import { resize } from './Resize.fn'

function Resize ({ className, dispatch, canvas }) {

  const onClick = () => {
    dispatch(store.commitCanvas(resize(canvas)))
  }
  
  return (
    <div className={classNames(className, scss._)}>
      <button className={scss.button}
              onClick={() => onClick()}
              type="button">
        Добавить строку сверху
      </button>
      <button className={scss.button}
              type="button">
        Удалить строку сверху
      </button>
      <button className={scss.button}
              type="button">
        Добавить строку снизу
      </button>
      <button className={scss.button}
              type="button">
        Удалить строку снизу
      </button>
      <button className={scss.button}
              type="button">
        Добавить ряд справа
      </button>
      <button className={scss.button}
              type="button">
        Удалить ряд справа
      </button>
      <button className={scss.button}
              type="button">
        Добавить ряд слева
      </button>
      <button className={scss.button}
              type="button">
        Удалить ряд слева
      </button>
    </div>
  )
}

export default connect(state => ({ ...state }))(Resize)
