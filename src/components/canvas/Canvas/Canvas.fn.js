export const setToCanvas = (canvas, { x, y }, loop) => {
  const clone = [...canvas]
  const cell = [...canvas[y]]

  cell[x] = { ...cell[x], loop }
  clone[y] = cell

  console.log(cell[x])

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
