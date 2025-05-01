<template>
    <div class="bdm">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search</h1>
                    <el-input v-model="searchedBDM" style="width: 240px" placeholder="Search..." />
                </div>
                <div class="filter">
                    <h1>Filter Branch</h1>
                    <el-select v-model="selectedBranch" placeholder="Select Branch" style="width: 240px">
                        <el-option
                            v-for="item in branches"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <Search></Search>
                <Clear></Clear>
            </div>
            <Create :action="action"></Create>
        </div>
        <div class="container"></div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Search from '@/components/buttons/search.vue';
    import Clear from '@/components/buttons/clear.vue';
    import Create from '@/components/buttons/create.vue';

    const branches = ref([
        {value: "Sydney", label: "Sydney"},
        {value: "Melbourne", label: "Melbourne"}
    ])
    const searchedBDM = ref("")
    const selectedBranch = ref("")
    const action = ref("Create BDM")
</script>

<style scoped>
    .bdm {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .filters {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        border-radius: 6px;
        background: #FFF;
    }
    .left {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: end;
        gap: 20px;
    }
    .filter {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
    h1 {
        color: #272727;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
        margin: 0;
    }
    .container {
        height: 500px;
        border-radius: 3px;
        background: #FFF;
    }
</style>