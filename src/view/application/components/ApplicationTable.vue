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
        caseId: '12314',
        name: `name`,
        status: 'Formal Approval',
        bdm: 'Tomas L',
        credit: 'Jackson',
        casePurpose: 'New Purchasing',
        product: 'Product Name',
        securityAddress: 'Unit 4/37 Waterloo Street, Surry Hills NSW 2020',
        approvedAmount: '3000000.00',
        settlementDate: '19/06/2024',
        modifiedDate: '03/01/2025',
        createDate: '17/06/2024',
    }));
</script>

<template>
    <el-table :data="tableData" class="table" :header-cell-style="{ background: '#f8f8f8', color: '#272727' }">
        <el-table-column type="selection" width="50" align="center" fixed />
        <el-table-column prop="caseId" label="Case Id" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="status" label="Status" width="150" />
        <el-table-column prop="bdm" label="BDM" />
        <el-table-column prop="credit" label="Credit" />
        <el-table-column prop="casePurpose" label="Case Purpose" width="150" />
        <el-table-column prop="product" label="Product" />
        <el-table-column prop="securityAddress" label="Security Address" width="200" />
        <el-table-column prop="approvedAmount" label="Approved Amount" width="150">
            <template #default="scope">
                <el-statistic class="number" :value="Number(scope.row.approvedAmount)" v-if="scope.row.approvedAmount"
                    :precision="2" :formatter="(value) => `$ ${value.toFixed(2)}`" />
            </template>
        </el-table-column>
        <el-table-column prop="settlementDate" label="Settlement Date" width="150" />
        <el-table-column prop="modifiedDate" label="Modified Date" width="150" />
        <el-table-column prop="createDate" label="Create Date" width="150" />
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
}
</style>
