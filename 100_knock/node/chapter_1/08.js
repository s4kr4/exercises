const cipher = (str) => {
  return str.split('').map((char) => {
    const code = char.charCodeAt()
    if (97 <= code && code <= 122) {
      return String.fromCharCode(219 - code)
    } else {
      return char
    }
  }).join('')
}

console.log('Hello, world!');
console.log(cipher('Hello, world!'));
console.log(cipher(cipher('Hello, world!')));
