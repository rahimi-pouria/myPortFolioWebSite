<template>
    <div class="flex xl:flex-col lg:flex-col md:flex-col 
    bg-white w-[40%] rounded-full py-3 items-center px-3 options-menu sm:order-6">
        <div class="flex flex-col gap-9  w-full link-advance justify-center">
            <img src="@/assets/img/profile-pic.png" class="rounded-full photo-advance w-[65px]" alt="">
            <nuxt-link to="/" class="flex justify-center">
                <img src="@/assets/img/resume.png" class="photo-advance  w-[40px] h-[40px]" alt="">
            </nuxt-link>
            <nuxt-link to="/" class="flex justify-center">
                <img src="@/assets/img/nemoneh.png" class="photo-advancew-[40px] h-[40px]" alt="">
            </nuxt-link>
            <nuxt-link to="/" class="flex justify-center">
                <img src="@/assets/img/blog.png" class="photo-advance w-[40px] h-[40px]" alt="">
            </nuxt-link>
            <nuxt-link to="/" class="flex justify-center">
                <img src="@/assets/img/contact.png" class="photo-advance w-[40px] h-[40px]" alt="">
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
// responsive
@media screen and (max-width: 600px) {
    .options-menu{
        width: 100% !important;
        order: 6;
    }
    .photo-advance{
        width: 50px !important;
    }
    .link-advance {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) { 
    .options-menu{
        width: 60% !important;
    }
}
@media screen and (min-width: 820px) and (max-width: 1180px) { 
    .options-menu{
        width: 60% !important;
    }
}
</style>