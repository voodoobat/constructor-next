export const changeCanvas = canvas => ({ type: 'CHANGE_CANVAS', payload: { canvas } })
export const saveStep = canvas => ({ type: 'SAVE_STEP', payload: { canvas } })
export const changeActiveLoop = activeLoop => ({ type: 'CHANGE_ACTIVE_LOOP', payload: { activeLoop } })
export const changeActiveTool = activeTool => ({ type: 'CHANGE_ACTIVE_TOOL', payload: { activeTool } })
