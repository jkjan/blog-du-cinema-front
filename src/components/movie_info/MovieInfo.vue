<script setup lang="ts">
import MovieInfoSidebar from "./MovieInfoSidebar.vue";
import { Ref, ref, watch } from "vue";
import {
  Menu,
  ComponentData,
  contentForIndexKey,
  indexForCategory,
} from "./info_dummy.ts";
import MoviePostReader from "../movie_forum/MoviePostReader.vue";
import MovieDictionary from "./MovieDictionary.vue";
import MovieInfoBase from "./MovieInfoBase.vue";

let props = defineProps<{ category: Menu }>();

const componentData: Ref<ComponentData> = ref({
  index: [],
  content: [],
  nowKey: "",
});

watch(
  () => props.category,
  (newCategory: Menu) => {
    componentData.value.index = indexForCategory[newCategory];
    if (componentData.value.index.length >= 1) {
      componentData.value.nowKey = componentData.value.index[0].key;
    }
  },
  { immediate: true },
);

watch(
  () => componentData.value.nowKey,
  (newKey: string) => {
    componentData.value.content = contentForIndexKey[newKey];
  },
  { immediate: true },
);
</script>

<template>
  <MovieInfoBase>
    <template #sidebar>
      <MovieInfoSidebar
        @changeIndexKey="(key: string) => (componentData.nowKey = key)"
        :index="componentData.index"
      />
    </template>

    <template #section>
      <MoviePostReader
        v-if="props.category != 'dictionary'"
        :content="componentData.content[0]"
      />
      <MovieDictionary v-else :words="componentData.content" />
    </template>
  </MovieInfoBase>
</template>

<style scoped></style>
