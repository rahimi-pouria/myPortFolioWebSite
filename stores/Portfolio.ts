import { defineStore } from "pinia";


export interface Portfolio { 
    title: string,
    description: string,
    pathCode: string,
    pathView: string,
    photo: string
}

export const usePortfolio = defineStore('experience', () => {
    const experince = ref<Portfolio[]>([
        {
            title: 'سایت شخصی پوریا رحیمی',
            description: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه برای معرفی هر چه بهتر اینجانب به کارفرمایان عزیز  پیاده سازی شده است.',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: 'https://pouria-rahimi.ir',
            photo: 'login.jpg'
        },
        {
            title: 'پنل ادمین اجاره صندلی آرایشگاه',
            description: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است و بر اساس میدلور دسترسی ها مشخص شده است',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: '/',
            photo: 'login.jpg'
        },
        {
            title: 'چت آنلاین',
            description: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: 'chat.jpg'
        },
        {
            title: 'پنل ادمین همانند وردپرس',
            description: 'این پروژه بر اساس ویو جی اس و ناکست سه و تایپ اسکریپت و پینیا پیاده سازی شده اکه بنا بر خواسته شرکت رها طب و طرح فیگما انجام شده است ',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: '/',
            photo: 'login.jpg'
        },
        {
            title: 'بازی  پازل',
            description: 'این پروژه با ری اکت جی اس پیاده سازی شده است. این زمانی پیاده سازی شد که بنده برای استخدامی شرکت بامداد اقدام کرده بودم و این  پروژه تسکی بود برای ورود به شرکت بامداد',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: 'chat.jpg'
        },
        {
            title: 'بازی  اسکویید گیم',
            description: 'این پروژه با ری اکت جی اس پیاده سازی شده است این پروژه رو در شرکت آیشن زمانی که آخرین مرحله استخدامی بودم پیاده سازی شد و بر این اسا مورد تایید منتور قرار گرفت  ',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: 'chat.jpg'
        }
    ] as Portfolio[])

    return {
        experince
    }
 })