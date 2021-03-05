import { uid } from 'uid'

export const mapMatrix = (matrix, fn) => matrix.map(y => y.map(x => fn(x)))

export const getSubMatrix = (canvas, prop, compare) => {
  const temp = []
  canvas.forEach(y => temp.push(
    y.filter(cell => cell[prop] == compare)
  ))

  const cnvs = temp.filter(el => Boolean(el.length))
  return cnvs
}

export const reselect = canvas => mapMatrix(canvas, cell => ({
  ...cell,
  selected: false
}))

export const reset = canvas => {
  const cnvs = [...canvas]

  cnvs.forEach(y => y.forEach(x => {
    x.selected = false
    x.preview.background = null
    x.preview.loop = null
  }))

  return cnvs
} 

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

          if (preview) {
            e.preview.loop = c?.loop
            e.preview.background = c?.background
          }
          
          else {
            e.loop = c?.loop
            e.background = c?.background 
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

  let temp = mapMatrix(cnvs, cl => {
    cl.preview.loop = null
    cl.preview.background = null
  }) 

  temp = placeGroup(cnvs, group, true)
  return temp
}

export const lastCellWithProp = (canvas, sub, prop, value) => {
  const cnvs = [...canvas]
  const last = sub[sub.length - 1]

  if (last != null) {
    const { x, y } = last[last.length - 1]

    cnvs[y][x][prop] = value
    return cnvs
  }

  return cnvs
}

export const createReport = (canvas, reports) => {
  const len = reports.length
  const lastReport = len ? reports[len - 1] : null
  const sampleColors = [
    '#cfd8dc',
    '#b0bec5',
    '#90a4ae',
  ]

  let colorIndex = NaN

  len && sampleColors.forEach((color, index) => {
    if (lastReport.color == color) {
      colorIndex = index + 1
    }
  })

  const elements = mapMatrix(canvas, ({ uid }) => uid)

  return {
    uid: uid(),
    color: sampleColors[colorIndex] || sampleColors[0],
    canvas,
    elements 
  }
}
