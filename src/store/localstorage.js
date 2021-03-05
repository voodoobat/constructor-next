import { isClient, getSchemeData } from '@src/util'
import { LOCALSTORAGE_KEY } from '@src/config'

export const save = store => {
  const data = JSON.stringify(getSchemeData(store))
  isClient && localStorage.setItem(LOCALSTORAGE_KEY, data)
}

export const fetch = () => {
  return isClient
    ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    : null
}
