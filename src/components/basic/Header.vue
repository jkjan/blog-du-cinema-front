<script setup lang="ts">
import { routes } from "../../plugins/router.ts";
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-app-bar-title @click="$router.push('/')"
        >BLOG DU CINEMA
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(menu, i) in routes.slice(1)" :key="i" :to="menu.path">
        {{ menu.name }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>
