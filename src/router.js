import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from "@/components/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
import MoviePage from "@/pages/MoviePage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageCompositionApi,
  },
  {
    path: "/movie",
    component: MoviePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
