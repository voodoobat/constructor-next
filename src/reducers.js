import { createCanvas } from '@src/functions'

const initialState = {
  activeLoop: 2,
  canvas: createCanvas(100, 50, null)
}

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
