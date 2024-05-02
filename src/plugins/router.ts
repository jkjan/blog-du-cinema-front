import MovieHistory from "../components/movie_info/MovieHistory.vue";
import MovieGenre from "../components/movie_info/MovieGenre.vue";
import MovieDictionary from "../components/movie_info/MovieDictionary.vue";
import MovieMethodology from "../components/movie_info/MovieMethodology.vue";
import MovieWebsite from "../components/movie_info/MovieWebsite.vue";
import MovieForum from "../components/movie_info/MovieForum.vue";
import MovieDefinition from "../components/movie_info/MovieDefinition.vue";
import MovieHome from "../components/MovieHome.vue";

type route = { name: string; path: string, component: object};

const routes: route[] = [
  { name: "메인 페이지", path: "/", component: MovieHome },

  { name: "영화란?", path: "/what-is-movie",  component: MovieDefinition },
  { name: "영화의 역사", path: "/history" , component: MovieHistory },
  { name: "다양한 장르", path: "/genre", component: MovieGenre },
  { name: "영화어 사전", path: "/dictionary", component: MovieDictionary },
  { name: "영화 방법론", path: "/methodology", component: MovieMethodology },
  { name: "관련 사이트", path: "/website", component: MovieWebsite },
  { name: "게시판", path: "/forum", component: MovieForum },
];

export { routes };
