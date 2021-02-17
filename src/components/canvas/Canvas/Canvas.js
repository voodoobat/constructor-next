import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import Cell from '@components/canvas/Cell/Cell'
import Row from '@components/canvas/Row/Row'

import * as fn from '@src/functions'

function Canvas ({ className, canvas, dispatch, scale }) {
  const [startCell, setStartCell] = useState(null)
  const [cnvs, setCnvs] = useState(canvas)

  const commit = () => dispatch(fn.commitCanvas(cnvs))
  const select = cell => {
    const clone = [...cnvs]

    clone.forEach(element => element.forEach(c => {
      const { x, y } = c
      const start = startCell

      if (x >= start.x && y >= start.y)
        return c.selected = (
          x >= start.x &&
          x <= cell.x &&
          y >= start.y &&
          y <= cell.y
        )

      if (x <= start.x && y >= start.y)
       return c.selected = (
          x <= start.x &&
          x >= cell.x &&
          y >= start.y &&
          y <= cell.y
        )

      if (x >= start.x && y <= start.y)
        return c.selected = (
          x >= start.x &&
          x <= cell.x &&
          y <= start.y &&
          y >= cell.y
        )

      if (x <= start.x && y <= start.y)
        return c.selected = (
          x <= start.x &&
          x >= cell.x &&
          y <= start.y &&
          y >= cell.y
        )
    }))

    setCnvs(clone)
  }

  return (
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {cnvs.map((row, y) => (
        <Row key={y}>
          {row.map((cell, x) => (
            <Cell cell={cell}
                  setStartCell={setStartCell}
                  commit={commit}
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
  canvas: state.canvas
})

export default connect(mapState)(Canvas)
