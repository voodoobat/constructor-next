import { uid } from 'uid'

import { createEmptyCanvas } from '@src/util'
import { plaits } from '@src/fixtures/plaits'
import { colors } from '@src/fixtures/colors'

const canvas = createEmptyCanvas(20, 10, null)

export const initialState = {

  // app static state
  activeLoop: NaN,
  activeLoopIcon: '', 
  activeTool: '',
  activeGroup: null,
  activeColor: '#ffffff',
  isConfirm: false,
  defaultSwatches: colors,
  customCursor: false,
  plaits,

  tools: [
    { type: 'Move' },
    { type: 'Eraze' },
    { type: 'ReportRow' },
    { type: 'ReportLoop' },
    { type: 'Color' },
    { type: 'Group' },
    { type: 'Size' },
  ],


  // data
  schemeUid: '',
  schemeName: '',
  canvasUid: '',
  canvas: [],
  canvasLegends: [],
  groups: [],
  reports: [],

  currentStep: '',
  history: [{
    uid: uid(),
    canvas
  }]
}
