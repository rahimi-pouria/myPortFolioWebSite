<template>
    <div class="flex flex-col g16  p-8 w-full">
        <div class="flex w-full">
            <div class="md:w-[40%] flex flex-col g16">
                <h2 class="f36-700">About Me!</h2>
                <div class="flex flex-col g8">
                    <span class="f16-400">My Name Is Pouria Rahimi</span>
                    <span class="f18-400 sub-text">
                        I am a Front End programmer with two years of work experience, one year of which I worked with React Js and one year with VueJS.
                    </span>
                </div>
            </div>
            <SocialMedia />
        </div>   
    </div>
</template>

<script setup lang="ts">
import SocialMedia from './socialMedia.vue';

</script>

<style scoped>
</style>