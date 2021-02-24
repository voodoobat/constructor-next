export const setCanvas = canvas => ({
  type: 'SET_CANVAS',
  payload: { canvas }
})

export const saveHistoryStep = canvas => ({
  type: 'SAVE_HISTORY_STEP',
  payload: { canvas }
})

export const setActiveLoop = activeLoop => ({
  type: 'SET_ACTIVE_LOOP',
  payload: { activeLoop }
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

export const saveColorToSwatches = color => ({
  type: 'SET_ACTIVE_COLOR',
  payload: { color }
})

export const setCanvasLegend = canvasLegends => ({
  type: 'SET_CANVAS_LEGENDS',
  payload: { canvasLegends }
})
