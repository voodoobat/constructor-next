import { createCanvas } from '@src/util'

export const initialState = {
  activeLoop: 2,
  history: [],
  canvas: createCanvas(40, 20, null)
}
