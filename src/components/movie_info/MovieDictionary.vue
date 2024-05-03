<script setup lang="ts">
import { Content } from "./info_dummy.ts";
import MovieWord from "./MovieWord.vue";

defineProps<{ words: Content[] }>();
</script>

<template>
  <v-text-field hide-details="auto" label="검색할 단어를 입력해주세요." />

  <div v-for="(word, i) in words" :key="i">
    <MovieWord :word="word" />
    <v-divider />
  </div>
</template>

<style scoped></style>
