<template>
    <div class="application">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search</h1>
                    <el-input v-model="selected.search" style="width: 180px" placeholder="Search..." />
                </div>
                <div class="filter">
                    <h1>Location</h1>
                    <el-select v-model="selectedLocation" placeholder="Select Location" style="width: 180px">
                        <el-option v-for="item in locations" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="filter">
                    <h1>Income Type</h1>
                    <el-select v-model="selectedincome" placeholder="Select Income Type" style="width: 180px">
                        <el-option v-for="item in incomes" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class="date_picker">
                    <el-date-picker v-model="dateRange" type="daterange" start-placeholder="start" end-placeholder="end"
                        format="DD MMM" value-format="YYYY-MM-DD" :prefix-icon="Calendar" clearable
                        style="width: 180px;" />
                </div>
                <Search @click="toApplication"></Search>
                <Clear></Clear>
            </div>
            <Create :action="action" @click="addApplication"></Create>
        </div>
        <div class="container">
            <div class="tab-bar">
                <div v-for="tab in tabs" :key="tab.name" :class="['tab-item', { active: activeTab === tab.name }]"
                    :style="{ minWidth: tab.width }" @click="activeTab = tab.name">
                    {{ tab.label }}
                </div>
            </div>
            <div class="list">
                <ApplicationTable :selected="selected" :paginationInfo="paginationInfo"></ApplicationTable>
                <div class="flex">
                    <div class="select">
                        <el-checkbox v-model="selectAll" :indeterminate="isSelected" @change="handleCheckAllChange" />
                        <div class="table-buttons">
                            <DeleteButton @click="deleteSelect"></DeleteButton>
                        </div>
                    </div>
                    <Pagination :="paginationInfo" @change="handleChange"></Pagination>
                </div>
            </div>
        </div>
        <transition name="slide-right-popup">
            <AddApplication v-if="popup" :action="popupAction" @close="close" @minimize="minimize"></AddApplication>
        </transition>
    </div>
</template>

<script setup>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/api';
import AddApplication from '@/components/popup/addapplication/index.vue';
import Calendar from '@/components/icons/calendar.vue';
import Search from '@/components/buttons/search.vue';
import Clear from '@/components/buttons/clear.vue';
import Create from '@/components/buttons/create.vue';
import DeleteButton from '@/components/buttons/delete.vue';

import { Pagination } from '@/components'
import { ApplicationTable } from './components'

const router = useRouter()
const popup = ref(false)

const locations = ref([
    { value: "1", label: "1" },
    { value: "2", label: "2" }
])
const incomes = ref([
    { value: "1", label: "1" },
    { value: "2", label: "2" }
])
const tabs = [
    { name: 'all', label: 'All', width: '32px' },
    { name: 'ic', label: 'Submit to IC', width: '58px' },
    { name: 'pre', label: 'Pre-assessment', width: '86px' },
    { name: 'full', label: 'Full Assessment', width: '88px' },
    { name: 'aip', label: 'AIP', width: '37px' },
    { name: 'finalReview', label: 'Submit to Final Review', width: '89px' },
    { name: 'funder', label: 'Submit to Funder', width: '73px' },
    { name: 'conditional', label: 'Conditional Approval', width: '80px' },
    { name: 'formal', label: 'Formal Approval', width: '69px' },
    { name: 'solicitor', label: 'Instruct to Solicitor', width: '77px' },
    { name: 'issued', label: 'Loan Doc Issued', width: '72px' },
    { name: 'returned', label: 'Loan Doc Returned', width: '72px' },
    { name: 'booked', label: 'Settlement Date Booked', width: '90px' },
    { name: 'settled', label: 'Settled', width: '59px' },
    { name: 'decline', label: 'Decline', width: '61px' },
    { name: 'withdrawal', label: 'Withdrawal', width: '82px' },
]
const activeTab = ref('all')
const selected = ref({
    search: "",
    page: 1
})
const selectedLocation = ref("")
const selectedincome = ref("")
const dateRange = ref("")
const action = ref("Create Application")
const popupAction = ref("")

const paginationInfo = ref({
    total: 70,
})
const selectAll = ref(false)
const isSelected = ref(false)

onActivated(() => {
    getApplications()
})

const toApplication = () => {
    router.push(`/application/1`)
}
const addApplication = () => {
    popupAction.value = "Add Application"
    popup.value = true
}
const close = () => {
    popup.value = false
}
const minimize = () => {

}

const getApplications = async () => {
    const [err, res] = await api.applications(selected.page)
    if (!err) {
        console.log(res);
        // borrowers.value = res.results
    } else {
        console.log(err)
    }
}

const handleChange = (currantPage) => {
    selected.value.page = currantPage
    console.log(selected.value.page);
}

const handleCheckAllChange = (row) => {
    // if (row) {
    //     applicationListTable.value.toggleAllSelection()
    // } else {
    //     applicationListTable.value.clearSelection()
    // }
    // isSelected.value = false
}

const deleteSelect = () => {

}
</script>

<style lang="scss" scoped>
.application {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
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

.date_picker {
    width: 200px;
}

:deep(.el-date-editor .el-range-input) {
    width: 50px !important;
}

:deep(.el-date-editor .el-range__icon) {
    font-size: 20px;
}

:deep(.el-date-editor .el-range-separator) {
    flex: 0;
}

.container {
    padding: 20px;
    flex: 1;
    border-radius: 3px;
    background: #FFF;
    overflow: hidden;

    .list {
        height: calc(100% - 44px);
        padding: 10px;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .select {
            margin-top: 20px;
            padding-left: 18px;
            display: flex;
            flex-direction: row;
            gap: 25px;
        }

        .table-buttons {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
        }
    }

    .left {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: end;
        gap: 20px;
    }

    .tab-bar {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        height: 44px;
        overflow: hidden;
    }

    .tab-item {
        display: flex;
        color: #949494;
        padding: 5px 9px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 4px 4px 0 0;
        font-size: 0.6rem;
        font-style: normal;
        font-weight: 400;
        transition: background 0.2s;
    }

    .tab-item:hover {
        background: #e0e0e0;
    }

    .tab-item.active {
        background: #2984DE;
        color: white;
        padding: 5px 9px;
    }
}

.slide-right-popup-enter-active,
.slide-right-popup-leave-active {
    transition: all 0.3s ease;
}

.slide-right-popup-enter-from,
.slide-right-popup-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.slide-right-popup-enter-to,
.slide-right-popup-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>