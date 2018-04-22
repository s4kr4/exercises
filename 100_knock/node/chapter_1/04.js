const str = 'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.'

const ary = str.split(' ')

const answer = {}
for (let i = 0; i < ary.length; i++) {
  if (i % 2 === 0) {
    answer[ary[i].slice(0, 1)] = i + 1
  } else {
    answer[ary[i].slice(0, 2)] = i + 1
  }
}

console.log(answer);
