<template>
    <div class="flex w-[100%] h-[100vh] text-white">
        <div class="w-[10%] bg-[#181818] text-white fixed sidBar">
            <LayoutComponentMenuLayout />
        </div>
        <div class="w-[100%]  md:pl-[7rem] show-data-pages">
            <slot />
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.sidBar{
  position: fixed;
  lefT: 0;
  top: 0;
  right: auto;
  bottom: 0;
}
</style>