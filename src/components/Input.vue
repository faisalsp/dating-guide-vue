<script setup>
import emojiRegex from 'emoji-regex';
import { ref, watch } from 'vue'

const textModel = defineModel()

const props = defineProps({
    id: String,
    type: String,
    title: String,
    required: Boolean,
    nowrapper: {
        type: Boolean,
        default: false
    },
    forceselect: {
        type: Boolean,
        default: false
    },
    placeholder: String,
    rows: {
        type: String,
        default: "3"
    },
    helper: String,
    limit: String,
    data: null,
    selected: null,
    className: String,
    value: String,
    name: String,
    usekey: Boolean,
    checked: {
        type: Boolean,
        default: false
    },
    accept: String
})

const removeEmojis = (value) => {
    if (typeof value !== 'string') {
        return value;
    }
    return value.replace(emojiRegex(), '');
};

const imagePreview = ref(null)
const fileInput = ref(null)

const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            imagePreview.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const resetFileInput = () => {
    imagePreview.value = null
    fileInput.value.value = ''
}

watch(textModel, (newValue) => {
    const { limit, type } = props
    if (type !== 'select') {
        textModel.value = limit ? removeEmojis(newValue).substring(0, limit) : removeEmojis(newValue)
    }
});

</script>
<template>
    <div v-if="type === 'text' || type === 'email'" :class="nowrapper ? className : className + ' mb-3'">
        <label :for="id" class="form-label small fw-medium">{{ title }}</label>
        <input :type="type" v-model="textModel" :id="id" class="form-control" :placeholder="placeholder"
            :required="required" />
    </div>
    <div v-if="type === 'textarea'" :class="nowrapper ? className : 'mb-3'">
        <label :for="id" class="form-label small fw-medium">{{ title }}</label>
        <textarea :rows="rows" :id="id" v-model="textModel" :required="required" :placeholder="placeholder"
            class="form-control"></textarea>
        <p v-if="helper" class="form-text fst-italic">{{ helper }}</p>
    </div>
    <div v-if="type === 'select'" :class="nowrapper ? 'w-100' : 'mb-3'">
        <label v-if="title" :for="id" class="block mb-2 small fw-medium text-gray-900">{{ title
            }}</label>
        <select v-if="forceselect" :id="id" :required="required" class="form-select">
            <option v-for="(value, index) in data" :value="usekey ? index : value" :selected="selected === value">{{
                value }}</option>
        </select>
        <select v-if="!forceselect" :id="id" v-model="textModel" :required="required" class="form-select">
            <option v-for="(value, index) in data" :value="usekey ? index : value" :selected="selected === value">{{
                value }}</option>
        </select>
    </div>
    <div v-if="type === 'checkbox'" :class="nowrapper ? className : 'mb-3'">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="textModel" :value="value" :id="id">
            <label class="form-check-label small" :for="id">
                {{ title }}
            </label>
        </div>
    </div>
    <div v-if="type === 'radio'" :class="nowrapper ? className : 'mb-3'">
        <div class="form-check">
            <input class="form-check-input" type="radio" v-model="textModel" :value="value" :id="id">
            <label class="form-check-label small" :for="id">
                {{ title }}
            </label>
        </div>
    </div>

    <div v-if="type === 'file'" :class="nowrapper ? className : 'mb-3'">
        <img :src="imagePreview" class="mw-100" alt="Image Preview" v-if="imagePreview" />
        <button v-if="imagePreview"
            class="d-block btn btn-danger btn-sm bg-danger mb-2"
            @click="resetFileInput">Remove</button>
        <label class="form-label small fw-medium" :for="id">{{ title }}</label>
        <input class="form-control" :aria-describedby="id + '_help'" :id="id" type="file" @change="onFileChange"
            :accept="accept" ref="fileInput">
        <div class="form-text" :id="id + '_help'">{{ helper }}</div>
    </div>
</template>