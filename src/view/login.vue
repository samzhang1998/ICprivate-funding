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
import { api } from '@/api'
import { useRouter } from 'vue-router'
const user = reactive({
    email: 'admin@example.com',
    password: 'qweasdzxc1234'
})

const router = useRouter()

const login = async () => {
    const [err, res] = await api.login(user)
    if (!err) {
        console.log(res);
        localStorage.setItem('token', res.access)
        localStorage.setItem('refresh', res.refresh)
        router.replace('/')
    } else {
        console.log(err)
    }
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