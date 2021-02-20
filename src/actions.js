export const changeCanvas = canvas => ({
  type: 'CHANGE_CANVAS',
  payload: { canvas }
})

export const saveHistoryStep = canvas => ({
  type: 'SAVE_HISTORY_STEP',
  payload: { canvas }
})

export const setActiveLoop = activeLoop => ({
  type: 'CHANGE_ACTIVE_LOOP',
  payload: { activeLoop }
})

export const setActiveTool = activeTool => ({
  type: 'CHANGE_ACTIVE_TOOL',
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
