import scss from './LoopFaq.module.scss'

import classNames from 'classnames'

// TODO: replace this shit with api 
import { getData } from '@src/fixtures/loops'

export default function LoopFaq ({ className }) {
  return (
    <div className={classNames(className, scss._)}>
      {getData().map(loop => loop.hint && <span>hint</span>)}
    </div>
  )
}
