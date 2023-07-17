<template>
    <div class="w-full">
        <div class="w-full footer-location p-4 justify-between flex items-center">
            <img src="../assets/img/logoFooter.svg" alt="">
            <div class="flex gap-2">
                <p class="f14-400">09184095907, 09220529612</p>
                <p class="f14-400">pouria.rahimy@gmail.com</p>
            </div>
            <div class="flex gap-2">
                <nuxt-link to="https://github.com/rahimi-pouria">
                    <img src="../assets/img/github.svg" alt="">
                </nuxt-link>
                <nuxt-link to="#">
                    <img src="../assets/img/twitter.svg" alt="">
                </nuxt-link>
                <nuxt-link to="https://www.linkedin.com/in/pouria-rahimy-a7755b212/">
                    <img src="../assets/img/linkdin.svg" alt="">
                </nuxt-link>
            </div>
        </div>
        <div class="menu-footer flex justify-between gap-3 p-3">
            <div class="flex gap-3">
                <nuxt-link v-for="(item, i) in menuFooter.MainMenu" :key="i" 
            :to="item.path" class="f18-400">
                {{ item.name }}
            </nuxt-link>
            </div>
            <p class="f14-400">
                Designed by Pouria Rahimi, a front End Programmer
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMainMenu } from '@/stores/menu'

const menuFooter = useMainMenu()
</script>

<style lang="scss" scoped>
    .footer-location{
        border-bottom: 1px solid #b1b1b1;
    }
</style>