<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import InputField from '@/components/InputField.vue';

DataTable.use(DataTablesCore);

defineComponent({ name: 'TravelSponsored' })

const sites = ['All Dating Sites', "AdultMatchMaker.com.au", "GayMatchMaker.com.au", "LesbianMatchMaker.com.au"]

const columns = [
  {
    data: 'id', render: (data: number) => {
      return `<input type="checkbox" class="me-3" value="${data}">${data}`
    }
  },
  {
    data: 'status',
    render: (data: string) => {
      return `<span class="badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span>`
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
      return `<a href="#" class="ms-3 text-dark text-decoration-none edit" data-item-id='${row.id}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>
      <a href="#" class="ms-3 text-dark text-decoration-none add" data-item-id='${row.id}'><i class="gigacon gigacon-star me-1"></i>Select</a>`
    }
  },
]

const router = useRouter()
const resolveRouteFromClick = (e: any) => {
  if (e.target.type !== 'checkbox') {
    e.preventDefault()
    const itemId = e.target.dataset.itemId
    if (!itemId) return
    if (e.target.classList.contains('edit')) {
      router.push('/admin/travel/travel-sponsored/edit/' + itemId);
    } else {
      router.push('/admin/travel/travel-sponsored/add');
    }
  } else {
    const checkedValues: string[] = [];
    const checkboxes = document.querySelector('.dataTable')?.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes) {
      checkboxes.forEach(function (checkbox) {
        if (checkbox instanceof HTMLInputElement) {
          checkedValues.push(checkbox.value);
        }
      })
      console.log(checkedValues);
    }
  }
}

</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold mb-3">Travel Sponsored Ads</h1>
    <div class="d-flex gap-2 flex-wrap mb-3 align-items-end">
      <InputField id="sponsoring" title="Sponsoring Site" className="mb-0" :data="sites" type="select" forceselect />
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
    </div>
    <DataTable :columns="columns" ajax="/data.json" @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped" width="100%">
      <thead>
        <tr>
          <th width="10%">Event ID</th>
          <th>Status</th>
          <th>Event Date</th>
          <th>Event Name</th>
          <th width="20%"></th>
        </tr>
      </thead>
    </DataTable>
  </div>

</template>
<style>
@import 'datatables.net-bs5';
</style>
