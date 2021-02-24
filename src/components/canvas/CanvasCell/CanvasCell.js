import scss from './CanvasCell.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import Confirm from '@components/canvas/Confirm/Confirm'

export default function CanvasCell ({
  className,
  cell,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  acceptGroup,
  rejectGroup
}) {

  const classList = classNames(
    className,
    scss._,
    cell.selected ? scss.is_selected : ''
  )

  return (
    <div className={classList}
         onClick={onClick}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseEnter={onMouseEnter}
         style={{background: cell.preview.background || cell.background}}>
      {cell.preview.loop && <Loop icon={`${cell.preview.loop}.svg`} />}
      {!cell.preview.loop && cell.loop && <Loop icon={`${cell.loop}.svg`} />}
      {cell.confirm &&
        <Confirm cell={cell}
                 yes={acceptGroup}
                 no={rejectGroup} />
      }
    </div>
  )
}
