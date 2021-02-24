import scss from './LegendContainer.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

function LegendContainer ({ className, canvasLegends }) {
  return <>
    {Boolean(canvasLegends.length) &&
      <div className={classNames(className, scss._)}>
        <div className={scss.caption}>
          Условные обозначения:
        </div>
        <div className={scss.content}>
        </div>
      </div>
    }
  </>
}

export default connect((state => ({ ...state })))(LegendContainer)
