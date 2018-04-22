const str = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."

const random = (str) => {
  const source = str.split('')
  const count = source.length

  let randomStr = ''
  for (let i = 0; i < count; ++i) {
    randomStr += source.splice(Math.floor(Math.random() * source.length), 1)
  }

  return randomStr
}

const answer = str
  .split(' ')
  .map((elm) => {
    const length = elm.length
    if (length > 4) {
      const middleStr = elm.slice(1, length - 1)
      return elm[0] + random(middleStr) + elm[length - 1]
    } else {
      return elm
    }
  })
  .join(' ')

console.log(answer);
