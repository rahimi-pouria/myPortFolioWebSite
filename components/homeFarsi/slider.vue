<template>
    <div class="flex flex-col items-center pr-8 pt-7 h-[100vh]">
        <div class="flex flex-col w-full gap-8">
            <h1 class="f82-700 gap-3">
                سلام <br />
                پوریا رحیمی هستم <br />
                برنامه نویس فرانت اند 
            </h1>
            <span class="f18-400 sub-text">فرانت اند دولوپر  /  Vue js & Nuxt js</span>
            <nuxt-link to="/" class="link-contact-me anim-link-contact-me w-[20%]">تماس با من</nuxt-link>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    
  .sub-text{
    color: #8d8d8d;
  }

  .link-contact-me{
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
  .anim-link-contact-me{
    background-image: linear-gradient(transparent, transparent),
       linear-gradient(#08fdd8, #08fdd8);
  }
  .link-contact-me:hover{
    color: #000;
       background-position: 0 100%;
       background-size: 100% 80px;
  }
</style>