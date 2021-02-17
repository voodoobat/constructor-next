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

export const setLoopToCanvas = (canvas, { x, y }, loop) => {
  const clone = [...canvas]
  const cell = [...canvas[y]]

  cell[x] = { ...cell[x], loop }
  clone[y] = cell

  console.log(cell[x])

  return clone
}
