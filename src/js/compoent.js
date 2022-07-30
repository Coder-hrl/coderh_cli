import '../css/index.css'
import '../css/index.less'
function component() {
  const element = document.createElement('div')
  element.className = 'div'
  element.innerHTML = 'webpack学习'
  return element
}
document.body.appendChild(component())
