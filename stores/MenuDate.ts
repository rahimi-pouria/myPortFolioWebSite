import { defineStore } from 'pinia'

export interface pageMenu {
    name: string, 
    link: string
}

export const useMenuData = defineStore('menu', () => {
    const menu = ref<pageMenu[]>([
        {
            name : 'Home',
            link: '/'
        },
        {
            name : 'About',
            link: '/'
        },
        {
            name : 'Services',
            link: '/'
        },
        {
            name : 'Portfolio',
            link: '/'
        },
        {
            name : 'Contact',
            link: '/'
        }
    ] as pageMenu[])




    // return function and object
    return {
        menu
    }
})
