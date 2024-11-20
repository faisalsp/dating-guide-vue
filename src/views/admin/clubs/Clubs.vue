<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import InputField from '@/components/InputField.vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

defineComponent({ name: 'ClubsView' });

const columns = [
  {
    data: 'clubId',
    type: 'num',
    className: 'text-start',
    render: (data: number) => {
      return `<input type="checkbox" class="me-3" value="${data}">${data}`;
    }
  },
  { data: 'clubName' },
  {
    data: 'status',
    render: (data: string, type: any, row: { clubId: number }) => {
      return `<span class="badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span><a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.clubId}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>`;
    }
  }
];

const router = useRouter();
const resolveRouteFromClick = (e: any) => {
  if (e.target.type !== 'checkbox') {
    e.preventDefault();
    const itemId = e.target.dataset.itemId;
    if (!itemId) return;
    router.push('/admin/clubs/edit/' + itemId);
  } else {
    const checkedValues: string[] = [];
    const checkboxes = document
      .querySelector('.dataTable')
      ?.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes) {
      checkboxes.forEach(function (checkbox) {
        if (checkbox instanceof HTMLInputElement) {
          checkedValues.push(checkbox.value);
        }
      });
      // console.log(checkedValues);
    }
  }
};

const options = {
  pageLength: 50,
  lengthMenu: [25, 50, 100, 200]
};
</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold mb-3">Clubs</h1>
    <div class="w-lg-50 mx-auto bg-gray p-4 mb-4">
      <h2>Find Club</h2>
      <p>Enter first few letters for your search in either one or both fields</p>
      <InputField type="text" id="search" placeholder="Club Name" />
      <div class="d-flex gap-2">
        <InputField type="text" id="clubid" className="w-100" placeholder="Club ID" nowrapper />
        <button type="submit" class="btn btn-primary px-3 px-lg-5">Search</button>
      </div>
    </div>
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <div class="dropdown">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Actions
        </button>
        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Pause</a></li>
          <li><a class="dropdown-item" href="#">Unpause</a></li>
          <li><a class="dropdown-item" href="#">View</a></li>
          <li><a class="dropdown-item" href="#">Delete</a></li>
        </ul>
      </div>
      <RouterLink to="/admin/add-club" class="btn btn-primary"
        ><i class="gigacon gigacon-plus-sign me-2"></i>Add club
      </RouterLink>
    </div>
    <DataTable
      :columns="columns"
      ajax="/clubs.json"
      @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped"
      width="100%"
      :options="options"
    >
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
