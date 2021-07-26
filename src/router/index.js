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
  },
  {
    path: '/supervision-management',
    name: 'supervision-management',
    component: () => import('@/views/supervision-management/supervision-management.vue'),
    meta: {
      name: '监督管理'
    }
  },
  {
    path: '/comprehensive-evaluation',
    name: 'comprehensive-evaluation',
    component: () => import('@/views/comprehensive-evaluation/comprehensive-evaluation.vue'),
    meta: {
      name: '综合评价'
    }
  },
  {
    path: '/integrated-law',
    name: 'integrated-law',
    component: () => import('@/views/integrated-law/integrated-law.vue'),
    meta: {
      name: '长三角一体化执法'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
