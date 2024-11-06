<script setup>
import { ref } from 'vue'

const tasks = ref([
  { id: 1, room: '101', type: 'Cleaning', status: 'Pending', assignedTo: 'John Doe', priority: 'High' },
  { id: 2, room: '102', type: 'Maintenance', status: 'In Progress', assignedTo: 'Mike Johnson', priority: 'Medium' },
  { id: 3, room: '103', type: 'Inspection', status: 'Completed', assignedTo: 'Jane Smith', priority: 'Low' },
])

const dialogVisible = ref(false)
const newTask = ref({
  room: '',
  type: '',
  status: 'Pending',
  assignedTo: '',
  priority: 'Medium'
})

const addTask = () => {
  tasks.value.push({
    id: tasks.value.length + 1,
    ...newTask.value
  })
  dialogVisible.value = false
  newTask.value = { room: '', type: '', status: 'Pending', assignedTo: '', priority: 'Medium' }
}
</script>

<template>
  <div class="tasks-page">
    <div class="header">
      <h2>Task Management</h2>
      <el-button type="primary" @click="dialogVisible = true">Add Task</el-button>
    </div>

    <el-table :data="tasks" style="width: 100%">
      <el-table-column prop="room" label="Room" />
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="status" label="Status">
        <template #default="{ row }">
          <el-tag :type="row.status === 'Completed' ? 'success' : row.status === 'In Progress' ? 'warning' : 'info'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="assignedTo" label="Assigned To" />
      <el-table-column prop="priority" label="Priority">
        <template #default="{ row }">
          <el-tag :type="row.priority === 'High' ? 'danger' : row.priority === 'Medium' ? 'warning' : 'info'">
            {{ row.priority }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions">
        <template #default>
          <el-button-group>
            <el-button type="primary" size="small">Edit</el-button>
            <el-button type="danger" size="small">Delete</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="Add New Task">
      <el-form :model="newTask">
        <el-form-item label="Room">
          <el-input v-model="newTask.room" />
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="newTask.type" placeholder="Select type">
            <el-option label="Cleaning" value="Cleaning" />
            <el-option label="Maintenance" value="Maintenance" />
            <el-option label="Inspection" value="Inspection" />
          </el-select>
        </el-form-item>
        <el-form-item label="Assigned To">
          <el-input v-model="newTask.assignedTo" />
        </el-form-item>
        <el-form-item label="Priority">
          <el-select v-model="newTask.priority">
            <el-option label="High" value="High" />
            <el-option label="Medium" value="Medium" />
            <el-option label="Low" value="Low" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addTask">Add</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.tasks-page {
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