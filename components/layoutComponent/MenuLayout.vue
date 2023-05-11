<template>
    <div class="flex text-white justify-center items-center">
        <!-- logo -->
        <div class="flex"></div>
        <div class="flex flex-col gap-3">
            <div v-for="(item, i) in menus.menu" 
                 class="flex justify-center items-center">
                  <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>  
            </div>  
        </div>
    </div>
</template>

<script setup lang="ts">
    // import stores
    import { useMenuData } from '@/stores/MenuDate'

    const menus = useMenuData()
</script>

<style lang="scss" scoped>

</style>