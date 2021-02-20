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
    const { groups, plaits } = getState()

    const setActive = (array, inactive = false) => array.map(g => {
      if (inactive) return { ...g, active: false }

      return g.uid == group.uid
        ? { ...g, active: true } 
        : { ...g, active: false }
    })

    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(group))

    if (group.isPlait) {
      dispatch(act.setGroups(setActive(groups, true)))
      return dispatch(act.setPlaits(setActive(plaits)))
    }

    dispatch(act.setPlaits(setActive(plaits, true)))
    return dispatch(act.setGroups(setActive(groups)))
  }
}

export function commitNewGroup (canvas) {
  return (dispatch, getState) => {
    const { groups } = getState()
    dispatch(act.setGroups([ ...groups, {
      uid: uid(),
      active: false,
      canvas,
    }]))
  }
}

export function removeGroup ({ uid }) {
  return (dispatch, getState) => {
    const { groups } = getState()

    dispatch(act.setGroups(groups.filter(g => g.uid != uid)))
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
    dispatch(act.setGroups(groups.map(g => ({
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
    dispatch(act.setGroups(groups.map(g => ({
      ...g, active: false
    }))))
  }
}
