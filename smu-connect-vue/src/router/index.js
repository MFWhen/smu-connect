import { createRouter, createWebHistory } from 'vue-router'

import AdminDashboard from '../views/AdminDashboard.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Clubs from '../views/Clubs.vue'
import CampusClub from '../views/CampusClub.vue'
import CampusClubManagement from '../views/CampusClubManagement.vue'
import MoreClubs from '../views/MoreClubs.vue'

const routes = [
  {
    path: '/',
    name: 'Clubs',
    component: Clubs
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/campus-club',
    name: 'CampusClub',
    component: CampusClub
  },
  {
    path: '/campus-club-management',
    name: 'CampusClubManagement',
    component: CampusClubManagement
  },
  {
    path: '/more-clubs',
    name: 'MoreClubs',
    component: MoreClubs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
