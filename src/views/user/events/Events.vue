<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

defineComponent({ name: 'EventList' })

const columns = [
  {
    data: 'name',
    render: (data: number, type: any, row: { id: number }) => {
      return `<input type="checkbox" class="me-3" value="${row.id}">${data}`
    }
  },
  { data: 'email' },
  {
    data: 'start_date',
    render: (data: string) => {
      const date = new Date(data);
      const options = { year: 'numeric' as 'numeric', month: 'long' as 'long', day: 'numeric' as 'numeric' };
      return date.toLocaleDateString('en-AU', options);
    }
  },
  {
    data: 'status',
    render: (data: string, type: any, row: { id: number }) => {
      return `<span class="w-50 badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span><a href="events/edit/${row.id}" class="ms-3 text-dark text-decoration-none" data-item-id='${row.id}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>`
    }
  },
]

const router = useRouter()
const resolveRouteFromClick = (e: any) => {
  if (e.target.type !== 'checkbox') {
    e.preventDefault()
    const itemId = e.target.dataset.itemId
    if (!itemId) return
    router.push('events/edit/' + itemId);
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
  <div class="max-w-xl mx-auto">
    <h1 class="h2 font-bold mb-3">My Event Entries</h1>
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
          data-bs-toggle="dropdown" aria-expanded="false">
          Actions
        </button>
        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Pause</a></li>
          <li><a class="dropdown-item" href="#">Resume</a></li>
          <li><a class="dropdown-item" href="#">View</a></li>
        </ul>
      </div>
      <RouterLink to="/user/create-event" class="btn btn-primary"><i class="gigacon gigacon-plus-sign me-2"></i>Submit
        a new event</RouterLink>
    </div>
    <DataTable :columns="columns" ajax="/data.json" @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped">
      <thead>
        <tr>
          <th>Event Title</th>
          <th>Email</th>
          <th>Event Date</th>
          <th>Status</th>
        </tr>
      </thead>
    </DataTable>
  </div>

</template>
<style>
@import 'datatables.net-bs5';
</style>
