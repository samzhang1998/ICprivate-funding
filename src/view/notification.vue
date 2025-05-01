<template>
    <div class="notification">
        <div class="select_title">
            <div @click="showAll" class="all" :style="{color: all ? '#384144' : '#7A858E'}">All</div>
            <div @click="showUnread" class="unread" :style="{color: unread ? '#384144' : '#7A858E'}">Unread</div>
        </div>
        <div class="list">
            <el-table
                ref="noteListTable"
                :data="paginatedData"
                style="width: 100%"
                :show-header="false"
                :row-class-name="tableRowClassName"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" align="center" width="50" />
                <el-table-column label="name" width="220">
                    <template #default="scope">
                        <div class="user">
                            <h1>{{ scope.row.name }}</h1>
                            <p>{{ scope.row.role }}</p>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="content" label="content" />
                <el-table-column prop="time" label="time" width="130" />
            </el-table>
            <div class="multiple">
                <div class="select">
                    <el-checkbox
                        v-model="selectAll"
                        :indeterminate="isSelected"
                        @change="handleCheckAllChange"
                    />
                    <DeleteButton @click="deleteSelect"></DeleteButton>
                </div>                
                <el-pagination
                    layout="prev, pager, next"
                    background
                    :total="noteList.length"
                    :page-size="pageSize"
                    :current-page="currentPage"
                    @current-change="handlePageChange"
                    class="mt-4"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import DeleteButton from '@/components/buttons/delete.vue'

    const all = ref(true)
    const unread = ref(false)
    const baseItem = {
        name: "Jason Yang",
        content: "Jason Yang has submitted a leave request.",
        time: "18-03-2025 09:23:31",
        role: "Brisbane - Development",
        read: false        
    }
    const pageSize = 9
    const currentPage = ref(1)
    const noteListTable = ref()
    const selectedItem = ref([])
    const selectAll = ref(false)
    const isSelected = ref(false)

    const noteList = ref(Array.from({ length: 50 }, (_, i) => ({
        ...baseItem,
        name: `Jason Yang ${i + 1}`
    })))
    const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * pageSize
        return noteList.value.slice(start, start + pageSize)
    })
    const tableRowClassName = ({row}) => {
        return row.read === true ? 'readed' : '';
    }
    const handleSelectionChange = (row) => {
        selectedItem.value = row
        selectAll.value = row.length === paginatedData.value.length
        isSelected.value = row.length > 0 && row.length < paginatedData.value.length
    }
    const handleCheckAllChange = (row) => {
        if (row) {
            noteListTable.value.toggleAllSelection()
        } else {
            noteListTable.value.clearSelection()
        }
        isSelected.value = false
    }
    const deleteSelect = () => {
        console.log("selected", selectedItem)
        noteList.value = noteList.value.filter(
            item => !selectedItem.value.includes(item)
        )
        selectedItem.value = []
    }
    const handlePageChange = (page) => {
        currentPage.value = page
    }
    const showAll = () => {
        all.value = true
        unread.value = false
    }
    const showUnread = () => {
        all.value = false
        unread.value = true
    }
</script>

<style scoped>
    .notification {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .select_title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .all {
        padding-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-right: 1.5px solid #384144;
        cursor: pointer;
    }
    .unread {
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        cursor: pointer;
    }
    .list {
        width: 100%;
        padding-bottom: 18px;
        border-radius: 8px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: hidden;
    }
    .multiple {
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .select {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .user {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;
    }
    h1 {
        color: #384144;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0;
    }
    p {
        color: #7A858E;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
    :deep(.el-table tbody .cell) {
        padding: 0;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    :deep(.readed) {
        --el-table-tr-bg-color: #F5F5F5;
    }
    :deep(.el-checkbox){
        --el-checkbox-input-border: 1.5px solid #B2B3BD;
        --el-checkbox-checked-input-border-color: #FF754C;
        --el-checkbox-checked-bg-color: #FF754C;
        --el-checkbox-input-border-color-hover: #FF754C;
    }
    :deep(.el-pagination) {
        --el-pagination-button-bg-color: #FFF;
        --el-pagination-button-disabled-bg-color: #FFF;
    }
    :deep(.el-pager li) {
        background: #FFF;
        color: rgba(0, 0, 0, 0.20);
        border-radius: 4px;
        border: 1.5px solid rgba(64, 64, 64, 0.16);
        font-weight: 500;
    }
    :deep(.el-pager li):hover {
        border: 1.5px solid #FF754C;
    }
    :deep(.el-pagination button) {
        padding: 0 15px;
        gap: 5px;
        border-radius: 4px;
        color: #1F1F1F;
        border: 1.5px solid rgba(64, 64, 64, 0.16);
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }
    :deep(.el-pagination button):hover {
        border: 1.5px solid #FF754C;
    }
    :deep(.el-pagination .btn-prev::after) {
        content: "Previous";        
    }
    :deep(.el-pagination .btn-next::before) {
        content: "Next";
    }
    :deep(.el-pagination.is-background .btn-prev:disabled) {
        background: #FFF;
    }
    :deep(.el-pagination.is-background .btn-next:disabled) {
        background: #FFF;
    }
    :deep(.el-pagination.is-background .el-pager li.is-active) {
        background: rgba(114, 114, 114, 0.08);
        color: #625E5E;
        font-weight: 500;
    }
</style>