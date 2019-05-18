import './polyfill'
import Vue from 'vue'
import SandBox from './llexec/SandBox.vue'

Vue.config.productionTip = false

window.MAKE_EFFECT_NODE_GRAPH_ENGINE = ({ dom, water }) => {
  new Vue({
    data () {
      return {
        water: water
      }
    },
    render: h => h(SandBox)
  }).$mount(dom)
}
