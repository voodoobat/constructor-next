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

  const commitWithNewProps = props => {
    const temp = fn.mapCanvas(cnvs, cell => {
      return cell.selected
        ? { ...cell, selected: false, ...props }
        : cell
    })

    setCnvs(temp)
    dispatch(store.commitCanvas(temp))
  }


  const onMouseDown = cell => {
    setActive(cell)
  }

  const onMouseUp = () => {
    setActive(null)

    if (activeLoop) {
      commitWithNewProps({ loop: activeLoop })
    }

    if (activeTool) {
      switch (activeTool) {
        case 'Eraze': return commitWithNewProps({ loop: null, background: 'transparent' })
        case 'Color': return commitWithNewProps({ background: activeColor })
      }
    }
  }

  const onMouseEnter = cell => {
    if (active) {
      setCnvs(fn.square(cnvs, cell, active))
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
                        key={x} />
          ))}
        </Row>
      ))}
    </div>
  </>
}

export default connect((state => ({ ...state })))(Canvas)
