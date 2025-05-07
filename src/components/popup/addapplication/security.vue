<template>
    <div class="form">
        <div v-for="(s, index) in security" :key="index" class="form">
            <div class="title">
                <h1>Property(s)</h1>
                <div class="buttons">
                    <el-icon
                        :size="20"
                        style="cursor: pointer; color: #2984DE;" 
                        v-if="security.length < 3" 
                        @click="add"
                    ><CirclePlusFilled /></el-icon>
                    <el-icon 
                        :size="20" 
                        style="cursor: pointer; color: #2984DE;" 
                        v-if="security.length > 1" 
                        @click="remove(index)"
                    ><RemoveFilled /></el-icon>
                </div>
            </div>
            <div class="item">
                <p>Full Address</p>
                <el-input v-model="s.address" />
            </div>
            <div class="item">
                <p>Property Type</p>
                <el-checkbox-group v-model="s.type" class="group">
                    <div class="line">
                        <el-checkbox value="Residential"><h1>Residential</h1></el-checkbox>
                        <el-checkbox value="Commercial"><h1>Commercial</h1></el-checkbox>
                        <el-checkbox value="Rural"><h1>Rural</h1></el-checkbox>
                    </div>
                    <div class="line">
                        <el-checkbox value="Industrial"><h1>Industrial</h1></el-checkbox>
                        <el-checkbox value="Vacant Land"><h1>Vacant Land</h1></el-checkbox>
                        <el-checkbox value="Other"><h1>Others(Please Specify Below)</h1></el-checkbox>
                    </div>
                </el-checkbox-group>
                <el-input v-model="s.typeOther" />
            </div>
            <div class="long">
                <div class="item">
                    <p>Bedrooms</p>
                    <el-input v-model="s.bedroom" />
                </div>
                <div class="item">
                    <p>Bathrooms</p>
                    <el-input v-model="s.bedroom" />
                </div>
                <div class="item">
                    <p>Car Spaces</p>
                    <el-input v-model="s.carSpace" />
                </div>
                <div class="item">
                    <p>Building Size (sqm)</p>
                    <el-input v-model="s.buildingSize" />
                </div>
                <div class="item">
                    <p>Land Size (sqm)</p>
                    <el-input v-model="s.landSize" />
                </div>
            </div>
            <div class="item">
                <h1>Description (If Applicable)</h1>
                <el-checkbox-group v-model="s.description" class="group">
                    <div class="line">
                        <el-checkbox value="Single Story"><h1>Single Story</h1></el-checkbox>
                        <el-checkbox value="Double Story"><h1>Double Story</h1></el-checkbox>
                        <el-checkbox value="Garage"><h1>Garage</h1></el-checkbox>
                        <el-checkbox value="Carport"><h1>Carport</h1></el-checkbox>
                    </div>
                    <div class="line">
                        <el-checkbox value="Off-Street"><h1>Off-Street</h1></el-checkbox>
                        <el-checkbox value="Owner Occupied"><h1>Owner Occupied</h1></el-checkbox>
                        <el-checkbox value="Investment Property"><h1>Investment Property</h1></el-checkbox>
                    </div>
                </el-checkbox-group>
            </div>
            <h1>Current Mortgagee Name</h1>
            <div class="short">
                <div class="item">
                    <p>1st Mortgage</p>
                    <el-input v-model="s.mortgage1" />
                </div>
                <div class="item">
                    <p>2nd Mortgage</p>
                    <el-input v-model="s.mortgage2" />
                </div>
            </div>
            <h1>Current Debt Position</h1>
            <div class="short">
                <div class="item">
                    <p>1st Mortgage</p>
                    <el-input v-model="s.debt1" />
                </div>
                <div class="item">
                    <p>2nd Mortgage</p>
                    <el-input v-model="s.debt2" />
                </div>
            </div>
            <h1>Valuation</h1>
            <div class="value">
                <el-checkbox-group v-model="s.valuation" class="group">
                    <el-checkbox value="Est Current Value"><h1>Est Current Value</h1></el-checkbox>
                    <el-checkbox value="Purchase Price"><h1>Purchase Price</h1></el-checkbox>
                </el-checkbox-group>
                <div class="group">
                    <div class="inputs">
                        <h1 style="color: #000; width: 20%;">Value ($)</h1>
                        <el-input v-model="s.est" />
                    </div>
                    <div class="inputs">
                        <h1 style="color: #000; width: 20%;">Value ($)</h1>
                        <el-input v-model="s.purchase" />
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        security: Array
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
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
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
    .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .line {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .long {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
    }
    .short {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .value {
        display: grid;
        grid-template-columns: 2fr 3fr;
    }
    .inputs {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    :deep(.el-checkbox) {
        --el-checkbox-input-border: 1.5px solid var(--Line, #E1E1E1);
    }
</style>