import scss from './LoopFaq.module.scss'

import classNames from 'classnames'

import Cell from '@components/canvas/Cell/Cell'

// TODO: replace this shit with api 
import { getData } from '@src/fixtures/loops'

export default function LoopFaq ({ className }) {
  const withHint = getData(true).filter(loop => Boolean(loop.hint))

  return (
    <div className={classNames(className, scss._)}>
      {withHint.map(cell => cell.hint && (
        <div className={scss.element}>
          <div className={scss.icon}>
            <Cell cell={cell} />
          </div>
          <div className={scss.hint}>
            <span dangerouslySetInnerHTML={{ __html: cell.hint }} />
          </div>
        </div>
      ))}
    </div>
  )
}
