import { defineStore } from "pinia";

// interface array

export interface MainMenu { 
    name: string,
    path: string,
}

export const useMainMenu = defineStore('menu', () => { 
    const MainMenu = ref<MainMenu[]>([
        {
            name: 'خانه',
            path: '/'
        },
        {
            name: 'نمونه کارها',
            path: '/Portfolio'
        },
        {
            name: 'بلاگ',
            path: '/Blog'
        },
        {
            name: 'تماس',
            path: '/Contact-me'
        },
    ] as MainMenu[])

    // return
    return {
        MainMenu
    }
})