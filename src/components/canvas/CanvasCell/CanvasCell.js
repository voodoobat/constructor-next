import scss from './CanvasCell.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

export default function CanvasCell ({
  className,
  cell,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseUp
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
         style={{ background: cell.preview.backgroud || cell.background }}>
      {cell.preview.loop && <Loop icon={`${cell.preview.loop}.svg`} />}
      {!cell.preview.loop && cell.loop && <Loop icon={`${cell.loop}.svg`} />}
    </div>
  )
}

