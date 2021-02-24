import scss from './Cell.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'

// !: use single way to set loop icon
const LoopIcon = ({ cell }) => {
  if (cell.loop) {
    return <Loop icon={`${cell.loop}.svg`} />
  } else if (cell.icon) {
    return <Loop icon={cell.icon} />
  } else {
    return ''
  }
}

export default function Cell ({ className, cell }) {
  return (
    <div className={classNames(className, scss._)}
         style={{ background: cell?.background }}>
      <LoopIcon cell={cell} />
    </div>
  )
}
