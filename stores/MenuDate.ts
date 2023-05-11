import { defineStore } from 'pinia'

export interface pageMenu {
    name: string, 
    link: string
}

export const useMenuData = defineStore('menu', () => {
    const menu = ref<pageMenu[]>([
        {
            name : 'About',
            link: ''
        },
        {
            name : 'MySkils',
            link: ''
        },
        {
            name : 'Work',
            link: ''
        },
        {
            name : 'Contact',
            link: ''
        },
        {
            name : 'Blog',
            link: ''
        }
    ] as pageMenu[])




    // return function and object
    return {
        menu
    }
})
