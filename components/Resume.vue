<script setup lang="ts">
import {CheckCircleIcon} from '@heroicons/vue/24/solid'

const activity = [
  {
    id: 1,
    client: {
      name: 'NettoWise',
      imageUrl: '/img/resume/nettowise.png',
    },
    description: 'I\'m currently working on a product of my own NettoWise. This product aims at easing the financial insights for ZZP\'ers, making sure they can keep track of their net income over their financial year.',
    references: [
      {
        name: 'NettoWise.nl',
        url: 'https://nettowise.nl/',
      },
    ],
    when: 'from 2025',
    current: true,
  },
  {
    id: 2,
    client: {
      name: 'DPG Media',
      imageUrl: '/img/resume/dpg-media.png',
    },
    description: 'At DPG Media I worked on the Jupiter Platform. Developed a robust backend infrastructure delivering CMS content for various DPG Media websites.',
    references: [
      {
        name: 'Ouders van Nu',
        url: 'https://oudersvannu.nl/',
      },
      {
        name: 'vtwonen',
        url: 'https://vtwonen.nl/',
      },
      {
        name: 'Story',
        url: 'https://story.nl/',
      },
      {
        name: 'De Ondernemer',
        url: 'https://deondernemer.nl/',
      },
      {
        name: 'Business Wise',
        url: 'https://businesswise.nl/',
      },
      {
        name: 'Kidsweek',
        url: 'https://kidsweek.nl/',
      }
    ],
    when: 'from 2023',
    current: true,
  },
  {
    id: 3,
    client: {
      name: 'Balentic',
      imageUrl: '/img/resume/balentic.png',
    },
    description: 'At Balentic I worked on implementing a news article feature in their Orca application and created a public news website.',
    references: [
      {
        name: 'Orca',
        url: 'https://orca.balentic.com/login',
      },
      {
        name: 'Balentic News',
        url: null,
      }
    ],
    when: '2024',
    current: false,
  },
  {
    id: 4,
    client: {
      name: 'Logius',
      imageUrl: '/img/resume/logius.png',
    },
    description: 'At Logius I worked on MijnOverheid.nl Upgraded the Symfony framework and added new features to streamline citizen communication for the Dutch government.',
    references: [
      {
        name: 'MijnOverheid.nl',
        url: 'https://mijnoverheid.nl/',
      }
    ],
    when: '2019 - 2023',
    current: false,
  },
  {
    id: 5,
    client: {
      name: 'Verge Currency',
      imageUrl: '/img/resume/verge-currency.png',
    },
    description: 'Contributed to open-source cryptocurrency projects, including wallet applications and blockchain integrations.',
    references: [
      {
        name: 'Verge Currency',
        url: 'https://vergecurrency.com/',
      },
      {
        name: 'Verge iOS Wallet',
        url: 'https://apps.apple.com/us/app/verge-currency-wallet/',
      }
    ],
    when: '2018 - 2020',
    current: false,
  }
]
</script>

<template>
  <div id="resume" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
        <div>
          <h2 class="text-base/7 font-semibold text-rose-900">
            Resume
          </h2>
          <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Proven Track Record
          </p>
          <p class="mt-8 text-xl/8 text-gray-600">
            I’ve collaborated with a wide range of clients, including government agencies, media organizations, and
            open-source projects. From upgrading critical platforms like MijnOverheid.nl to developing scalable
            microservices for DPG Media, my experience spans high-impact projects across industries. Each collaboration
            has honed my ability to adapt to diverse needs and deliver solutions that exceed expectations.
          </p>
        </div>
        <div>
          <ul role="list" class="space-y-6">
            <li v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id"
                class="relative flex gap-x-4">
              <div
                  :class="[activityItemIdx === activity.length - 1 ? 'h-12' : '-bottom-12', 'absolute left-0 top-0 flex w-12 justify-center']">
                <div class="w-px bg-gray-200"/>
              </div>
              <img :src="activityItem.client.imageUrl" alt=""
                   class="relative size-12 flex-none rounded-full bg-gray-50 ring-1 ring-gray-200"/>
              <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                <div class="flex justify-between gap-x-4">
                  <div class="py-0.5 text-sm font-medium text-gray-900">
                    {{ activityItem.client.name }}
                  </div>
                  <span class="flex-none py-0.5 text-sm text-rose-900">
                    {{ activityItem.when }}
                  </span>
                </div>
                <p class="mt-2 text-sm/6 text-gray-500">{{ activityItem.description }}</p>
                <ul class="mt-2 list-disc list-inside text-xs/5">
                  <li v-for="reference in activityItem.references" :key="reference.name">
                    <a v-if="reference.url" :href="reference.url" class="text-sm/6 text-gray-500 hover:text-gray-700">
                      {{ reference.name }}
                    </a>
                    <span v-else class="text-sm/6 text-gray-500">
                      {{ reference.name }}
                    </span>
                  </li>
                </ul>
              </div>
              <span v-if="activityItem.current" class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
            </li>
          </ul>
          <div class="pl-16 flex justify-center">
            <p class="mt-8 text-sm/5 text-gray-500">
              For a complete list of my projects, visit my <a
                href="https://www.linkedin.com/in/swen-van-zanten-893086ba/" class="text-rose-900 hover:text-rose-700">LinkedIn</a>
              or check out my <a href="https://github.com/swenvanzanten" class="text-rose-900 hover:text-rose-700">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
