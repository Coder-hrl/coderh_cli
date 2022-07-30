function sum(num1, num2) {
  return num1 + num2
}
const dataFormat = (data) => {
  return data.replaceAll(/abc/gi, '')
}

module.exports = {
  sum,
  dataFormat,
}
