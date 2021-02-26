import { uid } from 'uid'

import { createEmptyCanvas } from '@src/util'
import { plaits } from '@src/fixtures/plaits'
const canvas = createEmptyCanvas(47, 27, null)

export const initialState = {
  activeLoop: NaN,
  activeLoopIcon: '', 
  activeTool: '',
  activeGroup: null,
  activeColor: '#FFFFFF',
  defaultSwatches: ['#C83F51', '#006DF1', '#000000', '#1483B6', '#2A95C7', '#639262'],
  swatches: [],
  canvasLegends: [],
  groups: [],
  canvas,
  plaits,

  customCursor: false,
  currentStep: '',
  history: [{
    uid: uid(),
    canvas
  }],

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
