import scss from './Loop.module.scss'

import classNames from 'classnames'
import { ReactSVG } from 'react-svg'

export default function Loop ({ className, id }) {
  return (
    <div className={classNames(className, scss._)}
         data-key={id}>
      <ReactSVG className={scss.svg_box}
                src={`/svg/loop/${id}.svg`} />
    </div>
  )
}
