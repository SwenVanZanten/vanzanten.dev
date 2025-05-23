<script setup lang="ts">
import {ref} from 'vue'
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'

const firstName = ref('')
const lastName = ref('')
const company = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const agreed = ref(false)

async function sendContactForm() {
  if (!agreed.value) return

  const {data, error} = await $fetch('/api/contact', {
    method: 'POST',
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      company: company.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    },
  })

  if (null !== error) {
    console.error(error)
    alert('Something went wrong, please try again')
    return
  }

  firstName.value = ''
  lastName.value = ''
  company.value = ''
  email.value = ''
  phone.value = ''
  message.value = ''
  agreed.value = false

  alert('Nice it\'s sent!')
}
</script>

<template>
  <div id="contact" class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact me</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
    </div>
    <form @submit.prevent="sendContactForm" action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
          <div class="mt-2.5">
            <input v-model="firstName"
                   type="text"
                   name="first-name"
                   id="first-name"
                   autocomplete="given-name"
                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"/>
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input v-model="lastName"
                   type="text" name="last-name" id="last-name" autocomplete="family-name"
                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
          <div class="mt-2.5">
            <input v-model="company"
                   type="text" name="company" id="company" autocomplete="organization"
                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
          <div class="mt-2.5">
            <input v-model="email"
                   type="email" name="email" id="email" autocomplete="email"
                   class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
          <div class="mt-2.5">
            <div
                class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-rose-600">
              <input v-model="phone"
                     type="text" name="phone-number" id="phone-number"
                     class="block min-w-0 grow py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                     placeholder="123-456-7890"/>
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea v-model="message"
                      name="message" id="message" rows="4"
                      class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"/>
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="agreed"
                    :class="[agreed ? 'bg-rose-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true"
                    :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']"/>
            </Switch>
          </div>
          <SwitchLabel class="text-sm/6 text-gray-600">
            By selecting this, you agree to our
            {{ ' ' }}
            <a href="#" class="font-semibold text-rose-600">privacy&nbsp;policy</a>.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button type="submit"
                class="block w-full rounded-md bg-gradient-to-r from-rose-400 to-purple-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-rose-500 hover:to-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-900">
          Let's talk
        </button>
      </div>
    </form>
  </div>
</template>
