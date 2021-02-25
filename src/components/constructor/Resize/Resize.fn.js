import { createCell, createEmptyRow } from '@src/util'

export const addTopRow = canvas => {
  const cnvs = []

  cnvs.push(createEmptyRow(canvas[0].length - 1))
  canvas.forEach((row, index) => {
    cnvs.push(row.map(cell => ({...cell, y: index + 1})))
  })

  return cnvs
}

export const removeTopRow = canvas => {
  const cnvs = []

  canvas.forEach((row, index) => {
    if (index > 0) {
      cnvs.push(row.map(cell => ({...cell, y: index - 1})))
    }
  })

  return cnvs
}

export const addRowBottom = canvas => {
  const cnvs = [...canvas]

  cnvs.push(createEmptyRow(canvas[0].length - 1, canvas.length))
  return cnvs
}

export const removeRowBottom = canvas => {
  const cnvs = []

  canvas.forEach((row, index) => {
    if (index < canvas.length - 1) {
      cnvs.push(row.map(cell => ({...cell, y: index - 1 })))
    }
  })

  return cnvs
}

export const addCellRight = canvas => {
  return canvas.map((row, index) => [
    ...row,
    createCell(row.length, index)
  ])
}

export const removeCellRight = canvas => {
  const cnvs = []

  canvas.forEach(row => {
    const temp = []

    row.forEach(cell => {
      if (cell.x < canvas[0].length - 1) {
        temp.push(cell)
      }
    })

    cnvs.push(temp)
  })

  return cnvs
}

export const addCellLeft = canvas => {
  const cnvs = []  

  canvas.forEach((row, index) => {
    const temp = []

    temp.push(createCell(0, index))
    row.forEach(cell => {
      temp.push({ ...cell, x: cell.x + 1})
    })

    cnvs.push(temp)
  })

  return cnvs
}

export const removeCellLeft = canvas => {
  const cnvs = []

  canvas.forEach(row => {
    const temp = []

    row.forEach(cell => {
      if (cell.x > 0) {
        temp.push({ ...cell, x: cell.x - 1 })
      }
    })

    cnvs.push(temp)
  })

  return cnvs
}
