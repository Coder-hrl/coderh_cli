const { sum, dataFormat } = require('./js/foo')
import './js/foo'
import { createApp } from 'vue'
import App from './js/App.vue'
const app = createApp(App)
app.mount('#app')
// 手动引入,实现polyfill
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
// import './js/react.js'
// 需要自己手动去音容
require('./js/compoent')
import(/* webpackChunkName:"react"*/ './js/react').then(() => {
  console.log('我加载了')
})
import { sum as stirngSum } from './js/foo.ts'
console.log('first')
sum(20, 19)
console.log(stirngSum('a', 'b'))
const str1 = dataFormat('abc123456')
console.log(str1)
if (module.hot) {
  module.hot.accept('./js/foo.js')
}
