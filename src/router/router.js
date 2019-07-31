import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/Home.vue";
import Contact from "@/components/home/Contact.vue";
import About from "@/components/home/About.vue";

Vue.use(Router);

export default new Router({
    routes: [ // bao gồm danh sách router
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ]
})