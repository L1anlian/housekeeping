<script setup>
import { ref } from 'vue'

const statistics = ref({
  totalRooms: 50,
  availableRooms: 15,
  activeStaff: 12,
  pendingTasks: 8
})
</script>

<template>
  <div class="dashboard">
    <div class="stats-container">
      <el-card class="stat-card">
        <template #header>
          <div class="card-header">
            <span>Total Rooms</span>
          </div>
        </template>
        <div class="stat-value">{{ statistics.totalRooms }}</div>
      </el-card>
      
      <el-card class="stat-card">
        <template #header>
          <div class="card-header">
            <span>Available Rooms</span>
          </div>
        </template>
        <div class="stat-value">{{ statistics.availableRooms }}</div>
      </el-card>
      
      <el-card class="stat-card">
        <template #header>
          <div class="card-header">
            <span>Active Staff</span>
          </div>
        </template>
        <div class="stat-value">{{ statistics.activeStaff }}</div>
      </el-card>
      
      <el-card class="stat-card">
        <template #header>
          <div class="card-header">
            <span>Pending Tasks</span>
          </div>
        </template>
        <div class="stat-value">{{ statistics.pendingTasks }}</div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 24px;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.stat-card {
  text-align: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-value {
  font-size: 36px;
  font-weight: bold;
  color: #409EFF;
}
</style>