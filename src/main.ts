import { createApp } from "vue";

// Vuetify
import vuetify from "./plugins/vuetify.ts";

// Components
import App from "./App.vue";

createApp(App).use(vuetify).mount("#app");
