<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import AjaxInput from '../../../components/AjaxInput.vue';

defineComponent({ name: 'AddEvent' });

const searchQuery = defineModel()
const router = useRouter()
const createEvent = async () => {
  router.push({ path: '/admin/create-event', query: { email: searchQuery.value as string } })
}

</script>
<template>
  <div class="max-w-xl mx-auto">
    <div class="my-10 gap-10">

      <form action="" method="post" @submit.prevent="createEvent">
        <div class="mb-3">
          <h1 class="h2 font-bold">Add New Event for Member</h1>
        </div>

        <div class="mb-5">
          <label for="email" class="form-label fw-medium">Enter part of email*</label>
          <div class="d-flex gap-2">
            <div class="relative w-50">
              <AjaxInput id="email" type="email" title="" placeholder="john@mail.com" v-model="searchQuery" data="email"
                param="users" ajaxurl="https://dummyjson.com/users/search?limit=10&q=" required />
            </div>
            <button type="submit" class="btn btn-primary text-center">Add Event For Member</button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>