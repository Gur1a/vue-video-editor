<script setup lang="ts">
import AsideIcons from './icons'
import { computed} from "vue";
import {capitalize} from "@/untils";

const props = defineProps<{
  type: string,
  name?: string,
  showText?: boolean
}>()

const computedIcon = computed(() => {
  return AsideIcons[`Icon${capitalize(props.type)}` as keyof typeof AsideIcons]
})

</script>

<template>
  <div class = "flex flex-col items-center cursor-pointer">
    <component
      :is="computedIcon"
      class ="w-6 h-6"
    />
    <span v-if="showText">{{props.name}}</span>
  </div>
</template>

<style scoped>

</style>