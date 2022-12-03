<script setup lang="ts">
const { locale } = useI18n()
locale.value = 'th'
</script>
<template>
  <router-view />
</template>