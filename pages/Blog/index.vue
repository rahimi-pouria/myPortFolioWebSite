<template>
    <div class="sample p-4 flex flex-col gap-8">
        <h4 class="f28-700">
            مقاله ها
        </h4>
        <div class="flex w-full flex-wrap gap-4">
            <div v-for="(item, i) in blog.blogMenu" 
            :key="i"
            class="flex flex-col w-[48%] gap-3 shadow-xl">
                <!-- header  -->
                <div class="header-card flex">
                   <img src="@/assets/img/nuxt.jpg" alt="">
                </div>
                <!-- body -->
                <div class="flex flex-col gap-5 justify-between">
                    <div class="flex flex-col p-4 gap-3">
                        <h5 class="f28=400"> {{ item.title }}</h5>
                        <p class="text-[#919191]">{{ item.description }}</p>
                    </div>
                    <div class="flex w-full justify-between gap-3 p-4">
                        <p class="f14-400 rounded-lg bg-[#2eca7f] p-2">{{ item.writer }}</p>
                        <p class="f14-400 rounded-lg bg-[#2eca7f] p-2">{{ item.date }}</p>
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
import { useBlogMenu } from '@/stores/Blogs'

const blog = useBlogMenu()
</script>

<style lang="scss" scoped>

</style>