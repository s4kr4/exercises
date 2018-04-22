const str = 'I am an NLPer'
const ary = ['I', 'am', 'an', 'NLPer']

const nGram = (sequence, n) => {
  if (typeof sequence === 'string') {
    sequence = sequence.split('')
  }

  const gram = sequence
    .map((elm, index, self) => {
      if (index < self.length - n + 1) {
        return self.slice(index, index + n).join('')
      }
    })
    .filter((elm) => elm !== undefined)

  return gram
}

console.log(nGram(str, 2));
console.log(nGram(ary, 2));
