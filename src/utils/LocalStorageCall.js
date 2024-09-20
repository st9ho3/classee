export const localStorageCall = (Goods) => {
   const storedArray = localStorage.getItem(Goods)
   const arrayReadyToUse = storedArray ? JSON.parse(storedArray) : []
   return arrayReadyToUse
}

export const localStorageSend = (Things, things) => {
   localStorage.setItem(`${Things}`, JSON.stringify(things))
}