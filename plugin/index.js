const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook
} = require('tapable')

// Bail 在某一个事件监听函数中,如果有返回值,后续就不再执行
// Loop 会进行反复执行,这个事件不停地进行执行
// SyncWaterfallHook 当返回值不为undefined的时候
class HYLearnTaple {
  constructor() {
    this.hooks = {
      syncHook: new SyncLoopHook(['name', 'age'])
    }
    this.hooks.syncHook.tap('event1', (name, age) => {
      console.log('event1', name, age)
      return name, age
    })
    this.hooks.syncHook.tap('event2', (name, age) => {
      console.log('event2', name, age)
    })
  }
  emit() {
    this.hooks.syncHook.call('name', 'age')
  }
}
const lt = new HYLearnTaple()
lt.emit()
