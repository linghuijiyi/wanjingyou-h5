    import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Tabbar, TabbarItem, Field, Button } from 'vant'
import './common/style/index.styl'
import './common/font/iconfont.css'
import MescrollVue from 'mescroll.js/mescroll.vue'

Vue.use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Field).use(Button)

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})