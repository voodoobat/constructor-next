import { uid } from 'uid'
import { sample } from 'lodash'
import * as actions from '@src/actions'

export function commitCanvas (canvas) {
  return dispatch => {
    // dispatch(actions.saveHistoryStep(canvas))
    dispatch(actions.changeCanvas(canvas))
  }
}

export function setActiveGroup (group) {
  return (dispatch, getState) => {
    const { groups } = getState()

    dispatch(actions.setActiveGroup(group))
    dispatch(actions.changeGroups(groups.map(g => {
      return g.uid == group.uid
        ? { ...g, active: true } 
        : { ...g, active: false }
    })))

    actions.setActiveLoop(null)
    actions.setActiveTool(null)
  }
}

export function commitNewGroup (canvas) {
  return (dispatch, getState) => {
    const { groups } = getState()
    dispatch(actions.changeGroups([ ...groups, {
      uid: uid(),
      active: false,
      canvas,
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
  return dispatch => {

    dispatch(actions.setActiveTool(activeTool))

    if (activeTool == 'Color') {
      dispatch(actions.setActiveColor(sample([
        '#90caf9',
        '#ff80ab',
        '#81c784',
        '#dce775',
        '#ba68c8'
      ])))
    }

    dispatch(actions.setActiveLoop(null))
    dispatch(actions.setActiveGroup(null))
  }
}

export function changeActiveLoop (activeLoop) {
  return dispatch => {

    dispatch(actions.setActiveLoop(activeLoop))
    dispatch(actions.setActiveTool(null))
    dispatch(actions.setActiveGroup(null))
  }
}
