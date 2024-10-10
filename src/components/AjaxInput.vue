<script setup lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'AjaxInput' });

const props = defineProps({
    id: String,
    type: String,
    title: String,
    ajaxurl: String,
    placeholder: String,
    param: String,
    method: {
        type: String,
        default: 'GET'
    },
    data: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    }
})

const options = ref<any[] | null>([]);
const showOptions = ref(false);
const searchQuery = defineModel();

const fetchOptions = (evt: Event) => {
    const { ajaxurl, param, method } = props
    let val = (evt.target as HTMLInputElement).value

    if (val !== '') {
        showOptions.value = true
        const url = method === 'POST' ? `${ajaxurl}` : `${ajaxurl}${val}`
        fetch(url)
            .then((response: Response) => response.json())
            .then((data: any) => {
                const key = param !== undefined ? param : 'email'
                if (method === 'POST') {
                    const mappedClubs = data.data.map((res: any) => res[key])
                    options.value = mappedClubs.filter((item: string) => item.toLowerCase().includes(val.toLowerCase()))
                } else {
                    options.value = data[key]
                }
            })
            .catch((error: any) => console.error(error));
    } else {
        options.value = null
        showOptions.value = false
    }
}
const handleBlur = (evt: Event) => {
    showOptions.value = (evt.target as HTMLInputElement)?.value !== '' ? true : false
}

const handleSelect = (option: Record<string, any>) => {
    const { data } = props
    searchQuery.value = !data ? option : option[data]
    showOptions.value = false
}
</script>
<template>
    <label :for="id" v-if="title" class="form-label fw-medium">{{ title }}</label>
    <div class="ajax-select position-relative">
        <input :type="type" :id="id" v-model.trim="searchQuery" @input="fetchOptions" @blur="handleBlur"
            :placeholder="placeholder" class="form-control" :required="required" />
        <ul v-if="showOptions"
            class="options position-absolute bg-white shadow-md w-100 mt-1 border list-unstyled py-2">
            <li v-for="(option, index) in options" :key="index" class="cursor-pointer py-2 px-3 small hover-grey"
                @click="handleSelect(option)">
                {{ !data ? option : option[data] }}
            </li>
        </ul>
    </div>
</template>