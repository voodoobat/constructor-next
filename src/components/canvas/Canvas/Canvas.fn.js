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

export const reset = canvas => {
  const clone = [...canvas]

  clone.forEach(element => element.forEach(cell => cell.selected = false))
  return clone
} 

export const select = (canvas, cell, props) => {
  return canvas.map(y => y.map(x => {
    return cell.uid == x.uid
      ? { ...x, ...props }
      : x
  }))
}

export const square = (canvas, cell, start, props) => {
  const cnvs = [...canvas]

  cnvs.forEach(element => element.forEach(c => {
    const { x, y } = c

    if (x >= start.x && y >= start.y) {
      return c.selected = (
        x >= start.x &&
        x <= cell.x &&
        y >= start.y &&
        y <= cell.y
      )
    }

    if (x <= start.x && y >= start.y) {
      return c.selected = (
        x <= start.x &&
        x >= cell.x &&
        y >= start.y &&
        y <= cell.y
      )
    }

    if (x >= start.x && y <= start.y) {
      return c.selected = (
        x >= start.x &&
        x <= cell.x &&
        y <= start.y &&
        y >= cell.y
      )
    }

    if (x <= start.x && y <= start.y) {
      return c.selected = (
        x <= start.x &&
        x >= cell.x &&
        y <= start.y &&
        y >= cell.y
      )
    }
  }))

  return cnvs.map(y => y.map(x => {
    return x.selected
      ? { ...x, ...props }
      : x
  }))
}
