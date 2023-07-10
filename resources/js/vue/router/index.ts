import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import { IsNotLogin } from '@/middleware/IsNotLogin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        IsNotLogin
      }
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/pages/register/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/pages/login/Login.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingView,
      meta: {
        IsNotLogin
      }
    },
    {
      path: '/add-record',
      name: 'add-record',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/pages/contact/form/RecordForm.vue'),
      meta: {
        IsNotLogin
      }
    },
    {
      path: '/shopping-list',
      name: 'shopping-list',
      component: () => import('@/views/pages/forms/ShoppingList.vue'),
      meta: {
        IsNotLogin
      }
    },
    {
      path: '/edit-contact/:contactId',
      name: 'edit-contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/pages/contact/form/ContactForm.vue'),
      meta: {
        IsNotLogin
      }
    },
    {
      path: '/contact-list',
      name: 'contact-list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/pages/contact/list/ContactList.vue'),
      meta: {
        IsNotLogin
      }
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const guards: any = to.meta || {};

  for (const i in guards) {
    if (Object.prototype.hasOwnProperty.call(guards, i)) {
      if (typeof guards[i] == "function") {
        await guards[i](to, from, next)
      }
    }

  }

  next();
})

export default router
