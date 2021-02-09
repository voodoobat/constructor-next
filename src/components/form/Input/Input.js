import scss from './Input.module.scss'

import classNames from 'classnames'

export function Input ({ className, type }) {
  return (
    <input className={classNames(className, scss.input, scss.input_default)}
           type={type} />
  )
}
