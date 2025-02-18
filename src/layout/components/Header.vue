<template>
  <el-header class="layout-header">
    <div @click="handleCollapse">
      <IEpExpand v-show="isCollapse" />
      <IEpFold v-show="!isCollapse" />
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'

const appConfigStore = useAppConfigStore()
const isCollapse = computed(() => appConfigStore.isCollapse)
const handleCollapse = () => appConfigStore.toggleCollapse()
</script>

<style scoped lang="scss">
.layout-header {
  @apply flex items-center w-full;
}
</style>
