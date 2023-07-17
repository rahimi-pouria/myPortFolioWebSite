<template>
    <div class="w-full flex flex-col gap-4 about-me">
        <div class="flex w-full flex-col gap-4">
            <h5 class="f38-700 heading-about-me">
                About Me
            </h5>
            <p class="f18-400 paragraph-about-me">
                I love front programming and in the one and a half years that I have been working in this field, I am always looking for improvement and I worked in different programming teams as a team.
            </p>
        </div>
        <div class="flex w-full flex-col gap-4">
            <h5 class="f38-700 heading-about-me">
                Work Experience
            </h5>
            <div class="flex flex-col gap-5">
                <div class="flex flex-col my-work">
                    <h5 class="f22-400 heading-work">
                        Front End React JS Intern
                    </h5>
                    <div class="flex justify-between items-center w-full">
                        <div class="flex md:h-[20px] w-[30%]">
                            <img src="../assets/img/work.png" alt="">
                            <p class="12-400 paragraph-company">
                                Aishen Company
                            </p>
                        </div>
                        <!-- location -->
                        <div class="location flex gap-1 w-[30%] items-center justify-center">
                            <img src="../assets/img/location.png"
                             class="w-[20px] h-[20px]" alt="">
                            <p class="f14-400 location-paragraph">Tehran</p>
                        </div>
                        <div class="flex flex-col gap-3 w-[30%] justify-center items-end">
                            <div class="flex bg-[#D7FFE0] w-[50%] p-3 intership justify-center items-center">
                                <p class="f14-400 text-[#018C0F]">Internship</p>
                            </div>
                            <div class="flex items-center justify-center">
                                <img src="../assets//img/date.png" alt="">
                                <p class="f14-400 data-work">
                                    Aug 2021 - March 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col my-work">
                    <h5 class="f22-400 heading-work">
                        Front End ٰVue js
                    </h5>
                    <div class="flex justify-between items-center w-full">
                        <div class="flex md:h-[20px] w-[30%]">
                            <img src="../assets/img/work.png" alt="">
                            <p class="12-400 paragraph-company">
                                Bammad Company
                            </p>
                        </div>
                        <!-- location -->
                        <div class="location flex gap-1 w-[30%] items-center justify-center">
                            <img src="../assets/img/location.png"
                             class="w-[20px] h-[20px]" alt="">
                            <p class="f14-400 location-paragraph">Tehran</p>
                        </div>
                        <div class="flex flex-col gap-3 w-[30%] justify-center items-end">
                            <div class="flex bg-[#D7FFE0] w-[50%]  p-3 intership justify-center items-center">
                                <p class="f14-400 text-[#018C0F]">Full Time</p>
                            </div>
                            <div class="flex items-center justify-center">
                                <img src="../assets//img/date.png" alt="">
                                <p class="f14-400 data-work">
                                    Dec 2021 - Dec 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col my-work">
                    <h5 class="f22-400 heading-work">
                        Front End vueJS
                    </h5>
                    <div class="flex justify-between items-center w-full">
                        <div class="flex md:h-[20px] w-[30%]">
                            <img src="../assets/img/work.png" alt="">
                            <p class="12-400 paragraph-company">
                                trader4 Company
                            </p>
                        </div>
                        <!-- location -->
                        <div class="location flex gap-1 w-[30%] items-center justify-center">
                            <img src="../assets/img/location.png"
                             class="w-[20px] h-[20px]" alt="">
                            <p class="f14-400 location-paragraph">England</p>
                        </div>
                        <div class="flex flex-col gap-3 w-[30%] justify-center items-end">
                            <div class="flex bg-[#D7FFE0] w-[50%] p-3 intership justify-center items-center">
                                <p class="f14-400 text-[#018C0F]">Full Time Remote</p>
                            </div>
                            <div class="flex items-center justify-center">
                                <img src="../assets//img/date.png" alt="">
                                <p class="f14-400 data-work">
                                    Dec 2022 - April 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="flex w-full flex-col gap-4">
                <h5 class="f38-700 heading-about-me">
                    Education
                </h5>
                <div class="flex flex-col my-work">
                    <h5 class="f22-400 heading-work">
                        Bachelor in Electronics & Communication
                    </h5>
                    <div class="flex justify-between items-center w-full">
                        <div class="flex md:h-[20px] w-[30%]">
                            <img src="../assets/img/work.png" alt="">
                            <p class="12-400 paragraph-company">
                                Software Technology Engineering, Azad University, Sanandaj                            </p>
                        </div>
                        <div class="flex flex-col gap-3 w-[30%] justify-center items-end">
                            <div class="flex bg-[#D7FFE0] w-[50%] p-3 intership justify-center items-center">
                                <p class="f14-400 text-[#018C0F]">Full Time</p>
                            </div>
                            <div class="flex items-center justify-center">
                                <img src="../assets//img/date.png" alt="">
                                <p class="f14-400 data-work">
                                    Sep 2010 - June 2015
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    .my-work{
        border-bottom: 1px solid #b1b1b1;
        padding: 10px 0;
    }
    .about-me{
        padding: 60px 0;
    }
    .heading-about-me{
        color: #42446E;
    }
    .heading-work{
        color: #b1b1b1;
    }
    .paragraph-about-me{
        color: #b1b1b1;
    }
    .paragraph-company{
        color: #b1b1b1;
    }
    .location-paragraph{
        color: #b1b1b1;
    }
    .data-work{
        color: #b1b1b1;
    }
    .intership{
        border-radius: 20px;
        padding-top: 15px;
    }
</style>