<template>
    <div class="doc">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search By Description</h1>
                    <el-input v-model="searchedApplication" style="width: 200px" placeholder="Search By Description" />
                </div>
                <div class="filter">
                    <h1>All Document Type</h1>
                    <el-select v-model="selectedDoc" placeholder="Select Document Type" style="width: 200px">
                        <el-option
                            v-for="item in docTypes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="filter">
                    <h1>Income Type</h1>
                    <el-select v-model="selectedincome" placeholder="Select Income Type" style="width: 200px">
                        <el-option
                            v-for="item in incomes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <Search></Search>
                <Clear></Clear>
            </div>
            <Create :action="action"></Create>
        </div>
        <div class="container">
            <el-table
                ref="docListTable"
                :data="paginatedData"
                style="width: 100%"
                :default-sort="{ prop: 'id', order: 'ascending' }"
                :cell-style="{ padding: '10px 0' }"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" align="center" width="50" />
                <el-table-column prop="title" label="Title" sortable="" width="180" />
                <el-table-column prop="type" label="Type" width="150" />
                <el-table-column prop="application" label="Application" width="150" />
                <el-table-column prop="person" label="Uploaded By" min-width="180" />                
                <el-table-column prop="time" label="Uploaded At" width="200" />
                <el-table-column prop="version" label="version" width="90" />
                <el-table-column label="Action" align="center" width="150">
                    <template #default="{row}">
                        <div class="actions">
                            <div class="view" @click="handleView(row)">
                                <el-icon :size="20" 
                                    color="#2984DE"
                                ><View /></el-icon>
                            </div>
                            <div class="download" @click="handleDownload(row)">
                                <el-icon :size="20" 
                                    color="#7A858E"
                                ><Download /></el-icon>
                            </div>
                            <div class="upload" @click="handleUpload(row)">
                                <el-icon :size="20" 
                                    color="#1AAD0A"
                                ><Upload /></el-icon>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="multiple">
                <div class="select">
                    <el-checkbox
                        v-model="selectAll"
                        :indeterminate="isSelected"
                        @change="handleCheckAllChange"
                    />
                    <div class = "table_buttons">
                        <DeleteButton @click="deleteSelect"></DeleteButton>
                    </div>
                </div>
                <el-pagination
                    layout="prev, pager, next"
                    background
                    :total="docs.length"
                    :page-size="pageSize"
                    :current-page="currentPage"
                    @current-change="handlePageChange"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import Search from '@/components/buttons/search.vue';
    import Clear from '@/components/buttons/clear.vue';
    import Create from '@/components/buttons/create.vue';
    import DeleteButton from '@/components/buttons/delete.vue';

    const router = useRouter()

    const docTypes = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const incomes = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const searchedApplication = ref("")
    const selectedDoc = ref("")
    const selectedincome = ref("")
    const action = ref("Create User")
    const docs = ref([
        {
            title: "Alex Meng",
            type: "Contract",
            application: "RF-128719274",
            person: "testaccount@gmail.com",
            time: "8/5/2025",
            version: "1",
            file: ""
        },
        {
            title: "Alex Meng",
            type: "Contract",
            application: "RF-128719274",
            person: "testaccount@gmail.com",
            time: "8/5/2025",
            version: "1",
            file: ""
        },
        {
            title: "Alex Meng",
            type: "Contract",
            application: "RF-128719274",
            person: "testaccount@gmail.com",
            time: "8/5/2025",
            version: "1",
            file: ""
        }
    ])
    const pageSize = 10
    const currentPage = ref(1)
    const userListTable = ref()
    const selectedItem = ref([])
    const selectAll = ref(false)
    const isSelected = ref(false)

    const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * pageSize
        return docs.value.slice(start, start + pageSize)
    })

    const handleSelectionChange = (row) => {
        selectedItem.value = row
        selectAll.value = row.length === docs.value.length
        isSelected.value = row.length > 0 && row.length < docs.value.length
    }
    const handleCheckAllChange = (row) => {
        if (row) {
            userListTable.value.toggleAllSelection()
        } else {
            userListTable.value.clearSelection()
        }
        isSelected.value = false
    }
    const handleView = (row) => {
        console.log("document", row.id)
    }
    const handleDownload = (row) => {
        console.log("document", row.name)
    }
    const handleUpload = (row) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.onchange = (e) => {
            const file = e.target.files[0]
            if (file) {
                row.file = file
                console.log("file", row.file)
            }
        }
        input.click()
    }
    const deleteSelect = () => {
        console.log("selected", selectedItem)
        docs.value = docs.value.filter(
            item => !selectedItem.value.includes(item)
        )
        selectedItem.value = []
    }    
    const handlePageChange = (page) => {
        currentPage.value = page
    }
</script>

<style scoped>
    .doc {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .filters {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        border-radius: 6px;
        background: #FFF;
    }
    .left {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: end;
        gap: 20px;
    }
    .filter {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    h1 {
        color: #272727;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
        margin: 0;
    }
    .container {
        padding: 20px;
        border-radius: 3px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .view {
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1.5px solid #2984DE;
        border-right: none;
        border-radius: 5px 0 0 5px;
        cursor: pointer;
    }
    .download {
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1.5px solid #7A858E;
        border-right: none;
        cursor: pointer;
    }
    .upload {
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1.5px solid #1AAD0A;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
    .multiple {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .select {
        padding-left: 18px;
        display: flex;
        flex-direction: row;
        gap: 25px;
    }

    .table_buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    :deep(.el-table .el-table__cell) {
        padding: 0;
    }
    :deep(.el-table tbody .cell) {
        height: auto;
        padding: 0 5px;
        color: #272727;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
    :deep(.el-table th.el-table__cell) {
        background: #F8F8F8;
    }
    :deep(.el-table thead .cell) {
        padding: 10px 5px;
        color: #272727;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
    }
    :deep(.el-checkbox){
        --el-checkbox-input-border: 1.5px solid #B2B3BD;
        --el-checkbox-checked-input-border-color: #2984DE;
        --el-checkbox-checked-bg-color: #2984DE;
        --el-checkbox-input-border-color-hover: #2984DE;
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
        border: 1.5px solid #2984DE;
    }
    :deep(.el-pagination button) {
        height: 32px;
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
        border: 1.5px solid #2984DE;
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