export const sortComments = (array) => {
  let temp = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (Date.parse(array[j].date) > Date.parse(array[i].date)) {
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}