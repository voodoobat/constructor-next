import { flatten } from 'lodash'

export const createCanvas = (x, y, loop = null) => {
  const canvas = []

  for (let jY = 0; jY < y; jY++) {
    canvas.push([])

    for (let jX = 0; jX < x; jX++) {
      canvas[jY].push({
        y: jY, x: jX, loop, selected: false
      })
    }
  }

  return canvas
}

export const cloneCanvasWithNewCell = (canvas, x, y, loop = null) => {
  const clone = [...canvas]
  const cell = [...canvas[y]]

  cell[x] = { ...cell[x], loop }
  clone[y] = cell

  return clone
}

const getGreaterCell = (data, prop) => {
  let result = 0

  data.forEach(cell => {
    if (cell[prop] > result) {
      result = cell[prop]
    }
  })

  return result
}

const getSmallerCell = (data, prop, max) => {
  let result = max

  data.forEach(cell => {
    if (cell[prop] < result) {
      result = cell[prop]
    }
  })

  return result
}

const selectSquare = (canvas, sY, gY, sX, gX) => {
  const clone = [...canvas]

  clone.forEach(elements => {
    elements.forEach(cell => {
      const { x, y } = cell
      const selected = (
        x >= sX && x <= gX &&
        y >= sY && y <= gY
      )

      cell.selected = selected
    }) 
  })
}

export const setSelectedCell = (canvas, x, y) => {
  let clone = [...canvas]
  const cell = [...canvas[y]]

  let selected = []

  cell[x] = { ...cell[x], selected: true }
  clone[y] = cell

  selected = flatten(clone).filter(({ selected }) => selected)

  const greatX = getGreaterCell(selected, 'x')
  const greatY = getGreaterCell(selected, 'y')
  const smallX = getSmallerCell(selected, 'x', greatX)
  const smallY = getSmallerCell(selected, 'y', greatY)

  selectSquare(clone, smallY, greatY, smallX, greatX)

  return clone
}
