import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import ClassMate from '@/page/home/ClassMate'
import TalentPage from '@/page/home/TalentPage'
import TeacherPage from '@/page/home/TeacherPage'
import NewsPage from '@/page/home/NewsPage'
import caseMessage from '@/page/home/caseMessage'
import about from '@/page/home/about'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/classmate',
      name:'classmate',
      component: ClassMate,
    },
    {
      path: '/talent',
      name:'talent',
      component: TalentPage,
    },
    {
      path: '/teacher',
      name:'/teacher',
      component: TeacherPage,
    },
    {
      path: '/news',
      name:'news',
      component: NewsPage,
    },
    {
      path:'/casedo',
      name:'casedo',
      component:caseMessage,
    },
    {
      path:'/about',
      name:'about',
      component:about
    }
  ]
})
