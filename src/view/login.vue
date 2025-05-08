<template>
    <div class="login">
        <div class="login_info">
            <div>
                <h1>Welcome to ETERNITY CAPITAL Portal</h1>
                <h2>Use your email address to login</h2>
                <div class="user">
                    <input v-model="user.email" placeholder="Enter your eamil" />
                </div>
                <div class="user">
                    <input v-model="user.password" placeholder="Enter your password" />
                    <el-icon size="20" color="#808080">
                        <View />
                    </el-icon>
                </div>
                <button @click="login">login</button>
            </div>
            <img class="right-img" src="/src/assets/login_image.png" alt="logo" />
        </div>
    </div>

</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
const user = reactive({
    email: '',
    password: ''
})

const login = () => {
    console.log('login', user)
    axios.post('https://3.25.246.57/api/users/auth/login/', {
        "email": "fanhongyuan897@gmail.com",
        "password": "Eminem.cn1"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}
</script>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;

    .login_info {
        display: flex;
        align-items: center;

        .right-img {
            width: 50%;
            display: block;
            height: 100vh;
        }
    }
}
</style>