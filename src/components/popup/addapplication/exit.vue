<template>
    <div class="form">
        <h1>Finance Takeout Method</h1>
        <el-checkbox-group v-model="exit.methods" class="group">
            <el-checkbox value="Refinance"><h1>Refinance</h1></el-checkbox>
            <el-checkbox value="Sale of Security"><h1>Sale of Security</h1></el-checkbox>
            <el-checkbox value="Cash-flow"><h1>Cash-flow</h1></el-checkbox>
            <el-checkbox value="Other"><h1>Other (Please Specify Below)</h1></el-checkbox>
        </el-checkbox-group>
        <el-input v-model="exit.methodOther" />
        <h1>Details (If Other)</h1>
        <div class="item">
            <p>Attach copies of supporting documents for your Finance Takeout Method</p>
            <el-input :rows="2" type="textarea" v-model="exit.detail" />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        exit: Object
    })
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    .group {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
    .item {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    :deep(.el-checkbox) {
        --el-checkbox-input-border: 1.5px solid var(--Line, #E1E1E1);
    }
</style>