<template>
    <nav class="flex-shrink-0 bg-secondary text-secondary">
        <div class="mx-auto max-w-4x1 px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Left side -->
                <div class="flex">
                    <div class="pr-4">
                        <img class="hidden h-8 w-auto md:block"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            :alt="$t('common.logo')" />
                    </div>
                    <!-- text-gray-300 hover:bg-gray-700 hover:text-white -->
                    <div class="flex items-center space-x-4">
                        <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to" active-class="bg-tertiary "
                            class="hover:bg-tertiary px-3 py-2 rounded-md text-sm font-medium">
                            {{ $t(item.name) }}</NuxtLink>
                    </div>
                </div>

                <!-- Right side -->
                <div class="flex">
                    <div class="pr-3">
                        <!-- border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 -->
                        <select v-model="$i18n.locale" class="block py-2 pl-1 pr-1 w-15 rounded-md bg-tertiary" >
                            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                                {{ locale }}</option>
                        </select>
                    </div>
                    <!-- dark:bg-gray-50 text-gray-400 -->
                    <button type="button"
                        class="  hover:bg-tertiary rounded-md p-1"
                        @click="mode = mode === 'dark' ? 'light' : 'dark'">
                        <Icon name="mdi:theme-light-dark" class="h-6 w-6" aria-hidden="true" />
                        {{ mode === 'dark' ? $t('common.light') : $t('common.dark') }}
                        <!-- <i-mdi-theme-light-dark class="h-6 w-6" aria-hidden="true" /> -->
                    </button>

                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const navigation = [
    { name: 'page.index', to: '/' },
    { name: 'page.chat', to: '/chat' },
    { name: 'page.about', to: '/about' },
];


const mode = useColorMode();
</script>