export const setCanvas = canvas => ({
  type: 'SET_CANVAS',
  payload: { canvas }
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

export const setGroups = groups => ({
  type: 'SET_GROUPS',
  payload: { groups }
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

export const setCanvasLegend = canvasLegends => ({
  type: 'SET_CANVAS_LEGENDS',
  payload: { canvasLegends }
})

export const setHistory = history => ({
  type: 'SET_HISTORY',
  payload: { history }
})

export const setCurrentStep = currentStep => ({
  type: 'SET_CURRENT_STEP',
  payload: { currentStep }
})

export const setCustomCursor = customCursor => ({
  type: 'SET_CUSTOM_CURSOR',
  payload: { customCursor }
})

export const setReport = reports => ({
  type: 'SET_REPORT',
  payload: { reports }
})

export const setConfirm = isConfirm => ({
  type: 'SET_REPORT',
  payload: { isConfirm }
})

