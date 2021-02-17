import scss from './Canvas.module.scss'

import { useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Loop from '@components/constructor/Loop/Loop'
import CanvasCell from '@components/canvas/CanvasCell/CanvasCell'
import Row from '@components/canvas/Row/Row'
import GroupCommit from '@components/canvas/GroupCommit/GroupCommit'
import Overlay from '@components/common/Overlay/Overlay'

import {
  selectSquare,
  setToCanvas,
  rmSelect,
  createCanvasFromSelect
} from './Canvas.fn'

import * as store from '@src/functions'

function Canvas ({
  className,
  canvas,
  dispatch,
  scale,
  activeLoop,
  activeTool
}) {

  const [startCell, setStartCell] = useState(null)
  const [cnvs, setCnvs] = useState(canvas)
  const [activeGroup, setActiveGroup] = useState(null)

  const select = cell => setCnvs(selectSquare(cnvs, cell, startCell))
  const change = cell => {
    const loop = activeTool == 'Eraze' ? null : activeLoop
    setCnvs(setToCanvas(cnvs, cell, loop))
  }

  const group = {
    save () {
      dispatch(store.commitNewGroup(activeGroup))
      setCnvs(rmSelect(cnvs))
      setActiveGroup(null)
    },

    cansel () {
      setCnvs(rmSelect(cnvs))
      setActiveGroup(null)
    }
  }

  const commit = () => {
    if (activeTool == 'Group') {
      setActiveGroup(createCanvasFromSelect(cnvs))
    }

    dispatch(store.commitCanvas(cnvs))
  }

  return <>
    {activeGroup && (
      <>
        <GroupCommit save={group.save} cansel={group.cansel} />
        <Overlay transparent={true} />
      </>
    )}
    <div className={classNames(className, scss._, scss[`scale_${scale}`])}>
     {canvas.map((row, y) => (
        <Row key={y}>
          {row.map((cell, x) => (
            <CanvasCell cell={cell}
                  setStartCell={setStartCell}
                  commit={commit}
                  change={change}
                  select={select}
                  key={x}>
              {cell.loop && <Loop icon={`${cell.loop}.svg`} />}
            </CanvasCell>
          ))}
        </Row>
      ))}
    </div>
  </>
}

export default connect((state => ({ ...state })))(Canvas)
