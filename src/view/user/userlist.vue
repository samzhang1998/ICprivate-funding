<template>
    <div class="user">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search</h1>
                    <el-input v-model="searchedApplication" style="width: 200px" placeholder="Search..." />
                </div>
                <div class="filter">
                    <h1>Location</h1>
                    <el-select v-model="selectedLocation" placeholder="Select Location" style="width: 200px">
                        <el-option
                            v-for="item in locations"
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
                <Search @click="toUser"></Search>
                <Clear></Clear>
            </div>
            <Create :action="action"></Create>
        </div>
        <div class="container">
            <el-table
                ref="userListTable"
                :data="users"
                style="width: 100%"
                :default-sort="{ prop: 'id', order: 'ascending' }"
                :cell-style="{ padding: '10px 0' }"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" align="center" width="50" />
                <el-table-column prop="id" label="User ID" sortable="" width="120" />
                <el-table-column prop="name" label="Name" width="139" />
                <el-table-column prop="role" label="Role" width="90" />
                <el-table-column prop="phone" label="Phone" width="120" />                
                <el-table-column prop="email" label="Email Address" width="200" />
                <el-table-column prop="address" label="Address" min-width="180" />
                <el-table-column prop="state" label="State" width="80" />
                <el-table-column label="Action" align="center" width="60">
                    <template #default="{row}">
                        <el-popover
                            placement="bottom"
                            trigger="click"
                            width="160"
                            popper-class="user-popover"
                        >
                            <div class="actions">
                                <div class="action_user">Action</div>
                                <div class="action" @click="handleView(row)">
                                    <el-icon><View /></el-icon>
                                    View
                                </div>
                                <div class="action" @click="handleEdit(row)">
                                    <el-icon><Edit /></el-icon>
                                    Edit
                                </div>
                                <div class="action" @click="handleDelete(row)">
                                    <el-icon><Delete /></el-icon>
                                    Delete
                                </div>
                            </div>
                            <template #reference>
                                <p class="show_action">···</p>
                            </template>
                        </el-popover>
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
                        <Active></Active>
                        <Inactive></Inactive>
                    </div>
                </div>
                <el-pagination
                    layout="prev, pager, next"
                    background
                    :total="users.length"
                    :page-size="pageSize"
                    :current-page="currentPage"
                    @current-change="handlePageChange"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Search from '@/components/buttons/search.vue';
    import Clear from '@/components/buttons/clear.vue';
    import Create from '@/components/buttons/create.vue';
    import DeleteButton from '@/components/buttons/delete.vue';
    import Active from '@/components/buttons/active.vue';
    import Inactive from '@/components/buttons/inactive.vue';

    const router = useRouter()
    const popup = ref(false)

    const locations = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const incomes = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const searchedApplication = ref("")
    const selectedLocation = ref("")
    const selectedincome = ref("")
    const action = ref("Create User")
    const popupAction = ref("")
    const users = ref([
        {
            id: 11111,
            name: "Broker Name",
            role: "ADM",
            phone: "0000 000 0000",
            email: "rileysmith@example.com",
            address: "address",
            state: "Active"
        },
        {
            id: 22222,
            name: "Broker Name",
            role: "Admin",
            phone: "0000 000 0000",
            email: "rileysmith@example.com",
            address: "address",
            state: "Active"
        },
        {
            id: 33333,
            name: "Broker Name",
            role: "Settlement",
            phone: "0000 000 0000",
            email: "rileysmith@example.com",
            address: "address",
            state: "Inctive"
        }
    ])
    const pageSize = 10
    const currentPage = ref(1)
    const userListTable = ref()
    const selectedItem = ref([])
    const selectAll = ref(false)
    const isSelected = ref(false)

    const toUser = () => {
        router.push(`/user/16786541`)
    }
    const handleSelectionChange = (row) => {
        selectedItem.value = row
        selectAll.value = row.length === users.value.length
        isSelected.value = row.length > 0 && row.length < users.value.length
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
        router.push(`/user/${row.id}`)
    }
    const handleEdit = (row) => {
        const id = row.name
        popupAction.value = `Edit ${id}`
        popup.value = true
    }
    const handleDelete = (row) => {
        users.value = users.value.filter(item => item !== row)
    }
    const deleteSelect = () => {
        console.log("selected", selectedItem)
        users.value = users.value.filter(
            item => !selectedItem.value.includes(item)
        )
        selectedItem.value = []
    }    
    const handlePageChange = (page) => {
        currentPage.value = page
    }
</script>

<style scoped>
    .user {
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
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .action_user {
        width: 100%;
        padding: 0 10px 10px 10px;
        border-bottom: 1.5px solid #E1E1E1;
        color: #272727;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
    }
    .action {
        padding: 0 10px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 10px;
        margin-bottom: 10px;
        align-items: center;
        cursor: pointer;
        color: #949494;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
    }
    .action:hover {
        color: #2984DE;
    }
    .action p:hover {
        color: #2984DE;
    }
    .show_action {
        width: 100%;
        font-size: 1.5rem;
        color: #969696;
        text-align: center;
        cursor: pointer;
        margin: 0;
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

    .slide-right-popup-enter-active, .slide-right-popup-leave-active {
        transition: all 0.3s ease;
    }
    .slide-right-popup-enter-from, .slide-right-popup-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
    .slide-right-popup-enter-to, .slide-right-popup-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
</style>