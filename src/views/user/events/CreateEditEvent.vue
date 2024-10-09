<script setup lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

const SubmitForm = defineAsyncComponent(() => import('@/components/SubmitForm.vue'))

defineComponent({ name: 'CreateEditEvent' });
</script>

<template>
    <SubmitForm />
</template>