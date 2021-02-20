import scss from './InlineConfirm.module.scss'

import classNames from 'classnames'

export default function InlineConfirm ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      {children}
    </div>
  )
}
