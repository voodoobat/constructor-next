export const createCanvas = (x, y, loop = null) => {
  const row = []
  const canvas = []

  for (let j = 0; j < x; j++) row.push({ loop, selected: false })
  for (let j = 0; j < y; j++) canvas.push(row)

  return canvas
}

export const cloneCanvasWithNewCell = (canvas, x, y, loop = null) => {
  const clone = [...canvas]
  const cell = [...canvas[y]]

  cell[x] = { loop }
  clone[y] = cell

  return clone
}
