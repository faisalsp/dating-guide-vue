<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({ name: 'SignupView' });
const findUs = [
  'Someone from Mars told me about it',
  'Television ad',
  'Google',
  'Yahoo',
  'Banner ad',
  'A friend told me',
  'Other'
];
</script>
<template>
  <div class="bg-body-tertiary min-vh-100">
    <div class="container py-5">
      <div class="text-center mb-4">
        <img src="https://placehold.co/100x100" alt="" />
      </div>
      <form class="w-lg-50 m-auto bg-white p-3 p-lg-5 py-4 rounded shadow-sm">
        <h1 class="h3 mb-3">
          Register now to get the best dating information delivered to you for FREE!
        </h1>
        <p>
          Join now and get the latest profiles, events, clubs and services in your local area in one
          convenient place. It's important to register to access our complete range of services.
          It's free to register.
        </p>
        <small class="d-block mb-3"
          ><strong>Note</strong>: Advertisers, people wishing to submit sites, events & other
          content must also register.</small
        >
        <InputField
          id="handle"
          title="First Name or Handle*"
          type="text"
          helper="5 - 15 characters"
          required
        />
        <InputField id="email" title="Email*" type="email" required />
        <InputField
          id="password"
          title="Password*"
          type="password"
          helper="5 - 15 characters"
          required
        />
        <InputField
          id="confpassword"
          title="Confirm Password*"
          type="password"
          helper="5 - 15 characters"
          required
        />
        <InputField
          id="findus"
          title="How did you find us"
          type="select"
          :data="findUs"
          forceselect
        />
        <InputField
          id="logsin"
          title="Automatically logs into the site"
          type="checkbox"
          nowrapper
        />
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="terms" />
          <label class="form-check-label small" for="terms">
            I confirm that I am over 18 years old and agree to the <a href="#">Terms of Use</a>
          </label>
        </div>

        <button class="w-100 btn fw-medium btn-primary" type="submit">Join now</button>
        <p class="mt-3 text-muted">
          Already have an account?
          <RouterLink to="/login" class="fw-medium">Sign in here </RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>
