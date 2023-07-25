import { defineStore } from "pinia";

// interface
export interface sampleHome { 
    title: string,
    description: string,
    pathCode: string,
    pathView: string,
    photo: string
}

export const useSampleHome = defineStore('samples', () => { 
    const sampleHome = ref<sampleHome[]>([
        {
            title: 'پنل ادمین اجاره صندلی آرایشگاه',
            description: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است این پروژه به صورت ریموت بوده و برای شخص انجام شده است',
            pathCode: 'https://github.com/rahimi-pouria/Front-End',
            pathView: '/',
            photo: '~/assets/img/login.jpg'
        },

        {
            title: 'چت آنلاین',
            description: 'این پروژه با ناکست جی اس 3 و پینیا و تایپ اسکریپت پیاده سازی شده است که در سایت لرنیا استفاده شده است در شرکت بامداد انجام شده است',
            pathCode: '/',
            pathView: 'lrnia.com',
            photo: '~/assets/img/chat.jpg'
        }
        
    ] as sampleHome[])


    return {
        sampleHome
    }
})