import scss from './SchemesDropdown.module.scss'

import classNames from 'classnames'

import Chevron from '@svg/schemes/chevron.svg'

export default function SchemesDropdown ({
  className,
  caption,
  children
}) {
  return (
    <div className={classNames(className, scss.dropdown)}>
      <button className={scss.caption}>
        <span className={scss.caption_text}>{caption}</span>
        <Chevron className={scss.chevron} />
      </button>
      <div className={scss.content}>
        {children}
      </div>
    </div>
  )
}
