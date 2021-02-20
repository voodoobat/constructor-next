import { createCanvas } from '@src/util'
import { plaits } from '@src/fixtures/plaits'

export const initialState = {
  activeLoop: null,
  activeTool: null,
  activeColor: null,
  activeGroup: null,
  isDrawning: false, // ? how i use this
  canvas: createCanvas(40, 20, null),

  groups: [],
  plaits,
  history: [],

  tools: [
    { type: 'Move' },
    { type: 'Eraze' },
    { type: 'ReportRow' },
    { type: 'ReportLoop' },
    { type: 'Color' },
    { type: 'Group' },
    { type: 'Size' },
  ]
}
