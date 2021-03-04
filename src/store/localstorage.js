import { getSchemeData } from '@src/util'
import { LOCALSTORAGE_KEY } from '@src/config'

export const save = store => {
  const data = JSON.stringify(getSchemeData(store))
  localStorage.setItem(LOCALSTORAGE_KEY, data)
}

export const fetch = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
}
