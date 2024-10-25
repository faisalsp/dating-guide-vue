<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import InputField from '@/components/InputField.vue';

DataTable.use(DataTablesCore);

defineComponent({ name: 'DGHomeListing' })

const sites = ['Show All', "Dating Guide", "Adult Dating Guide", "Swingers Dating Guide", "Gay Dating Guide", "Lesbian Dating Guide", "Fetish Dating Guide"]

const columns = [
  { data: 'id', "className": "text-center" },
  {
    data: 'status',
    render: (data: string) => {
      return `<span class="w-50 badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span>`
    }
  },
  {
    data: 'start_date',
    render: (data: string) => {
      const date = new Date(data);
      const options = { year: 'numeric' as 'numeric', month: 'long' as 'long', day: 'numeric' as 'numeric' };
      return date.toLocaleDateString('en-AU', options);
    }
  },
  { data: 'name' },
  {
    data: 'id',
    "orderable": false,
    render: (data: string, type: any, row: { id: number }) => {
      return `<a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.id}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>
      <a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.id}'><i class="gigacon gigacon-bin me-1"></i>Delete</a>`
    }
  },
]

const router = useRouter()
const resolveRouteFromClick = (e: any) => {
  e.preventDefault()
  const itemId = e.target.dataset.itemId
  if (!itemId) return
  router.push('/admin/dg-home/edit/' + itemId);
}

</script>
<template>
  <div class="max-w-xl mx-auto">
    <h1 class="h2 font-bold mb-3">
      Edit Events on DatingGuide home pages</h1>
    <div class="d-flex gap-2 flex-wrap mb-3 align-items-end">
      <InputField className="mb-0" :data="sites" type="select" forceselect />
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
          data-bs-toggle="dropdown" aria-expanded="false">
          Actions
        </button>
        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Delete</a></li>
          <li><a class="dropdown-item" href="#">Pause</a></li>
          <li><a class="dropdown-item" href="#">Resume</a></li>
        </ul>
      </div>
    <RouterLink to="/admin/dg-home/add-event" class="btn btn-primary"><i class="gigacon gigacon-plus-sign me-2"></i>Add Event</RouterLink>
    </div>
    <DataTable :columns="columns" ajax="/data.json" @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped" width="100%">
      <thead>
        <tr>
          <th width="10%">Event ID</th>
          <th>Status</th>
          <th>Event Date</th>
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
