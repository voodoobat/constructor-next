export const filterCanvas = canvas => {
  const temp = []
  canvas.forEach(element => temp.push(
    element.filter(({ selected }) => selected)
  ))

  const cnvs = temp.filter(el => Boolean(el.length))
  return cnvs
}

export const reset = canvas => {
  const clone = [...canvas]

  clone.forEach(element => element.forEach(cell => cell.selected = false))
  return clone
} 

export const mapCanvas = (canvas, fn) => canvas.map(y => y.map(x => fn(x)))

export const select = (canvas, cell) => {
  return canvas.map(y => y.map(x => {
    return { ...x, selected: cell.uid == x.uid }
  }))
}

export const square = (canvas, cell, start) => {
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

  return cnvs
}

export const placeGroup = (canvas, group, preview = false) => {
  const cnvs = [...canvas]

  let curRow = 0
  cnvs.forEach(row => {
    let curCell = 0

    if (row.find(el => el.selected)) {
      row.forEach(e => {
        if (e.selected) {
          const c = group.canvas[curRow][curCell]

          e.background = c?.background 

          if (preview) {
            e.preview = c?.loop
          } else {
            e.loop = c?.loop
            e.selected = false 
          }

          curCell++
        }
      })

      curRow++
    }
  })

  return cnvs
}

export const squareGroup = (canvas, cell, group) => {
  const corner = {
    x: cell.x + group.canvas[0].length - 1,
    y: cell.y + group.canvas.length - 1 
  }

  let cnvs = [...canvas]
  cnvs = square(cnvs, corner, cell)

  let temp = mapCanvas(cnvs, cl => cl.preview = false) 
  temp = placeGroup(cnvs, group, true)

  return temp
}
