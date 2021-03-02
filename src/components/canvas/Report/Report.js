import scss from './Report.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import CircleButton from '@components/common/CircleButton/CircleButton'

import { formatPlural } from '@src/util'
import * as store from '@src/functions'

function Report ({ className, report, dispatch }) {
  const rows = report.canvas.length
  const cell = report.canvas[0].length

  const remove = () => dispatch(store.removeReport(report))

  return (
    <div className={classNames(className, scss._)}>
      <span className={scss.icon} style={{background: report.color}}></span>
      <span className={scss.label}>Раппорт</span>
      <span className={scss.unit}>
        {formatPlural(rows, 'ряд', 'ряда', 'рядов')} 
      </span>
      <span className={scss.unit}>
        {formatPlural(cell, 'петля', 'петли', 'петель')} 
      </span>
      <CircleButton icon="Close" onClick={remove} />
    </div>
  )
}

export default connect(state => ({ ...state }))(Report)
