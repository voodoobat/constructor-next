import scss from './Overlay.module.scss'

import classNames from 'classnames'

export default function Overlay ({ className, isDark, onClick }) {
  return (
    <div className={classNames(className, scss._, isDark ? scss.is_dark : '')}
         onClick={onClick}></div>
  )
}
