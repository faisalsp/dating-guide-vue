<script setup lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

const EventForm = defineAsyncComponent(() => import('@/components/EventForm.vue'));

defineComponent({ name: 'CreateEditEvent' });
</script>

<template>
  <EventForm />
</template>
