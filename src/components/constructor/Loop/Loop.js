import scss from './Loop.module.scss'

import classNames from 'classnames'
import { ReactSVG } from 'react-svg'

export default function Loop ({ className, icon }) {
  return (
    <div className={classNames(className, scss._)}>
      <ReactSVG className={scss.svg_box}
                src={icon} />
    </div>
  )
}
