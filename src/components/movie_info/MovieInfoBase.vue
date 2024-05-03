<script setup lang="ts"></script>

<template>
  <v-row>
    <v-col cols="2">
      <slot name="sidebar"></slot>
    </v-col>
    <v-col>
      <slot name="section"></slot>
    </v-col>
  </v-row>
</template>

<style scoped></style>
