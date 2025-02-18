<template>
  <router-view />
</template>

<script setup lang="ts">
// const a = 100
// console.log(a, '>>>a')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500 pos-absolute;
}
.fade-enter-from {
  @apply opacity-0 translate-x-[50px];
}
.fade-leave-to {
  @apply opacity-0 translate-x-[-50px];
}
</style>
