import scss from './CircleButton.module.scss'

import classNames from 'classnames'

import Close from './svg/close.svg'
import Return from './svg/return.svg'

const icons = {
  Close,
  Return
}

export default function CircleButton ({ className, icon, onClick }) {

  const Icon = icons[icon]

  return (
    <button className={classNames(className, scss._)}
            onClick={onClick}
            type="button">
      <Icon />
    </button>
  )
}
