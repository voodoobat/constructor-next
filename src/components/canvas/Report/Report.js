import scss from './Report.module.scss'

import classNames from 'classnames'

import { formatPlural } from '@src/util'

export default function Report ({ className, report }) {
  const rows = report.canvas.length
  const cell = report.canvas[0].length

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
    </div>
  )
}
