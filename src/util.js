import { uid } from 'uid'

export const createCanvas = (x, y, loop = null) => {
  const canvas = []

  for (let jY = 0; jY < y; jY++) {
    canvas.push([])

    for (let jX = 0; jX < x; jX++) {
      canvas[jY].push({
        uid: uid(),
        y: jY,
        x: jX,
        loop,
        background: 'transparent',
        selected: false,
        preview: {
          background: null,
          loop: null
        }
      })
    }
  }

  return canvas
}
