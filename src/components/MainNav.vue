<script setup lang="ts">
let navButtons: string[] = ["역사", "장르", "단어사전", "관련 사이트"];
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-app-bar-title>BLOG DU CINEMA</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" v-for="(navButton, i) in navButtons" :key="i">{{
        navButton
      }}</v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>
