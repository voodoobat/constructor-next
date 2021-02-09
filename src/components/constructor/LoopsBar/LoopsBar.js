import scss from './LoopsBar.module.scss'

import classNames from 'classnames'

export default function LoopsBar ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      {children}
    </div>
  )
}
