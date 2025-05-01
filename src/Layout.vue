<template>
    <el-container class="mainpage">
        <el-aside class="sidebar" :style="{ '--el-aside-width': '17%' }">
            <Navbar></Navbar>
        </el-aside>
        <el-container class="content">
            <el-header height="130px" :style="{ '--el-header-padding': '0' }" class="heading">
                <Header></Header>
                <div class="navbar"></div>
            </el-header>
            <el-scrollbar>
                <el-main class="main">          
                    <router-view />          
                </el-main>
            </el-scrollbar>
        </el-container>
  </el-container>
</template>

<script setup>
    import Header from '@/components/layout/header.vue';
    import Navbar from './components/layout/navbar.vue';
</script>

<style scoped>
    .mainpage {
        width: 100%;
        height: 100vh;
        padding: 0;
        display: flex;
        flex-direction: row;
        background: #FAFAFA;
    }
    .sidebar {
        width: 17%;
        height: 100vh;
        padding: 0 10px;
        overflow-y: auto;
        background: #FFF;
        border-right: 1px solid #E1E1E1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
        height: 100%;
    }
    .content {
        width: 83%;
        height: 100vh;
        overflow-y: auto;
    }
    .heading {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
        position: sticky;
        top: 0;
    }
    .navbar {
        width: 100%;
        height: 45px;
        background: #F5F7FB;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
    }
    .main {
        padding: 20px;        
    }
</style>