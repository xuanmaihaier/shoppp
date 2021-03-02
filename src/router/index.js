import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import Message from '@/views/message/Message.vue'
import ShopCart from '@/views/shopcart/ShopCart.vue'
import Profile from '@/views/profile/Profile.vue'
import Detail from '@/views/detail/Detail.vue'
Vue.use(Router)
const routes = [
    {
      path: '/',
      redirect:"home",
    },
    {
      path:"/home",
      component:Home,
      meta:"主页"
    },
    {
      path:"/message",
      component:Message,
      meta:"消息"
    },
    {
      path:"/shopcart",
      component:ShopCart,
      meta:"购物车"
    },
    {
      path:"/profile",
      component:Profile,
      meta:"我的"
    },
    {
      path:"/detail/:id",
      component:Detail,
      meta:"商品详情"
    }
  ]
  const router = new Router({
    mode:"history",
    routes
  })
  
export default router
// 全局守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta
  next()
})
