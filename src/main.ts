import { createApp } from "vue";

// Vuetify
import vuetify from "./plugins/vuetify.ts";

// Components
import App from "./App.vue";

import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "./plugins/router.ts";

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).mount("#app");
