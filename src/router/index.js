import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/store/HomeView.vue';
import scan from "../views/store/ScanView.vue";
import Loading from "../views/store/LoadingView.vue";
import NavWalk from "../views/store/NavWalkView.vue";
import Check from "../views/store/CheckView.vue";
import Qr from "../views/store/QrView.vue";

import HomeView from "../views/app/HomeView.vue";
import Winkelwagentje from "../views/app/WinkelwagenView.vue";
import ItemDetailView from "../views/app/ItemDetailView.vue";
import AppQrView from "../views/app/QrView.vue";
import CategoryPage from "../views/app/CategorieView.vue";

const routes = [
  {
    path: "/nav",
    name: "scan",
    component: scan,
  },
  {
    path: "/loading",
    name: "loading",
    component: Loading,
  },
  {
    path: "/navwalk",
    name: "navwalk",
    component: NavWalk,
  },
  {
    path: "/check",
    name: "check",
    component: Check,
  },
  {
    path: "/qr",
    name: "qr",
    component: Qr,
  },
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
