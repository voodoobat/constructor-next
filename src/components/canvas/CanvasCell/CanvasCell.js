import scss from './CanvasCell.module.scss'

import isDarkColor from 'is-dark-color'
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
  rejectGroup,
}) {

  const classList = classNames(
    className,
    scss._,
    isDarkColor(cell.preview.background || cell.background) ? scss.is_dark_bg : '',
    cell.selected ? scss.is_selected : ''
  )

  return (
    <div className={classList}
         onClick={onClick}
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseEnter={onMouseEnter}
         data-uid={cell.uid}
         style={{background: cell.preview.background || cell.background}}>
      {cell.report && <div className={scss.report} style={{background: cell.report.color}} />}
      {cell.preview.loop && <Loop className={scss.loop} icon={`${cell.preview.loop}.svg`} />}
      {!cell.preview.loop && cell.loop && <Loop className={scss.loop} icon={`${cell.loop}.svg`} />}
      {cell.confirm &&
        <Confirm cell={cell}
                 yes={acceptGroup}
                 no={rejectGroup} />
      }
    </div>
  )
}
