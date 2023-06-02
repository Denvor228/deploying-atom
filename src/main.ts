import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import DefaultLayout from "./layouts/Default-layout.vue";
import YouTube from "vue3-youtube";

const router = createRouter({
  routes: [
    {
      path: "/lesson1",
      name: "Home",
      component: DefaultLayout,
      meta: {
        layout: "default-layout",
      },
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);

app.component("default-layout", DefaultLayout);
app.component("YouTube", YouTube);

app.use(router);
app.mount("#app");
