import { defineStore } from "pinia";

// interface array

export interface MainMenu { 
    name: string,
    path: string,
    current: boolean
}

export const useMainMenu = defineStore('menu', () => { 
    const MainMenu = ref<MainMenu[]>([
        {
            name: 'Home',
            path: '#',
            current: true 
        },
        {
            name: 'Tech Stack',
            path: '#',
            current: false
        },
        {
            name: 'Projects',
            path: '#',
            current: false
        },
        {
            name: 'Contact',
            path: '#',
            current: false
        },
    ] as MainMenu[])

    // return
    return {
        MainMenu
    }
})