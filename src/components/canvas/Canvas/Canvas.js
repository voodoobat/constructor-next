import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import CanvasCell from '@components/canvas/CanvasCell/CanvasCell'
import Row from '@components/canvas/Row/Row'

import * as store from '@src/functions'
import * as fn from './Canvas.fn'

function Canvas ({
  className,
  canvas,
  dispatch,
  scale,
  activeColor,
  activeLoop,
  activeTool
}) {

  const [cnvs, setCnvs] = useState(canvas)
  const [active, setActive] = useState(null)

  // TODO: replace me with color logic

  const onMouseDown = cell => {
    setActive(cell)
    // if (activeLoop) setCnvs(fn.select(cnvs, cell, { loop: activeLoop }))
  }

  const onMouseUp = cell => {
    setActive(null)

    // if (activeLoop) setCnvs(fn.select(cnvs, cell, { loop: activeLoop }))
    dispatch(store.commitCanvas(cnvs))
  }

  const onMouseLeave = cell => {

  }

  const onMouseEnter = cell => {
    if (active) {

      if (activeTool) switch (activeTool) {

        case 'Eraze':
          return setCnvs(fn.square(cnvs, cell, active, {
            loop: null,
            background: 'transparent',
            selected: false
          }))

        case 'Group':
          return setCnvs(fn.square(cnvs, cell, active))

        case 'Color':
          return setCnvs(fn.square(cnvs, cell, active, {
            background: activeColor,
            selected: false
          }))
      }

      if (activeLoop) {
        setCnvs(fn.square(cnvs, cell, active, {
          loop: activeLoop,
          selected: false
        }))
      }
    }
  }

  return <>
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {canvas.map((row, y) => (
        <Row key={y}>
          {row.map((cell, x) => (
            <CanvasCell cell={cell}
                        onMouseEnter={() => onMouseEnter(cell)}
                        onMouseLeave={() => onMouseLeave(cell)}
                        onMouseDown={() => onMouseDown(cell)}
                        onMouseUp={() => onMouseUp(cell)}
                        key={x} />
          ))}
        </Row>
      ))}
    </div>
  </>
}

export default connect((state => ({ ...state })))(Canvas)
