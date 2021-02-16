import { initialState } from '@src/state'

export default (state = initialState, action) => {

  switch (action.type) {

    case 'SAVE_STEP':
      return {
        ...state,
        history: [...state.history, action.payload.canvas]
      }

    case 'CHANGE_CANVAS':
      return {
        ...state,
        canvas: action.payload.canvas
      }
    
    case 'CHANGE_ACTIVE_LOOP':
      return {
        ...state,
        activeLoop: action.payload.activeLoop
      }
    
    default:
      return state
  }
}
