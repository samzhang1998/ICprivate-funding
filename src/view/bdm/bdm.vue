<template>
    <div class="bdm">
        <div class="title">
            <h1>{{ bdm.name }}</h1>
            <h2>{{ bdm.date }}</h2>
            <p style="color: #2984DE">BDM ID: {{ bdmId }}</p>
        </div>
        <el-tabs v-model="activeName" class="tabs" >
            <el-tab-pane name="1">
                <template #label>
                    <div class="label">Overview</div>
                </template>
                <div class="tab">
                    <div class="info">
                        <p style="color: #7A858E">BDM Name</p>
                        <p>{{ overview.name }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Brand</p>
                        <p>{{ overview.brand }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Phone Number</p>
                        <p>{{ overview.phone }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Email Address</p>
                        <p>{{ overview.email }}</p>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { api } from '@/api';
    import { useRoute } from 'vue-router';

    const route = useRoute()

    const bdm = ref({
        name: "BDM Name",
        date: "Date Create: 2025-12-23 10:13:42"
    })
    const activeName = ref('1')
    const bdmId = route.params.bdmId
    const overview = ref({
        name: "BDM One",
        brand: "Brand",
        email: "BDM@gmail.com",
        phone: "0456875426"
    })

    onMounted(() => {
        getBdm()
    })

    const getBdm = async () => {
        const [err, res] = await api.bdm(bdmId)
        if (!err) {
            console.log(res);
            // borrowers.value = res.results
        } else {
            console.log(err)
        }
    }
</script>

<style scoped>
    .bdm {
        min-height: 70vh;
        padding: 20px;
        border-radius: 6px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
    }
    .title {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h1 {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 12px;
    }
    h2 {
        color: #939393;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        margin: 0;
    }
    p {
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        margin: 0;
    }
    .tabs {
        width: 100%;
        --el-color-primary: #384144;
    }
    .label {
        padding: 0 20px;
        color: #949494;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
    }
    .tabs :deep(.el-tabs__item) {
        padding: 0;
    }
    .tabs :deep(.el-tabs__item.is-active .label) {
        color: #384144;
    }
    .tab {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
</style>