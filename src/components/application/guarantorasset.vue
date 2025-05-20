<template>
    <div v-if="!detail.guarantors.length">
        <p>No guarantors in this application</p>
    </div>
    <div class="content" v-for="(g,index) in detail.guarantors" :key="index">
        <h1>Guarantor {{ index + 1 }}</h1>
        <h2>Assets</h2>
        <div class="item">
            <p class="title">Asset Type</p>
            <p class="title">Address/Descriptions</p>
            <p class="title">Value</p>
            <p class="title">BG_type</p>
        </div>
        <div class="item" v-for="(a,idx) in g.assets" :key="idx">
            <p class="title">{{ a.asset_type}}</p>
            <p class="title">{{ a.description || a.address}}</p>
            <p class="title">{{ a.value }}</p>
            <p class="title">{{ a.bg_type }}</p>
        </div>
        <h2>Liabilities</h2>
        <div class="item1">
            <p class="title">Liability Type</p>
            <p class="title">Descriptions</p>
            <p class="title">Amount</p>
            <p class="title">Monthly Repayment</p>
            <p class="title">BG_type</p>
        </div>
        <div class="item1" v-for="(l,idxl) in g.liabilities" :key="idxl">
            <p class="title">{{ l.liability_type }}</p>
            <p class="title">{{ l.description }}</p>
            <p class="title">{{ l.amount }}</p>
            <p class="title">{{ l.monthly_payment}}</p>
            <p class="title">{{ l.bg_type }}</p>
        </div>
    </div>
</template>

<script setup>
    const { detail } = defineProps({
        detail: Object
    })
</script>

<style scoped>
    .content {
        padding: 20px;
        border-radius: 6px;
        background: #FFF;
    }
    p {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        margin: 0;
    }
    .item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
</style>