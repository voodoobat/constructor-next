import scss from './Overlay.module.scss'

import classNames from 'classnames'

export default function Overlay ({ className }) {
  return (
    <div className={classNames(className, scss._)}></div>
  )
}