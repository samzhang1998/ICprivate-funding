<template>
    <div class="borrower">
        <div class="title">
            <h1>{{ borrower.name }}</h1>
            <h2>{{ borrower.date }}</h2>
            <p style="color: #2984DE">Broker ID: {{ borrowerId }}</p>
        </div>
        <el-tabs v-model="activeName" class="tabs" >
            <el-tab-pane name="1">
                <template #label>
                    <div class="label">Overview</div>
                </template>
                <div class="tab">
                    <div class="info">
                        <p style="color: #7A858E">Contact Name</p>
                        <p>{{ overview.name }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Address</p>
                        <p>{{ overview.address }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Email</p>
                        <p>{{ overview.email }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Phone</p>
                        <p>{{ overview.phone }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Borrower Type</p>
                        <p>{{ overview.type }}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="2">
                <template #label>
                    <div class="label">Financial Summary</div>
                </template>
                <div class="tab">
                    <div class="info">
                        <p style="color: #7A858E">Total Loan</p>
                        <p>{{ summary.total }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Active Loans</p>
                        <p>{{ summary.active }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Total Loan Amount</p>
                        <p>{{ summary.totalAmount }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Outstanding Amount</p>
                        <p>{{ summary.outstanding }}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane name="3">
                <template #label>
                    <div class="label">Borrower Repayment Account</div>
                </template>
                Borrower Repayment Account
            </el-tab-pane>
            <el-tab-pane name="4">
                <template #label>
                    <div class="label">Repayment History</div>
                </template>
                Repayment History
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()

    const borrower = ref({
        name: "Borrower Name",
        date: "Date Create: 2025-12-23 10:13:42"
    })
    const activeName = ref('1')
    const borrowerId = route.params.borrowerId
    const overview = ref({
        name: "Borrower One",
        address: "address",
        email: "borrower@gmail.com",
        phone: "0456875426",
        type: "Branch Name"
    })
    const summary = ref({
        total: "Commonwealth Bank",
        active: "Broker Name",
        totalAmount: "$9,000,000.00",
        outstanding: "$7,500,000.00"
    })
</script>

<style scoped>
    .borrower {
        min-height: 70vh;
        padding: 20px;
        border-radius: 6px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
    }
    .title {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h1 {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 12px;
    }
    h2 {
        color: #939393;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        margin: 0;
    }
    p {
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        margin: 0;
    }
    .tabs {
        width: 100%;
        --el-color-primary: #384144;
    }
    .label {
        padding: 0 20px;
        color: #949494;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
    }
    .tabs :deep(.el-tabs__item) {
        padding: 0;
    }
    .tabs :deep(.el-tabs__item.is-active .label) {
        color: #384144;
    }
    .tab {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
</style>