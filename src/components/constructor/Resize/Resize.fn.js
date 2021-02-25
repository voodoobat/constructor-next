import { createEmptyRow } from '@src/util'

export const resize = canvas => {
  const size = canvas[0].length
  const cnvs = []

  cnvs.push(createEmptyRow(size - 1))
  canvas.forEach((row, index) => {
    cnvs.push(row.map(cell => ({...cell, y: index + 1})))
  })

  return cnvs
}
