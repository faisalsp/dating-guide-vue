<script setup lang="ts">
import { defineComponent } from 'vue';
import InputField from '@/components/InputField.vue';

defineComponent({ name: 'HomeListingPreview' })

const sites = ['adultmatchmaker.com.au', "gaymatchmaker.com.au", "lesbianmatchmaker.com.au"]

</script>
<template>
  <div class="max-w-xl mx-auto">
    <h1 class="h2 font-bold mb-3">Home Page Listings Preview</h1>
    <div class="d-flex gap-2 flex-wrap mb-3 align-items-end">
      <InputField title="Your Current home page listings on" className="mb-0" :data="sites" type="select" forceselect />
      
      <RouterLink to="/admin/homepage-listing/add" class="btn btn-primary">
        <i class="gigacon gigacon-plus-sign me-2"></i>Add
      </RouterLink>
    </div>
    <div v-for="i in 5" :key="i" class="mb-3">
      <a href="#" class="text-decoration-none text-secondary">
        <h3 class="h5 font-bold mb-0">Heaven Social Dance NSW</h3>
        <small class="mb-3 text-black">Saturday, 28 September 2024 @ 6:30pm</small>
      </a>
    </div>
  </div>

</template>