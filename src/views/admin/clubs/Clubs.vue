<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

defineComponent({ name: 'ClubsView' })

const columns = [
  {
    data: 'clubId', orderDataType: 'dom-text', render: (data: number) => {
      return `<input type="checkbox" class="me-3" value="${data}">${data}`
    }
  },
  { data: 'clubName' },
  {
    data: 'status',
    render: (data: string, type: any, row: { clubId: number }) => {
      return `<span class="badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span><a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.clubId}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>`
    }
  },
]

const router = useRouter()
const resolveRouteFromClick = (e: any) => {
  if (e.target.type !== 'checkbox') {
    e.preventDefault()
    const itemId = e.target.dataset.itemId
    if (!itemId) return
    router.push('/admin/clubs/edit/' + itemId);
  } else {
    const checkedValues: string[] = [];
    const checkboxes = document.querySelector('.dataTable')?.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes) {
      checkboxes.forEach(function (checkbox) {
        if (checkbox instanceof HTMLInputElement) {
          checkedValues.push(checkbox.value);
        }
      })
      // console.log(checkedValues);
    }
  }
}

</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold mb-3">Clubs</h1>
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
          data-bs-toggle="dropdown" aria-expanded="false">
          Actions
        </button>
        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Pause</a></li>
          <li><a class="dropdown-item" href="#">Unpause</a></li>
          <li><a class="dropdown-item" href="#">View</a></li>
          <li><a class="dropdown-item" href="#">Delete</a></li>
        </ul>
      </div>
      <RouterLink to="/admin/add-club" class="btn btn-primary"><i class="gigacon gigacon-plus-sign me-2"></i>Add
        club</RouterLink>
    </div>
    <DataTable :columns="columns" ajax="/clubs.json" @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped" width="100%">
      <thead>
        <tr>
          <th width="15%">Club ID</th>
          <th>Club Name</th>
          <th width="20%">Status</th>
        </tr>
      </thead>
    </DataTable>
  </div>

</template>
<style>
@import 'datatables.net-bs5';
</style>
