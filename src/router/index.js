import Vue from 'vue'
import VueRouter from 'vue-router'

// 防止push重复路由报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/general-view'
  },
  {
    path: '/general-view',
    name: 'general-view',
    component: () => import('@/views/general-view/general-view.vue')
  },
  {
    path: '/business-guide',
    name: 'business-guide',
    component: () => import('@/views/business-guide/business-guide.vue'),
    meta: {
      name: '业务指导'
    }
  },
  {
    path: '/public-service',
    name: 'public-service',
    component: () => import('@/views/public-service/public-service.vue'),
    meta: {
      name: '公共服务'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
