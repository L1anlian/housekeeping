<script setup>
import { ref } from 'vue'

const staff = ref([
  { id: 1, name: 'John Doe', role: 'Housekeeper', status: 'Active', shift: 'Morning' },
  { id: 2, name: 'Jane Smith', role: 'Supervisor', status: 'Active', shift: 'Evening' },
  { id: 3, name: 'Mike Johnson', role: 'Housekeeper', status: 'On Leave', shift: 'Morning' },
])

const dialogVisible = ref(false)
const newStaff = ref({
  name: '',
  role: '',
  status: 'Active',
  shift: ''
})

const addStaff = () => {
  staff.value.push({
    id: staff.value.length + 1,
    ...newStaff.value
  })
  dialogVisible.value = false
  newStaff.value = { name: '', role: '', status: 'Active', shift: '' }
}
</script>

<template>
  <div class="staff-page">
    <div class="header">
      <h2>Staff Management</h2>
      <el-button type="primary" @click="dialogVisible = true">Add Staff</el-button>
    </div>

    <el-table :data="staff" style="width: 100%">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="role" label="Role" />
      <el-table-column prop="status" label="Status">
        <template #default="{ row }">
          <el-tag :type="row.status === 'Active' ? 'success' : 'warning'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="shift" label="Shift" />
      <el-table-column label="Actions">
        <template #default>
          <el-button-group>
            <el-button type="primary" size="small">Edit</el-button>
            <el-button type="danger" size="small">Delete</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="Add New Staff">
      <el-form :model="newStaff">
        <el-form-item label="Name">
          <el-input v-model="newStaff.name" />
        </el-form-item>
        <el-form-item label="Role">
          <el-select v-model="newStaff.role" placeholder="Select role">
            <el-option label="Housekeeper" value="Housekeeper" />
            <el-option label="Supervisor" value="Supervisor" />
            <el-option label="Manager" value="Manager" />
          </el-select>
        </el-form-item>
        <el-form-item label="Shift">
          <el-select v-model="newStaff.shift" placeholder="Select shift">
            <el-option label="Morning" value="Morning" />
            <el-option label="Evening" value="Evening" />
            <el-option label="Night" value="Night" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addStaff">Add</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.staff-page {
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