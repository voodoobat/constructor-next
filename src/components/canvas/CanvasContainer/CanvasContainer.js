import scss from './CanvasContainer.module.scss'

import classNames from 'classnames'

export default function CanvasContainer ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
    </div>
  )
}
