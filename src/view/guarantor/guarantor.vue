<template>
    <div class="guarantor">
        <div class="title">
            <h1>{{ guarantor.name }}</h1>
            <h2>{{ guarantor.date }}</h2>
            <p style="color: #2984DE">Guarantor ID: {{ guarantorId }}</p>
        </div>
        <el-tabs v-model="activeName" class="tabs" >
            <el-tab-pane name="1">
                <template #label>
                    <div class="label">Overview</div>
                </template>
                <div class="tab">
                    <div class="info">
                        <p style="color: #7A858E">Guarantor Name</p>
                        <p>{{ overview.name }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Guarantor Address</p>
                        <p>{{ overview.address }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Phone Number</p>
                        <p>{{ overview.phone }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Email Address</p>
                        <p>{{ overview.email }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Relationship to Borrower</p>
                        <p>{{ overview.relationship }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Date of Birth</p>
                        <p>{{ overview.birth }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Employment Status</p>
                        <p>{{ overview.status }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Annual Income</p>
                        <p>{{ overview.income }}</p>
                    </div>
                    <div class="info">
                        <p style="color: #7A858E">Credit Score</p>
                        <p>{{ overview.score }}</p>
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

    const guarantor = ref({
        name: "Guarantor Name",
        date: "Date Create: 2025-12-23 10:13:42"
    })
    const activeName = ref('1')
    const guarantorId = route.params.guarantorId
    const overview = ref({
        name: "Broker One",
        address: "Address",
        phone: "123456789",
        email: "broker@gmail.com",
        relationship: "Branch Name",
        birth: "14.05.1986",
        status: "Full-time",
        income: "$200,000.00",
        score: "85"
    })

    onMounted(() => {
        getGuarantor()
    })

    const getGuarantor = async () => {
        const [err, res] = await api.guarantor(guarantorId)
        if (!err) {
            console.log(res);
            // borrowers.value = res.results
        } else {
            console.log(err)
        }
    }
</script>

<style scoped>
    .guarantor {
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