<script setup>
import { useRouter } from 'vue-router';
import AjaxInput from '@/components/AjaxInput.vue';

const searchQuery = defineModel()
const router = useRouter()
const createEvent = async () => {
    router.push({ path: '/create-event', query: { email: searchQuery.value } })
}

</script>
<template>
    <div class="max-w-xl mx-auto">
        <div class="my-10 gap-10">

            <form action="" method="post" @submit.prevent="createEvent">
                <div class="mb-5">
                    <h1 class="text-3xl font-bold">Add New Event for Member</h1>
                </div>

                <div class="mb-5">
                    <label for="email" class="d-block mb-2 small font-medium text-gray-900">Enter part of
                        email*</label>
                    <div class="flex flex-col lg:flex-row gap-2">
                        <div class="relative lg:w-2/3">
                            <AjaxInput id="email" type="email" placeholder="john@mail.com" v-model="searchQuery"
                                data="email" param="users" ajaxurl="https://dummyjson.com/users/search?limit=10&q="
                                required />
                        </div>
                        <button type="submit"
                            class="text-white lg:w-1/3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                            Event For
                            Member</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>