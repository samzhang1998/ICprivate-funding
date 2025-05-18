<template>
    <div v-for="(b, index) in guarantors" :key="index" class="form">
        <div class="line">
            <h1>Guarantor {{ index + 1 }}</h1>
            <el-icon
                :size="20"
                style="cursor: pointer; color: #2984DE;" 
                v-if="guarantors.length < 2" 
                @click="add"
            ><CirclePlusFilled /></el-icon>
            <el-icon 
                :size="20" 
                style="cursor: pointer; color: #2984DE;" 
                v-if="guarantors.length > 1" 
                @click="remove(index)"
            ><RemoveFilled /></el-icon>
        </div>
        <div class="item">
            <p>Guarantor Type</p>
                <el-select v-model="b.guarantor_type" placeholder="Please Select...">
                    <el-option v-for="item in types" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
        </div>
        <div class="name">
            <div class="item">
                <p>Title</p>
                <el-input v-model="b.title" />
            </div>
            <div class="item">
                <p>Given Names</p>
                <el-input v-model="b.firstName" />
            </div>
            <div class="item">
                <p>Surname</p>
                <el-input v-model="b.lastName" />
            </div>
        </div>
        <div class="item">
            <p>Date of Birth</p>
            <el-input v-model="b.date_of_birth" />
        </div>
        <div class="item">
            <p>Drivers License No.</p>
            <el-input v-model="b.drivers_licence_no" />
        </div>
        <div class="item">
            <p>Phone number - Home</p>
            <el-input v-model="b.home_phone" />
        </div>
        <div class="item">
            <p>Mobile Number</p>
            <el-input v-model="b.mobile" />
        </div>
        <div class="item">
            <p>Email Address</p>
            <el-input v-model="b.email" />
        </div>
        <div class="address">
            <div class="item">
                <p>Unit</p>
                <el-input v-model="b.address_unit" />
            </div>
            <div class="item">
                <p>No.</p>
                <el-input v-model="b.address_street_no" />
            </div>
            <div class="address_long_item">
                <p>Street Name</p>
                <el-input v-model="b.address_street_name" />
            </div>
        </div>
        <div class="address1">
            <div class="item">
                <p>Suburb</p>
                <el-input v-model="b.address_suburb" />
            </div>
            <div class="item">
                <p>State</p>
                <el-input v-model="b.address_state" />
            </div>
            <div class="item">
                <p>Postcode</p>
                <el-input v-model="b.address_postcode" />
            </div>
        </div>
        <div class="item">
            <p>Occupation</p>
            <el-input v-model="b.occupation" />
        </div>
        <div class="item">
            <p>Annual Income</p>
            <el-input v-model="b.annual_income" />
        </div>
        <div class="item">
            <p>Employer Name (if self-employed, your Trading Name)</p>
            <el-input v-model="b.employer_name" />
        </div>
        <div class="long_item">
            <p>Current Employment Type</p>
            <el-radio-group v-model="b.employment_type" class="group">
                <el-radio value="Full Time"><h1>Full Time</h1></el-radio>
                <el-radio value="Part Time"><h1>Part Time</h1></el-radio>
                <el-radio value="Casual/Temp"><h1>Casual/Temp</h1></el-radio>
                <el-radio value="Contract"><h1>Contract</h1></el-radio>
            </el-radio-group>
        </div>
        <div class="item" v-if="b.guarantor_type === 'company'">
            <p>Company Name</p>
            <el-input v-model="b.company_name" />
        </div>
        <div class="item" v-if="b.guarantor_type === 'company'">
            <p>Company ABN</p>
            <el-input v-model="b.company_abn" />
        </div>
        <div class="item" v-if="b.guarantor_type === 'company'">
            <p>Company ACN</p>
            <el-input v-model="b.company_acn" />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        guarantors: Array
    })

    const types = ref([
        {value: "individual", label: "Individual"},
        {value: "company", label: "Company"}
    ])

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
        grid-template-columns: repeat(2,1fr);
        gap: 15px 20px;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
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
    p {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        margin: 0;
    }
    .name {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        gap: 20px;
    }
    .group {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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