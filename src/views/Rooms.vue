<script setup>
import { ref } from 'vue'

const rooms = ref([
  { id: 1, number: '101', status: 'Available', type: 'Single', lastCleaned: '2024-03-10' },
  { id: 2, number: '102', status: 'Occupied', type: 'Double', lastCleaned: '2024-03-09' },
  { id: 3, number: '103', status: 'Maintenance', type: 'Suite', lastCleaned: '2024-03-08' },
])

const dialogVisible = ref(false)
const newRoom = ref({
  number: '',
  type: '',
  status: 'Available'
})

const addRoom = () => {
  rooms.value.push({
    id: rooms.value.length + 1,
    ...newRoom.value,
    lastCleaned: new Date().toISOString().split('T')[0]
  })
  dialogVisible.value = false
  newRoom.value = { number: '', type: '', status: 'Available' }
}
</script>

<template>
  <div class="rooms-page">
    <div class="header">
      <h2>Room Management</h2>
      <el-button type="primary" @click="dialogVisible = true">Add Room</el-button>
    </div>

    <el-table :data="rooms" style="width: 100%">
      <el-table-column prop="number" label="Room Number" />
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="status" label="Status">
        <template #default="{ row }">
          <el-tag :type="row.status === 'Available' ? 'success' : row.status === 'Occupied' ? 'warning' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="lastCleaned" label="Last Cleaned" />
      <el-table-column label="Actions">
        <template #default>
          <el-button-group>
            <el-button type="primary" size="small">Edit</el-button>
            <el-button type="danger" size="small">Delete</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="Add New Room">
      <el-form :model="newRoom">
        <el-form-item label="Room Number">
          <el-input v-model="newRoom.number" />
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="newRoom.type" placeholder="Select room type">
            <el-option label="Single" value="Single" />
            <el-option label="Double" value="Double" />
            <el-option label="Suite" value="Suite" />
          </el-select>
        </el-form-item>
        <el-form-item label="Status">
          <el-select v-model="newRoom.status">
            <el-option label="Available" value="Available" />
            <el-option label="Occupied" value="Occupied" />
            <el-option label="Maintenance" value="Maintenance" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addRoom">Add</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.rooms-page {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

h2 {
  margin: 0;
}
</style>