<script setup lang="ts">
defineEmits<{ (e: "changeCategory", category: string): void }>();

const movieInfo = [
  { name: "영화의 역사", category: "history" },
  { name: "다양한 장르", category: "genre" },
  { name: "영화 방법론", category: "methodology" },
  { name: "관련 사이트", category: "website" },
  { name: "단어 사전", category: "dictionary" },
];
</script>

<template>
  <v-card>
    <v-tabs align-tabs="title">
      <v-tab
        v-for="(m, i) in movieInfo"
        :key="i"
        @click="$emit('changeCategory', m.category)"
      >
        {{ m.name }}
      </v-tab>
    </v-tabs>

    <v-row>
      <v-col cols="2">
        <slot name="sidebar"></slot>
      </v-col>
      <v-col>
        <slot name="section"></slot>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped></style>
