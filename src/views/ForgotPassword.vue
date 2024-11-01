<script setup lang="ts">
import { defineComponent } from 'vue';
import InputField from '@/components/InputField.vue';
import { RouterLink } from 'vue-router';

defineComponent({ name: 'ForgotPassword' });
</script>
<template>
  <div class="bg-body-tertiary min-vh-100">
    <div class="container py-5">
      <div class="text-center mb-4">
        <img src="https://placehold.co/100x100" alt="" />
      </div>
      <form class="w-lg-50 m-auto bg-white p-3 p-lg-5 py-4 rounded shadow-sm">
        <h1 class="h3 mb-3">Retrieve Password</h1>
        <p class="mb-3">
          Please enter your email in the form below and your password will be sent to your email
          address.
        </p>
        <InputField type="email" placeholder="Enter your email" required />
        <button class="w-100 btn fw-medium btn-primary" type="submit">Retrieve Password</button>
        <p class="mt-3 text-muted">
          Don't have an account yet? <RouterLink to="/signup" class="fw-bold">Join now!</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>
