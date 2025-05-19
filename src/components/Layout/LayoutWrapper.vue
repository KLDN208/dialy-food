<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import LayoutComponent from './LayoutComponent.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  return route.meta.layout || LayoutComponent
})
</script>

<style scoped lang="scss"></style>
