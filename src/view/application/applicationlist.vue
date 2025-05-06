<template>
    <div class="application">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search</h1>
                    <el-input v-model="searchedApplication" style="width: 180px" placeholder="Search..." />
                </div>
                <div class="filter">
                    <h1>Location</h1>
                    <el-select v-model="selectedLocation" placeholder="Select Location" style="width: 180px">
                        <el-option
                            v-for="item in locations"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="filter">
                    <h1>Income Type</h1>
                    <el-select v-model="selectedincome" placeholder="Select Income Type" style="width: 180px">
                        <el-option
                            v-for="item in incomes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="date_picker">
                    <el-date-picker
                        v-model="dateRange"
                        type="daterange"
                        start-placeholder="start"
                        end-placeholder="end"
                        format="DD MMM"
                        value-format="YYYY-MM-DD"
                        :prefix-icon="Calendar"
                        clearable
                        style="width: 180px;"
                    />
                </div>
                <Search @click="toApplication"></Search>
                <Clear></Clear>
            </div>
            <Create :action="action" @click="addApplication"></Create>
        </div>
        <div class="container"></div>
        <transition name="slide-right-popup">
            <AddApplication
                v-if="popup"
                :action="popupAction"
                @close="close"
                @minimize="minimize"
            ></AddApplication>
        </transition>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import AddApplication from '@/components/popup/addapplication/index.vue';
    import Calendar from '@/components/icons/calendar.vue';
    import Search from '@/components/buttons/search.vue';
    import Clear from '@/components/buttons/clear.vue';
    import Create from '@/components/buttons/create.vue';

    const router = useRouter()
    const popup = ref(false)

    const locations = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const incomes = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const searchedApplication = ref("")
    const selectedLocation = ref("")
    const selectedincome = ref("")
    const dateRange = ref("")
    const action = ref("Create Application")
    const popupAction = ref("")

    const toApplication = () => {
        router.push(`/application/15654231`)
    }
    const addApplication = () => {
        popupAction.value = "Add Application"
        popup.value = true
    }
    const close = () => {
        popup.value = false
    }
    const minimize = () => {
        
    }
</script>

<style scoped>
    .application {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .filters {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        border-radius: 6px;
        background: #FFF;
    }
    .left {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: end;
        gap: 20px;
    }
    .filter {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    h1 {
        color: #272727;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
        margin: 0;
    }
    .date_picker {
        width: 200px;
    }
    :deep(.el-date-editor .el-range-input) {
        width: 50px !important;
    }
    :deep(.el-date-editor .el-range__icon) {
        font-size: 20px;
    }
    :deep(.el-date-editor .el-range-separator) {
        flex: 0;
    }
    .container {
        height: 500px;
        border-radius: 3px;
        background: #FFF;
    }
    .slide-right-popup-enter-active, .slide-right-popup-leave-active {
        transition: all 0.3s ease;
    }
    .slide-right-popup-enter-from, .slide-right-popup-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
    .slide-right-popup-enter-to, .slide-right-popup-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
</style>