<script setup>
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const currentDate = ref(new Date().toLocaleDateString())
</script>

<template>
  <div class="top-bar">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <span class="date">{{ currentDate }}</span>
      <el-dropdown>
        <el-button type="primary">
          Admin
          <el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item divided>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  height: 64px;
  background: white;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

.date {
  margin-right: 16px;
}

.right {
  display: flex;
  align-items: center;
}
</style>