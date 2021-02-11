import scss from './Canvas.module.scss'

import classNames from 'classnames'

export default function Canvas ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
    </div>
  )
}
