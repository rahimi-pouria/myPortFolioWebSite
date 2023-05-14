<template>
    <div class="lang-farsi text-white">
        <HomeFarsiSlider />
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'layout-farsi'
    })
</script>

<style lang="scss" scoped>
    .lang-farsi{
        direction: rtl !important;
    }
</style>