import { createCanvas } from '@src/util'

export const initialState = {
  activeLoop: null,
  activeTool: null,
  isDrawning: false,
  canvas: createCanvas(40, 20, null),
  groups: [
    {
      id: 1,
      name: 'Моя группа элементов',
      canvas: createCanvas(4, 4, 3)
    }
  ],
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
