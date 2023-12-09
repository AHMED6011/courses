import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'AHMED_A_A_A'
      }
    },
    {
      path: '/coursedetail/:id',
      name: 'courseDetail',
      component: () => import('../views/CourseDetail.vue'),
      meta: {
        title: 'المزيد من التفاصيل'
      },
      props: true
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue'),
      meta: {
        title: 'الدورات'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue'),
      meta: {
        title: 'تسجيل الدخول'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: {
        title: 'انشاء حساب'
      }
    }
  ]
})

export default router
