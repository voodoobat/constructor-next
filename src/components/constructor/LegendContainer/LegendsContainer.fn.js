import { getData } from '@src/fixtures/loops'
const data = getData(true)

export const withLegends = src => src.map(({ element, customHint }) => {
  const hint = customHint || data.find(el => el.id == element.loop).hint

  return {
    ...element,
    background: '#ffffff',
    hint
  }
})
