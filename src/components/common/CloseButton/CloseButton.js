import scss from './CloseButton.module.scss'

import classNames from 'classnames'

export default function CloseButton ({ className, onClick }) {
  return (
    <button className={classNames(className, scss._)}
         onClick={onClick}>
      Закрыть 
    </button>
  )
}
