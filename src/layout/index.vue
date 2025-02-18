<template>
  <el-container class="layout-container-wrap">
    <el-aside class="layout-aside">
      <Slider />
    </el-aside>
    <el-container class="layout-container">
      <Header />
      <el-main class="layout-main">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in" appear>
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss">
.layout-container-wrap {
  .layout-aside {
    @apply w-a h-[100vh];
  }
  .layout-container {
    @apply w-full flex-col;
    .fade-enter-active,
    .fade-leave-active {
      @apply transition-all duration-300 pos-absolute;
    }
    .fade-enter-from {
      @apply opacity-0 translate-x-[20px];
    }
    .fade-leave-to {
      @apply opacity-0 translate-x-[-20px];
    }
  }
}
</style>
