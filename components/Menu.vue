<template>
    <nav class="w-full">
  <div class="mx-auto">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" @click="showMainMenu()" 
        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
        aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-between">
        <div class="flex flex-shrink-0 items-center logo">
          <img class="h-8 w-auto" src="../assets/img/logo.png" alt="Your Company">
        </div>
        <div class="hidden w-full flex md:justify-center sm:ml-6 sm:block">
          <div class="flex space-x-5 justify-center">
            <nuxt-link v-for="(item, i) in navigation.MainMenu" :key="i" 
            :to="item.path" class="f18-400">
                {{ item.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 gap-3 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <nuxt-link to="https://github.com/rahimi-pouria">
            <img src="../assets/img/github.svg" alt="">
        </nuxt-link>
        <nuxt-link to="#">
            <img src="../assets/img/twitter.svg" alt="">
        </nuxt-link>
        <nuxt-link to="https://www.linkedin.com/in/pouria-rahimy-a7755b212/">
            <img src="../assets/img/linkdin.svg" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div :class="{showMenu:  showMain }" id="mobile-menu" v-if="showMain">
    <div class="space-y-1 px-2 pb-3 pt-2 flex flex-col">
        <nuxt-link v-for="(item, i) in navigation.MainMenu" :key="i" :to="item.path">
            {{ item.name }}
        </nuxt-link>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { useMainMenu } from '@/stores/menu'

const navigation = useMainMenu()

let showMain = ref<any>(true)
const showMainMenu = () => { 
  showMain = !showMain
  console.log(showMain)
}
</script>

<style lang="scss" scoped>

  .showMenu{
    display: none;
  }

  // responsive
  @media screen and (max-width: 600px){
    .logo{
      display: none !important;
    }
  }
</style>e