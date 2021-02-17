import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import Cell from '@components/canvas/Cell/Cell'
import Row from '@components/canvas/Row/Row'

import { selectSquare, setToCanvas } from './Canvas.fn'
import * as fn from '@src/functions'

function Canvas ({ className, canvas, dispatch, scale, activeLoop }) {
  const [startCell, setStartCell] = useState(null)
  const [cnvs, setCnvs] = useState(canvas)

  const select = cell => setCnvs(selectSquare(cnvs, cell, startCell))
  const change = cell => setCnvs(setToCanvas(cnvs, cell, activeLoop))
  const commit = () => dispatch(fn.commitCanvas(cnvs))

  return (
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {canvas.map((row, y) => (
        <Row key={y}>
          {row.map((cell, x) => (
            <Cell cell={cell}
                  setStartCell={setStartCell}
                  commit={commit}
                  change={change}
                  select={select}
                  key={x}>
              {cell.loop && <Loop icon={`${cell.loop}.svg`} />}
            </Cell>
          ))}
        </Row>
      ))}
    </div>
  )
}

const mapState = state => ({
  canvas: state.canvas,
  activeLoop: state.activeLoop
})

export default connect(mapState)(Canvas)
