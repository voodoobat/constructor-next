import * as actions from '@src/actions'
import { cloneCanvasWithNewCell } from '@src/util'


export function changeScheme (x, y, loop) {
  return (dispatch, getState) => {
    const { canvas } = getState()

    dispatch(actions.saveStep(canvas))
    dispatch(actions.changeCanvas(
      cloneCanvasWithNewCell(canvas, x, y, loop)
    ))
  }
}

export function changeActiveLoop (activeLoop) {
  console.log(activeLoop)

  return (dispatch) => {
    dispatch(actions.changeActiveLoop(activeLoop))
  }
}
