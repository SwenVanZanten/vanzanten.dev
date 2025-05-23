<script setup lang="ts">
import { ref, useTemplateRef, onMounted, defineProps } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const { navigation } = defineProps({
  navigation: Array
})

const mobileMenuOpen = ref(false)
const header = useTemplateRef('header')

onMounted(() => {
  document.onscroll = () => {
    if (window.scrollY > 100) {
      header.value.classList.add('bg-white', 'border-b', 'border-gray-200')
    } else {
      header.value.classList.remove('bg-white','border-b','border-gray-200')
    }
  }
})
</script>

<template>
  <header ref="header" class="absolute sticky inset-x-0 top-0 z-50 transition-all">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">vanzanten.dev</span>
          <img class="h-8 w-auto" src="~/assets/images/logo.svg" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm/6 font-semibold text-gray-900">
          {{ item.name }}
        </a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">vanzanten.dev</span>
            <img class="h-8 w-auto" src="~/assets/images/logo.svg" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>

</style>
