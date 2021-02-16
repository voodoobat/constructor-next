import { createCanvas } from '@src/util'

export const initialState = {
  activeLoop: null,
  activeTool: null,
  canvas: createCanvas(40, 20, null),
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
