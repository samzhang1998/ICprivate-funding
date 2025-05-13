<template>
    <div class="form">
        <div class="item">
            <p>Establishment Fee Rate</p>
            <el-input v-model="detail.establishment_fee_rate" />
        </div>
        <div class="item">
            <p>Capped Interest Months</p>
            <el-input v-model="detail.capped_interest_months" />
        </div>
        <div class="item">
            <p>Monthly Line Fee Rate</p>
            <el-input v-model="detail.monthly_line_fee_rate" />
        </div>
        <div class="item">
            <p>Brokerage Fee Rate</p>
            <el-input v-model="detail.brokerage_fee_rate" />
        </div>
        <div class="item">
            <p>Application Fee</p>
            <el-input v-model="detail.application_fee" />
        </div>
        <div class="item">
            <p>Due Diligence Fee</p>
            <el-input v-model="detail.due_diligence_fee" />
        </div>
        <div class="item">
            <p>Legal Fee Before Gst</p>
            <el-input v-model="detail.legal_fee_before_gst" />
        </div>
        <div class="item">
            <p>Valuation Fee</p>
            <el-input v-model="detail.valuation_fee" />
        </div>
        <div class="item">
            <p>Monthly Account Fee</p>
            <el-input v-model="detail.monthly_account_fee" />
        </div>
        <div class="item">
            <p>Working Fee</p>
            <el-input v-model="detail.working_fee" />
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
</style>