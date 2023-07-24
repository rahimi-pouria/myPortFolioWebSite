<template>
    <div class="flex justify-between w-full relative">
        <div class="flex w-[50] absolute sideBar" :class="{'side-bar-menu' : sideBar}">
            <!-- header sidbar -->
            <p>&items</p>
        </div>
        <div class="flex w-[30%] logo p-4 items-end justify-start">
            <nuxt-link to="/">
                <p class="f48-700">
                    Pouria Rahimi
                </p>
            </nuxt-link>
        </div>
        <div class="flex w-[55%] show-menu items-center justify-center">
            <div class="flex px-5 justify-between items-center" v-for="(item, i) in Main.MainMenu" :key="i">
                <nuxt-link class="f18-400" :to="item.path">{{ item.name }}</nuxt-link>
            </div>
        </div>
        <div class="flex w-[15%] md:pr-[23px] items-center md:justify-end sm:justify-center hamburguer-menu-mobile md:pl-6">
            <div @click="sideBar = !sideBar" class="flex  items-center justify-center bg-white w-[50px] h-[50px] rounded-full">
                <img src="@/assets/img/hamMenu.png" alt="">
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// add stores menu data 
import { useMainMenu } from '@/stores/menu'
const Main = useMainMenu()
let sideBar = ref<any>(true)

</script>

<style lang="scss" scoped>
    .side-bar-menu{
        display: none;
    }
.sideBar {
    left: -40px;
    width: 20%;
    background: #fff;
    height: 100vh;
}
@media screen and (max-width: 600px) {
    .show-menu{
        display: none;
    }
    .logo{
        width: 80%;
    }
    .hamburguer-menu-mobile {
    padding-left: 10px;
}
}
@media screen and (min-width: 820px) and (max-width: 1180px) { 
    .hamburguer-menu-mobile{
        padding-left: 0 !important;
    }
}   .logo a p {
    font-size: 30px !important;
}
</style>