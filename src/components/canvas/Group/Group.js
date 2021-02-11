import scss from './Group.module.scss'

import classNames from 'classnames'

import Row from '@components/canvas/Row/Row'
import Cell from '@components/canvas/Cell/Cell'

import { getData } from '@src/fixtures/loops'
import Loop from '@components/constructor/Loop/Loop'
const data = getData()

const getLoop = id => {
  const loop = data.find(obj => obj.id == id)
  return <Loop icon={`/svg/loop/${loop.icon}`} />
}

export default function Group ({ className, matrix }) {
  return (
    <div className={classNames(className, scss._)}>
      {matrix.map((row, j) => (
        <Row key={j}>
          {row.map((cell, j) => (
            <Cell key={j}>
              {getLoop(cell)}
            </Cell>
          ))}
        </Row>
      ))}
    </div>
  )
}
