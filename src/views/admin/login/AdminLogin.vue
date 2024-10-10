<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({ name: 'AdminLogin' });
</script>
<template>
  <div class="max-w-xl mx-auto">
    <form action="" method="post">
      <div class="mb-3">
        <h1 class="h2 font-bold">Create user account</h1>
      </div>
      <div class="">
        <label for="email" class="form-label fw-medium">Email*</label>
        <div class="d-flex gap-2">
          <div class="relative w-lg-50">
            <div class="input-group">
              <input type="email" id="email" class="form-control" placeholder="john@mail.com" required />
              <button type="submit" class="btn btn-primary text-center">Search</button>
            </div>
            <p class="form-text fst-italic">Search first to determine if member exists</p>
          </div>
        </div>
      </div>
      <div class="py-3">
        <div class="d-flex gap-2 flex-wrap align-items-center mb-1">
          <h2 class="h4 fw-bold mb-0">Results</h2>
          <span class="px-3 py-2 badge bg-success">Member Exists</span>
        </div>
        <table class="mw-0">
          <thead>
            <tr>
              <th width="25%"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MemId:</td>
              <td class="fw-bold">8251</td>
            </tr>
            <tr>
              <td>Handle:</td>
              <td class="fw-bold">twmg_admin</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td class="fw-bold">reggie@twmg.com.au</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td class="fw-bold">twmg123</td>
            </tr>
            <tr>
              <td>Secure ID:</td>
              <td class="fw-bold">88e077cb-a03c-4b1a-b73f-be164278a4ee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>