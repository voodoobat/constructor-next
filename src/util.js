import { uid } from 'uid'

export const createCell = (x, y, loop = null) => ({
  x,
  y,
  loop,
  uid: uid(),
  background: '#ffffff',
  selected: false,
  preview: {
    background: null,
    loop: null
  }
})

export const createEmptyRow = (size, y = 0) => {
  const temp = []

  for (let j = 0; j <= size; j++) {
    temp.push(createCell(j, y))
  }

  return temp
}

export const createEmptyCanvas = (x, y) => {
  const canvas = []

  for (let j = 0; j < y; j++) {
    canvas.push(createEmptyRow(x, j))
  }

  return canvas
}

export const is = (x, ...args) => {
  let bool = false

  args.forEach(y => {
    bool = x == y
  })

  return bool
}

export const or = (x, ...args) => {
  let bool = false

  args.forEach(y => {
    if (x == y) bool = true
  })

  return bool
}
