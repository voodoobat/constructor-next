import scss from './Tool.module.scss'

import classNames from 'classnames'

import Move from './svg/move.svg'
import Eraze from './svg/eraze.svg'
import ReportRow from './svg/report_row.svg'
import ReportLoop from './svg/report_loop.svg'
import Color from './svg/color.svg'
import Group from './svg/group.svg'
import Size from './svg/size.svg'

const icon  = {
  Move,
  Eraze,
  ReportRow,
  ReportLoop,
  Color,
  Group,
  Size
}

export function Tool ({ className, type, children }) {
  const Icon = icon[type]

  return (
    <div className={classNames(className, scss._)}>
      <Icon className={scss.icon} />
      {children}
    </div>
  )
}
