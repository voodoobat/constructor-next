import { uid } from 'uid'

import _ from 'lodash'

import { createEmptyCanvas } from '@src/util'
import * as local from '@store/localstorage'
import * as act from '@src/store/actions'

import { API_URL } from '@src/config'

export function localSave () {
  return (dispatch, getState) => {
    local.save(getState())
  }
}

export function createScheme ({ uid, name, rows, cols, onlyOdd }) {
  return (dispatch, getState) => {
    const canvas = createEmptyCanvas(cols, rows)

    dispatch(act.resetState())
    local.save(getState())

    dispatch(act.setSchemeCanvas(canvas))
    dispatch(act.setSchemeName(name))
    dispatch(act.setSchemeUid(uid))
    dispatch(act.setSchemeOnlyOddCells(onlyOdd))
    dispatch(act.setSchemeHistorytStep('zero-step'))
    dispatch(act.setSchemeHistory([{ uid: 'zero-step', canvas }]))
  }
}

export function setSchemeByUid (query) {
  return async () => {
    const res = await fetch(`${API_URL}/schemes/${query.uid}`)
      const scheme = await res.json()

      local.save(scheme)
  }
}

export function setSchemeName (name) {
  return dispatch => {
    dispatch(act.setSchemeName(name))
  }
}

export function setSchemeHistorytStep (uid) {
  return dispatch => {
    dispatch(act.setSchemeHistorytStep(uid))
  }
}

export function commitCanvas (canvas, save = true) {
  return (dispatch, getState) => {
    const { schemeHistory, schemeCurrentStep } = getState()

    const uniq = _.uniqBy(
      _.flatten(canvas).filter(({ loop }) => loop != null),
      'loop'
    )

    dispatch(act.setSchemeCanvas(canvas))
    dispatch(act.setCanvasLegend(uniq))

    if (save) {
      const stepUid = uid()
      const index = schemeHistory.findIndex(({ uid }) => uid == schemeCurrentStep)
      const temp = [...schemeHistory]

      if (index > -1) {
        temp.length = index + 1
      } 

      dispatch(act.setSchemeHistory([...temp, { uid: stepUid, canvas }]))
      dispatch(act.setSchemeHistorytStep(stepUid))
    }
  }
}

export function setReport (report) {
  return (dispatch, getState) => {
    const { schemeReports } = getState()

    dispatch(act.setReport([...schemeReports, report]))
  }
}

export function removeReport ({ uid }) {
  return (dispatch, getState) => {
    const { schemeReports, schemeCanvas } = getState()

    dispatch(act.setReport(schemeReports.filter(report => report.uid != uid)))
    dispatch(act.setSchemeCanvas(schemeCanvas.map(y => y.map(cell => {
      return cell.report?.uid == uid
        ? { ...cell, report: null }
        : { ...cell }
    }))))
  }
}

export function setActiveGroup (group) {
  return (dispatch, getState) => {
    const { schemeGroups, activePlaits } = getState()

    const setActive = array => array.map(g => {
      return g.uid == group.uid
        ? { ...g, active: true } 
        : { ...g, active: false }
    })

    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(group))

    if (group.isPlait) {
      dispatch(act.setGroups(schemeGroups.map(g => ({
        ...g, active: false
      }))))

      return dispatch(act.setPlaits(setActive(activePlaits)))
    }

    dispatch(act.setPlaits(activePlaits.map(p => ({
      ...p, active: false
    }))))

    return dispatch(act.setGroups(setActive(schemeGroups)))
  }
}

export function commitNewGroup (canvas) {
  return (dispatch, getState) => {
    const { schemeGroups } = getState()
    dispatch(act.setGroups([ ...schemeGroups, {
      uid: uid(),
      active: false,
      canvas,
    }]))
  }
}

export function removeGroup ({ uid }) {
  return (dispatch, getState) => {
    const { schemeGroups } = getState()

    dispatch(act.setGroups(schemeGroups.filter(g => g.uid != uid)))
    dispatch(act.setActiveGroup(null))
  }
}

export function setActiveTool (activeTool) {
  return (dispatch, getState) => {
    const { schemeGroups, activePlaits } = getState()

    dispatch(act.setActiveTool(activeTool))
    dispatch(act.setActiveLoop(null))
    dispatch(act.setActiveLoopIcon(''))
    dispatch(act.setActiveGroup(null))

    dispatch(act.setPlaits(activePlaits.map(p => ({
      ...p, active: false
    }))))
    dispatch(act.setGroups(schemeGroups.map(g => ({
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
  }
}

export function setActiveLoop (activeLoop, icon = '') {
  return (dispatch, getState) => {
    const { schemeGroups, activePlaits } = getState()

    dispatch(act.setActiveLoop(activeLoop))
    dispatch(act.setActiveLoopIcon(icon))
    dispatch(act.setActiveTool(null))
    dispatch(act.setActiveGroup(null))

    dispatch(act.setPlaits(activePlaits.map(p => ({
      ...p, active: false
    }))))

    dispatch(act.setGroups(schemeGroups.map(g => ({
      ...g, active: false
    }))))
  }
}

export function setCustomCursor (cursor) {
  return dispatch => {
    dispatch(act.setCustomCursor(cursor))
  }
}


export function setConfirm (isConfirm) {
  return dispatch => {
    dispatch(act.setConfirm(isConfirm))
  }
}
