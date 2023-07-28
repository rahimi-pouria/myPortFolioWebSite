<template>
    <div class="sample p-4 flex flex-wrap gap-8">
        <h4 class="f28-700">
            نمونه کارها
        </h4>
        <div class="flex flex-wrap w-full gap-4 pr-2">
            <div v-for="(item, i) in sample.experince" 
            :key="i"
            class="flex flex-col portfolio-mobile w-[48%] gap-3 shadow-xl">
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
                        <nuxt-link to="/" class="f14-400 rounded-lg bg-[#2eca7f] p-2">نمایش سورس کد</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
            layout: 'home-layout'
    })
    import { usePortfolio } from '@/stores/Portfolio'
    const sample = usePortfolio()
</script>

<style lang="scss" scoped>
// responsive
@media screen and (max-width: 600px) {
    .portfolio-mobile{
        width: 100%;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .portfolio-mobile {
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