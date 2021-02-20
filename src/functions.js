import { uid } from 'uid'
import { sample } from 'lodash'
import * as act from '@src/actions'

export function commitCanvas (canvas) {
  return dispatch => {
    // dispatch(act.saveHistoryStep(canvas))
    dispatch(act.changeCanvas(canvas))
  }
}

export function setActiveGroup (group) {
  return (dispatch, getState) => {
    const { groups } = getState()

    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(group))

    let array = groups.map(g => {
      return g.uid == group.uid
        ? { ...g, active: true } 
        : { ...g, active: false }
    })

    array = array.sort((x, y) => {
      if (x.length > y.length) return -1
      if (x.length < y.length) return 1
      return 0
    })

    dispatch(act.changeGroups(array))
  }
}

export function commitNewGroup (canvas) {
  return (dispatch, getState) => {
    const { groups } = getState()
    dispatch(act.changeGroups([ ...groups, {
      uid: uid(),
      active: false,
      canvas,
    }]))
  }
}

export function removeGroup ({ uid }) {
  return (dispatch, getState) => {
    const { groups } = getState()

    dispatch(act.changeGroups(groups.filter(g => g.uid != uid)))
    dispatch(act.setActiveGroup(null))
  }
}

export function setActiveTool (activeTool) {
  return (dispatch, getState) => {
    const { groups } = getState()

    dispatch(act.setActiveTool(activeTool))
    if (activeTool == 'Color') {
      dispatch(act.setActiveColor(sample([
        '#90caf9',
        '#ff80ab',
        '#81c784',
        '#dce775',
        '#ba68c8'
      ])))
    }

    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveGroup(null))
    dispatch(act.changeGroups(groups.map(g => ({
      ...g, active: false
    }))))
  }
}

export function setActiveLoop (activeLoop) {
  return (dispatch, getState) => {
    const { groups } = getState()

    dispatch(act.setActiveLoop(activeLoop))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(null))
    dispatch(act.changeGroups(groups.map(g => ({
      ...g, active: false
    }))))
  }
}
