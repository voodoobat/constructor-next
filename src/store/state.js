import { uid } from 'uid'

import { createEmptyCanvas } from '@src/util'
import { plaits } from '@src/fixtures/plaits'
import { colors } from '@src/fixtures/colors'

const canvas = createEmptyCanvas(20, 10, null)

export const initialState = {

  // app static state
  activeTool: '',
  activeLoop: NaN,
  activeLoopIcon: '', 
  activeGroup: null,
  activeColor: '#ffffff',
  activeSwatches: colors,
  activePlaits: plaits,

  isConfirm: false,
  isCustomCursor: false,

  tools: [
    { type: 'Move' },
    { type: 'Eraze' },
    { type: 'ReportRow' },
    { type: 'ReportLoop' },
    { type: 'Color' },
    { type: 'Group' },
    { type: 'Size' },
  ],

  // scheme
  schemeUid: '',
  schemeName: '',
  schemeCanvas: [],
  schemeLegends: [],
  schemeGroups: [],
  schemeReports: [],

  schemeHistoryStep: '',
  schemeHistory: [{
    uid: uid(),
    canvas
  }]
}
