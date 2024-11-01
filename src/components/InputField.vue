<script setup lang="ts">
import emojiRegex from 'emoji-regex';
import { defineComponent, onMounted, ref, watch } from 'vue';

defineComponent({ name: 'InputField' });

const textModel = defineModel<any>();

const props = defineProps({
  id: String,
  type: String,
  title: String,
  required: {
    type: [Boolean, String]
  },
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
    default: '3'
  },
  helper: String,
  limit: String,
  data: null,
  selected: null,
  className: String,
  limitLines: {
    type: String,
    default: '0'
  },
  value: String,
  name: String,
  usekey: Boolean,
  checked: {
    type: Boolean,
    default: false
  },
  accept: String
});

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const removeEmojis = (value: string): string => {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(emojiRegex(), '');
};

const imagePreview = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const onFileChange = (event: Event) => {
  if (event.target) {
    const inputTarget = event.target as HTMLInputElement;
    if (inputTarget.files) {
      const file = inputTarget.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
};

onMounted(() => {
  const textarea = textareaRef.value;
  const limitLines = Number(props.limitLines);
  if (textarea && limitLines > 0) {
    textarea.addEventListener('input', () => {
      const lines = textarea.value.split('\n');
      if (lines.length > limitLines) {
        textarea.value = lines.slice(0, limitLines).join('\n');
      }
    });
  }
});

const resetFileInput = () => {
  imagePreview.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

watch(
  textModel,
  (newValue: any) => {
    const { limit, type } = props;
    if (type !== 'select' && type !== 'checkbox' && type !== 'file' && type !== 'radio') {
      textModel.value = limit
        ? removeEmojis(newValue).substring(0, Number(limit))
        : removeEmojis(newValue);
    }
  },
  { deep: true }
);
</script>
<template>
  <div
    v-if="type === 'text' || type === 'email' || type === 'color'"
    :class="nowrapper ? (className ? className : 'mb-3') : 'mb-3'"
  >
    <label :for="id" v-if="title" class="form-label small fw-medium">{{ title }}</label>
    <input
      :type="type"
      v-model="textModel"
      :id="id"
      :class="type === 'color' ? 'form-control form-control-color' : 'form-control'"
      :placeholder="placeholder"
      :required="!!required"
    />
    <p v-if="helper" class="form-text fst-italic">{{ helper }}</p>
  </div>
  <div v-if="type === 'password'" :class="nowrapper ? className : className + ' mb-3'">
    <label :for="id" v-if="title" class="form-label small fw-medium">{{ title }}</label>
    <input
      :type="type"
      v-model="textModel"
      :id="id"
      class="form-control"
      :placeholder="placeholder"
      :required="!!required"
    />
    <p v-if="helper" class="form-text fst-italic">{{ helper }}</p>
  </div>
  <div v-if="type === 'textarea'" :class="nowrapper ? className : 'mb-3'">
    <label :for="id" v-if="title" class="form-label small fw-medium">{{ title }}</label>
    <textarea
      :rows="rows"
      :id="id"
      v-model="textModel"
      ref="textareaRef"
      :required="!!required"
      :placeholder="placeholder"
      class="form-control"
    ></textarea>
    <p v-if="helper" class="form-text fst-italic">{{ helper }}</p>
  </div>
  <div v-if="type === 'select'" :class="nowrapper ? 'w-100' : (className ?? ' mb-3')">
    <label v-if="title" :for="id" class="block mb-2 small fw-medium text-gray-900">{{
      title
    }}</label>
    <select v-if="forceselect" :id="id" :required="!!required" class="form-select">
      <option
        v-for="(value, index) in data"
        :key="index"
        :value="usekey ? index : value"
        :selected="selected === value"
      >
        {{ value }}
      </option>
    </select>
    <select
      v-if="!forceselect"
      :id="id"
      v-model="textModel"
      :required="!!required"
      class="form-select"
    >
      <option
        v-for="(value, index) in data"
        :key="index"
        :value="usekey ? index : value"
        :selected="selected === value"
      >
        {{ value }}
      </option>
    </select>
  </div>
  <div v-if="type === 'checkbox'" :class="nowrapper ? className : 'mb-3'">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="textModel" :value="value" :id="id" />
      <label class="form-check-label small" :for="id">
        {{ title }}
      </label>
    </div>
  </div>
  <div v-if="type === 'radio'" :class="nowrapper ? className : 'mb-3'">
    <div class="form-check">
      <input class="form-check-input" type="radio" v-model="textModel" :value="value" :id="id" />
      <label class="form-check-label small" :for="id">
        {{ title }}
      </label>
    </div>
  </div>

  <div v-if="type === 'file'" :class="nowrapper ? className : 'mb-3'">
    <img :src="imagePreview" class="mw-100" alt="Image Preview" v-if="imagePreview" />
    <button
      v-if="imagePreview"
      class="d-block btn btn-danger btn-sm bg-danger mt-2 mb-2"
      @click="resetFileInput"
    >
      Remove
    </button>
    <label class="form-label small fw-medium" :for="id">{{ title }}</label>
    <input
      class="form-control"
      :id="id"
      type="file"
      @change="onFileChange"
      :accept="accept"
      ref="fileInput"
      :required="!!required"
    />
    <div class="form-text" :id="id + '_help'">{{ helper }}</div>
  </div>
</template>
