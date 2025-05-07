<template>
    <div v-for="(b, index) in borrowers" :key="index" class="form">
        <div class="line">
            <h1>Borrower/Guarantor {{ index + 1 }}</h1>
            <el-icon
                :size="20"
                style="cursor: pointer; color: #2984DE;" 
                v-if="borrowers.length < 2" 
                @click="add"
            ><CirclePlusFilled /></el-icon>
            <el-icon 
                :size="20" 
                style="cursor: pointer; color: #2984DE;" 
                v-if="borrowers.length > 1" 
                @click="remove(index)"
            ><RemoveFilled /></el-icon>
        </div>
        <div class="name">
            <div class="item">
                <p>Title</p>
                <el-input v-model="b.title" />
            </div>
            <div class="item">
                <p>Given Names</p>
                <el-input v-model="b.firstName" />
            </div>
            <div class="item">
                <p>Surname</p>
                <el-input v-model="b.lastName" />
            </div>
        </div>
        <div class="item">
            <p>Date of Birth</p>
            <el-input v-model="b.birth" />
        </div>
        <div class="item">
            <p>Drivers License No.</p>
            <el-input v-model="b.license" />
        </div>
        <div class="item">
            <p>Phone number - Home</p>
            <el-input v-model="b.phone" />
        </div>
        <div class="item">
            <p>Mobile Number</p>
            <el-input v-model="b.mobile" />
        </div>
        <div class="long_item">
            <p>Email Address</p>
            <el-input v-model="b.email" />
        </div>
        <div class="long_item">
            <p>Full Address</p>
            <el-input v-model="b.address" />
        </div>
        <div class="item">
            <p>Occupation</p>
            <el-input v-model="b.occupation" />
        </div>
        <div class="item">
            <p>Employer Name (if self-employed, your Trading Name)</p>
            <el-input v-model="b.employer" />
        </div>
        <div class="long_item">
            <p>Current Employment Type</p>
            <el-radio-group v-model="b.type" class="group">
                <el-radio value="Full Time"><h1>Full Time</h1></el-radio>
                <el-radio value="Part Time"><h1>Part Time</h1></el-radio>
                <el-radio value="Casual/Temp"><h1>Casual/Temp</h1></el-radio>
                <el-radio value="Contract"><h1>Contract</h1></el-radio>
            </el-radio-group>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        borrowers: Array
    })

    const emit = defineEmits(['add', 'remove'])

    const add = () => {
        emit('add')
    }
    const remove = (idx) => {
        emit('remove', idx)
    }
</script>

<style scoped>
    .form {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 15px 20px;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .long_item {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .line {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
    }
    p {
        color: #384144;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        margin: 0;
    }
    .name {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        gap: 20px;
    }
    .group {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>