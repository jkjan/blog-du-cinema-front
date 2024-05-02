<script setup lang="ts">
import MainSideBar from "./SideBar.vue";

defineProps(["contentIndices"]);
defineEmits(["changeContentKey"]);
</script>

<template>
  <v-row>
    <v-col cols="2">
      <MainSideBar
        @changeContentKey="(key: string) => $emit('changeContentKey', key)"
        :contentIndices="contentIndices"
      />
    </v-col>
    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <slot name="section"></slot>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style scoped></style>
