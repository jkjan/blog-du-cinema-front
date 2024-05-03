import MovieDefinition from "../components/MovieDefinition.vue";
import MovieHome from "../components/MovieHome.vue";
import MovieInfoBase from "../components/movie_info/MovieInfo.vue";

const routes = [
  { path: "/", component: MovieHome },
  { path: "/what-is-movie", component: MovieDefinition },
  { path: "/info/:category", component: MovieInfoBase, props: true },
];

export { routes };
