import scss from './Report.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { formatPlural } from '@src/util'
import * as store from '@src/store/functions'

function Report ({ className, report, dispatch }) {
  const rows = report.canvas.length
  const cell = report.canvas[0].length

  const remove = () => dispatch(store.removeReport(report))

  return (
    <div className={classNames(className, scss._)}>
      <span className={scss.line}></span>
      <span className={scss.label}>Раппорт</span>
      <span className={scss.unit}>
        {formatPlural(rows, 'ряд', 'ряда', 'рядов')} 
      </span>
      <span className={scss.unit}>
        {formatPlural(cell, 'петля', 'петли', 'петель')} 
      </span>
      <span className={scss.icon}
            style={{backgroundColor: report.color}}
            onClick={remove}>
      </span>
      {/* <CircleButton icon="Close" onClick={remove} /> */}
    </div>
  )
}

export default connect(state => ({ ...state }))(Report)
