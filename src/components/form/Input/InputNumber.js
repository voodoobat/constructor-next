import scss from './Input.module.scss'

import classNames from 'classnames'

import Plus from './svg/plus_icon.svg'
import Minus from './svg/minus_icon.svg'

export default function InputNumber ({ className }) {
  return (
    <span className={classNames(className, scss.input_number)}>
      <span className={classNames(scss.number_icon, scss.is_minus)}>
        <Minus />
      </span>
      <input className={classNames(scss.input, scss.input_number_inp)}
             type="number" />
      <span className={classNames(scss.number_icon, scss.is_plus)}>
        <Plus />
      </span>
    </span>
  )
}

