import { initialState } from '@src/state'

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case 'SAVE_STEP':
      return {
        ...state,
        history: [...state.history, payload.canvas]
      }

    case 'CHANGE_CANVAS':
      return {
        ...state,
        canvas: payload.canvas
      }
    
    case 'CHANGE_ACTIVE_LOOP':
      return {
        ...state,
        activeLoop: payload.activeLoop
      }

    case 'CHANGE_ACTIVE_TOOL':
      return {
        ...state,
        activeTool: payload.activeTool
      }
    
    default:
      return state
  }
}
