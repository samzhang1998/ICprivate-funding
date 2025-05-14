<template>
    <div class="form">
        <div class="long_item">
            <h1>Loan Details</h1>
        </div>
        <div class="item">
            <p>Application Type</p>
            <el-input v-model="detail.application_type" />
        </div>
        <div class="item">
            <p>Estimated Settlement Date</p>
            <el-date-picker v-model="detail.estimated_settlement_date" type="date" placeholder="Pick a day" />
        </div>
        <div class="item">
            <p>Net Loan Required ($)</p>
            <el-input v-model="detail.loan_amount" />
        </div>
        <div class="item">
            <p>Term Required (month)</p>
            <el-input v-model="detail.loan_term" />
        </div>
        <div class="item">
            <p>Proposed Settlement Date</p>
            <el-input v-model="detail.estimated_settlement_date" />
        </div>
        <div class="item">
            <p>Expected Repayment Frequency</p>
            <el-input v-model="detail.repayment_frequency" />
        </div>
        <div class="item">
            <p>Reference Number</p>
            <el-input v-model="detail.reference_number" />
        </div>
        <div class="item">
            <p>Expected Interest Rate (p.a) (%)</p>
            <el-input v-model="detail.interest_rate" />
        </div>
        <div class="prior">
            <el-checkbox v-model="detail.prior_application">Prior Application</el-checkbox>
            <el-input v-model="detail.prior_application_details" placeholder="Details" :disabled="!detail.prior_application"/>
        </div>
        <div class="long_item">
            <h1>Valuer</h1>
        </div>
        <div class="item">
            <p>Company Name</p>
            <el-input v-model="detail.valuer_company_name" />
        </div>
        <div class="item">
            <p>Contact Name</p>
            <el-input v-model="detail.valuer_contact_name" />
        </div>
        <div class="item">
            <p>Phone Number</p>
            <el-input v-model="detail.valuer_phone" />
        </div>
        <div class="item">
            <p>Email Address</p>
            <el-input v-model="detail.valuer_email" />
        </div>
        <div class="long_item">
            <h1>QS</h1>
        </div>
        <div class="item">
            <p>Company Name</p>
            <el-input v-model="detail.qs_company_name" />
        </div>
        <div class="item">
            <p>Contact Name</p>
            <el-input v-model="detail.qs_contact_name" />
        </div>
        <div class="item">
            <p>Phone Number</p>
            <el-input v-model="detail.qs_phone" />
        </div>
        <div class="item">
            <p>Email Address</p>
            <el-input v-model="detail.qs_email" />
        </div>
        <div class="long_item">
            <h1>Loan Purpose</h1>
        </div>
        <el-radio-group v-model="detail.purpose" class="group">
            <div class="line">
                <el-radio value="Purchase"><h1>Purchase</h1></el-radio>
                <el-radio value="Seed Capital"><h1>Seed Capital</h1></el-radio>
                <el-radio value="Settlement Shortfall"><h1>Settlement Shortfall</h1></el-radio>
                <el-radio value="Equity Venture"><h1>Equity Venture</h1></el-radio>
                <el-radio value="Cash Out"><h1>Cash Out</h1></el-radio>
            </div>
            <div class="line">
                <el-radio value="Refinance"><h1>Refinance</h1></el-radio>
                <el-radio value="Construction"><h1>Construction</h1></el-radio>
                <el-radio value="Payout Existing Debt"><h1>Payout Existing Debt</h1></el-radio>
                <el-radio value="Other"><h1>Other (Please Specify Below)</h1></el-radio>
            </div>
        </el-radio-group>
        <div class="long_item">
            <el-input v-model="detail.loan_purpose" :disabled="detail.purpose !== 'Other'" />
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
    .prior {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    :deep(.el-date-editor) {
        --el-date-editor-width: 100%;
    }
</style>