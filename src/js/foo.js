function sum(num1, num2) {
  return num1 + num2
}
const dataFormat = data => {
  return data.replaceAll(/abc/gi, '')
}
const obj = { name: '12345' }
let name = obj?.name
console.log(name)
console.log('second')
module.exports = {
  sum,
  dataFormat
}
