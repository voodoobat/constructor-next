import scss from './LegendContainer.module.scss'

import classNames from 'classnames'

export default function LegendContainer ({ className, children }) {
  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.caption}>
        Условные обозначения:
      </div>
      <div className={scss.content}>
        {children}
      </div>
    </div>
  )
}
