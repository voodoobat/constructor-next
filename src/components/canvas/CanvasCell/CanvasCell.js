import scss from './CanvasCell.module.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

function CanvasCell ({
  className,
  cell,
  loop,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseUp
}) {

  return (
    <div className={classNames(className, scss._, cell.selected ? scss.is_selected : '')}
         onClick={onClick}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseEnter={onMouseEnter}>
      {loop && <Loop icon={`${loop}.svg`} />}
    </div>
  )
}

export default connect(s => ({ ...s }))(CanvasCell)
