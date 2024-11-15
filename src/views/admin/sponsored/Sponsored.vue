<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import InputField from '@/components/InputField.vue';

DataTable.use(DataTablesCore);

defineComponent({ name: 'SponsoredList' });

const sites = [
  'All Dating Sites',
  'AdultMatchMaker.com.au',
  'GayMatchMaker.com.au',
  'LesbianMatchMaker.com.au'
];

const columns = [
  { data: 'id', className: 'text-center' },
  {
    data: 'status',
    render: (data: string) => {
      return `<span class="badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span>`;
    }
  },
  {
    data: 'start_date',
    type: 'date',
    render: (data: string) => {
      const date = new Date(data);
      const options = {
        year: 'numeric' as 'numeric',
        month: 'long' as 'long',
        day: 'numeric' as 'numeric'
      };
      return date.toLocaleDateString('en-AU', options);
    }
  },
  { data: 'name' },
  {
    data: 'id',
    orderable: false,
    render: (data: string, type: any, row: { id: number }) => {
      return `<a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.id}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>
      <a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.id}'><i class="gigacon gigacon-bin me-1"></i>Delete</a>`;
    }
  }
];

const router = useRouter();
const resolveRouteFromClick = (e: any) => {
  e.preventDefault();
  const itemId = e.target.dataset.itemId;
  if (!itemId) return;
  router.push('/admin/sponsored/edit/' + itemId);
};
const options = {
  pageLength: 50,
  lengthMenu: [25, 50, 100, 200]
};
</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold mb-3">Sponsored Ads</h1>
    <div class="d-flex gap-2 flex-wrap mb-3 align-items-end">
      <InputField
        id="sponsoring"
        title="Sponsoring Site"
        className="mb-0"
        :data="sites"
        type="select"
        forceselect
      />
      <RouterLink to="/admin/sponsored/add/ads" class="btn btn-primary"
        ><i class="gigacon gigacon-plus-sign me-2"></i>New</RouterLink
      >
    </div>
    <DataTable
      :columns="columns"
      ajax="/data.json"
      @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped"
      width="100%"
      :options="options"
    >
      <thead>
        <tr>
          <th width="10%">Event ID</th>
          <th>Status</th>
          <th>Event Date</th>
          <th>Event Name</th>
          <th width="200"></th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>
<style>
@import 'datatables.net-bs5';
</style>
