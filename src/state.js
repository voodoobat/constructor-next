import { createCanvas } from '@src/util'

export const initialState = {
  activeLoop: null,
  activeTool: null,
  isDrawning: false,
  canvas: createCanvas(40, 20, null),
  selections: [],
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
