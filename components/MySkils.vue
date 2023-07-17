<template>
    <div class="w-full my-skills flex flex-col gap-4">
        <div class="flex flex-col gap-3 w-full items-center justify-center">
            <h3 class="f48-700 heading-skil">
                My Skills
            </h3>
            <p class="f32-400 paragraph-skil">
                Technologies I’ve been working with recently
            </p>
        </div>
        <!-- show logo skils -->
        <div class="w-full logo-skills flex flex-wrap justify-between py-4 gap-[4rem]">
            <img src="../assets/img/html5.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/css.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/javascript.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/react.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/vue.png" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/bootstrapVue.png" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/bootstrap.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/tailwind.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/sass.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/git.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/Pinialogo.svg.png" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/nuxtlogo.png" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/typescript.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/akar-icons_github-fill.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/vscode-icons_file-type-vscode.svg" class="w-[100px] h-[100px]" alt="">
            <img src="../assets/img/vuetify-logo.png" class="w-[100px] h-[100px]" alt="">
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .my-skills{
        padding: 60px 0;
    }
    .heading-skil{
        color: #42446E;
    }
    .paragraph-skil{
        color: #b1b1b1;
    }
    @media screen and (max-width: 600px){
    .logo-skills{
       justify-content: center !important;
    }
  }

</style>