<template>
    <div class="flex w-full slider py-8 sm:flex-wrap">
        <div class="flex md:w-[60%] sm:w-[100%] md-pl-4 items-center">
            <h2 class="f48-700 heading">
                Hi 👋, 
                <br />
                My Name is
                <br />
                <strong class="name"> Pouria</strong>
                <strong class="fname">Rahimi</strong>
                <br />
                I am Fron End Developer (vue JS & Nuxt Js)
            </h2>
        </div>
        <div class="flex md:w-[40%] sm:w-[100%] items-center justify-end">
            <div class="flex w-[349px] h-[349px] ">
                <img src="../assets/img/avatar.png" class="max-w-sm" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    .slider{
        padding: 60px 0;
    }
    .heading{
        color: #42446E
    }
  @media screen and (max-width: 600px){
    .slider{
      flex-wrap: wrap;
      padding: 0 10px;
      gap: 47px;
    }
  }
</style>