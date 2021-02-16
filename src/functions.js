import * as actions from '@src/actions'
import { cloneCanvasWithNewCell, setSelectedCell } from '@src/util'


export function changeScheme (x, y) {
  return (dispatch, getState) => {
    const { canvas, activeLoop, activeTool } = getState()

    if (activeLoop) {
      dispatch(actions.saveHistoryStep(canvas))
      dispatch(actions.changeCanvas(
        cloneCanvasWithNewCell(canvas, x, y, activeLoop)
      ))
    }

    if (activeTool == 'Group') {
      dispatch(actions.changeCanvas(setSelectedCell(canvas, x, y)))
    }
  }
}

export function changeActiveLoop (activeLoop) {
  return (dispatch, getState) => {
    const { activeTool } = getState()

    dispatch(actions.changeActiveLoop(activeLoop))
    if (activeTool) dispatch(actions.changeActiveTool(null))
  }
}

export function setIsDrawning (isDrawning) {
  return (dispatch) => {
    dispatch(actions.setIsDrawning(isDrawning)) 
  }
}

export function changeActiveTool (activeTool) {
  return (dispatch, getState) => {
    const { activeLoop } = getState()

    dispatch(actions.changeActiveTool(activeTool))
    if (activeLoop) dispatch(actions.changeActiveLoop(null))
  }
}
