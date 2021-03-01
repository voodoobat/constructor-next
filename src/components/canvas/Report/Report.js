import scss from './Report.module.scss'

import classNames from 'classnames'

import { formatPlural } from '@src/util'

export default function Report ({ className, report }) {
  const rows = report.canvas.length
  const cell = report.canvas[0].length

  console.log(report)

  return (
    <div className={classNames(className, scss._)}>
      Раппорт {formatPlural(rows, 'ряд', 'ряда', 'рядов')} {formatPlural(cell, 'петля', 'петли', 'петель')}
    </div>
  )
}
