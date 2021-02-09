import scss from './Input.module.scss'

import classNames from 'classnames'

export function Input ({ className, type, id }) {
  return (
    <span className={classNames(className, scss.input, scss.text)}>
      <input type={type || 'text'} id={id} />
    </span>
  )
}

import Inc from './svg/inc_icon.svg'
import Dec from './svg/dec_icon.svg'

export function Number ({ className, id }) {
  return (
    <span className={classNames(className, scss.input, scss.number)}>
      <span className={scss.number_dec}>
        <Dec />
      </span>
      <input type="number" id={id} />
      <span className={scss.number_inc}>
        <Inc />
      </span>
    </span>
  )
}
