import Vue from 'vue'

// 头部
Vue.component('header-bar', () => import('@/components/header-bar/header-bar'))
// 底部
Vue.component('footer-bar', () => import('@/components/footer-bar/footer-bar'))
// 标题名称
Vue.component('title-contain', () => import('@/components/title-contain/title-contain'))
