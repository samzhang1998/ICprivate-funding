<template>
    <div class="login">
        <div class ="login_info">
            <img src="/Users/joy/Desktop/Game/IC private funding/ICprivate-funding/src/assets/login_image.png" alt="logo"/>
            <h1>Welcome to ETERNITY CAPITAL Portal</h1>
            <h2>Use your email address to login</h2>
            <div class="user">
                <input v-model="User.email" placeholder="Enter your eamil"/>
             </div>
            <div class="user">
                <input v-model="User.password" placeholder="Enter your password"/>
                <el-icon size="20" color="#808080"><View /></el-iconel-icon>
            </div>
            <button @click="login">

     </div>
    </div>

</template>

<script setup>

</script>

<style>

</style>