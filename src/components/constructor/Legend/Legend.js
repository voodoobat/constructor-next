import scss from './Legend.module.scss'

import { connect } from 'react-redux'
import striptags from 'striptags'
import classNames from 'classnames'

import * as store from '@store/functions'

import RemoveIcon from './svg/remove.svg'

function Legend ({ className, hint, loop, dispatch, children }) {
  
  const onChange = ({ target }) => {
    const { value } = target

    dispatch(store.setCanvasLegendCustomHint(loop, value))
  }

  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.legend}>
        <i className={scss.icon}>
          <RemoveIcon />
        </i>
        <div className={scss.element}>
          {children}
        </div>
        <div className={scss.caption}>
          <input type="text"
                 value={striptags(hint) || 'Мой элемент'}
                 onChange={onChange} />
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({ ...state }))(Legend)
