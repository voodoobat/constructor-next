const initialState = {
  activeLoop: 2
}

export const reducer = (state = initialState, { type, loop }) => {

  if (type == 'SET_ACTIVE_LOOP') {
    return {
      ...state,
      activeLoop: loop
    }
  }

  return state
}
