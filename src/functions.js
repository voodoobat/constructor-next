import * as actions from '@src/actions'
import * as util from '@src/util'


export function changeScheme (cell) {
  return (dispatch, getState) => {
    const { canvas, activeLoop } = getState()

    if (activeLoop) {
      dispatch(actions.saveHistoryStep(canvas))
      dispatch(actions.changeCanvas(
        util.setLoopToCanvas(canvas, cell, activeLoop)
      ))
    }
  }
}

export function commitCanvas (canvas) {
  return dispatch => dispatch(actions.changeCanvas(canvas))
}

export function changeActiveLoop (activeLoop) {
  return (dispatch, getState) => {
    const { activeTool } = getState()

    dispatch(actions.changeActiveLoop(activeLoop))
    if (activeTool) dispatch(actions.changeActiveTool(null))
  }
}

export function setDrawning (isDrawning) {
  return dispatch => {
    dispatch(actions.setIsDrawning(isDrawning))
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
