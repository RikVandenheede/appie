import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/store/HomeView.vue';

import QrScan from "../views/store/QrScanView.vue";
import NavWalk from "../views/store/NavWalkView.vue";
import QrCheckout from "../views/store/QrCheckoutView.vue";

// import Loading from "../views/store/LoadingView.vue";
// import Check from "../views/store/CheckView.vue";

import HomeView from "../views/app/HomeView.vue";
import Winkelwagentje from "../views/app/WinkelwagenView.vue";
import ItemDetailView from "../views/app/ItemDetailView.vue";
import AppQrView from "../views/app/QrView.vue";
import CategoryPage from "../views/app/CategorieView.vue";

const routes = [
    {
        path: "/qr-scan",
        name: "QrScan",
        component: QrScan,
    },
    {
        path: "/navwalk",
        name: "NavWalk",
        component: NavWalk,
    },
    {
        path: "/qr-kassa",
        name: "QrCheckout",
        component: QrCheckout,
    },
    // {
    //   path: "/check",
    //   name: "check",
    //   component: Check,
    // },
    // {
    //   path: "/loading",
    //   name: "loading",
    //   component: Loading,
    // },
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/winkelwagentje",
        name: "winkelwagentje",
        component: Winkelwagentje,
    },
    {
        path: "/item/:id",
        name: "ItemDetailView",
        props: true,
        component: ItemDetailView,
    },
    {
        path: "/qr-app",
        name: "qr-app",
        component: AppQrView,
    },
    {
        path: "/:category",
        name: "categoryPage",
        component: CategoryPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
