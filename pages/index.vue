<template>
    <div class="flex container p-8 text-justify w-full gap-4 flex-col container mx-auto">
        <HomeAboutMe />
        <hr class="w-full">
        <HomePersonalInformation />
        <hr class="w-full">
        <HomeSkills />
        <hr class="w-full">
        <HomeExperience />
        <hr class="w-full">
        <HomeSample />
        <hr class="w-full">
        <HomeBlog />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
        layout: 'home-layout'
    })
</script>

<style lang="scss" scoped>

</style>