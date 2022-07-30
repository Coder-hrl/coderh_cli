import '../css/index.css'
import '../css/index.less'
function component() {
  const element = document.createElement('div')
  element.className = 'div'
  element.innerHTML = 'webpack学习'
  const iEl = document.createElement('i')
  iEl.className = 'iconfont icon icon-xuegao'
  element.appendChild(iEl)
  return element
}
function image() {
  const element = new Image()
  element.className = 'img'
  element.src = require('../img/1.png')
  return element
}
document.body.appendChild(component()).appendChild(image())
