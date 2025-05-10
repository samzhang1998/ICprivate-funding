<script setup>
import { ref } from 'vue';
const props = defineProps({
    total: {
        type: Number,
        default: 1
    }
})

const emits = defineEmits(['change'])
const handleChange = (current, pageSize) => {
    emits('change', current, pageSize)
}
</script>

<template>
    <el-pagination class="pagination" background layout="prev, pager, next" prev-text="< Previous" next-text="Next >"
        :total="props.total" @change="handleChange" />
</template>

<style lang=scss scoped>
.pagination {
    margin-top: 20px;
}
</style>