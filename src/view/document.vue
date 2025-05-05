<template>
    <div class="doc">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search By Description</h1>
                    <el-input v-model="searchedApplication" style="width: 200px" placeholder="Search By Description" />
                </div>
                <div class="filter">
                    <h1>All Document Type</h1>
                    <el-select v-model="selectedDoc" placeholder="Select Document Type" style="width: 200px">
                        <el-option
                            v-for="item in docs"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="filter">
                    <h1>Income Type</h1>
                    <el-select v-model="selectedincome" placeholder="Select Income Type" style="width: 200px">
                        <el-option
                            v-for="item in incomes"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <Search @click="toUser"></Search>
                <Clear></Clear>
            </div>
            <Create :action="action"></Create>
        </div>
        <div class="container"></div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Search from '@/components/buttons/search.vue';
    import Clear from '@/components/buttons/clear.vue';
    import Create from '@/components/buttons/create.vue';

    const router = useRouter()

    const docs = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const incomes = ref([
        {value: "1", label: "1"},
        {value: "2", label: "2"}
    ])
    const searchedApplication = ref("")
    const selectedDoc = ref("")
    const selectedincome = ref("")
    const action = ref("Create User")

    const toUser = () => {
        router.push(`/user/16786541`)
    }
</script>

<style scoped>
    .doc {
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