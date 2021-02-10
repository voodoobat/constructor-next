import scss from './Row.module.scss'

import classNames from 'classnames'

export default function Row ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      {children}
    </div>
  )
}
