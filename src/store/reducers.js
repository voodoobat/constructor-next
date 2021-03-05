import { initialState } from '@store/state'

export default function reducers (state = initialState, { type, payload }) {

  switch (type) {
    case 'RESET_STATE':
      return {
        ...state,
        ...payload
      }

    case 'SET_SCHEME':
      return {
        ...state,
        ...payload
      }

    case 'SET_CANVAS':
      return {
        ...state,
        ...payload
      }

    case 'SET_HISTORY':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_CURRENT_STEP':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_ACTIVE_LOOP':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_ACTIVE_LOOP_ICON':
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
    
    case 'SET_SWATCHES':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_CANVAS_LEGENDS':
      return {
        ...state,
        ...payload
      }

    case 'SET_CUSTOM_CURSOR':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_REPORT':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_IS_CONFIRM':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_SCHEME_NAME':
      return {
        ...state,
        ...payload
      }
    
    case 'SET_SCHEME_UID':
      return {
        ...state,
        ...payload
      }
    
    default:
      return state
  }
}
