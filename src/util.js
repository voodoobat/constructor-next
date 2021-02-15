export const createCanvas = (x, y, loop = null) => {
  const row = []
  const canvas = []

  for (let j = 0; j < x; j++) row.push(loop)
  for (let j = 0; j < y; j++) canvas.push(row)

  return canvas
}
