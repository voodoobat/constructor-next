import { initialState } from '@src/state'

export default function reducers (state = initialState, { type, payload }) {

  switch (type) {
    case 'SAVE_HISTORY_STEP':
      return {
        ...state,
        history: [...state.history, payload.canvas]
      }

    case 'CHANGE_CANVAS':
      return {
        ...state,
        ...payload
      }
    
    case 'CHANGE_ACTIVE_LOOP':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_IS_DRAWNING':
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

    case 'CHANGE_ACTIVE_TOOL':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_ACTIVE_COLOR':
      return {
        ...state,
        ...payload
      }
    
    default:
      return state
  }
}
