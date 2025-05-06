<template>
    <div class="form">
        <div class="long_item">
            <h1>Loan Details</h1>
        </div>
        <div class="item">
            <p>Net Loan Required ($)</p>
            <el-input v-model="detail.loan" />
        </div>
        <div class="item">
            <p>Term Required (month)</p>
            <el-input v-model="detail.term" />
        </div>
        <div class="item">
            <p>Proposed Settlement Date</p>
            <el-input v-model="detail.date" />
        </div>
        <div class="item">
            <p>Expected Rate (p.a) (%)</p>
            <el-input v-model="detail.rate" />
        </div>
        <div class="long_item">
            <h1>Loan Purpose</h1>
        </div>
        <el-checkbox-group v-model="detail.purpose" class="group">
            <div class="line">
                <el-checkbox value="Purchase"><h1>Purchase</h1></el-checkbox>
                <el-checkbox value="Seed Capital"><h1>Seed Capital</h1></el-checkbox>
                <el-checkbox value="Settlement Shortfall"><h1>Settlement Shortfall</h1></el-checkbox>
                <el-checkbox value="Equity Venture"><h1>Equity Venture</h1></el-checkbox>
                <el-checkbox value="Cash Out"><h1>Cash Out</h1></el-checkbox>
            </div>
            <div class="line">
                <el-checkbox value="Refinance"><h1>Refinance</h1></el-checkbox>
                <el-checkbox value="Construction"><h1>Construction</h1></el-checkbox>
                <el-checkbox value="Payout Existing Debt"><h1>Payout Existing Debt</h1></el-checkbox>
                <el-checkbox value="Other"><h1>Other (Please Specify Below)</h1></el-checkbox>
            </div>
        </el-checkbox-group>
        <div class="long_item">
            <el-input v-model="detail.purposeOther" />
        </div>
        <div class="long_item">
            <h1>Additional Comments</h1>
        </div>
        <div class="long_item">
            <p>Please provide any additional relevant information / comments regarding this application</p>
            <el-input v-model="detail.comments" />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        detail: Object
    })
</script>

<style scoped>
    .form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px 20px;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    p {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        margin: 0;
    }
    .long_item {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .group {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .line {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    :deep(.el-checkbox) {
        --el-checkbox-input-border: 1.5px solid var(--Line, #E1E1E1);
    }
</style>