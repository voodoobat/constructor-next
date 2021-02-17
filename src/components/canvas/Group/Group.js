import scss from './Group.module.scss'

import classNames from 'classnames'

import Row from '@components/canvas/Row/Row'
import Cell from '@components/canvas/Cell/Cell'
import Loop from '@components/constructor/Loop/Loop'

export default function Group ({ className, group }) {
  return (
    <div className={classNames(className, scss._)}>
      {group.canvas.map((element, y) => (
        <Row key={y}>
          {element.map((cell, x) => (
            <Cell cell={cell} key={x}>
              {cell.loop && <Loop icon={`${cell.loop}.svg`} />}
            </Cell>
          ))}
        </Row>
      ))}
    </div>
  )
}
