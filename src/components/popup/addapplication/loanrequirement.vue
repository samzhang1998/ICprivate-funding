<template>
    <div class="form">
        <div class="line">
            <h1>Description of Funds Required</h1>
            <p>Amount</p>
        </div>
        <div class="line">
            <el-input v-model="requirement.require1" />
            <el-input v-model="requirement.amount1" />
        </div>
        <div class="line">
            <el-input v-model="requirement.require2" />
            <el-input v-model="requirement.amount2" />
        </div>
        <div class="line">
            <el-input v-model="requirement.require3" />
            <el-input v-model="requirement.amount3" />
        </div>
        <div class="line">
            <el-input v-model="requirement.require4" />
            <el-input v-model="requirement.amount4" />
        </div>
        <div class="line">
            <el-input v-model="requirement.require5" />
            <el-input v-model="requirement.amount5" />
        </div>
        <div class="line">
            <el-input v-model="requirement.require6" />
            <el-input v-model="requirement.amount6" />
        </div>
        <div class="line">
            <h1 style="font-weight: 700;">Total</h1>
            <el-input v-model="requirement.totalAmount" disabled />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        requirement: Object
    })
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .line {
        display: grid;
        grid-template-columns: 2fr 1fr;
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