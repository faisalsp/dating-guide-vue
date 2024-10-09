<script setup lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'AjaxInput' });

interface Props {
    id: string;
    type: string;
    title: string;
    ajaxurl: string;
    placeholder: string;
    param: string;
    data: string;
    required: boolean;
}

const options = ref<any[] | null>([]);
const showOptions = ref(false);
const props = defineProps<Props>();
const searchQuery = defineModel();

const fetchOptions = (evt: Event) => {
    const { ajaxurl, param } = props;
    let val = (evt.target as HTMLInputElement).value;

    if (val !== '') {
        showOptions.value = true;
        const url = `${ajaxurl}${val}`;
        fetch(url)
            .then((response: Response) => response.json())
            .then((data: any) => {
                options.value = data[param];
            })
            .catch((error: any) => console.error(error));
    } else {
        options.value = null;
        showOptions.value = false;
    }
}
const handleBlur = (evt: Event) => {
    showOptions.value = (evt.target as HTMLInputElement)?.value !== '' ? true : false
}

const handleSelect = (option: Record<string, any>) => {
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
            <li v-for="(option, index) in options" :key="index" class="cursor-pointer py-2 px-3 small hover-grey"
                @click="handleSelect(option)">
                {{ option[data] }}
            </li>
        </ul>
    </div>
</template>