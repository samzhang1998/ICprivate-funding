<template>
    <div class="form">
        <div class="item">
            <p>Company Name</p>
            <el-input v-model="company.companyName" />
        </div>
        <div class="item">
            <p>ABN/ACN</p>
            <el-input v-model="company.abn" />
        </div>
        <div class="item">
            <p>Industry Type</p>
            <el-input v-model="company.industryType" />
        </div>
        <div class="item">
            <p>Contact Number</p>
            <el-input v-model="company.contact" />
        </div>
        <div class="long_item">
            <p>Annual Company Income</p>
            <el-input v-model="company.annualIncome" />
        </div>
        <div class="line">
            <p>Is the company a Trustee?</p>
            <el-radio-group v-model="company.trustee">
                <el-radio :value="true"><h1>Yes</h1></el-radio>
                <el-radio :value="false"><h1>No</h1></el-radio>
            </el-radio-group>
        </div>
        <div class="line">
            <p>Is the company a Trustee for an SMSF?</p>
            <el-radio-group v-model="company.smsf">
                <el-radio :value="true"><h1>Yes</h1></el-radio>
                <el-radio :value="false"><h1>No</h1></el-radio>
            </el-radio-group>
        </div>
        <div class="long_item">
            <p>If yes, please provide the Trustee Name</p>
            <el-input v-model="company.trusteeName" />
        </div>
        <div class="long_item">
            <h1>Pisition Held</h1>
        </div>
        <div class="long_item">
            <p>Name</p>
            <el-input v-model="company.positionName1" />
        </div>
        <el-radio-group v-model="company.positionRole1" class="line">
            <el-radio value="Director"><h1>Director</h1></el-radio>
            <el-radio value="Secretary"><h1>Secretary</h1></el-radio>
            <el-radio value="Public Officer/Shareholder"><h1>Public Officer/Shareholder</h1></el-radio>
        </el-radio-group>
        <div class="long_item">
            <p>Director ID</p>
            <el-input v-model="company.directorId1" />
        </div>
        <div class="long_item">
            <p>Name</p>
            <el-input v-model="company.positionName2" />
        </div>
        <el-radio-group v-model="company.positionRole2" class="line">
            <el-radio value="Director"><h1>Director</h1></el-radio>
            <el-radio value="Secretary"><h1>Secretary</h1></el-radio>
            <el-radio value="Public Officer/Shareholder"><h1>Public Officer/Shareholder</h1></el-radio>
        </el-radio-group>
        <div class="long_item">
            <p>Director ID</p>
            <el-input v-model="company.directorId2" />
        </div>
        <div class="long_item">
            <h1>Registered Address</h1>
        </div>
        <div class="long_item">
            <p>Full Address</p>
            <el-input v-model="company.address" />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        company: Object
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
    .line {
        grid-column: 1 / 3;
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
</style>