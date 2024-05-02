<script setup lang="ts">
import MovieInfoBase from "./base/MovieInfoBase.vue";
import { ref } from "vue";

let changeContentKey = (key: string) => {
  nowContentKey.value = key;
};

const contentIndices = ["a", "b", "c"];
let initialKey: string = contentIndices[0];
let nowContentKey = ref(initialKey);
</script>

<template>
  <MovieInfoBase
    @changeContentKey="(key: string) => changeContentKey(key)"
    :contentIndices="contentIndices"
  >
    <template #section>{{ nowContentKey }}</template>
  </MovieInfoBase>
</template>

<style scoped></style>
