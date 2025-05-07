<template>
    <div class="popup">
        <div class="popup_title">
            <h1>Notes</h1>
            <div class="close">
                <!-- <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleMinimize"><Minus /></el-icon> -->
                <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleClose"><Close /></el-icon>                    
            </div>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['close', 'minimize'])

    const handleClose = () => {
        emit('close')
    }
    const handleMinimize = () => {
        emit('minimize')
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
    .close {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
</style>