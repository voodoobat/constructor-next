import { initialState } from '@src/state'

export default function reducers (state = initialState, { type, payload }) {

  switch (type) {
    case 'SAVE_HISTORY_STEP':
      return {
        ...state,
        history: [...state.history, payload.canvas]
      }

    case 'SET_CANVAS':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_ACTIVE_LOOP':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_GROUPS':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_PLAITS':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_ACTIVE_GROUP':
      return {
        ...state,
        ...payload
      }

    case 'SET_ACTIVE_TOOL':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_ACTIVE_COLOR':
      return {
        ...state,
        ...payload
      }
    
    case 'SAVE_COLOR_TO_SWATCHES':
      return {
        ...state,
        swatches: [...state.swatches, payload.color]
      }
    
    case 'SET_CANVAS_LEGENDS':
      return {
        ...state,
        ...payload
      }
    
    default:
      return state
  }
}
