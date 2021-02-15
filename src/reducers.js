import { initialState } from '@src/state'

export const reducer = (state = initialState, { type, loop, canvas }) => {

  if (type == 'SET_ACTIVE_LOOP') {
    return {
      ...state,
      activeLoop: loop
    }
  }

  if (type == 'SET_CANVAS') {
    return {
      ...state,
      canvas
    }
  }

  return state
}
