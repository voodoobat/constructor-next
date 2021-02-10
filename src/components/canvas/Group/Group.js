import scss from './Group.module.scss'

import classNames from 'classnames'

export default function CanvasBox ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      {children}
    </div>
  )
}
    