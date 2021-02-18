import { uid } from 'uid'
import { sample } from 'lodash'
import * as actions from '@src/actions'

export function commitCanvas (canvas) {
  return dispatch => dispatch(actions.changeCanvas(canvas))
}

export function commitNewGroup (canvas) {
  return (dispatch, getState) => {
    const { groups } = getState()
    dispatch(actions.changeGroups([ ...groups, {
      uid: uid(),
      canvas
    }]))
  }
}

export function removeGroup ({ uid }) {
  return (dispatch, getState) => {
    const { groups } = getState()
    dispatch(actions.changeGroups(groups.filter(group => group.uid != uid)))
  }
}

export function changeActiveTool (activeTool) {
  return (dispatch, getState) => {
    const { activeLoop } = getState()

    dispatch(actions.changeActiveTool(activeTool))

    if (activeTool == 'Color') {
      dispatch(actions.setActiveColor(sample([
        '#90caf9',
        '#ff80ab',
        '#81c784',
        '#dce775',
        '#ba68c8'
      ])))
    }
    if (activeLoop) dispatch(actions.changeActiveLoop(null))
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
