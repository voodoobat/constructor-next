import scss from './CanvasBox.module.scss'

import classNames from 'classnames'

export default function CanvasBox ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
    </div>
  )
}
