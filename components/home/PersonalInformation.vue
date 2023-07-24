<template>
    <div class="flex flex-wrap w-full">
        <div class="flex flex-col p-4 text-right gap-8 md:w-[70%]">
            <h4 class="f28-700 personal"> 
                اطلاعات شخصی
            </h4>
            <div class="flex gap-4  flex-col w-full">
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        سن:
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        32
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        محل سکونت:
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        تهران
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        آدرس:
                    </p>
                    <p class="f18-400 text-[#919191] break-words w-[75%]">
                       تهران خیابان شریعتی خیابان معلم خیابان گوهری کوچه خرمی شاد کوچه تکیه پلاک 12
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        ایمیل:
                    </p>
                    <p class="f18-400 text-[#919191] break-words w-[75%]">
                        pouria.rahimy@gmail.com
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        شماره تماس:
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        09184095907 - 09220529612
                    </p>
                </div>
                <div class="flex justify-between w-full">
                    <p class="f18-400 text-[#333333] w-[25%]">
                        نحوه همکاری:
                    </p>
                    <p class="f18-400 text-[#919191] w-[75%]">
                        تمام وقت - پاره وقت - دورکاری
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col p-4 gap-5 md:w-[30%] faviorate">
            <h4 class="f28-700"> 
                علایق
            </h4>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/shatrang.png" alt="">
                <p class="f18-400 text-[#919191]">بازی شطرنج</p>
            </div>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/music.png" alt="">
                <p class="f18-400 text-[#919191]">موسیقی</p>
            </div>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/footbal.png" alt="">
                <p class="f18-400 text-[#919191]">فوتبال</p>
            </div>
            <div class="flex gap-3 items-center">
                <img src="@/assets/img/food.png" alt="">
                <p class="f18-400 text-[#919191]">همبرگر</p>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>


// responsive

@media screen and (max-width: 600px) {
    .personal{
        width: 100% !important;
    }
    .faviorate{
        width: 100%;
    }
}
</style>