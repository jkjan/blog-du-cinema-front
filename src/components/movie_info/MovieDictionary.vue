<script setup lang="ts">
import MovieInfoBase from "./base/MovieInfoBase.vue";
import { ref } from "vue";

let changeContentKey = (key: string) => {
  nowContentKey.value = key;
};

const contentIndices = ref(["f", "g", "h"]);
let initialKey: string = contentIndices.value[0];
let nowContentKey = ref(initialKey);
</script>

<template>
  <MovieInfoBase
    @changeContentKey="(key: string) => changeContentKey(key)"
    :contentIndices="contentIndices"
  >
    <template #section>{{ contentIndices[nowContentKey] }}</template>
  </MovieInfoBase>
</template>

<style scoped></style>
