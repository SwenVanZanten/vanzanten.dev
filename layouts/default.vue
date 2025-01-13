<script setup lang="ts">
const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <div class="bg-white">
    <Header :navigation="navigation"/>
    <slot></slot>
    <Footer :navigation="navigation"/>
  </div>
</template>

<style scoped>

</style>
