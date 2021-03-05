import * as util from '@src/util'
import * as local from '@store/localstorage'

import { plaits } from '@src/fixtures/plaits'
import { colors } from '@src/fixtures/colors'

const getLocalState = () => util.isClient ? local.fetch() : {}

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
  schemeHistory: [],

  ...getLocalState()
}
