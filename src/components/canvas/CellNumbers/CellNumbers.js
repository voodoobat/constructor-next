import scss from './CellNumbers.module.scss'

import classNames from 'classnames'

export default function CellNumbers ({ className, cells }) {
  return (
    <div className={classNames(className, scss._)}>
      {cells?.map((_, index) => (
        <div className={scss.num} key={index}>
          {cells.length - index}
        </div>
      ))}
    </div>
  )
}
