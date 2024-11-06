<script setup>
import { RouterView } from 'vue-router'
import SideNav from './components/SideNav.vue'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <div class="app-container">
    <SideNav class="side-nav" />
    <div class="main-content">
      <TopBar />
      <RouterView />
    </div>
  </div>
</template>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.side-nav {
  width: 250px;
  background-color: #001529;
}

.main-content {
  flex: 1;
  background-color: #f0f2f5;
}
</style>