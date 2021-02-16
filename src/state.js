import { createCanvas } from '@src/util'

export const initialState = {
  activeLoop: 10,
  history: [],
  canvas: createCanvas(40, 20, null)
}
