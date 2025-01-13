<script setup lang="ts">
const stats = [
  { label: 'Years of experience', value: '20+ years' },
  { label: 'Languages experiences', value: '13+' },
  { label: 'Projects completed', value: '30+' },
]
</script>

<template>
  <main id="about">
    <div class="relative isolate">
      <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
             style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
      </div>
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Crafting Tailored Software Solutions
              </h1>
              <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                Hi, I’m Swen van Zanten, a passionate software developer with over 20 years of experience. Based in the Netherlands and working internationally, I specialize in creating scalable and efficient software solutions for businesses of all sizes. From backend systems to mobile applications, I deliver high-quality code and innovative features to meet your needs.
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#contact"
                   class="rounded-md bg-gradient-to-r from-rose-400 to-purple-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-rose-500 hover:to-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-900">
                  Contact
                </a>
                <a href="#skills" class="text-sm/6 font-semibold text-gray-900">
                  Skills <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative">
                  <img
                      src="~/assets/images/portrait-1.jpg"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
              </div>
              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative">
                  <img
                      src="~/assets/images/behind-the-computer-1.jpg"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div class="relative">
                  <img
                      src="~/assets/images/portrait-3.jpg"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img
                      src="~/assets/images/portrait-4.jpg"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div class="relative">
                  <img
                      src="~/assets/images/portrait-2.jpg"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                  <div
                      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          A Developer with a Vision
        </h2>
        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p class="text-xl/8 text-gray-600">
              I’ve been developing software since the early 2000s, constantly evolving with the latest technologies and frameworks. My expertise spans PHP (Symfony, Laravel), JavaScript (Vue, React), TypeScript, Swift, and Go. Having worked across various industries, including media, government platforms, and cryptocurrency, I thrive on tackling complex challenges and transforming ideas into robust digital solutions.
            </p>
            <p class="mt-10 text-xl/8 text-gray-600">
              I also focus on delivering maintainable and efficient code, prioritizing quality and long-term reliability. My work often involves collaborating with diverse teams and stakeholders to ensure every project exceeds expectations.
            </p>
          </div>
          <div class="lg:flex lg:flex-auto lg:justify-center">
            <dl class="w-64 space-y-8 xl:w-80">
              <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-y-4">
                <dt class="text-base/7 text-gray-600">{{ stat.label }}</dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>

</style>
