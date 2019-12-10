import Vue from 'vue'
import Router from 'vue-router'
// Bootstrapを使うための設定
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// 使うファイルを読み込んでいる
/* eslint-disable no-multi-spaces */
import home    from '@/components/home'
import about   from '@/components/about'
import history from '@/components/history'
import works   from '@/components/works'
import contact from '@/components/contact'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  // mode: 'history', リンクエラーを引き起こすとてもわるいやつ
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/history',
      name: 'History',
      component: history
    },
    {
      path: '/works',
      name: 'Works',
      component: works
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    }
  ]
})
