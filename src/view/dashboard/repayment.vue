<script setup>
import { ref } from 'vue';
import Calendar from '@/components/icons/calendar.vue';
import Search from '@/components/buttons/search.vue';
import Clear from '@/components/buttons/clear.vue';
import { Pagination } from '@/components'
import { RepaymentTable } from './components'

const totalInfo = ref([
    {
        title: "Total Repayment",
        money: "$24,000,000.00",
        num: "12"
    },
    {
        title: "Paid",
        money: "$1,850,000.00",
        num: "12"
    },
    {
        title: "Due Soon",
        money: "$1,850,000.00",
        num: "5"
    },
    {
        title: "Overdue",
        money: "$5,630,000.00",
        num: "5"
    }
])
const searchedRepayment = ref("")
const statuses = ref([
    { value: "scheduled", label: "Scheduled" },
    { value: "dueSoon", label: "Due Soon" },
    { value: "paid", label: "Paid" },
    { value: "overdue", label: "Overdue" }
])
const paginationInfo = ref({
    total: 100,
})
const selectedStatus = ref("")
const dateRange = ref("")
const itemClass = (index) => {
    switch (index) {
        case 0: return 'item1'
        case 1: return 'item2'
        case 2: return 'item3'
        case 3: return 'item4'
        default: return ''
    }
}

const handleChange = (currantPage) => {
    console.log(currantPage);
}

</script>

<template>
    <div class="repayment">
        <div class="totals">
            <div v-for="(info, index) in totalInfo" :key="index" class="total" :class="itemClass(index)">
                <h1>{{ info.title }}</h1>
                <h2>{{ info.money }}</h2>
                <p>{{ info.num }} repayments</p>
            </div>
        </div>
        <div class="filters">
            <el-input v-model="searchedRepayment" style="width: 200px" placeholder="Search..." />
            <el-select v-model="selectedStatus" placeholder="Select Status" style="width: 200px">
                <el-option v-for="item in statuses" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <div class="date_picker">
                <el-date-picker v-model="dateRange" type="daterange" start-placeholder="start" end-placeholder="end"
                    format="DD MMM" value-format="YYYY-MM-DD" :prefix-icon="Calendar" clearable style="width: 180px;" />
            </div>
            <Search></Search>
            <Clear></Clear>
        </div>
        <div class="container">
            <div class="list">
                <RepaymentTable></RepaymentTable>
                <div class="flex">
                    <div></div>
                    <Pagination :="paginationInfo" @change="handleChange"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.repayment {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}

.totals {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.total {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
}

h1 {
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

h2 {
    color: #384144;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
}

p {
    color: #384144;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.item1 {
    border-radius: 5px;
    border: 1px solid #E8EBEE;
    background: #384144;
}

.item1 h1,
.item1 h2,
.item1 p {
    color: #FFF;
}

.item2,
.item3,
.item4 {
    border-radius: 5px;
    border: 1px solid #E8EBEE;
    background: #F5F7FB;
}

.item2 h1 {
    color: #1AAD0A;
}

.item3 h1 {
    color: #FAAD14;
}

.item4 h1 {
    color: #F21515;
}

.filters {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;
    border-radius: 6px;
    background: #FFF;
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
    flex: 1;
    border-radius: 3px;
    background: #FFF;
    overflow: hidden;

    .list {
        height: 100%;
        padding: 20px;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pagination {
        margin-top: 20px;
    }
}
</style>