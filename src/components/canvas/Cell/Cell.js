import scss from './Cell.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

export default function Cell ({ className, cell }) {
  return (
    <div className={classNames(className, scss._)}
         style={{ background: cell?.background }}>
      {cell.icon && <Loop icon={`${cell.icon}`} />}
    </div>
  )
}
