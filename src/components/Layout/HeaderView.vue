<template>
  <div class="w-full flex items-center justify-center h-12">
    <div class="font-medium">{{ route.meta.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped lang="scss"></style>
