import scss from './Numbers.module.scss'

import classNames from 'classnames'

import * as fn from './Numbers.fn'

export default function Numbers ({ className, cells, onlyOdd }) {
  const nums = fn.getCellNums(cells?.length || 0, onlyOdd)

  return (
    <div className={classNames(className, scss._)}>
      {nums.map(n => <div className={scss.num} key={n}>{n}</div>)}
    </div>
  )
}
