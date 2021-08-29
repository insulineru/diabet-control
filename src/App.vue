<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Контроль диабета',
  meta: [
    { name: 'description', content: 'Самый легкий способ вести контроль за сахаром' },
  ],
})
</script>

<template>
  <router-view />
</template>
