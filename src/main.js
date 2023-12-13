import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import components from "@/components/UI";
import router from "@/router";
import directives from "@/directives";
import store from "@/store";

const pinia = createPinia();
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// app.use(router).use(store).mount("#app");
app.use(router).use(store).use(pinia).mount("#app");
