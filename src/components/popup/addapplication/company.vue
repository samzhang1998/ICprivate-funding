<template>
    <div class="form" v-for="(company, index) in company" :key="index">
        <div class="item">
            <p>Company Name</p>
            <el-input v-model="company.company_name" />
        </div>
        <div class="item">
            <p>ABN/ACN</p>
            <el-input v-model="company.company_abn" />
        </div>
        <div class="item">
            <p>Industry Type</p>
            <el-input v-model="company.industry_type" />
        </div>
        <div class="item">
            <p>Contact Number</p>
            <el-input v-model="company.contact_number" />
        </div>
        <div class="long_item">
            <p>Annual Company Income</p>
            <el-input v-model="company.annual_company_income" />
        </div>
        <div class="line">
            <p>Is the company a Trustee?</p>
            <el-radio-group v-model="company.is_trustee">
                <el-radio :value="true"><h1>Yes</h1></el-radio>
                <el-radio :value="false"><h1>No</h1></el-radio>
            </el-radio-group>
        </div>
        <div class="line">
            <p>Is the company a Trustee for an SMSF?</p>
            <el-radio-group v-model="company.is_smsf_trustee">
                <el-radio :value="true"><h1>Yes</h1></el-radio>
                <el-radio :value="false"><h1>No</h1></el-radio>
            </el-radio-group>
        </div>
        <div class="long_item">
            <p>If yes, please provide the Trustee Name</p>
            <el-input v-model="company.trustee_name" />
        </div>
        <div v-for="(d, index) in company.directors" :key="index" class="sub_form">
            <div class="line">
                <h1>Pisition Held {{ index + 1 }}</h1>
                <el-icon
                    :size="20"
                    style="cursor: pointer; color: #2984DE;" 
                    v-if="company.directors.length < 2" 
                    @click="add"
                ><CirclePlusFilled /></el-icon>
                <el-icon 
                    :size="20" 
                    style="cursor: pointer; color: #2984DE;" 
                    v-if="company.directors.length > 1" 
                    @click="remove(index)"
                ><RemoveFilled /></el-icon>
            </div>
            <div class="long_item">
                <p>Name</p>
                <el-input v-model="d.name" />
            </div>
            <el-radio-group v-model="d.roles" class="line">
                <el-radio value="Director"><h1>Director</h1></el-radio>
                <el-radio value="Secretary"><h1>Secretary</h1></el-radio>
                <el-radio value="Public Officer/Shareholder"><h1>Public Officer/Shareholder</h1></el-radio>
            </el-radio-group>
            <div class="long_item">
                <p>Director ID</p>
                <el-input v-model="d.director_id" />
            </div>
        </div>
        <div class="long_item">
            <h1>Registered Address</h1>
        </div>
        <div class="address">
            <div class="item">
                <p>Unit</p>
                <el-input v-model="company.registered_address_unit" />
            </div>
            <div class="item">
                <p>No.</p>
                <el-input v-model="company.registered_address_street_no" />
            </div>
            <div class="address_long_item">
                <p>Street Name</p>
                <el-input v-model="company.registered_address_street_name" />
            </div>
        </div>
        <div class="address1">
            <div class="item">
                <p>Suburb</p>
                <el-input v-model="company.registered_address_suburb" />
            </div>
            <div class="item">
                <p>State</p>
                <el-input v-model="company.registered_address_state" />
            </div>
            <div class="item">
                <p>Postcode</p>
                <el-input v-model="company.registered_address_postcode" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        company: Object
    })

    const emit = defineEmits(['add', 'remove'])

    const add = () => {
        emit('add')
    }
    const remove = (idx) => {
        emit('remove', idx)
    }
</script>

<style scoped>
    .form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px 20px;
    }
    .sub_form {
        grid-column: 1 / 3;
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
    .address {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 15px 20px;
    }
    .address_long_item {
        grid-column: 3 / 6;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .address1 {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px 20px;
    }
</style>