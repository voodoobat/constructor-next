import scss from './Legend.module.scss'

import classNames from 'classnames'

import RemoveIcon from './svg/remove.svg'

export default function Legend ({ className, hint, children }) {
  return (
    <div className={classNames(className, scss._)}>
      <div className={scss.legend}>
        <i className={scss.icon}>
          <RemoveIcon />
        </i>
        <div className={scss.element}>
          {children}
        </div>
        <div className={scss.caption}>
          {hint || 'Мой элемент'}
        </div>
      </div>
    </div>
  )
}
