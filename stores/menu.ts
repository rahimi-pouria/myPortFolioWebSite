import { defineStore } from "pinia";

// interface array

export interface MainMenu { 
    name: string,
    path: string,
}

export const useMainMenu = defineStore('menu', () => { 
    const MainMenu = ref<MainMenu[]>([
        {
            name: 'تماس',
            path: '/'
        },
        {
            name: 'بلاگ',
            path: '/'
        },
        {
            name: 'نمونه کارها',
            path: '/'
        },
        {
            name: 'خانه',
            path: '/'
        },
    ] as MainMenu[])

    // return
    return {
        MainMenu
    }
})