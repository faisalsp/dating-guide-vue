<script setup>
import { ref } from 'vue'

const options = ref([])
const showOptions = ref(false)

const props = defineProps({
    id: String,
    type: String,
    title: String,
    ajaxurl: String,
    placeholder: String,
    param: String,
    data: String,
    required: Boolean
})

const searchQuery = defineModel()

const fetchOptions = (evt) => {
    const { ajaxurl, param } = props
    let val = evt.target.value

    if (val !== '') {
        showOptions.value = true
        const url = `${ajaxurl}${val}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                options.value = data[param]
            })
            .catch(error => console.error(error))
    } else {
        options.value = null
        showOptions.value = false
    }
}

const handleBlur = (evt) => {
    showOptions.value = evt.target?.value !== '' ? true : false
}

function handleSelect(option) {
    const { data } = props
    searchQuery.value = option[data]
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
            <li v-for="(option, index) in options" :key="index"
                class="cursor-pointer py-2 px-4 small hover:bg-gray-100" @click="handleSelect(option)">
                {{ option[data] }}
            </li>
        </ul>
    </div>
</template>