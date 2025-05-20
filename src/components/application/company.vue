<template>
    <div class="content">
        <div class="form">
            <div class="item">
                <p class="title">Company Name</p>
                <p>{{ detail.company || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">ABN/ACN</p>
                <p>{{ detail.abn || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Industry Type</p>
                <p>{{ detail.type || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Contact Number</p>
                <p>{{ detail.contact || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Annual Company Income</p>
                <p>{{ detail.income || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Is the company a Trustee?</p>
                <p>{{ status(detail.trustee) }}</p>
            </div>
            <div class="item">
                <p class="title">Is the company a Trustee for an SMSF?</p>
                <p>{{ status(detail.smsf) }}</p>
            </div>
            <div class="item">
                <p class="title">Trustee Name</p>
                <p>{{ detail.trusteeName || '-' }}</p>
            </div>
        </div>
        <div class="part"><h1>Position Held</h1></div>
        <div class="form">
            <div class="item">
                <p class="title">Name</p>
                <p>{{ detail.name1 || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Position</p>
                <p>{{ detail.position1 || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Director ID</p>
                <p>{{ detail.id1 || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Name</p>
                <p>{{ detail.name2 || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Position</p>
                <p>{{ detail.position2 || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Director ID</p>
                <p>{{ detail.id2 || '-' }}</p>
            </div>
        </div>
        <div class="part"><h1>Registered Address</h1></div>
        <div class="item">
            <p class="title">Full Address</p>
            <p>{{ detail.address || '-' }}</p>
        </div>
    </div>
</template>

<script setup>

    const { detail } = defineProps({
        detail: Object
    })

    const status = (st) => {
        if (st === true) {
            return "Yes"
        } else {
            return "No"
        }
    }
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
    .part {
        padding: 20px 0;
        border-top: 1.5px solid #E8EBEE;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
</style>