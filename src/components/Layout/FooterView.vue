<template>
  <div class="w-full flex items-center h-16 borderTop">
    <div
      class="flex flex-1 items-center justify-center"
      v-for="tab in TABS_DATA"
      :key="tab.key"
      @click="handleNavigate(tab)"
    >
      <span :class="route.name === tab.key ? 'font-medium text-green-500' : 'font-medium'">{{
        tab.name
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const TABS_DATA = [
  { name: '首页', path: '/home', key: 'home' },
  { name: '我的', path: '/mine', key: 'mine' },
]

console.log('route--', route)

const handleNavigate = function (tab: { name: string; path: string }) {
  router.push(tab.path)
}
</script>

<style scoped lang="scss"></style>
