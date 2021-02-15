export const createCanvas = (cols, rows, value = null) => {
  const row = []
  const matrix = []

  for (let j = 0; j < cols; j++) row.push(value)
  for (let j = 0; j < rows; j++) matrix.push(row)

  return matrix
}

export const setNewCanvas = (canvas, x, y, value = null) => {
  const result = [...canvas]
  const resultRow =  [...result[y]]

  resultRow[x] = value
  result[y] = resultRow
  return result
}
