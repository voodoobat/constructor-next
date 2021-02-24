import scss from './Tool.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@src/functions'

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

function Tool ({ className, type, active, dispatch, children }) {
  const Icon = icon[type]
  const isActive = active == type

  return (
    <div className={classNames(className, scss._, isActive ? scss.is_active : '')}
         onClick={() => dispatch(store.setActiveTool(type))}>
      <Icon className={scss.icon} />
      {children}
      {type == 'Color' && <OptionIcon className={scss.option_icon} />}
    </div>
  )
}

export default connect(state => ({ ...state }))(Tool)
