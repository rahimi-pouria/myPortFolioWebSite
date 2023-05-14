<template>
    <div class="flex h-[100vh] text-white">
        <div class="w-[10%] bg-[#181818] text-white fixed sidBarFarsi">
            <LayoutFarsiMenuFarsi />
        </div>
        <div class="w-[90%]  md:pl-[9rem] show-data-pages">
            <slot />
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.sidBarFarsi{
  position: fixed;
  lefT: auto;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>