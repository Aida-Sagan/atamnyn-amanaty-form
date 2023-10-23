import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import FormPage from './components/FormPage.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SuccessPage from "@/components/successPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage }, // Добавляем маршрут для домашней страницы
        { path: '/form', component: FormPage }, // Добавляем маршрут для страницы формы
        { path: '/success', component: SuccessPage }, // Добавляем маршрут для страницы с успешной отправкой
    ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')
