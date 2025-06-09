import {ref, toRaw} from 'vue'
import {defineStore} from "pinia";
import {useDark} from "@vueuse/core"

export const useGlobalStore = defineStore('global', () => {
    const pageTitle = ref('VideoEditor')
    const isDark = useDark()

    isDark.value = localStorage.isDark === undefined ? true : JSON.parse(localStorage.isDark)

    return {
        pageTitle,
        isDark,
    }
})