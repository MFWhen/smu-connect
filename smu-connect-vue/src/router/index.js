import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Clubs from '../views/Clubs.vue'
import CampusClub from '../views/CampusClub.vue'
import CampusClubManagement from '../views/CampusClubManagement.vue'
import MoreClubs from '../views/MoreClubs.vue'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'Clubs', component: Clubs },
  { path: '/admin/login', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/club/:id', name: 'Home', component: Home },
  { path: '/more-clubs', name: 'MoreClubs', component: MoreClubs },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
