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

export const formatPlural = (number, text1, text2, text5, returnNumber = true) => {
  let numberAbs = Math.abs(number)
  let mod10 = numberAbs % 10
  let text = text1

  switch (true) {
    case mod10 === 0:
    case mod10 >= 5 && mod10 <= 9:
    case numberAbs >= 11 && numberAbs <= 14:
      text = text5;
      break

    case mod10 === 1:
      text = text1;
      break

    case mod10 >= 2 && mod10 <= 4:
      text = text2;
      break
  }

  if (returnNumber) {
    return number + ' ' + text
  }

  return text
}
