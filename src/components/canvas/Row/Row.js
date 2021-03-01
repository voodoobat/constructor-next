import scss from './Row.module.scss'

import classNames from 'classnames'

export default function Row ({ className, number, children }) {
  return (
    <div className={classNames(className, scss._)} data-number={number}>
      {children}
    </div>
  )
}
