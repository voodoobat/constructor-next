import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import CanvasCell from '@components/canvas/CanvasCell/CanvasCell'
import Row from '@components/canvas/Row/Row'

import * as store from '@src/functions'
import * as fn from './Canvas.fn'

function Canvas ({
  className,
  canvas,
  dispatch,
  scale,
  activeLoop,
  activeTool
}) {

  const [cnvs, setCnvs] = useState(canvas)
  const [active, setActive] = useState(null)

  const onMouseDown = cell => {

    setActive(cell)

    setCnvs(fn.select(cnvs, cell, { loop: activeLoop }))
    dispatch(store.commitCanvas(cnvs))
  }

  const onMouseUp = cell => {
    setActive(null)
    setCnvs(fn.select(cnvs, cell, { loop: activeLoop }))
    dispatch(store.commitCanvas(cnvs))
  }

  const onMouseEnter = cell => {
    if (active) {

      if (activeTool) {
        if (activeTool == 'Eraze') return setCnvs(
          fn.square(cnvs, cell, active, {
            loop: null,
            selected: false
          })
        )
      }

      if (activeLoop) return setCnvs(
        fn.square(cnvs, cell, active, {
          loop: activeLoop,
          selected: false
        })
      )
    }
  }

  return <>
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {canvas.map((row, y) => (
        <Row key={y}>
          {row.map((cell, x) => (
            <CanvasCell cell={cell}
                        onMouseEnter={() => onMouseEnter(cell)}
                        onMouseDown={() => onMouseDown(cell)}
                        onMouseUp={() => onMouseUp(cell)}
                        loop={cell.loop}
                        key={x} />
          ))}
        </Row>
      ))}
    </div>
  </>
}

export default connect((state => ({ ...state })))(Canvas)
