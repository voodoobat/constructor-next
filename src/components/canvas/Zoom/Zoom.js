import scss from './Zoom.module.scss'

import classNames from 'classnames'

import IncIcon from './svg/inc.svg'
import DecIcon from './svg/dec.svg'

export default function Zoom ({ className, scale, setScale }) {
  const [min, max] = [70, 250]
  const scaleCanvas = value => {
    if (value >= min && value <= max) {
      setScale(value)
    }
  }

  return (
    <div className={classNames(className, scss._)}>
      <button
        className={classNames(scss.button, scale == min ? scss.disabled : '')}
        onClick={() => scaleCanvas(scale - 15)}
        type="button">
        <DecIcon />
      </button>
      <span className={scss.value}>
        {scale}%
      </span>
      <button
        className={classNames(scss.button, scale == max ? scss.disabled : '')}
        onClick={() => scaleCanvas(scale + 15)}
        type="button">
        <IncIcon />
      </button>
    </div>
  )
}
