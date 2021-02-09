import scss from './Tool.module.scss'

import classNames from 'classnames'

export default function Tool ({ className }) {
  return (
    <button className={classNames(className, scss._)}>

    </button>
  )
}
