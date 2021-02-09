import scss from './Loop.module.scss'

import classNames from 'classnames'
import { ReactSVG } from 'react-svg'

export default function Loop ({ className, id }) {
  return (
    <div className={classNames(className, scss._)}>
      <ReactSVG src={`/svg/loop/${id}.svg`} />
    </div>
  )
}
