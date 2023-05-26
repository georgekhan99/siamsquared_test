import { createRouter, createWebHistory } from 'vue-router';

//IMPORT LAYOUT
import RegisterPage from '../components/Pages/RegisterForm.vue'
import confirmationPage from '../components/Pages/ComfirmationPage.vue'

const routes = [
    {
        path: "/",
        name: 'indexPage',
        component: () => import('../components/Pages/ShowData.vue')
    },
    {
        path: '/register',
        name: 'RegisterForm',
        component: RegisterPage
    },
    {
        path: '/confirmation',
        name: 'confirmationPage',
        component: confirmationPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;