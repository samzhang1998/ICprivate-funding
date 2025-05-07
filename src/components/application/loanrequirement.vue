<template>
    <div class="content">
        <div class="line" v-for="(l, index) in loanRequirement" :key=index>
            <p>{{ l.require }}</p>
            <p class="status">{{ l.amount }}</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const loanRequirement = ref([
        {
            require: "Description of Funds Required 1",
            amount: "$2,000,000,000"
        },
        {
            require: "Description of Funds Required 2",
            amount: "$2,200,000,000"
        },
        {
            require: "Description of Funds Required 3",
            amount: "$2,000,000,500"
        },
        {
            require: "Description of Funds Required 4",
            amount: "$2,400,000,000"
        },
        {
            require: "Description of Funds Required 5",
            amount: "$2,000,600,000"
        }
    ])
</script>

<style scoped>
    .content {
        padding: 20px;
        border-radius: 6px;
        background: #FFF;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .line {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    p {
        color: #7A858E;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        margin: 0;
    }
    .status {
        color: #384144;
        font-weight: 600;
    }
</style>