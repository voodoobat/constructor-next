import * as actions from '@src/actions'
import { cloneCanvasWithNewCell } from '@src/util'


export function changeScheme (x, y, loop) {
  return (dispatch, getState) => {
    const { canvas, activeLoop } = getState()

    if (activeLoop) {
      dispatch(actions.saveStep(canvas))
      dispatch(actions.changeCanvas(
        cloneCanvasWithNewCell(canvas, x, y, loop)
      ))
    }
  }
}

export function changeActiveLoop (activeLoop) {
  return (dispatch) => {
    dispatch(actions.changeActiveLoop(activeLoop))
    dispatch(actions.changeActiveTool(null))
  }
}

export function changeActiveTool (activeTool) {
  return (dispatch) => {
    dispatch(actions.changeActiveTool(activeTool))
    dispatch(actions.changeActiveLoop(null))
  }
}
