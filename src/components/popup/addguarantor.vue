<template>
    <div class="popup">
        <div class="popup_title">
            <h1>{{ action }}</h1>
            <div class="close">
                <!-- <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleMinimize"><Minus /></el-icon> -->
                <el-icon :size="20" style="cursor: pointer; color: #7A858E;" @click="handleClose"><Close /></el-icon>                    
            </div>
        </div>
        <div class="popup_content">
            <el-collapse v-model="activeNames" accordion style="--el-collapse-border-color: none;">
                <el-collapse-item name="1">
                    <template #title>
                        <div class="title">
                            <el-icon style="font-size: 20px" :color="isOverviewValid ? '#2984DE' : '#E1E1E1'"><SuccessFilled /></el-icon>
                            <p :style="{color: isOverviewValid ? '#2984DE' : '#272727'}">Overview</p>
                        </div>
                    </template>
                    <div class="form">
                        <div class="item">
                            <p>Guarantor Name</p>
                            <el-input v-model="overview.name" />
                        </div>
                        <div class="item">
                            <p>Guarantor Address</p>
                            <el-input v-model="overview.address" />
                        </div>
                        <div class="item">
                            <p>Phone Number</p>
                            <el-input v-model="overview.phone" />
                        </div>
                        <div class="item">
                            <p>Email Address</p>
                            <el-input v-model="overview.email" />
                        </div>
                        <div class="item">
                            <p>Relationship to Borrower</p>
                            <el-select v-model="overview.relationship" placeholder="Please Select...">
                                <el-option
                                    v-for="item in relationships"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                        <div class="item">
                            <p>Date of Birth</p>
                            <el-input v-model="overview.birth" />
                        </div>
                        <div class="item">
                            <p>Employment Status</p>
                            <el-select v-model="overview.status" placeholder="Please Select...">
                                <el-option
                                    v-for="item in statuses"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                        <div class="item">
                            <p>Annual Income</p>
                            <el-input v-model="overview.income" />
                        </div>
                        <div class="item">
                            <p>Credit Score</p>
                            <el-input v-model="overview.score" />
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="buttons">
            <Cancel @click="handleClose"></Cancel>
            <Save></Save>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import Cancel from '../buttons/cancel.vue';
    import Save from '../buttons/save.vue';

    const props = defineProps({
        action: String
    })

    const activeNames = ref("1")
    const overview = ref({
        name: "",
        address: "",
        phone: "",
        email: "",
        relationship: "",
        birth: "",
        status: "",
        income: "",
        score: ""
    })
    const relationships = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const statuses = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])

    const emit = defineEmits(['close', 'minimize'])

    const handleClose = () => {
        emit('close')
    }
    const handleMinimize = () => {
        emit('minimize')
    }
    const isOverviewValid = computed(() => {
        return Object.values(overview.value).every(value => value !== '')
    })
</script>

<style scoped>
    .popup {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        background: white;
        border: none;
        box-shadow: -8px -1px 9.3px 0px rgba(202, 202, 202, 0.16);
        width: 40%;
        height: 100vh;
        overflow: hidden;
        z-index: 1000;
    }
    .popup_title {
        width: 100%;
        padding: 10px;
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
    .popup_content {
        width: 100%;
        padding: 10px;
    }
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding-left: 5px;
    }
    .title p {
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
    }
    .form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px 20px;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .item p {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        margin: 0;
    }
    .buttons {
        width: 100%;
        padding: 10px;
        margin-top: auto;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        border-top: 1.5px solid #E1E1E1;
        gap: 10px;
    }
</style>