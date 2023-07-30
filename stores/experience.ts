import { defineStore } from "pinia";

// interface

export interface experience { 
    title: string,
    description: string,
    location: string,
    position: string
}

export const useExperience = defineStore('experience', () => {
    const exper = ref<experience[]>([
        {
            title: 'شرکت دیجیتال مارکتینگ بامداد',
            description: 'در تاریخ دی ماه 1400 در شرکت بامداد استخدام شدم و پروژه لرنیا با vue js , nuxt js انجام دادم',
            location: 'تهران',
            position: 'برنامه نویس فرانت (Vue js)'
        },
        {
            title: 'شرکت تریدر 4',
            description: 'در 28 دی ماه 1401 در شرکت تریدر فور به صورت ریموت استخدام شدم و قالب مترونیک  رو سفارشی سازی میکردیم',
            location: 'انگلستان',
            position: 'برنامه نویس فرانت (Vue js)'
        }
    ] as experience[])

    return {
        exper
    }
 })