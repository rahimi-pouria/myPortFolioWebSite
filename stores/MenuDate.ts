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
            link: '/About'
        },
        {
            name : 'MySkils',
            link: '/MySkils'
        },
        {
            name : 'Work',
            link: '/Work'
        },
        {
            name : 'Contact',
            link: '/Contact'
        },
        {
            name : 'Blog',
            link: '/Blog'
        }
    ] as pageMenu[])




    // return function and object
    return {
        menu
    }
})
