import scss from './Report.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { formatPlural } from '@src/util'
import * as store from '@src/store/functions'

import { CANVAS_CELL_WIDTH, CANVAS_CELL_HEIGHT } from '@src/config'

function Report ({ className, report, type, dispatch }) {
  const { canvas } = report

  const size = {
    y: canvas.length,
    x: canvas[0].length
  }

  const position = {
    x: canvas[0][0].x
  }

  const ySpace = CANVAS_CELL_HEIGHT * (2)
  const css = {
    cell: {
      left: position.x * CANVAS_CELL_WIDTH,
      width: size.x * CANVAS_CELL_WIDTH
    },

    cline: {
      top: ySpace * -1,
      height: ySpace
    }
  }


  const remove = () => dispatch(store.removeReport(report))

  return (
    <div className={classNames(className, scss._)}
         style={css[type]}>
      <i className={classNames(scss.xline, scss.is_left)}
         style={css.cline}></i>
      <i className={classNames(scss.xline, scss.is_right)}
         style={css.cline}></i>
      <div className={scss.label}>
        Раппорт &nbsp;
        {type == 'rows' && formatPlural(size.y, 'ряд', 'ряда', 'рядов')}
        {type == 'cell' && formatPlural(size.x, 'петля', 'петли', 'петель')}
        <span className={scss.icon}
              style={{backgroundColor: report.color}}
              onClick={remove}></span>
      </div>
    </div>
  )
}

export default connect(state => ({ ...state }))(Report)
