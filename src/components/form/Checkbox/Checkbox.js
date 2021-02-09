import scss from './Checkbox.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import Icon from './svg/check_icon.svg'

export function Checkbox ({ className, checked, label, reverse }) {
  const [isChecked, setChecked] = useState(Boolean(checked))

  return (
    <label className={classNames(
      className,
      scss.checkbox,
      reverse ? scss.is_reverse : '', 
    )}>
      <input type="checkbox"
             onChange={() => setChecked(!isChecked)}
             checked={isChecked} />
      <span className={scss.icon}>
        {isChecked && <Icon />}
      </span>
      <span className={scss.label}>
        {label}
      </span>
    </label>
  )
}
