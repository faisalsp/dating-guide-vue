<script setup lang="ts">
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="container-fluid">
    <header>
      <HelloWorld msg="Hello World!" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
