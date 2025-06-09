<script setup lang="ts">

import {useGlobalStore} from "@/stores/global";
import {useDark, useToggle} from "@vueuse/core";
import {ref} from "vue";
import {Download, Moon, Sunny} from "@element-plus/icons-vue";

const globalStore = useGlobalStore()

function toggleTheme() {
  useToggle(useDark())
}

async function handleExport() {

}

const title = ref(globalStore.pageTitle)
</script>

<template>
  <header class = "app-header">
    <div class = "header-content">
      <div class = "flex items-center pl-5">
        <h1 class="header-title">{{title}}</h1>
      </div>

      <div class = "flex justify-end items-center pr-4">
        <el-switch
            v-model="globalStore.isDark"
            class = "mr-4"
            size="large"
            :active-icon="Moon"
            :inactive-icon="Sunny"
            :inline-prompt="true"
            @change="toggleTheme"
        />
        <el-button
            type="primary"
            class="dark:bg-[var(--el-bg-color)] rounded-lg outline-none"
            @click="handleExport"
        >
          <ElIcon
              class="mr-1"
              :size="14"
              color="#fff"
          >
            <Download />
          </ElIcon>
          导出
        </el-button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  @apply h-58px px-2 pt-2 bg-#fafafa dark:bg-[var(--el-bg-color)];
}

.header-content {
  @apply w-full h-full flex-center flex-between flex-nowrap el-theme rounded-lg bg-[var(--el-color-primary)] color-white;
}

.header-title {
  @apply margin-left 10 text-xl font-bold color-white dark:color-black;
}
</style>