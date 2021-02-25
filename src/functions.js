import { uid } from 'uid'
import _ from 'lodash'
import * as act from '@src/actions'

export function commitCanvas (canvas) {
  return dispatch => {
    const uniq = _.uniqBy(
      _.flatten(canvas).filter(({ loop }) => loop != null),
      'loop'
    )

    dispatch(act.setCanvas(canvas))
    dispatch(act.setCanvasLegend(uniq))

    console.log(canvas)
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

export function setActiveLoop (activeLoop) {
  return (dispatch, getState) => {
    const { groups, plaits } = getState()

    dispatch(act.setActiveLoop(activeLoop))
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
