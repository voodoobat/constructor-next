import scss from './Zoom.module.scss'

import classNames from 'classnames'

import IncIcon from './svg/inc.svg'
import DecIcon from './svg/dec.svg'

export default function Zoom ({ className, scale, setScale }) {
  return (
    <div className={classNames(className, scss._)}>
      <button
        className={scss.button}
        onClick={() => setScale(scale - 10)}
        type="button">
        <DecIcon />
      </button>
      <span className={scss.value}>
        {scale}%
      </span>
      <button
        className={scss.button}
        onClick={() => setScale(scale + 10)}
        type="button">
        <IncIcon />
      </button>
    </div>
  )
}
