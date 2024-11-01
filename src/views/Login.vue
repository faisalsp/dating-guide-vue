<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({ name: 'LoginView' });
</script>
<template>
  <div class="bg-body-tertiary min-vh-100">
    <div class="container py-5">
      <div class="text-center mb-4">
        <img src="https://placehold.co/100x100" alt="" />
      </div>
      <form class="w-lg-50 m-auto bg-white p-3 p-lg-5 py-4 rounded shadow-sm">
        <h1 class="h3 mb-3">Sign in to your account</h1>
        <InputField id="username" title="Username" type="text" required />
        <InputField id="password" title="Password" type="password" required />

        <div class="d-flex gap-3 flex-wrap justify-content-between mb-3">
          <InputField id="remember" title="Remember me" type="checkbox" nowrapper />
          <RouterLink to="/forgot-password" class="small text-decoration-none"
            >Forgot password?</RouterLink
          >
        </div>
        <button class="w-100 btn fw-medium btn-primary" type="submit">
          Sign in to your account
        </button>
        <p class="mt-3 text-muted">
          Don't have an account yet? <RouterLink to="/signup" class="fw-bold">Join now!</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>
