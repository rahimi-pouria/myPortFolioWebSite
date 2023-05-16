import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "home-layout" | "layout-farsi"
declare module "/home/pouria-rahimi/PortfolioWeb/myPortFolioWebSite/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}