import scss from './Swatches.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@store/functions'

function Swatches ({ className, dispatch, activeColor, activeSwatches, }) {

  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.swatches}>
        {activeSwatches.map((background, key) => (
          <button className={classNames(scss.sample, activeColor == background ? scss.is_active : '')}
                  onClick={() => dispatch(store.setActiveColor(background))}
                  style={{background}}
                  key={key}></button>
        ))}
      </div>
    </div>
  )
}

export default connect(state => ({ ...state }))(Swatches)
