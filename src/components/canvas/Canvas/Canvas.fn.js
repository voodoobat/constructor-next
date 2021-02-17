export const setToCanvas = (canvas, { x, y }, loop) => {
  const clone = [...canvas]
  const cell = [...canvas[y]]

  cell[x] = { ...cell[x], loop }
  clone[y] = cell

  return clone
}

export const createCanvasFromSelect = canvas => {
  const group = []

  canvas.forEach(element => group.push(
    element.filter(({ selected }) => selected == true)
  ))

  return group
}

export const rmSelect = canvas => {
  const clone = [...canvas]

  clone.forEach(element => element.forEach(cell => cell.selected = false))
  return clone
} 

export const selectSquare = (canvas, cell, start) => {
  const clone = [...canvas]

  clone.forEach(element => element.forEach(c => {
    const { x, y } = c

    if (x >= start.x && y >= start.y)
      return c.selected = (
        x >= start.x &&
        x <= cell.x &&
        y >= start.y &&
        y <= cell.y
      )

    if (x <= start.x && y >= start.y)
      return c.selected = (
        x <= start.x &&
        x >= cell.x &&
        y >= start.y &&
        y <= cell.y
      )

    if (x >= start.x && y <= start.y)
      return c.selected = (
        x >= start.x &&
        x <= cell.x &&
        y <= start.y &&
        y >= cell.y
      )

    if (x <= start.x && y <= start.y)
      return c.selected = (
        x <= start.x &&
        x >= cell.x &&
        y <= start.y &&
        y >= cell.y
      )
  }))

  return clone
}
