import * as actions from '@src/actions'

export function commitCanvas (canvas) {
  return dispatch => dispatch(actions.changeCanvas(canvas))
}

export function commitNewGroup (canvas) {
  return (dispatch, getState) => {
    const { groups } = getState()
    dispatch(actions.changeGroups([ ...groups, { canvas }]))
  }
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

export function changeActiveTool (activeTool) {
  return (dispatch, getState) => {
    const { activeLoop } = getState()

    dispatch(actions.changeActiveTool(activeTool))
    if (activeLoop) dispatch(actions.changeActiveLoop(null))
  }
}
