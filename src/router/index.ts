import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
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
          path: 'sponsored/add/ads',
          component: () => import('@/views/admin/sponsored/AddSponsoredAds.vue')
        },
        {
          path: 'sponsored/add',
          component: () => import('@/views/admin/sponsored/CreateEditSponsored.vue')
        },
        {
          path: 'sponsored/edit/:id',
          component: () => import('@/views/admin/sponsored/CreateEditSponsored.vue')
        },
        {
          path: 'homepage-listing',
          component: () => import('@/views/admin/homelist/HomeListing.vue')
        },
        {
          path: 'homepage-listing/add',
          component: () => import('@/views/admin/homelist/AddListing.vue')
        },
        {
          path: 'homepage-listing/preview',
          component: () => import('@/views/admin/homelist/Preview.vue')
        },
        {
          path: 'dg-home-listing',
          component: () => import('@/views/admin/dghome/DGHomeListing.vue')
        },
        {
          path: 'dg-home/add-event',
          component: () => import('@/views/admin/dghome/CreateEditEvent.vue')
        },
        {
          path: 'dg-home/edit/:id',
          component: () => import('@/views/admin/dghome/CreateEditEvent.vue')
        },
        {
          path: 'travel/travel-events',
          component: () => import('@/views/admin/travel/TravelEvents.vue')
        },
        {
          path: 'travel/travel-events/add',
          component: () => import('@/views/admin/travel/CreateEditTravel.vue')
        },
        {
          path: 'travel/travel-events/edit/:id',
          component: () => import('@/views/admin/travel/CreateEditTravel.vue')
        },
        {
          path: 'travel/travel-events-pending',
          component: () => import('@/views/admin/travel/PendingEvents.vue')
        },
        {
          path: 'travel/travel-sponsored',
          component: () => import('@/views/admin/travel/TravelSponsored.vue')
        },
        {
          path: 'travel/travel-sponsored/add/ads',
          component: () => import('@/views/admin/travel/sponsored/AddSponsoredAds.vue')
        },
        {
          path: 'travel/travel-sponsored/add',
          component: () => import('@/views/admin/travel/sponsored/CreateEditSponsored.vue')
        },
        {
          path: 'travel/travel-sponsored/edit/:id',
          component: () => import('@/views/admin/travel/sponsored/CreateEditSponsored.vue')
        },

        {
          path: 'clubs',
          component: () => import('@/views/admin/clubs/Clubs.vue')
        },
        {
          path: 'clubs/edit/:id',
          component: () => import('@/views/admin/clubs/CreateEditClub.vue')
        },
        {
          path: 'pending-clubs',
          component: () => import('@/views/admin/clubs/PendingClubs.vue')
        },
        {
          path: 'add-club',
          component: () => import('@/views/admin/clubs/CreateEditClub.vue')
        },
        {
          path: 'mail',
          component: () => import('@/views/admin/mail/MailList.vue')
        },
        {
          path: 'admin-logins',
          component: () => import('@/views/admin/login/AdminLogin.vue')
        }
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
