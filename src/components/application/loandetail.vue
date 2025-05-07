<template>
    <div class="content">
        <div class="form">
            <div class="item">
                <p class="title">Net Loan Required ($)</p>
                <p>{{ loanDetail.loan || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Term Required (Month)</p>
                <p>{{ loanDetail.term || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Proposed Settlement Date</p>
                <p>{{ loanDetail.date || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Expected Rate (p.a) (%)</p>
                <p>{{ loanDetail.rate || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Loan Purpose</p>
                <p>{{ loanDetail.purpose || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Additional Comments</p>
                <p>{{ loanDetail.comments || '-' }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const loanDetail = ref({
        loan: "",
        term: "",
        date: "",
        rate: "",
        purpose: "",
        purposeOther: "",
        comments: ""
    })
</script>

<style scoped>
    .content {
        padding: 20px;
        border-radius: 6px;
        background: #FFF;  
        min-height: 250px;      
    }
    .form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .item {
        display: flex;
        flex-direction: column;
        gap: 10px;
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
    .title {
        color: #7A858E;
    }
</style>