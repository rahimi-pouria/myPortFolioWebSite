<template>
    <div class="flex flex-col w-[100%] gap-3 text-lg h-[100vh]">
        <HomeSlider />
        <div class="bg-[#28292a] w-[100%]">
            <AboutMeMyAbout /> 
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'home-layout'
    })
</script>

<style lang="scss" scoped>

</style>