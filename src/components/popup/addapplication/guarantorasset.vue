<template>
    <div class="form" v-for="(d, index) in detail" :key="index">
        <h1 style="width: 100%;">Guarantor{{ index + 1 }} Assets</h1>
        <div class="item">
            <p>Type</p>
            <p>Address/Descriptions</p>
            <p>Values ($)</p>
            <div class="check">
                <p style="text-align: center;">B/G1</p>
                <p style="text-align: center;">B/G2</p>
            </div>
        </div>
        <div class="item" v-for="(a, idx) in d.assets" :key="idx">
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
            <el-radio-group v-model="a.bg_type" class="check">
                <el-radio value="B/G1"></el-radio>
                <el-radio value="B/G2"></el-radio>
            </el-radio-group>
        </div>
        <div class="item">
            <!-- <p style="font-weight: 700;">Total</p>
            <el-input v-model="company.financial_info.assets" disabled style="grid-column: 3 / 4;" /> -->
            <div class="actions">
                <el-icon
                    :size="20"
                    style="cursor: pointer; color: #2984DE;" 
                    @click="addAsset(index)"
                ><CirclePlusFilled /></el-icon>
                <el-icon 
                    :size="20" 
                    style="cursor: pointer; color: #2984DE;" 
                    v-if="d.assets.length > 1" 
                    @click="removeAsset(index)"
                ><RemoveFilled /></el-icon>
            </div>
        </div>
        <h1 style="width: 100%;">Guarantor{{ index + 1 }} Liabilities</h1>
        <div class="item1">
            <p>Type</p>
            <p>Descriptions</p>
            <p>Amount Owing ($)</p>
            <p>Monthly Payment</p>
            <div class="check">
                <p style="text-align: center;">B/G1</p>
                <p style="text-align: center;">B/G2</p>
            </div>
        </div>
        <div class="item1" v-for="(l, idxl) in d.liabilities" :key="idxl">
            <el-input v-model="l.liability_type" />
            <el-input v-model="l.description" />
            <el-input v-model="l.amount" />
            <el-input v-model="l.monthly_payment" />
            <el-radio-group v-model="l.bg_type" class="check">
                <el-radio value="B/G1"></el-radio>
                <el-radio value="B/G2"></el-radio>
            </el-radio-group>
        </div>
        <div class="item1">
            <!-- <p style="font-weight: 700;">Total</p>
            <el-input v-model="company.financial_info.liabilities" disabled style="grid-column: 3 / 4;" /> -->
            <div class="actions1">
                <el-icon
                    :size="20"
                    style="cursor: pointer; color: #2984DE;" 
                    @click="addLiability(index)"
                ><CirclePlusFilled /></el-icon>
                <el-icon 
                    :size="20" 
                    style="cursor: pointer; color: #2984DE;" 
                    v-if="d.liabilities.length > 1" 
                    @click="removeLiability(index)"
                ><RemoveFilled /></el-icon>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        detail: Array
    })
    
    const types = ref([
        {value: "property", label: "Property"},
        {value: "other", label: "Other"}
    ])

    const emit = defineEmits(['addAsset', 'removeAsset', 'addLiability', 'removeLiability'])

    const addAsset = (idx) => {
        emit('addAsset', idx)
    }
    const removeAsset = (idx) => {
        emit('removeAsset', idx)
    }
    const addLiability = (idx) => {
        emit('addLiability', idx)
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
        gap: 20px;
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
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
    :deep(.el-radio) {
        margin: 0;
    }
</style>