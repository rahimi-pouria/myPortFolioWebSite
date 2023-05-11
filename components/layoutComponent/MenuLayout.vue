<template>
    <div class="flex flex-col text-white justify-center items-center">
        <!-- logo -->
        <div class="flex p-10">
            logo
        </div>
        <div class="flex flex-col gap-3 w-[90%]">
            <div v-for="(item, i) in menus.menu" 
                 class="flex justify-center items-center p-2 w-full">
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