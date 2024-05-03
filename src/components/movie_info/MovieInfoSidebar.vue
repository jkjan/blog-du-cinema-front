<script setup lang="ts">
defineProps(["index"]);
defineEmits(["changeIndexKey"]);
</script>
<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <v-list-item
        v-for="i in index"
        :key="i.key"
        :title="i.label"
        @click="$emit('changeIndexKey', i.key)"
        link
      ></v-list-item>
    </v-list>
  </v-sheet>
</template>

<style scoped></style>
