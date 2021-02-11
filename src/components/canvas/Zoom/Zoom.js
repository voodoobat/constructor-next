import scss from './Zoom.module.scss'

import classNames from 'classnames'

import IncIcon from './svg/inc.svg'
import DecIcon from './svg/dec.svg'

export default function Zoom ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      <button
        className={scss.button}
        type="button">
        <DecIcon />
      </button>
      <span className={scss.value}>
        100%
      </span>
      <button
        className={scss.button}
        type="button">
        <IncIcon />
      </button>
    </div>
  )
}
