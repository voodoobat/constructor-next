import scss from './Input.module.scss'

import { useState } from 'react'
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

export function Number ({ className, id, value = 0, min = 0, max = 10000 }) {
  const [val, setVal] = useState(value)

  const setNewVal = v => {
    if (v > max) return setVal(max)
    if (v < min) return setVal(min)

    return setVal(v)
  }

  const actions = {
    inc: () => setNewVal(val + 1),
    dec: () => setNewVal(val - 1)
  }

  const onChange = ev => {
    setNewVal(parseInt(ev.target.value))
  }

  return (
    <span className={classNames(className, scss.input, scss.number)}>
      <span className={scss.number_dec}>
        <Dec onMouseDown={actions.dec} />
      </span>
      <input type="number"
             onChange={onChange}
             id={id}
             value={val}  />
      <span className={scss.number_inc}>
        <Inc onMouseDown={actions.inc} />
      </span>
    </span>
  )
}
