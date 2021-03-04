import scss from './Tool.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import * as store from '@store/functions'

import Move from './svg/move.svg'
import Eraze from './svg/eraze.svg'
import Report from './svg/report.svg'
import ReportRow from './svg/report_row.svg'
import ReportLoop from './svg/report_loop.svg'
import Color from './svg/color.svg'
import Group from './svg/group.svg'
import Size from './svg/size.svg'

import OptionIcon from './svg/option_icon.svg'

const icon  = {
  Move,
  Eraze,
  Report,
  ReportRow,
  ReportLoop,
  Color,
  Group,
  Size
}

function Tool ({ className, type, dispatch, tool, activeTool, children }) {
  const Icon = icon[type]
  const isActive = activeTool == type

  return (
    <div className={classNames(className, scss._, isActive ? scss.is_active : '')}
         onClick={() => dispatch(store.setActiveTool(type))}>
      <Icon className={scss.icon} />
      <div className={scss.popup}>
        {isActive && tool &&
          <div className={scss.tool}>
            {tool}
          </div>
        }
        <div className={scss.hint}>
          {children}
        </div>
      </div>
      {type == 'Color' && <OptionIcon className={scss.option_icon} />}
    </div>
  )
}

export default connect(state => ({ ...state }))(Tool)
