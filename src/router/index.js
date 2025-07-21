import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Resources from '../views/Resources.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/nosotros', name: 'About', component: About },
  { path: '/cursos', name: 'Courses', component: Courses },
  { path: '/recursos', name: 'Resources', component: Resources },
  { path: '/contacto', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
