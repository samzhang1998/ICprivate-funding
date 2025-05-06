<template>
    <div class="form">
        <h1 style="width: 100%;">Property(s)</h1>
        <div class="item">
            <p>Address</p>
            <p>Values ($)</p>
            <p>Amount Owing ($)</p>
            <p>To be refinanced</p>
        </div>
        <div class="item">
            <el-input v-model="asset.address1" />
            <el-input v-model="asset.address1Value" />
            <el-input v-model="asset.address1Owing" />
            <div class="check">
                <el-checkbox v-model="asset.address1Refinance" />
            </div>
        </div>
        <div class="item">
            <el-input v-model="asset.address2" />
            <el-input v-model="asset.address2Value" />
            <el-input v-model="asset.address2Owing" />
            <div class="check">
                <el-checkbox v-model="asset.address2Refinance" />
            </div>
        </div>
        <div class="item">
            <el-input v-model="asset.address3" />
            <el-input v-model="asset.address3Value" />
            <el-input v-model="asset.address3Owing" />            
            <div class="check">
                <el-checkbox v-model="asset.address3Refinance" />
            </div>
        </div>
        <div class="item">
            <el-input v-model="asset.address4" />
            <el-input v-model="asset.address4Value" />
            <el-input v-model="asset.address4Owing" />
            <div class="check">
                <el-checkbox v-model="asset.address4Refinance" />
            </div>
        </div>
        <div class="item">
            <h1>Vehicle(s)</h1>
            <el-input v-model="asset.vehicleValue" />
            <el-input v-model="asset.vehicleOwing" />
            <div class="check">
                <el-checkbox v-model="asset.vehicleRefinance" />
            </div>
        </div>
        <div class="item">
            <h1>Savings</h1>
            <el-input v-model="asset.savingValue" />
            <el-input v-model="asset.savingOwing" />
            <div class="check">
                <el-checkbox v-model="asset.savingRefinance" />
            </div>
        </div>
        <div class="item">
            <h1>Investment Shares</h1>
            <el-input v-model="asset.shareValue" />
            <el-input v-model="asset.shareOwing" />
            <div class="check">
                <el-checkbox v-model="asset.shareRefinance" />
            </div>
        </div>
        <div class="item">
            <h1>Credit Card(s)</h1>
            <el-input v-model="asset.cardValue" />
            <el-input v-model="asset.cardOwing" />
            <div class="check">
                <el-checkbox v-model="asset.cardRefinance" />
            </div>
        </div>
        <div class="item">
            <h1>Other Creditor(s)</h1>
            <el-input v-model="asset.creditorValue" />
            <el-input v-model="asset.creditorOwing" />
            <div class="check">
                <el-checkbox v-model="asset.creditorRefinance" />
            </div>
        </div>
        <div class="item">
            <h1>Other</h1>
            <el-input v-model="asset.otherValue" />
            <el-input v-model="asset.otherOwing" />
            <div class="check">
                <el-checkbox v-model="asset.otherRefinance" />
            </div>
        </div>
        <div class="item">
            <h1 style="font-weight: 700;">Total</h1>
            <el-input v-model="asset.totalValue" disabled />
            <el-input v-model="asset.totalOwing" disabled />
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        asset: Object
    })
    
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
        grid-template-columns: 3fr 1fr 1.5fr 1fr;
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
    .long_item {
        grid-column: 1 / 5;
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
    .check {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    :deep(.el-checkbox) {
        margin: 0;
        --el-checkbox-input-border: 1.5px solid var(--Line, #E1E1E1);
    }
</style>