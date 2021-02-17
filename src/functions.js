import * as actions from '@src/actions'
import { cloneCanvasWithNewCell } from '@src/util'


export function changeScheme ({ x, y }) {
  return (dispatch, getState) => {
    const {
      canvas,
      activeLoop,
      activeTool,
    } = getState()

    if (activeLoop) {
      dispatch(actions.saveHistoryStep(canvas))
      dispatch(actions.changeCanvas(
        cloneCanvasWithNewCell(canvas, x, y, activeLoop)
      ))
    }

    if (activeTool == 'Group') {
      console.log('G')
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

export function setIsDrawning (isDrawning, start) {
  return dispatch => {
    const point = isDrawning ? start : null

    dispatch(actions.setIsDrawning(isDrawning))
    dispatch(actions.setSelectionStartPoint(point))
  }
}

export function setSelectionEndPoint (end) {
  return (dispatch, getState) => {
    const { isDrawning } = getState()
    const point = isDrawning ? end : null

    dispatch(actions.setSelectionEndPoint(point))
  }
}

export function changeActiveTool (activeTool) {
  return (dispatch, getState) => {
    const { activeLoop } = getState()

    dispatch(actions.changeActiveTool(activeTool))
    if (activeLoop) dispatch(actions.changeActiveLoop(null))
  }
}
