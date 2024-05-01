<script setup lang="ts">
import MainNav from "./components/MainNav.vue";
import MainSideBar from "./components/MainSideBar.vue";
import MainContent from "./components/MainContent.vue";
</script>

<template>
  <v-app>
    <MainNav />

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2"> </v-col>
          <MainSideBar />
          <v-col>
          <MainContent/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

  </v-app>
</template>

<style scoped></style>
