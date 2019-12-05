import Vue from 'vue'
import Router from 'vue-router'
// Bootstrapを使うための設定
// eslint-disable-next-line
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// 使うファイルを読み込んでいる
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test3 from '@/components/test3'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  // mode: 'history', リンクエラーを引き起こすとてもわるいやつ
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    }
  ]
})
