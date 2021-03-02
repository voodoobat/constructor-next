import scss from './Canvas.module.scss'

import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Overlay from '@components/common/Overlay/Overlay'
import CanvasCell from '@components/canvas/CanvasCell/CanvasCell'
import Row from '@components/canvas/Row/Row'

import { is, or } from '@src/util'
import * as store from '@src/functions'
import * as fn from './Canvas.fn'

function Canvas ({
  className,
  canvas,
  reports,
  dispatch,
  activeGroup,
  activeColor,
  activeLoop,
  activeTool
}) {

  const [cnvs, setCnvs] = useState(canvas)
  const [confirm, setConfirm] = useState(false)
  const [group, setGroup] = useState(null)
  const [report, setReport] = useState(null)
  const [active, setActive] = useState(null)

  useEffect(() => setCnvs(canvas))

  const commitWithNewProps = (prop, compare, props, save = true) => {
    const temp = fn.mapMatrix(cnvs, cell => {
      const preview = { background: null, loop: null }

      return cell[prop] == compare
        ? { ...cell, ...props, preview, selected: false }
        : { ...cell, preview }
    })

    setCnvs(temp)
    dispatch(store.commitCanvas(temp, save))
  }

  const canvasMouseLeave = () => {
    if (!confirm) {
      setCnvs(fn.reset(cnvs))
    }

    setActive(null)
  }

  const onMouseDown = cell => {
    if (!activeGroup) setActive(cell)

    if (activeTool == 'Move') {
      setActive(null)
    }

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
      const props = { loop: null, background: '#ffffff' }

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

    if (or(activeTool, 'Group', 'Report')) {
      const temp = fn.getSubMatrix(cnvs, 'selected', true)
      const withConfirm = fn.lastSelWithProp(cnvs, temp, 'confirm', true)
      setCnvs(withConfirm)
      dispatch(store.setConfirm(true))

      if (temp.length) {

        if (is(activeTool, 'Group')) {
          setGroup({ canvas: temp })
          setConfirm(true)
        }

        if (is(activeTool, 'Report')) {
          setReport(fn.createReport(temp, reports))
          setConfirm(true)
        }
      }
    }
  }

  const cleanExtra = () => {
    setGroup(null)
    setReport(null)
    setConfirm(false)

    dispatch(store.setConfirm(false))
  }

  const rejectSelection = () => {
    commitWithNewProps('selected', true, {
      selected: false,
      confirm: false
    })

    cleanExtra()
  }

  const acceptSelection = () => {

    if (is(activeTool, 'Group')) {
      dispatch(store.commitNewGroup(group.canvas))

      commitWithNewProps('selected', true, {
        selected: false,
        confirm: false
      }, false)

      cleanExtra()
    }

    if (is(activeTool, 'Report')) {
      const commonProps = {
        selected: false,
        confirm: false
      }

      const withReport = fn.mapMatrix(cnvs, (cell => {
        return cell.selected
          ? { ...cell, ...commonProps, report }
          : { ...cell, ...commonProps }
      }))

      setCnvs(withReport)
      dispatch(store.commitCanvas(withReport), false)
      dispatch(store.setReport(report))
      cleanExtra()
    }
  }

  return (
    <div className={classNames(className, scss._)}
         onMouseLeave={canvasMouseLeave}>
      {cnvs.map((row, index) => (
        <Row className={scss.row}
             number={canvas.length - index}
             key={index}>
          {row.map((cell, x) => (
            <CanvasCell cell={cell}
                        className={scss.cell}
                        onMouseEnter={() => onMouseEnter(cell)}
                        onMouseDown={() => onMouseDown(cell)}
                        onMouseUp={() => onMouseUp(cell)}
                        acceptGroup={acceptSelection}
                        rejectGroup={rejectSelection}
                        key={x} />
          ))}
        </Row>
      ))}
      {confirm && <Overlay />}
    </div>
  )
}

export default connect((state => ({ ...state })))(Canvas)
