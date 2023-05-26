import { createRouter, createWebHistory } from 'vue-router';

//IMPORT LAYOUT
import RegisterPage from '../components/Pages/RegisterForm.vue'
import confirmationPage from '../components/Pages/ComfirmationPage.vue'

const routes = [
    {
        path: "/",
        name: 'indexPage',
        component: () => import('../components/Pages/ShowData.vue'),
        meta: {
            title: "SiamSquared Technologies Test",
          },
    },
    {
        path: '/register',
        name: 'RegisterForm',
        component: RegisterPage,
        meta: {
            title: "REGISTER | SiamSquared Technologies Test",
          },
    },
    {
        path: '/confirmation',
        name: 'confirmationPage',
        component: confirmationPage,
        meta: {
            title: "RESULT | SiamSquared Technologies Test",
          },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;