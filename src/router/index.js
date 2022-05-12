import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/app/HomeView.vue";
import Winkelwagentje from "../views/app/WinkelwagenView.vue";
import ItemDetailView from "../views/app/ItemDetailView.vue";
import AppQrView from "../views/app/QrView.vue";
import CategoryPage from "../views/app/CategorieView.vue";

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
