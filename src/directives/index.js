import Vue from 'vue'
import velocity from 'velocity-animate'

Vue.directive('slideIn', {
  inserted (el, binding, vnode, oldNode) {
    el.style.position = 'relative'
    el.style.left = '150px'
    velocity(el, {
      left: 0,
      duration: binding.value || 200
    })
  }
})

Vue.directive('fadeIn', {
  inserted (el, binding, vnode, oldNode) {
    el.style.opacity = 0
    velocity(el, {
      opacity: 1,
      duration: 10000
    })
  }
})
