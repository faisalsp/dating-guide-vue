<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import InputField from '@/components/InputField.vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

defineComponent({ name: 'TravelEvents' });

const listMonths = ref<string[]>([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]);

const currentDate = new Date();
const curDate = ref<number>(currentDate.getDate());
const curMonth = ref<string>(listMonths.value[currentDate.getMonth()]);
const curYear = ref<number>(currentDate.getFullYear());

interface Event {
  dateVal: number | string;
  monthVal: string;
  yearVal: number | string;
}

interface Options {
  days: number[];
  months: string[];
  years: number[];
}

const event = ref<Event>({
  dateVal: curDate.value,
  monthVal: curMonth.value,
  yearVal: curYear.value
});

const options = ref<Options>({
  days: [...Array(31)].map((a, b) => 1 + b),
  months: listMonths.value,
  years: [...Array(6)].map((a, b) => new Date().getFullYear() + b)
});

const columns = [
  {
    data: 'id',
    type: 'num',
    className: 'text-start',
    render: (data: number) => {
      return `<input type="checkbox" class="me-3" value="${data}">${data}`;
    }
  },
  {
    data: 'start_date',
    type: 'date',
    render: (data: string) => {
      const date = new Date(data);
      const tableOptions = {
        year: 'numeric' as 'numeric',
        month: 'long' as 'long',
        day: 'numeric' as 'numeric'
      };
      return date.toLocaleDateString('en-AU', tableOptions);
    }
  },
  { data: 'name' },
  { data: 'email' },
  {
    data: 'status',
    render: (data: string, type: any, row: { id: number }) => {
      return `<span class="badge bg-${data === 'Active' ? 'success' : 'danger'}">${data}</span><a href="#" class="ms-3 text-dark text-decoration-none" data-item-id='${row.id}'><i class="gigacon gigacon-edit me-1"></i>Edit</a>`;
    }
  }
];

const router = useRouter();
const resolveRouteFromClick = (e: any) => {
  if (e.target.type !== 'checkbox') {
    e.preventDefault();
    const itemId = e.target.dataset.itemId;
    if (!itemId) return;
    router.push('/admin/travel/travel-events/edit/' + itemId);
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
      console.log(checkedValues);
    }
  }
};
const tableOptions = {
  order: [[1, 'desc']] as [number, 'asc' | 'desc'][],
  pageLength: 50,
  lengthMenu: [25, 50, 100, 200]
};
</script>
<template>
  <div class="mx-auto">
    <div class="mx-auto bg-gray p-4 mb-4">
      <h1 class="h2 font-bold mb-2">Find Travel Events</h1>
      <p>Just enter part of the travel event title</p>
      <div class="d-flex gap-2 w-lg-75">
        <InputField
          type="text"
          id="eventtitle"
          className="w-100 mb-3"
          placeholder="Travel Event Title"
          nowrapper
        />
        <button type="submit" class="btn btn-primary px-3 px-lg-5 mb-3">Search</button>
      </div>
      <div class="d-flex gap-2 w-lg-50">
        <InputField
          type="email"
          id="email"
          className="w-100"
          placeholder="Owner's Email"
          nowrapper
        />
        <button type="submit" class="btn btn-primary px-3 px-lg-5">Search</button>
      </div>
      <div class="mb-3">
        <span class="d-block mb-2 small fw-medium text-gray-900 mt-3">Travel Event Date</span>
        <div class="d-flex flex-wrap gap-2">
          <InputField
            id="day"
            type="select"
            v-model="event.dateVal"
            className="mb-0"
            :data="options.days"
            :selected="curDate"
          />
          <InputField
            id="month"
            type="select"
            v-model="event.monthVal"
            className="mb-0"
            :data="options.months"
            :selected="curMonth"
          />
          <InputField
            id="year"
            type="select"
            v-model="event.yearVal"
            className="mb-0"
            :data="options.years"
            :selected="curYear"
          />
          <div class="d-flex flex-wrap gap-2">
            <button type="submit" class="btn btn-primary px-3 px-lg-4">Exact Date</button>
            <button type="submit" class="btn btn-primary px-3 px-lg-4">Whole Month</button>
          </div>
        </div>
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
          <li><a class="dropdown-item" href="#">Delete</a></li>
          <li><a class="dropdown-item" href="#">Pause</a></li>
          <li><a class="dropdown-item" href="#">Resume</a></li>
          <li><a class="dropdown-item" href="#">Reject</a></li>
          <li><a class="dropdown-item" href="#">View</a></li>
        </ul>
      </div>
      <RouterLink to="/admin/travel/travel-events/add" class="btn btn-primary"
        ><i class="gigacon gigacon-plus-sign me-2"></i>Add event</RouterLink
      >
    </div>
    <DataTable
      :columns="columns"
      ajax="/data.json"
      @click="resolveRouteFromClick($event)"
      class="table table-hover table-striped"
      width="100%"
      :options="tableOptions"
    >
      <thead>
        <tr>
          <th>Event ID</th>
          <th>Event Date</th>
          <th>Event Title</th>
          <th>Owner</th>
          <th>Status</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>
<style>
@import 'datatables.net-bs5';
</style>
