import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateEvent from '../views/CreateEvent.vue';
import AddEvent from '@/views/admin/AddEvent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-event',
      name: 'create-event',
      component: CreateEvent,
    },
    {
      path: '/admin/add-event',
      name: 'admin-add-event',
      component: AddEvent,
    },
  ]
});

export default router;
