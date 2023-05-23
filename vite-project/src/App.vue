<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import AsyncHelloWorld from '@/components/AsyncHelloWorld.vue';

const message = 'Vue, Vitest and Vue Test Utils'
</script>

<template>
  <HelloWorld :msg="message" />
  <!-- <AsyncHelloWorld /> -->
</template>

<style scoped></style>
