const str1 = 'パトカー'
const str2 = 'タクシー'

let answer = ''
for (let i = 0; i < str1.length; i++) {
    answer += (str1[i] + str2[i])
}

console.log(answer);
