import { writable } from 'svelte/store'

export const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHAT_MODE: 2,
  ERROR: -1
}

/*
Para simular el cargamento del pdf
*/
export const appStatus = writable(APP_STATUS.CHAT_MODE)
export const appStatusInfo = writable({
  id: '9a032f3f4096686d50aca638091dc708',
  url: 'https://res.cloudinary.com/midudev/image/upload/v1706810969/pdf/khiice5vqnr1gcn1pmtq.pdf',
  pages: 4
})

/*
export const appStatus = writable(APP_STATUS.INIT)
export const appStatusInfo = writable({
  id: '',
  url: '',
  pages: 0
})
*/

export const setAppStatusLoading = () => {
  appStatus.set(APP_STATUS.LOADING)
}

export const setAppStatusError = () => {
  appStatus.set(APP_STATUS.ERROR)
}

export const setAppStatusChatMode = (
  { id, url, pages } :
  { id: string, url: string, pages: number }) => {
  appStatus.set(APP_STATUS.CHAT_MODE)
  appStatusInfo.set({ id, url, pages })
}