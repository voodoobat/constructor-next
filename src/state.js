import { createCanvas } from '@src/util'

export const initialState = {
  activeLoop: null,
  activeTool: null,
  activeColor: null,
  isDrawning: false, // ? how i use this
  canvas: createCanvas(48, 280, null),
  groups: [],
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
