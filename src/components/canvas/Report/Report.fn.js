export const getCellByUid = (canvas, uid) => {

  canvas.flat().find(cell => {
    return cell.uid == uid
      ? cell
      : null
  })
}
