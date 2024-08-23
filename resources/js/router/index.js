import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
import LandingPageIndex from '../components/LandingPage/index.vue'

const routes = [
    {
        path:'/',
        name:'LandingPage.index',
        component: LandingPageIndex
    }
]

const router = createRouter ({
    history:createWebHashHistory(),
    routes
})

export default router