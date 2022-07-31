function sum(num1, num2) {
  return num1 + num2
}
const dataFormat = (data) => {
  return data.replaceAll(/abc/gi, '')
}
const obj = { name: 'abc' }
let name = obj?.name
console.log(name)
module.exports = {
  sum,
  dataFormat,
}
