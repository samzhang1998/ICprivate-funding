<template>
    <div class="nav">
        <div class="top">
            <img src="/src/assets/logo.png" alt="logo" class="logo" />
            <div class="menu" :class="{ active: route.path.startsWith('/dashboard') }" @click="toPage('dashboard')">
                <img src="/src/assets/icons/nav_dashboard.png" alt="menu" />
                <p>{{ $t('system.dashboard') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/application') }" @click="toPage('application')">
                <img src="/src/assets/icons/nav_application.png" alt="menu" />
                <p>{{ $t('system.application') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/borrower') }" @click="toPage('borrower')">
                <img src="/src/assets/icons/nav_borrower.png" alt="menu" />
                <p>{{ $t('system.borrower') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/guarantor') }" @click="toPage('guarantor')">
                <img src="/src/assets/icons/nav_guarantor.png" alt="menu" />
                <p>{{ $t('system.guarantor') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/broker') }" @click="toPage('broker')">
                <img src="/src/assets/icons/nav_broker.png" alt="menu" />
                <p>{{ $t('system.broker') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/bdm') }" @click="toPage('bdm')">
                <img src="/src/assets/icons/nav_bdm.png" alt="menu" />
                <p>{{ $t('system.bd') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/branch') }" @click="toPage('branch')">
                <img src="/src/assets/icons/nav_branch.png" alt="menu" />
                <p>{{ $t('system.branch') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/product') }" @click="toPage('product')">
                <img src="/src/assets/icons/nav_product.png" alt="menu" />
                <p>{{ $t('system.product') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/document') }" @click="toPage('document')">
                <img src="/src/assets/icons/nav_document.png" alt="menu" />
                <p>{{ $t('system.documents') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path.startsWith('/user') }" @click="toPage('user')">
                <img src="/src/assets/icons/nav_branch.png" alt="menu" />
                <p>{{ $t('system.user') }}</p>
            </div>
        </div>
        <div class="bottom">
            <div class="menu" :class="{ active: route.path === '/setting' }" @click="toPage('setting')">
                <img src="/src/assets/icons/nav_setting.png" alt="menu" />
                <p>{{ $t('system.setting') }}</p>
            </div>
            <div class="menu" :class="{ active: route.path === '/notification' }" @click="toPage('notification')">
                <img src="/src/assets/icons/nav_notification.png" alt="menu" />
                <p>{{ $t('system.notification') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import useTagView from '@/hooks/useTagView'

const route = useRoute()
const router = useRouter()
const menuRoutes = router.getRoutes()

//将选中的菜单添加到TagView中
const { setTagViewList } = useTagView()

//todo someThing 这里的菜单应该从配置的路由中取，可优化项，暂时先这么写
const toPage = (page) => {
    const findRoute = menuRoutes.find(route => route.path === `/${page}`)
    let tag = {
        name: findRoute?.meta?.title || '',
        path: findRoute?.path || '',
        fullPath: findRoute?.fullPath || '',
    }
    setTagViewList(tag)
    if (page === "setting") {
        router.push("/setting")
    } else if (page === "notification") {
        router.push("/notification")
    } else {
        router.push(`/${page}`)
    }

}
</script>

<style scoped>
.nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.logo {
    width: 65%;
    margin-top: 27px;
    margin-bottom: 15px;
}

.top {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 27px;
}

.menu {
    width: 100%;
    padding: 10px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.menu img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}

.menu p {
    color: #384144;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
}

.menu:hover {
    background: #EFEFEF;
}

.active {
    background: #EFEFEF;
}
</style>