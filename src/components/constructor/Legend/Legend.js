import scss from './Legend.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@store/functions'

import RemoveIcon from './svg/remove.svg'

function Legend ({
  className,
  hint,
  loop,
  dispatch,
  children
}) {

  const [description, setDescription] = useState(hint || 'Мой элемент')
  
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
                 value={description}
                 onBlur={() => dispatch(store.setCanvasLegendCustomHint(loop, description))}
                 onChange={({ target }) => setDescription(target.value)} />
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({ ...state }))(Legend)
