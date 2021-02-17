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

// const getGreaterCell = (data, prop) => {
//   let result = 0

//   data.forEach(cell => {
//     if (cell[prop] > result) {
//       result = cell[prop]
//     }
//   })

//   return result
// }

// const getSmallerCell = (data, prop, max) => {
//   let result = max

//   data.forEach(cell => {
//     if (cell[prop] < result) {
//       result = cell[prop]
//     }
//   })

//   return result
// }

const select = (canvas, start, end) => {
  const clone = [...canvas]

  clone.forEach(element => element.forEach(cell => {
    const { x, y } = cell

    cell.selected = (
      x >= start.x &&
      x <= end.x &&
      y >= start.y &&
      y <= end.y
    )
  }))

  return clone
}

export const setSelectedCell = (canvas, start, end) => {
  return select(canvas, start, end)
}
