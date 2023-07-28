<template>
    <div class="flex flex-col p-4 gap-1 pb-4 bg-white w-full">
        <h4 class="f28-400">مقاله ها</h4>
        <p class="f18-400 text-[#919191] text-blog">
            با سلام خدمت همه عزیزانی از سایت اینجانب دیدن میفرمایند. با عرض معذرت بابت روبرو شدن با این برگه از سایت ما در حال ساخت برگه وبلاگ هستیم در آینده ای نزدیک با مقاله های به روز در خدمت شما عزیزان هستیم
        </p>
        <img src="@/assets/img/create.jpg" alt="">
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'home-layout'
})
</script>

<style lang="scss" scoped>
.text-blog{
    line-height: 2.5;
}
// responsive
@media screen and (max-width: 600px) {
    .blog-mobile{
        width: 100%;
    }
}

</style>