import * as actions from '@src/actions'
import { cloneCanvasWithNewCell } from '@src/util'


export function changeScheme (x, y, loop) {
  return (dispatch, getState) => {
    const { canvas } = getState()

    console.log(
      cloneCanvasWithNewCell(canvas, x, y, loop)
    )

    dispatch(actions.saveStep(canvas))
    dispatch(actions.changeCanvas(
      cloneCanvasWithNewCell(canvas, x, y, loop)
    ))
  }
}
