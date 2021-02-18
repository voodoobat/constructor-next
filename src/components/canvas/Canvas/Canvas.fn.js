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

export const mapCanvas = (canvas, fn) => canvas.map(y => y.map(x => fn(x)))

export const select = (canvas, cell, props) => {
  return canvas.map(y => y.map(x => {
    if (props) return cell.uid == x.uid
      ? { ...x, ...props }
      : x
    return x
  }))
}

export const square = (canvas, cell, start, props) => {
  let cnvs = [...canvas]

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

  if (props) return mapCanvas(cnvs, cell => {
    return cell.selected
      ? { ...cell, ...props }
      : cell
  })

  return cnvs
}
