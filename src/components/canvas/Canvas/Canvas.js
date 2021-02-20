import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import CanvasCell from '@components/canvas/CanvasCell/CanvasCell'
import Row from '@components/canvas/Row/Row'
import Confirm from '@components/canvas/Confirm/Confirm'
import Group from '@components/canvas/Group/Group'

import * as store from '@src/functions'
import * as fn from './Canvas.fn'

function Canvas ({
  className,
  canvas,
  dispatch,
  scale,
  activeGroup,
  activeColor,
  activeLoop,
  activeTool
}) {

  const [cnvs, setCnvs] = useState(canvas)
  const [confirm, setConfirm] = useState(false)
  const [group, setGroup] = useState(null)
  const [active, setActive] = useState(null)

  const commitWithNewProps = (prop, compare, props) => {
    const temp = fn.mapMatrix(cnvs, cell => {
      const preview = { background: null, loop: null }

      return cell[prop] == compare
        ? { ...cell, ...props, preview, selected: false }
        : { ...cell, preview }
    })

    setCnvs(temp)
    dispatch(store.commitCanvas(temp))
  }

  const canvasMouseLeave = () => {
    setCnvs(fn.reset(cnvs))
    setActive(null)
  }

  const onMouseDown = cell => {
    if (!activeGroup) setActive(cell)

    if (activeGroup) {
      const temp = fn.placeGroup(cnvs, activeGroup)

      setCnvs(temp)
      dispatch(store.commitCanvas(temp))
    }
  }

  const onMouseEnter = cell => {
    if (active && !activeGroup) {
      setCnvs(fn.square(cnvs, cell, active))
    }

    if (activeGroup) {
      setCnvs(fn.squareGroup(cnvs, cell, activeGroup))
    }
  }

  const onMouseUp = cell => {
    if (activeGroup) return
    setActive(null)

    const isSingle = active?.uid == cell.uid

    if (activeLoop) {
      const props = { loop: activeLoop }

      return isSingle
        ? commitWithNewProps('uid', cell.uid, props)
        : commitWithNewProps('selected', true, props)
    }


    if (!activeTool) return

    if (activeTool == 'Eraze') {
      const props = { loop: null, background: 'transparent' }

      return isSingle
        ? commitWithNewProps('uid', cell.uid, props)
        : commitWithNewProps('selected', true, props)
    }

    if (activeTool == 'Color') {
      const props = { background: activeColor }

      return isSingle
        ? commitWithNewProps('uid', cell.uid, props)
        : commitWithNewProps('selected', true, props)
    }

    if (activeTool == 'Group') {
      const temp = fn.getSubMatrix(cnvs, 'selected', true)
      console.log(temp)
      commitWithNewProps('selected', true, { selected: false })

      if (temp.length) {
        setGroup({ canvas: temp })
        setConfirm(true)
      }
    }
  }

  const onGroupDismiss = () => {
    setGroup(null)
    setConfirm(false)
  }

  const onGroupConfirm = () => {
    dispatch(store.commitNewGroup(group.canvas))
    onGroupDismiss()
  }

  return <>
    <Confirm show={confirm}
             caption="Сохранить группу?"
             dismiss={onGroupDismiss}
             accept={onGroupConfirm}>
      {group && <Group group={group} controls={false} />}
    </Confirm>
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}
         onMouseLeave={canvasMouseLeave}>
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
