<template>
    <div class="sample p-3 flex flex-col gap-8">
        <h4 class="f28-700">
            نمونه کارها
        </h4>
        <div class="flex w-full gap-3">
            <div v-for="(item, i) in samples.sampleHome" 
            :key="i"
            class="flex flex-col w-[50%] gap-3 shadow-xl">
                <!-- header  -->
                <div class="header-card flex">
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

import { useSampleHome } from '@/stores/SampleHome'

const samples = useSampleHome()


</script>

<style lang="scss" scoped>

</style>