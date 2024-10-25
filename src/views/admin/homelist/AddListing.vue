<script setup lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import InputField from '@/components/InputField.vue';

DataTable.use(DataTablesCore);

defineComponent({ name: 'AddListing' })

const table = ref();
const sites = ['adultmatchmaker.com.au', "gaymatchmaker.com.au", "lesbianmatchmaker.com.au"]

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
    data: 'state',
  },
  { data: 'name' },
  {
    data: 'id',
    "orderable": false,
    render: (data: string, type: any, row: { id: number }) => {
      return `<a href="#" class="ms-3 btn btn-primary add small py-0 px-2" data-item-id='${row.id}'><i class="gigacon gigacon-plus-sign me-1"></i>Add</a>`
    }
  },
]

</script>
<template>
  <div class="max-w-xl mx-auto">
    <h1 class="h2 font-bold mb-3">Add - Home Page Listings</h1>
    <div class="d-flex gap-2 flex-wrap mb-3 align-items-end">
      <InputField title="Current Active Sponsored Ads on" className="mb-0" :data="sites" type="select" forceselect />
      <RouterLink to="/admin/homepage-listing/preview" class="btn btn-secondary">
        Preview
      </RouterLink>
      <RouterLink to="/admin/homepage-listing" class="btn btn-primary">
        <i class="gigacon gigacon-edit me-2"></i>Edit
      </RouterLink>
    </div>
    <DataTable ref="table" :columns="columns" ajax="/data.json" class="table table-hover table-striped" width="100%"
      :options="{ order: [[1, 'asc']] }">
      <thead>
        <tr>
          <th>Date</th>
          <th width="10%">Event ID</th>
          <th>State</th>
          <th>Title</th>
          <th width="15%"></th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>
<style>
@import 'datatables.net-bs5';
</style>
