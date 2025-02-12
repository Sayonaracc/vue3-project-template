<template>
  <el-container class="layout-container-wrap">
    <el-aside class="layout-aside">
      Aside
    </el-aside>
    <el-container class="layout-container">
      <el-header class="layout-header">
        Header
      </el-header>
      <el-main class="layout-main">
        Main
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout-container-wrap {
  @apply 'p-3';
  .layout-aside {
    @apply w-[200px];
  }
}
</style>
