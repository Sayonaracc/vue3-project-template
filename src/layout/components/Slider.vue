<template>
  <el-menu class="layout-menu-wrap" default-active="2" unique-opened router :collapse="isCollapse">
    <template v-for="menu in menus">
      <template v-if="menu.children?.length">
        <el-sub-menu :key="menu.id" :index="menu.path">
          <template #title>
            <el-icon :class="menu.icon" p-1 text-xl />
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item v-for="subMenu in menu.children" :key="subMenu.id" :index="subMenu.path">
            <template #title>
              {{ subMenu.name }}
            </template>
          </el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :key="menu.id" :index="menu.path">
          <el-icon :class="menu.icon" p-1 text-xl />
          <template #title>
            {{ menu.name }}
          </template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { useAppConfigStore } from "@/stores/app";

// const icons = [IEpHouse, IEpUser]
const appConfigStore = useAppConfigStore();
const isCollapse = computed(() => appConfigStore.isCollapse);
const menus = computed(() => {
  // appConfigStore.menus.forEach((menus, index) => {
  //   menus.icon = icons[index];
  // });
  return appConfigStore.menus;
});
</script>

<style scoped lang="scss">
.layout-menu-wrap:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu {
  @apply h-full;
}
</style>
