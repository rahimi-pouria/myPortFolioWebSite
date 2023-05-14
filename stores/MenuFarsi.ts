import { defineStore } from 'pinia'

export interface farsiMenu {
    name: string,
    link: string
}

export const useMenuFarsi = defineStore('menuFarsi', () =>  {
    const menuFarsi = ref<farsiMenu[]>( [
        {
            name: 'صفحه اصلی',
            link: '/fa'
        },
        {
            name: 'درباره من',
            link: '/fa/َAboutMe'
        },
        {
            name: ' مهارتهای من',
            link: '/fa/MySkils'
        },
        {
            name: ' پروژه های من',
            link: '/fa/MyProject'
        }, 
        {
            name : 'سابقه کار',
            link: '/fa/Work'
        },
        {
            name : 'تماس با من',
            link: '/fa/Contact'
        },
        {
            name : 'بلاگ',
            link: '/fa/Blog'
        }
    ] as farsiMenu[])


    // return function and objects and variable
    return {
        menuFarsi
    }
})  