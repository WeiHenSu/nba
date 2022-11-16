import Vue from 'vue'
import VueRouter from 'vue-router'
//官方
import NBATeams from '../components/NBATeams.vue'
import NBAHome from '../components/NBAHome.vue'
import NBANews from '../components/NBANews.vue'
//自定義

Vue.use(VueRouter)

const routes = [
    {path: '/teams', component: NBATeams},
    {path: '/index', component: NBAHome},
    {path: '/news', component: NBANews}
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL

})

export default router
