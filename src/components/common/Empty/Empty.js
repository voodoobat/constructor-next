import scss from './Empty.module.scss'

import classNames from 'classnames'

export default function Empty ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      {/* ... */}
    </div>
  )
}
