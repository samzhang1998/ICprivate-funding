<script setup>
import { ref, onMounted } from 'vue'
import { CircleCheck, View, Upload } from '@element-plus/icons-vue'
import { api } from '@/api'

onMounted(() => {
})

const tableData = ref([])

tableData.value = new Array(70)
  .fill(null)
  .map((_, index) => ({
    index,
    application: `${index}-123124`,
    amount: '5650.00',
    status: 'Scheduled',
    dueDate: 'May 21, 2025',
    paidDate: 'May 21, 2025',
    paymentMethod: 'Credit Card',
  }));
</script>

<template>
  <el-table :data="tableData" class="table" :header-cell-style="{ background: '#f8f8f8', color: '#272727' }">
    <el-table-column type="selection" width="50" align="center" />
    <el-table-column prop="application" label="Application" />
    <el-table-column prop="amount" label="Amount" />
    <el-table-column prop="status" label="Status" />
    <el-table-column prop="dueDate" label="Due Date" />
    <el-table-column prop="paidDate" label="Paid Date" />
    <el-table-column prop="paymentMethod" label="Payment Method" />
    <el-table-column label="Action" width="250" align="center">
      <template #default="scope">
        <el-button-group>
          <el-button class="view" :icon="View" />
          <el-button class="record" v-if="scope.row.index % 2 === 0">
            <el-icon class="icon">
              <CircleCheck />
            </el-icon>
            Record Payment
          </el-button>
          <el-button v-else>
            <el-icon class="icon">
              <Upload />
            </el-icon>
            Upload Payment
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.table {
  height: 90%;

  .number {
    font-weight: 400;
    font-size: 12px;

    ::v-deep(.el-statistic__content) {
      font-size: 12px;
    }
  }

  .view {
    border: 1px solid #2984DE;
    color: #2984DE;
  }

  .record {
    border-top: 1px solid #1AAD0A;
    border-bottom: 1px solid #1AAD0A;
    border-right: 1px solid #1AAD0A;
    color: #1AAD0A;
  }

  .upload {
    border-top: 1px solid #B3BFCA;
    border-bottom: 1px solid #B3BFCA;
    border-right: 1px solid #B3BFCA;
    color: #B3BFCA;
  }

  .icon {
    margin-right: 6px;
  }

  ::v-deep(.el-button-group>.el-button:not(:last-child)) {
    margin-right: 0;
  }
}
</style>
