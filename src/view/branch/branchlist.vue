<template>
    <div class="branch">
        <div class="filters">
            <div class="left">
                <div class="filter">
                    <h1>Search</h1>
                    <el-input v-model="searchedApplication" style="width: 240px" placeholder="Search..." />
                </div>
                <Search @click="toBranch"></Search>
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

    const searchedApplication = ref("")
    const action = ref("Create Branch")

    const toBranch = () => {
        router.push(`/branch/16786541`)
    }
</script>

<style scoped>
    .branch {
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