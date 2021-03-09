import scss from './Checkbox.module.scss'

import classNames from 'classnames'

import Icon from './svg/check_icon.svg'

export function Checkbox ({ className, checked, label, setter, reverse }) {

  const onChange = () => setter(!checked)

  return (
    <label className={classNames(
      className,
      scss.checkbox,
      reverse ? scss.is_reverse : '', 
    )}>
      <input type="checkbox"
             onChange={() => onChange()}
             checked={checked} />
      <span className={scss.icon}>
        {checked && <Icon />}
      </span>
      <span className={scss.label}>
        {label}
      </span>
    </label>
  )
}
