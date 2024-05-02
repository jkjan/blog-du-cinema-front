<script setup lang="ts">
defineProps(["contentIndices"]);
defineEmits(["changeContentKey"]);
</script>
<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <v-list-item
        v-for="(title, key) in contentIndices"
        :key="key"
        :title="title"
        @click="$emit('changeContentKey', key)"
        link
      ></v-list-item>
    </v-list>
  </v-sheet>
</template>

<style scoped></style>
