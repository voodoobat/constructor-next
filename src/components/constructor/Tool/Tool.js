import scss from './Tool.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Move from './svg/move.svg'
import Eraze from './svg/eraze.svg'
import ReportRow from './svg/report_row.svg'
import ReportLoop from './svg/report_loop.svg'
import Color from './svg/color.svg'
import Group from './svg/group.svg'
import Size from './svg/size.svg'

import OptionIcon from './svg/option_icon.svg'

const icon  = {
  Move,
  Eraze,
  ReportRow,
  ReportLoop,
  Color,
  Group,
  Size
}

export function Tool ({ className, type, active, children }) {
  const Icon = icon[type]
  const [isActive, setActive] = useState(Boolean(active))

  return (
    <div className={classNames(className, scss._, isActive ? scss.is_active : '')}
         onClick={() => setActive(!isActive)}>
      <Icon className={scss.icon} />
      {children}
      {type == 'Color' && <OptionIcon className={scss.option_icon} />}
    </div>
  )
}
