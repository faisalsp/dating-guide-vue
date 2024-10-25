<script setup lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import InputField from '@/components/InputField.vue';
import ModalBox from '@/components/ModalBox.vue';

DataTable.use(DataTablesCore);

defineComponent({ name: 'DGHomeListing' })

const table = ref();
const sites = ['adultmatchmaker.com.au', "gaymatchmaker.com.au", "lesbianmatchmaker.com.au"]

const eventTitle = ref('Newcastle Couples Meet & Greet NSW 1');
let editModal = ref(null);

function showModal() {
  if (editModal.value) {
    (editModal.value as any).show()
  }
}

const columns = [
  {
    data: 'start_date',
    render: (data: string) => {
      const date = new Date(data);
      const options = { year: 'numeric' as 'numeric', month: 'long' as 'long', day: 'numeric' as 'numeric' };
      return date.toLocaleDateString('en-AU', options);
    }
  },
  { data: 'id', "className": "text-center" },
  {
    data: 'status',
    render: (data: string) => {
      return `<span class="badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span>`
    }
  },
  { data: 'priority', "className": "text-center" },
  { data: 'name' },
  {
    data: 'id',
    "orderable": false,
    render: (data: string, type: any, row: { id: number }) => {
      return `<a href="#" class="ms-3 text-dark text-decoration-none edit" data-item-id='${row.id}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>
      <a href="#" class="ms-3 text-dark text-decoration-none remove" data-item-id='${row.id}'><i class="gigacon gigacon-bin me-1"></i>Delete</a>`
    }
  },
]

const resolveRouteFromClick = (e: any) => {
  e.preventDefault()
  const itemId = e.target.dataset.itemId
  if (!itemId) return
  if (e.target.className.includes('edit')) {
    showModal()
  }

  if (e.target.className.includes('remove')) {
    table.value.dt.ajax.reload()
  }

}

</script>
<template>
  <div class="max-w-xl mx-auto">
    <h1 class="h2 font-bold mb-3">Home Page Listings</h1>
    <div class="d-flex gap-2 flex-wrap mb-3 align-items-end">
      <InputField title="Your Current home page listings on" className="mb-0" :data="sites" type="select" forceselect />
      <RouterLink to="/admin/homepage-listing/preview" class="btn btn-secondary">
        Preview
      </RouterLink>
      <RouterLink to="/admin/homepage-listing/add" class="btn btn-primary">
        <i class="gigacon gigacon-plus-sign me-2"></i>Add
      </RouterLink>
    </div>
    <DataTable ref="table" :columns="columns" ajax="/listing.json" @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped" width="100%" :options="{ order: [[3, 'asc']] }">
      <thead>
        <tr>
          <th>Date</th>
          <th width="10%">Event ID</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Title</th>
          <th width="15%"></th>
        </tr>
      </thead>
    </DataTable>
  </div>
  <ModalBox title="Edit - Newcastle Couples Meet & Greet NSW 1" ref="editModal">
    <template #body>
      <div class="row">
        <div class="col-lg-9">
          <InputField id="title" title="Title" type="text" v-model="eventTitle" required />
        </div>
        <div class="col-lg-3">
          <InputField id="priority" title="Priority" :data="[1, 2, 3, 4, 5, 6, 7, 8, 9]" type="select" required forceselect />
        </div>
        <div class="col-lg-12">
          <span class="fw-medium small">Display Date:</span>
          <p>Friday, 15 November 2024 @ 8:30pm</p>
        </div>
      </div>
    </template>
    <template #footer>
      <button class="btn btn-primary">Save Changes</button>
    </template>
  </ModalBox>
</template>
<style>
@import 'datatables.net-bs5';
</style>
