<script setup lang="ts">
import { Content } from "../movie_info/info_dummy.ts";

defineProps<{ content: Content }>();
</script>

<template>
  <p>{{ content.description }}</p>
</template>

<style scoped></style>
