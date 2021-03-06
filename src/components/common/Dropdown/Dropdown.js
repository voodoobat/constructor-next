import scss from './Dropdown.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import ChevronLarge from './svg/chevron_large.svg'
import ChevronSmall from  './svg/chevron_small.svg'

const chevron = {
  lg: ChevronLarge,
  sm: ChevronSmall
}

export default function Dropdown ({
  className,
  caption,
  size = 'lg',
  active = true,
  children
}) {

  const Icon = chevron[size]
  const [isActive, setActive] = useState(active)

  const classes = classNames(
    className,
    scss._,
    size ? scss[`size_${size}`] : '',
    isActive ? scss.is_active : ''
  )

  return (
    <div className={classes}>
      <button className={scss.caption}
              onClick={() => setActive(!isActive)}>
        <span className={scss.caption_text}>
          {caption}
        </span>
        <Icon className={scss.chevron} />
      </button>
      <div className={scss.content}>
        {children}
      </div>
    </div>
  )
}
