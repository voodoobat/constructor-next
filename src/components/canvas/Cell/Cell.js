import scss from './Cell.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

export default function Cell ({ className, cell }) {
  // !: use single way to set loop icon
  const icon = cell.icon || `${cell.loop}.svg`

  return (
    <div className={classNames(className, scss._)}
         style={{ background: cell?.background }}>
      {icon && <Loop icon={`${cell.icon}`} />}
    </div>
  )
}
