<template>
    <div class="form">
        <div class="action_line">
            <p style="color: #000">Yes</p>
            <p style="color: #000">No</p>
        </div>
        <div class="line">
            <p>Does the Borrower(s) and the Guarantor(s) have any pending or past litigation matters (within the last 2 years)?</p>
            <el-radio-group v-model="enquiry.litigation">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
        <div class="line">
            <p>Are there any unsatisfied judgements against the Borrower(s) and the Guarantor(s)?</p>
            <el-radio-group v-model="enquiry.judgements">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
        <div class="line">
            <p>Have the Borrower(s) and the Guarantor(s) been bankrupt or insolvent in the past 5 years?</p>
            <el-radio-group v-model="enquiry.bankrupt">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
        <div class="line">
            <p>Has the Borrower(s) and the Guarantor(s) been refused credit by a credit provider in the last 1 year?</p>
            <el-radio-group v-model="enquiry.refuse">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
        <div class="line">
            <p>Are there any outstanding debts current or otherwise due to the ATO by the Borrower(s) and the Guarantor(s)?</p>
            <el-radio-group v-model="enquiry.debt">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
        <div class="line">
            <p>Does the Borrower(s) and the Guarantor(s) have outstanding Tax or BAS returns due to be lodged with the ATO?</p>
            <el-radio-group v-model="enquiry.tax">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
        <div class="line">
            <p>Has the Borrower(s) and the Guarantor(s) made payment arrangements with a creditor to payout debt that is still current?</p>
            <el-radio-group v-model="enquiry.payment">
                <el-radio :value="true" />
                <el-radio :value="false" />
            </el-radio-group>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        enquiry: Object
    })
</script>

<style scoped>
    .form {        
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .action_line {
        width: 100%;
        padding-right: 8px;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 32px;
    }
    .line {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .line p {
        width: 80%;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
</style>