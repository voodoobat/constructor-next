import scss from './Field.module.scss'

import classNames from 'classnames'

export default function FormField ({
  className,
  label,
  id,
  labelClassName,
  fieldClassName,
  children
}) {
  return (
    <div className={classNames(className, scss.field)}>
      <label className={classNames(labelClassName, scss.label)}
             htmlFor={id}>
        {label}
      </label>
      <div className={classNames(fieldClassName, scss.input)}>
        {children}
      </div>
    </div>
  )
}
