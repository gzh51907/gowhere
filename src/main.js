import Vue from 'vue'

// 引入css样式，可以设置默认路径 在build中 webpack.base.conf.js文件中可以配置，例如@/assets/css = css
import 'css/iconfont.css'
import 'css/border.css'
import 'css/base.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false

// 在全局导入使用Swpier组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
