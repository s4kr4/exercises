const str = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.'
const ary = str
    .split(' ')
    .map((word) => word.replace(/\.|,/, ''))

console.log(ary);

const list = ary
    .map((word) => word.length)

console.log(list);
