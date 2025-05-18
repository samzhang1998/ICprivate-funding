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
            <div class="address">
                <div class="item">
                    <p>Unit</p>
                    <el-input v-model="s.address_unit" />
                </div>
                <div class="item">
                    <p>No.</p>
                    <el-input v-model="s.address_street_no" />
                </div>
                <div class="address_long_item">
                    <p>Street Name</p>
                    <el-input v-model="s.address_street_name" />
                </div>
            </div>
            <div class="address1">
                <div class="item">
                    <p>Suburb</p>
                    <el-input v-model="s.address_suburb" />
                </div>
                <div class="item">
                    <p>State</p>
                    <el-input v-model="s.address_state" />
                </div>
                <div class="item">
                    <p>Postcode</p>
                    <el-input v-model="s.address_postcode" />
                </div>
            </div>
            <div class="item">
                <p>Property Type</p>
                <el-radio-group v-model="s.property_type" class="group">
                    <div class="line">
                        <el-radio value="Residential"><h1>Residential</h1></el-radio>
                        <el-radio value="Commercial"><h1>Commercial</h1></el-radio>
                        <el-radio value="Rural"><h1>Rural</h1></el-radio>
                    </div>
                    <div class="line">
                        <el-radio value="Industrial"><h1>Industrial</h1></el-radio>
                        <el-radio value="Vacant Land"><h1>Vacant Land</h1></el-radio>
                        <el-radio value="Other"><h1>Others(Please Specify Below)</h1></el-radio>
                    </div>
                </el-radio-group>
                <el-input v-model="s.property_type" />
            </div>
            <div class="long">
                <div class="item">
                    <p>Bedrooms</p>
                    <el-input v-model="s.bedrooms" />
                </div>
                <div class="item">
                    <p>Bathrooms</p>
                    <el-input v-model="s.bathrooms" />
                </div>
                <div class="item">
                    <p>Car Spaces</p>
                    <el-input v-model="s.car_space" />
                </div>
                <div class="item">
                    <p>Building Size (sqm)</p>
                    <el-input v-model="s.building_size" />
                </div>
                <div class="item">
                    <p>Land Size (sqm)</p>
                    <el-input v-model="s.land_size" />
                </div>
            </div>
            <div class="item">
                <h1>Description (If Applicable)</h1>
                <div class="line">
                    <el-checkbox v-model="s.is_single_story"><h1>Single Story</h1></el-checkbox>
                    <el-checkbox v-model="s.has_off_street_parking"><h1>Off-Street Parking</h1></el-checkbox>
                    <el-checkbox v-model="s.has_garage"><h1>Garage</h1></el-checkbox>
                    <el-checkbox v-model="s.has_carport"><h1>Carport</h1></el-checkbox>
                </div>
            </div>
            <div class="item">
                <p>Current Mortgagee Name</p>
                <el-input v-model="s.current_mortgagee" />
            </div>
            <div class="item">
                <p>Current Debt Position</p>
                <el-input v-model="s.current_debt_position" />
            </div>
            <h1>Valuation</h1>
            <div class="inputs">
                <h1 style="color: #000; width: 30%;">Est Current Value</h1>
                <el-input v-model="s.estimated_value" />
            </div>
            <div class="inputs">
                <h1 style="color: #000; width: 30%;">Purchase Price</h1>
                <el-input v-model="s.purchase_price" />
            </div>
    </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        security: Array
    })

    const emit = defineEmits(['add', 'remove'])
    const known = ['Residential', 'Commercial', 'Rural', 'Industrial', 'Vacant Land']

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
    .address {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 15px 20px;
    }
    .address_long_item {
        grid-column: 3 / 6;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    .address1 {
        grid-column: 1 / 3;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px 20px;
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