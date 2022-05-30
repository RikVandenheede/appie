import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

const app = createApp({});
app.config.isCustomElement = (tag) => tag.startsWith("ion-");
