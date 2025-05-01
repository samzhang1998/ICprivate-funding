<template>
    <div class="repayment">
        <div class="totals">
            <div v-for="(info, index) in totalInfo" :key="index" class="total" :class="itemClass(index)">
                <h1>{{ info.title }}</h1>
                <h2>{{ info.money }}</h2>
                <p>{{ info.num }} repayments</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const totalInfo = ref([
        {
            title: "Total Repayment",
            money: "$24,000,000.00",
            num: "12"
        },
        {
            title: "Paid",
            money: "$1,850,000.00",
            num: "12"
        },
        {
            title: "Due Soon",
            money: "$1,850,000.00",
            num: "5"
        },
        {
            title: "Overdue",
            money: "$5,630,000.00",
            num: "5"
        }
    ])

    const itemClass = (index) => {
        switch (index) {
            case 0: return 'item1'
            case 1: return 'item2'
            case 2: return 'item3'
            case 3: return 'item4'
            default: return ''
        }
    }
</script>

<style scoped>
    .repayment {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .totals {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    .total {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    h1 {
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    h2 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    p {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
    .item1 {
        border-radius: 5px;
        border: 1px solid #E8EBEE;
        background: #384144;
    }
    .item1 h1, .item1 h2, .item1 p{
        color: #FFF;
    }
    .item2, .item3, .item4 {
        border-radius: 5px;
        border: 1px solid #E8EBEE;
        background: #F5F7FB;
    }
    .item2 h1 {
        color: #1AAD0A;
    }
    .item3 h1 {
        color: #FAAD14;
    }
    .item4 h1 {
        color: #F21515;
    }
</style>