import scss from './Eye.module.scss'

import { useState } from 'react'
import classNames from 'classnames'

import ActiveIcon from './svg/active.svg'
import InactiveIcon from './svg/inactive.svg'

export default function Eye ({ className, active }) {
  const [isActive, setActive] = useState(Boolean(active))

  return (
    <button className={classNames(className, scss._)}
            onClick={() => setActive(!isActive)}
            type="button">
      {isActive
        ? <ActiveIcon className={scss.active} />
        : <InactiveIcon className={scss.inactive} />
      }
    </button>
  )
}
