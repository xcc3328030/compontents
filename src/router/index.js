import Home from '../views/Home'
import About from '../views/About'
import Vue from "vue";
import VueRouter from './Vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ]
})

