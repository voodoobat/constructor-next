import { getSchemeData } from '@src/util'

const STORAGE_KEY = 'scheme'

export const save = store => {
  const data = JSON.stringify(getSchemeData(store))
  localStorage.setItem(STORAGE_KEY, data)
}

export const fetch = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY))
}
