import { instruments, scheme } from '@store/state'

export const resetState = () => ({
  type: 'RESET_STATE',
  payload: {
    ...instruments,
    ...scheme
  }
})

export const setActiveLoop = activeLoop => ({
  type: 'SET_ACTIVE_LOOP',
  payload: { activeLoop }
})

export const setActiveLoopIcon = activeLoopIcon => ({
  type: 'SET_ACTIVE_LOOP',
  payload: { activeLoopIcon }
})

export const setActiveTool = activeTool => ({
  type: 'SET_ACTIVE_TOOL',
  payload: { activeTool }
})

export const setPlaits = plaits => ({
  type: 'SET_PLAITS',
  payload: { plaits }
})

export const setActiveGroup = activeGroup => ({
  type: 'SET_ACTIVE_GROUP',
  payload: { activeGroup }
})

export const setActiveColor = activeColor => ({
  type: 'SET_ACTIVE_COLOR',
  payload: { activeColor }
})

export const setSwatches = swatches => ({
  type: 'SET_SWATCHES',
  payload: { swatches }
})

export const setCustomCursor = customCursor => ({
  type: 'SET_CUSTOM_CURSOR',
  payload: { customCursor }
})

export const setConfirm = isConfirm => ({
  type: 'SET_REPORT',
  payload: { isConfirm }
})



export const setSchemeUid = schemeUid => ({
  type: 'SET_SCHEME_UID',
  payload: { schemeUid }
})

export const setSchemeName = schemeName => ({
  type: 'SET_SCHEME_NAME',
  payload: { schemeName }
})

export const setSchemeCanvas = schemeCanvas => ({
  type: 'SET_CANVAS',
  payload: { schemeCanvas }
})

export const setGroups = schemeGroups => ({
  type: 'SET_GROUPS',
  payload: { schemeGroups }
})

export const setCanvasLegend = schemeLegends => ({
  type: 'SET_CANVAS_LEGENDS',
  payload: { schemeLegends }
})

export const setReport = schemeReports => ({
  type: 'SET_REPORT',
  payload: { schemeReports }
})

export const setSchemeHistory = schemeHistory => ({
  type: 'SET_HISTORY',
  payload: { schemeHistory }
})

export const setSchemeHistorytStep = schemeHistoryStep => ({
  type: 'SET_CURRENT_STEP',
  payload: { schemeHistoryStep }
})

export const setSchemeOnlyOddRows = schemeOnlyOddRows => ({
  type: 'SET_SCHEME_ONLY_ODD_ROWS',
  payload: { schemeOnlyOddRows }
})

export const setSchemeCustomCells = schemeCustomCells => ({
  type: 'SET_SCHEME_CUSTOM_CELLS',
  payload: { schemeCustomCells }
})
