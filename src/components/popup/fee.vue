<template>
    <div class="popup">
        <div class="popup_title">
            <h1>Fees</h1>
            <div class="close">
                <!-- <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleMinimize"><Minus /></el-icon> -->
                <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleClose"><Close /></el-icon>                    
            </div>
        </div>
        <el-scrollbar>
            <div class="form" v-for="(fee, index) in fees" :key="index">
                <div class="item">
                    <p class="title">Fee ID</p>
                    <p>{{ fee.id }}</p>
                </div>
                <div class="item">
                    <p class="title">Fee Type</p>
                    <p>{{ fee.fee_type_display }}</p>
                </div>
                <div class="item">
                    <p class="title">Total Amount</p>
                    <p>{{ fee.amount }}</p>
                </div>
                <div class="item">
                    <p class="title">Due Date</p>
                    <p>{{ fee.due_date }}</p>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { api } from '@/api'

    const { id } = defineProps({
        id: String
    })

    const fees = ref([])

    const emit = defineEmits(['close', 'minimize'])

    onMounted(() => {
        getFees()
    })
    
    const handleClose = () => {
        emit('close')
    }
    const getFees = async () => {
        const [err, res] = await api.fees()
        if (!err) {            
            fees.value = res.results
            console.log(fees.value);
        } else {
            console.log(err)
        }
    }
</script>

<style scoped>
    .popup {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        background: white;
        border: none;
        box-shadow: -8px -1px 9.3px 0px rgba(202, 202, 202, 0.16);
        width: 35%;
        height: 100vh;
        overflow: hidden;
        z-index: 1000;
    }
    .popup_title {
        width: 100%;
        padding: 20px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1.5px solid var(--Line, #E1E1E1);
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }
</style>