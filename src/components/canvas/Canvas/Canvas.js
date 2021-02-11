import scss from './Canvas.module.scss'

import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import Cell from '@components/canvas/Cell/Cell'
import Row from '@components/canvas/Row/Row'

export default function Canvas ({ className, matrix, scale }) {
  return (
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {matrix.map((row, j) => (
        <Row key={j}>
          {row.map((cell, j) => (
            <Cell key={j}>
              <Loop icon={`${cell}.svg`} />
            </Cell>
          ))}
        </Row>
      ))}
    </div>
  )
}
