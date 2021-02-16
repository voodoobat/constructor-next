import { initialState } from '@src/state'

export default (state = initialState, action) => {

  switch (action.type) {

    case 'SAVE_STEP':
      return {
        ...state,
        canvas: action.payload.canvas
      }

    case 'CHANGE_CANVAS':
      return {
        ...state,
        canvas: action.payload.canvas
      }
    
    default:
      return state
  }
}
