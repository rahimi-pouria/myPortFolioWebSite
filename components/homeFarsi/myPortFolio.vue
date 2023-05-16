<template>
    <div class="flex flex-col gap-8">
        <h2 class="f48-400 Portfolio">
            نمونه کارهای من
        </h2>
        <div class="flex justify-between">
            <p class="f18-400 w-[70%] paragraph-about-farsi">
                گالری کوچکی از پروژه های اخیر انتخاب شده توسط من.
                 این پروژه ها هم به صورت تیمی و هم به صورت انفرادی انجام شده است
                 با افراد شگفت انگیز و حرفه ای
            </p>
        </div>
        <!-- gallery projects -->
        <div class="w-full gap-3 pr-5 pb-5 grid grid-cols-3 gap-5 card-project">
            <div v-for="(item, index) in gallery.galleryProject" 
                @mouseover="showHover = !showHover" 
                :key="index"
                class="flex flex-col show-gallery relative"
                >
                <div class="flex blur-photo absolute"></div>
                <img src="~/assets/img/chat.jpg" alt="">
                <div
                :class="{'hover-image': showHover}"
                class="flex hover-image hover-image-project" 
                id="showimage"
                 >
                    <span class="f16-400 show-name-project">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useGallery } from '@/stores/Gallery'

const gallery = useGallery() 
let showHover = false
</script>

<style lang="scss" scoped>
    .Portfolio[data-v-b6b04235] {
        color: #08fdd8;
        font-weight: 400;
        line-height: 6.7rem;
        text-align: right;
        padding-right: 21px;
    }
    .link-portfolio{
        color: #08fdd8;
        font-size: 14px;
        letter-spacing: 4px;
        line-height: 50px;
        text-align: center;
        padding: 3px 20px;
        border: 1px solid #08fdd8;
        background-size: 0 3px;
        background-position: 0 100%;
        background-repeat: no-repeat;
        border-radius: 4px;
        background-image: linear-gradient(transparent, transparent), linear-gradient(transparent, transparent);
        transition: background-size .5s ease-in-out;
    }
    .anim-link-portfolio{
    background-image: linear-gradient(transparent, transparent),
       linear-gradient(#08fdd8, #08fdd8);
  }
  .link-portfolio:hover{
    color: #000;
    background-position: 0 100%;
    background-size: 100% 80px;
  }
  .paragraph-about-farsi {
    line-height: 2;
    color: #515152;
    text-align: right;
    width: 100%;
    padding-right: 21px;
}
  .show-gallery{
    z-index: 0;
  }
  .blur-photo {
    z-index: 9;
    background: black;
    top: 0;
    height: 173px;
    width: 100%;
    opacity: 0.5;
}
.hover-image{
    display: none !important;
}
.hover-image-project {
    position: absolute;
    height: 180px;
    background: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    top: 0;
}
span.show-name-project {
    background: #00ffdc;
    color: #000;
    word-wrap: break-word;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
}
</style>