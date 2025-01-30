import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from '../pages/Home.vue';
import CountryView from '../pages/CountryView.vue';


const routes = [
    {path: '/', component: Home},
    {path: '/country/:name', component: CountryView, props: true},
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})