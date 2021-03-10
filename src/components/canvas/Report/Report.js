import scss from './Report.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import { formatPlural } from '@src/util'
import * as store from '@src/store/functions'
import * as fn from './Report.fn'

import { CANVAS_CELL_WIDTH, CANVAS_CELL_HEIGHT } from '@src/config'

function Report ({
  className,
  schemeCanvas,
  report,
  type,
  index,
  dispatch
}) {

  const { canvas } = report
  const cell = fn.getCellByUid(schemeCanvas, canvas[0][0].uid)
  const last = fn.getCellByUid(schemeCanvas, fn.getLastCellUid(canvas))

  if (!cell || !last) dispatch(store.removeReport(report))

  const size = {
    y: canvas.length,
    x: canvas[0].length
  }

  const position = {
    x: cell?.x
  }

  const css = {
    cell: {
      top: index * (CANVAS_CELL_HEIGHT * 1.5),
      left: position.x * CANVAS_CELL_WIDTH + 10,
      width: size.x * CANVAS_CELL_WIDTH - 20
    }
  }


  const remove = () => dispatch(store.removeReport(report))

  return (
    <div className={classNames(className, scss._)}
        style={css[type]}>
      <i className={classNames(scss.xline, scss.is_left)}></i>
      <i className={classNames(scss.xline, scss.is_right)}></i>
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
