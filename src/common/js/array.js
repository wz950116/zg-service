export const wrapData = array => {
  if (array.length) {
    const causeTotal = array.reduce((prev, next) => prev + next)
    array = array.map(item => {
      return {
        ...item,
        total: causeTotal
      }
    })
  }
  return array
}