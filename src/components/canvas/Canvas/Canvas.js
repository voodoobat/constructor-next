import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import classNames from 'classnames'

import CanvasCell from '@components/canvas/CanvasCell/CanvasCell'
import Row from '@components/canvas/Row/Row'
import CloseButton from '@components/common/CloseButton/CloseButton'

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
  const [confirm, setConfirm] = useState(false)
  const [active, setActive] = useState(null)

  const commitWithNewProps = (prop, compare, props) => {
    const temp = fn.mapCanvas(cnvs, cell => {
      return cell[prop] == compare
        ? { ...cell, ...props, selected: false }
        : cell
    })

    setCnvs(temp)
    dispatch(store.commitCanvas(temp))
  }

  const onMouseDown = cell => {
    setActive(cell)
  }

  const onMouseEnter = cell => {
    if (active) {
      setCnvs(fn.square(cnvs, cell, active))
    }
  }

  const onMouseUp = cell => {
    setActive(null)

    const isSingle = active?.uid == cell.uid

    if (activeLoop) {
      const props = { loop: activeLoop }

      if (isSingle) return commitWithNewProps('uid', cell.uid, props)
      return commitWithNewProps('selected', true, props)
    }


    if (!activeTool) return

    if (activeTool == 'Eraze') {
      const props = { loop: null, background: 'transparent' }

      if (isSingle) return commitWithNewProps('uid', cell.uid, props)
      return commitWithNewProps('selected', true, props)
    }

    if (activeTool == 'Color') {
      const props = { background: activeColor }

      if (isSingle) commitWithNewProps('uid', cell.uid, props)
      return commitWithNewProps('selected', true, props)
    }

    if (activeTool == 'Group') {
      // dispatch(store.commitNewGroup(fn.filterCanvas(cnvs)))
      commitWithNewProps('selected', true, { selected: false })
      setConfirm(true)
    }
  }

  return <>

    <Modal id="faq-modal"
           className={scss.modal}
           show={confirm}
           onHide={() => setConfirm(false)}>
      <CloseButton onClick={() => setConfirm(false)} />
    </Modal>

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
