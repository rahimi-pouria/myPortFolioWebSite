import { defineStore } from "pinia";

export interface gallery { 
    name: string,
    photo: string
}

export const useGallery = defineStore('gallery', () => { 
    const galleryProject = ref<gallery[]>([
        {
            name: 'chat',
            photo: '~/assets/img/chat.jpg'
        },
        {
            name: 'lrniaWeb',
            photo: '~/assets/img/lrniaWeb.jpg'
        },
        {
            name: 'music player',
            photo: '~/assets/img/musicPlayer.png'
        },
        {
            name: 'puzzel',
            photo: '~/assets/img/pazelGame.jpg'
        },
        {
            name: 'squid Game',
            photo: '~/assets/img/squidGame.png'
        },
        {
            name: 'translate',
            photo:'~/assets/img/translate.jpg'
        }
    ] as gallery[])


    // return obects
    return {
        galleryProject
    }
})
