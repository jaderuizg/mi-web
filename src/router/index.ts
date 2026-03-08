import Home from '@/pages/home/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ProjectLayout from '@/views/ProjectLayout.vue'
import Contact from '@/views/Contact.vue'
import InfoProfesional from '@/components/InfoProfesional.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/proyectos',
      component: ProjectLayout,
      children: [
        {
          path: '',
          name: 'projects-list',
          component: () => import('@/views/ProjectsList.vue')
        },
        {
          path: ':slug',
          name: 'project-detail',
          component: () => import('@/views/ProjectDetails.vue')
        }
      ]
    },
    {
      path: '/contacto',
      name: 'contact',
      component: Contact
    },
    {
      path: '/profesional',
      name: 'profesional',
      component: InfoProfesional
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
