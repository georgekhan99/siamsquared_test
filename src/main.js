import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Navbar from './components/Layout/NavbarComponent.vue'
//IMPORT ROUTER
import router from './router'

const app = createApp(App)

//CALL Router From Folder Router

app.use(router)
app.component('NavBar', Navbar)
app.mount('#app')