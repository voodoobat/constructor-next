import scss from './Resize.module.scss'

import classNames from 'classnames'

export default function Resize ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      {children}
    </div>
  )
}
