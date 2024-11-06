<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { House, Tickets, User, List } from '@element-plus/icons-vue'

const router = useRouter()
const activeMenu = ref('/')

const menuItems = [
  { path: '/', label: 'Dashboard', icon: House },
  { path: '/rooms', label: 'Rooms', icon: List },
  { path: '/staff', label: 'Staff', icon: User },
  { path: '/tasks', label: 'Tasks', icon: Tickets }
]

const navigate = (path) => {
  activeMenu.value = path
  router.push(path)
}
</script>

<template>
  <el-menu
    :default-active="activeMenu"
    class="side-menu"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"
  >
    <div class="logo">HouseKeeper</div>
    <el-menu-item
      v-for="item in menuItems"
      :key="item.path"
      :index="item.path"
      @click="navigate(item.path)"
    >
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.side-menu {
  height: 100vh;
  border-right: none;
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.el-menu-item {
  display: flex;
  align-items: center;
}
</style>