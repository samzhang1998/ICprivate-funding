<template>
    <div class="content">
        <div class="form" v-for="(b, index) in borrowers" :key="index">
            <div class="index"><h1>Borrower/Guarantor {{ index + 1 }}</h1></div>
            <div class="item">
                <p class="title">Title</p>
                <p>{{ b.title || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Given Name</p>
                <p>{{ b.firstName || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Surname</p>
                <p>{{ b.lastName || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Date of Birth</p>
                <p>{{ b.birth || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Driver Licence No.</p>
                <p>{{ b.license || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Phone Number - Home</p>
                <p>{{ b.phone || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Mobile</p>
                <p>{{ b.mobile || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Email Address</p>
                <p>{{ b.email || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Full Address</p>
                <p>{{ b.address || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Occupation</p>
                <p>{{ b.occupation || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Employer Name (Trading Name If self-employee)</p>
                <p>{{ b.employer || '-' }}</p>
            </div>
            <div class="item">
                <p class="title">Current Employment Type</p>
                <p>{{ b.type || '-' }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const borrowers = ref([
        {
            title: "",
            firstName: "",
            lastName: "",
            birth: "",
            license: "",
            phone: "",
            mobile: "",
            email: "",
            address: "",
            occupation: "",
            employer: "",
            type: ""
        },
        {
            title: "",
            firstName: "",
            lastName: "",
            birth: "",
            license: "",
            phone: "",
            mobile: "",
            email: "",
            address: "",
            occupation: "",
            employer: "",
            type: ""
        }
    ])
</script>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;        
    }
    .form {
        padding: 20px;
        border-radius: 6px;
        background: #FFF;
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
    .index {
        grid-column: 1 / 4;
        margin-bottom: 20px;
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