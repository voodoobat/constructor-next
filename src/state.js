import { createEmptyCanvas } from '@src/util'
import { plaits } from '@src/fixtures/plaits'

export const initialState = {
  activeLoop: null,
  activeTool: null,
  activeGroup: null,
  activeColor: null,
  defaultSwatches: ['#C83F51', '#006DF1', '#000000', '#1483B6', '#2A95C7', '#639262'],
  swatches: [],
  canvasLegends: [],
  canvas: createEmptyCanvas(30, 15, null),

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

// setTimeout(() => {
//   initialState.canvas = createEmptyCanvas(5, 5)
// }, 1000)
