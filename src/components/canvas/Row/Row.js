import scss from './Row.module.scss'

import classNames from 'classnames'

export default function Row ({ className, number, onlyOdd, children }) {
  return (
    <div className={classNames(className, scss._, onlyOdd ? scss.only_odd : '')}
         data-number={number}>
      {children}
    </div>
  )
}
