import { uid } from 'uid'
import _ from 'lodash'

import * as act from '@src/actions'

export function commitCanvas (canvas, save = true) {
  return (dispatch, getState) => {
    const { history, currentStep } = getState()

    const uniq = _.uniqBy(
      _.flatten(canvas).filter(({ loop }) => loop != null),
      'loop'
    )

    dispatch(act.setCanvas(canvas))
    dispatch(act.setCanvasLegend(uniq))

    if (save) {
      const id = uid()
      const index = history.findIndex(({ uid }) => uid == currentStep)
      const temp = [...history]

      if (index > -1) {
        temp.length = index + 1
      } 

      dispatch(act.setHistory([...temp, { uid: id, canvas }]))
      dispatch(act.setCurrentStep(id))
    }
  }
}

export function setCurrentStep (uid) {
  return dispatch => {
    dispatch(act.setCurrentStep(uid))
  }
}

export function setActiveGroup (group) {
  return (dispatch, getState) => {
    const { groups, plaits } = getState()

    const setActive = array => array.map(g => {
      return g.uid == group.uid
        ? { ...g, active: true } 
        : { ...g, active: false }
    })

    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(group))

    if (group.isPlait) {
      dispatch(act.setGroups(groups.map(g => ({
        ...g, active: false
      }))))

      return dispatch(act.setPlaits(setActive(plaits)))
    }

    dispatch(act.setPlaits(plaits.map(p => ({
      ...p, active: false
    }))))

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
    const { groups, plaits } = getState()

    dispatch(act.setActiveTool(activeTool))
    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveLoopIcon(''))
    dispatch(act.setActiveGroup(null))

    dispatch(act.setPlaits(plaits.map(p => ({
      ...p, active: false
    }))))
    dispatch(act.setGroups(groups.map(g => ({
      ...g, active: false
    }))))
  }
}

export function setActiveColor (activeColor) {
  return dispatch => {
    dispatch(act.setActiveColor(activeColor))
  }
}

export function saveColorToSwatches (color) {
  return (dispatch, getState) => {
    const { swatches } = getState()

    dispatch(act.setSwatches(_.uniq([...swatches, color])))

    console.log(swatches)
  }
}

export function setActiveLoop (activeLoop, icon = '') {
  return (dispatch, getState) => {
    const { groups, plaits } = getState()

    dispatch(act.setActiveLoop(activeLoop))
    dispatch(act.setActiveLoopIcon(icon))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(null))

    dispatch(act.setPlaits(plaits.map(p => ({
      ...p, active: false
    }))))

    dispatch(act.setGroups(groups.map(g => ({
      ...g, active: false
    }))))
  }
}

export function setCustomCursor (cursor) {
  return dispatch => {
    dispatch(act.setCustomCursor(cursor))
  }
}

export function setReport (report) {
  return (dispatch, getState) => {
    const { reports } = getState()

    dispatch(act.setReport([...reports, report]))
  }
}

export function setConfirm (isConfirm) {
  return (dispatch) => {
    dispatch(act.setConfirm(isConfirm))
  }
}
