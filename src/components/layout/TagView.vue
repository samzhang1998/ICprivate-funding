<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { Close } from '@element-plus/icons-vue'
import useTagView from '@/hooks/useTagView'
const routes = useRoute()
const router = useRouter()
const { tagViewList, setTagViewList, removeTagViewList } = useTagView()

onMounted(() => {
    let tag = {
        name: routes?.meta?.title || '',
        path: routes?.path || '',
        fullPath: routes?.fullPath || '',
    }
    setTagViewList(tag)
})

const closeTag = (item) => {
    removeTagViewList(item)
}

const handleShowView = (item) => {
    router.push(item?.path || '/')
}
</script>

<template>
    <div class="tag-view">
        <div class="item" v-for="(item, index) in tagViewList" :key="index" @click="handleShowView(item)">
            {{ item?.name || '' }}
            <el-icon class="icon" @click.prevent.stop="closeTag(item)">
                <Close />
            </el-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tag-view {
    width: 100%;
    height: 45px;
    background: #F5F7FB;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 6px 0;

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #7A858E;
        padding: 0 20px;
        cursor: pointer;
        font-size: 14px;
    }

    .icon {
        margin-left: 10px;
    }

    .item+.item {
        border-left: 1px solid #7A858E;
    }
}
</style>