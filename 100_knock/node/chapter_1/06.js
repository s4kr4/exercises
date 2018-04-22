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

const X = nGram('paraparaparadise', 2)
const Y = nGram('paragraph', 2)
console.log(`X: ${X}`);
console.log(`Y: ${Y}`);

const sum = X
  .concat(Y)
  .filter((elm, index, self) => self.indexOf(elm) === index)
console.log(`X + Y: ${sum}`);

const difference1 = X
  .filter((elm) => !Y.includes(elm))
console.log(`X - Y: ${difference1}`);

const difference2 = Y
  .filter((elm) => !X.includes(elm))
console.log(`Y - X: ${difference2}`);

const cross = X
  .filter((elm) => Y.includes(elm))
  .filter((elm, index, self) => self.indexOf(elm) === index)
console.log(`X x Y: ${cross}`);

if (X.includes('se')) {
  console.log("X includes 'se'");
}

if (Y.includes('se')) {
  console.log("Y includes 'se'");
}
