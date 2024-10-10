import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'events',
          component: () => import('@/views/admin/events/Events.vue')
        },
        {
          path: 'events/edit/:id',
          component: () => import('@/views/admin/events/CreateEditEvent.vue')
        },
        {
          path: 'create-event',
          component: () => import('@/views/admin/events/CreateEditEvent.vue')
        },
        {
          path: 'add-event',
          component: () => import('@/views/admin/events/AddEvent.vue')
        },
        {
          path: 'pending-events',
          component: () => import('@/views/admin/events/PendingEvents.vue')
        },
        {
          path: 'sponsored',
          component: () => import('@/views/admin/sponsored/Sponsored.vue')
        },
        {
          path: 'travel/travel-events',
          component: () => import('@/views/admin/travel/TravelEvents.vue')
        },
        {
          path: 'travel/travel-sponsored',
          component: () => import('@/views/admin/travel/TravelSponsored.vue')
        },
        {
          path: 'clubs',
          component: () => import('@/views/admin/clubs/Clubs.vue')
        },
        {
          path: 'pending-clubs',
          component: () => import('@/views/admin/clubs/PendingClubs.vue')
        },
        {
          path: 'admin-logins',
          component: () => import('@/views/admin/login/AdminLogin.vue')
        },
      ]
    },
    {
      path: '/user',
      component: () => import('@/layouts/UserLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'events',
          component: () => import('@/views/user/events/Events.vue')
        },
        {
          path: 'create-event',
          component: () => import('@/views/user/events/CreateEditEvent.vue')
        },
        {
          path: 'events/edit/:id',
          component: () => import('@/views/user/events/CreateEditEvent.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/signup',
      component: () => import('@/views/Signup.vue')
    },
    {
      path: '/forgot-password',
      component: () => import('@/views/ForgotPassword.vue')
    }
  ]
});

export default router;
