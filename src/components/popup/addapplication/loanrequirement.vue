<template>
    <div class="form">
        <div class="line">
            <h1>Description of Funds Required</h1>
            <p>Amount</p>
        </div>
        <div class="line" v-for="(r, index) in requirement" :key="index">
            <el-input v-model="r.description" />
            <el-input v-model="r.amount" />
        </div>
        <div class="buttons">
            <el-icon
                :size="20"
                style="cursor: pointer; color: #2984DE;" 
                @click="add"
            ><CirclePlusFilled /></el-icon>
            <el-icon 
                :size="20" 
                style="cursor: pointer; color: #2984DE;" 
                v-if="requirement.length > 1" 
                @click="remove"
            ><RemoveFilled /></el-icon>
        </div>
        <div class="line">
            <h1 style="font-weight: 700;">Total</h1>
            <el-input v-model="total" disabled />
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const { requirement } = defineProps({
        requirement: Array
    })

    const total = computed(() => {
        return requirement
            .map(a => parseFloat(a.amount) || 0)
            .reduce((sum, v) => sum + v, 0)
    })

    const emit = defineEmits(['add', 'remove'])

    const add = () => {
        emit('add')
    }
    const remove = () => {
        emit('remove')
    }
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
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 15px;
    }
</style>