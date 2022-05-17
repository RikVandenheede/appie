<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/store/HomeView.vue';
import scan from '../views/store/ScanView.vue';
import Loading from '../views/store/LoadingView.vue';
import NavWalk from '../views/store/NavWalkView.vue';
import Check from '../views/store/CheckView.vue';
import Qr from '../views/store/QrView.vue';

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomeView
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/store/AboutView.vue')
    // },
    {
        path: '/',
        name: 'scan',
        component: scan
    },
    {
        path: '/loading',
        name: 'loading',
        component: Loading
    },
    {
        path: '/navwalk',
        name: 'navwalk',
        component: NavWalk
    },
    {
        path: '/check',
        name: 'check',
        component: Check
    },
    {
        path: '/qr',
        name: 'qr',
        component: Qr
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
=======
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/app/HomeView.vue";
import Winkelwagentje from "../views/app/WinkelwagenView.vue";
import ItemDetailView from "../views/app/ItemDetailView.vue";
import AppQrView from "../views/app/QrView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/app/AboutView.vue"),
  },
  {
    path: "/winkelwagentje",
    name: "winkelwagentje",
    component: Winkelwagentje,
  },
  {
    path: "/item/:id",
    name: 'ItemDetailView',
    props: true,
    component: ItemDetailView,
  },
  {
    path: "/qr-app",
    name: "qr-app",
    component: AppQrView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
>>>>>>> a73825a2d61f6ab65deb64954d24b537e3a1627a
});

export default router;
