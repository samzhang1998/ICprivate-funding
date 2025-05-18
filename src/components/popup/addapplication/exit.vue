<template>
    <div class="form">
        <h1>Finance Takeout Method</h1>
        <el-radio-group v-model="strategies" class="group">
            <el-radio value="refinance"><h1>Refinance</h1></el-radio>
            <el-radio value="sale"><h1>Sale of Security</h1></el-radio>
            <el-radio value="income"><h1>Cash-flow</h1></el-radio>
            <el-radio value="other"><h1>Other (Please Specify Below)</h1></el-radio>
        </el-radio-group>
        <el-input v-model="exit.exit_strategy" v-if="strategies === 'Other'" />
        <h1>Details (If Other)</h1>
        <div class="item">
            <p>Attach copies of supporting documents for your Finance Takeout Method</p>
            <el-input :rows="2" type="textarea" v-model="exit.exit_strategy_details" />
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';

    const { exit } = defineProps({
        exit: Object
    })

    const strategies = ref("")

    watch(strategies, (newVal) => {
        if (newVal !== 'other') {
            exit.exit_strategy = strategies.value
        }
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
    /* :deep(.el-checkbox) {
        --el-checkbox-input-border: 1.5px solid var(--Line, #E1E1E1);
    } */
</style>