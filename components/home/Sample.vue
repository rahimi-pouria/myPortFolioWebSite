<template>
    <div class="sample p-3 flex flex-col gap-8">
        <h4 class="f28-700">
            نمونه کارها
        </h4>
        <div class="flex w-full sample-mobile gap-3">
            <div v-for="(item, i) in protfolioPage.sampleHome" 
            :key="i"
            class="flex flex-col w-[50%] card-mobile gap-3 shadow-xl">
                <!-- header  -->
                <div class="header-card flex">
                
                    <!-- <img :src="item.photo" />  -->

                   <img src="@/assets/img/login.jpg" alt="">
                </div>
                <!-- body -->
                <div class="flex flex-col gap-5 justify-between">
                    <div class="flex flex-col p-4 gap-3">
                        <h5 class="f28=400"> {{ item.title }}</h5>
                        <p class="text-[#919191]">{{ item.description }}</p>
                    </div>
                    <div class="flex w-full justify-between gap-3 p-4">
                        <nuxt-link to="/" class="f14-400 rounded-lg bg-[#2eca7f] p-2">نمایش پروژه</nuxt-link>
                        <nuxt-link to="/" class="f14-400 rounded-lg bg-[#2eca7f] p-2">نمایش بیشتر</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useSamplePOrtFolio } from '@/stores/SampleHome'

const protfolioPage = useSamplePOrtFolio()


</script>

<style lang="scss" scoped>

// responsive
@media screen and (max-width: 600px) {
    .sample-mobile{
        flex-wrap: wrap;
        gap: 15px;
    }
    .card-mobile{
        width: 100% !important;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .sample-mobile{
        flex-wrap: wrap;
    }
    .card-mobile{
        width: 100% !important;
    }
}
@media screen and (min-width: 820px) and (max-width: 1180px) {
    .sample-mobile{
        flex-wrap: wrap;
    }
    .card-mobile{
        width: 100% !important;
    }
}
</style>