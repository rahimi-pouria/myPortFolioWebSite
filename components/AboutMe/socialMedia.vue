<template>
<div class="md:w-[60%] flex">
                <div class="flex  w-[50%] rounded-xl justify-center items-center">
                    <Skills />
                </div>
                <div class="w-[50%] g8 flex flex-col items-center">
                    <!-- skype -->
                    <div class="flex g8 items-center w-[80%] social-media">
                        <img src="@/assets/img/skype.png" alt="">
                        <span class="f18-400">Skype Me</span>
                    </div>
                    <!-- Mail -->
                    <div class="flex g8 items-center w-[80%] social-media">
                        <img src="@/assets/img/email.png" alt="">
                        <span class="f18-400">Mail Me</span>
                    </div>
                    <!-- WhatsApp -->
                    <div class="flex g8 items-center w-[80%] social-media">
                        <img src="@/assets/img/wathsApp.png" alt="">
                        <span class="f18-400">WhatsApp Me</span>
                    </div>
                    <!-- Meet -->
                    <div class="flex g8 items-center w-[80%] social-media">
                        <img src="@/assets/img/meet.png" alt="">
                        <span class="f18-400">Meet Me</span>
                    </div>
                    <!-- Meet -->
                    <div class="flex g8 items-center w-[80%] social-media">
                        <img src="@/assets/img/resume.png" alt="">
                        <span class="f18-400">Resume Me</span>
                    </div>
                </div>
            </div>
</template>

<script setup lang="ts">
import Skills from './Skills.vue';

</script>

<style scoped>

.social-media{
        display: flex;
        border: 2px solid #444746;
        background-color: #1f1f1f;
        padding: 12px 15px;
        border-radius: 12px;
        align-items: center;
        position: relative;
        transition: all .35s ease;
    }
</style>