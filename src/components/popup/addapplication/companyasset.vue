<template>
    <div class="form" v-for="(company, index) in company" :key="index">
        <h1 style="width: 100%;">Assets</h1>
        <div class="item">
            <p>Type</p>
            <p>Address/Descriptions</p>
            <p>Values ($)</p>
            <p style="text-align: center;">To be refinanced</p>
        </div>
        <div class="item" v-for="(a, index) in company.assets" :key="index">
            <el-select v-model="a.asset_type" placeholder="Select">
                <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
            <el-input v-model="a.address" v-if="a.asset_type === 'property'" />
            <el-input v-model="a.description" v-else />
            <el-input v-model="a.value" />
            <div class="check">
                <el-checkbox v-model="a.to_be_refinanced" />
            </div>
        </div>
        <div class="item">
            <p style="font-weight: 700;">Total</p>
            <el-input v-model="company.financial_info.assets" disabled style="grid-column: 3 / 4;" />
            <div class="actions">
                <el-icon
                    :size="20"
                    style="cursor: pointer; color: #2984DE;" 
                    @click="addAsset"
                ><CirclePlusFilled /></el-icon>
                <el-icon 
                    :size="20" 
                    style="cursor: pointer; color: #2984DE;" 
                    v-if="company.assets.length > 1" 
                    @click="removeAsset"
                ><RemoveFilled /></el-icon>
            </div>
        </div>
        <h1 style="width: 100%;">Liabilities</h1>
        <div class="item1">
            <p>Type</p>
            <p>Descriptions</p>
            <p>Amount Owing ($)</p>
            <p>Monthly Payment</p>
            <p style="text-align: center;">To be refinanced</p>
        </div>
        <div class="item1" v-for="(l, index) in company.liabilities" :key="index">
            <el-input v-model="l.liability_type" />
            <el-input v-model="l.description" />
            <el-input v-model="l.amount" />
            <el-input v-model="l.monthly_payment" />
            <div class="check">
                <el-checkbox v-model="l.to_be_refinanced" />
            </div>
        </div>
        <div class="item1">
            <p style="font-weight: 700;">Total</p>
            <el-input v-model="company.financial_info.liabilities" disabled style="grid-column: 3 / 4;" />
            <div class="actions1">
                <el-icon
                    :size="20"
                    style="cursor: pointer; color: #2984DE;" 
                    @click="addLiability"
                ><CirclePlusFilled /></el-icon>
                <el-icon 
                    :size="20" 
                    style="cursor: pointer; color: #2984DE;" 
                    v-if="company.liabilities.length > 1" 
                    @click="removeLiability"
                ><RemoveFilled /></el-icon>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        company: Array
    })

    const types = ref([
        {value: "property", label: "Property"},
        {value: "other", label: "Other"}
    ])
    
    const emit = defineEmits(['addAsset', 'removeAsset', 'addLiability', 'removeLiability'])

    const addAsset = () => {
        emit('addAsset')
    }
    const removeAsset = () => {
        emit('removeAsset')
    }
    const addLiability = () => {
        emit('addLiability')
    }
    const removeLiability = (idx) => {
        emit('removeLiability', idx)
    }
</script>

<style scoped>
    .form {        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px 20px;
    }
    .item {
        width: 100%;        
        display: grid;
        grid-template-columns: 1fr 3fr 1.5fr 1fr;
        gap: 20px;
        align-items: center;
    }
    .item1 {
        width: 100%;        
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        align-items: center;
    }
    p {
        width: 100%;
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        margin: 0;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    .check {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .actions {
        grid-column: 4 / 5;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .actions1 {
        grid-column: 5 / 6;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    :deep(.el-checkbox) {
        margin: 0;
        --el-checkbox-input-border: 1.5px solid var(--Line, #E1E1E1);
    }
</style>