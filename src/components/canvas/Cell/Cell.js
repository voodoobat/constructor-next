import scss from './Cell.module.scss'

import classNames from 'classnames'

export default function Cell ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      {children}
    </div>
  )
}
