<template>
  <div class="w-full h-full flex flex-col">
    <HeaderView />
    <div class="flex-1">
      <slot />
    </div>
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
</script>

<style scoped lang="scss"></style>
