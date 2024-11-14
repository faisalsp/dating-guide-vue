<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import { defineComponent } from 'vue';

defineComponent({ name: 'PendingEvents' });
</script>
<template>
  <div class="mx-auto">
    <div class="d-flex flex-wrap gap-1 align-items-center justify-content-between mb-4">
      <h1 class="h2 font-bold mb-0">Pending Events</h1>
      <span class="fw-medium"
        >Pending events remaining<span class="badge rounded-circle text-bg-primary ms-1"
          >3</span
        ></span
      >
    </div>
    <button type="submit" class="btn btn-success text-center mb-3">Approve All Events</button>
    <div class="row g-3">
      <div v-for="index in 3" :key="index" class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="p-2">
              <a href="#" class="d-block h4 underline text-primary">Lorem ipsum dolor sit amet</a>
              <small class="text-xs fw-bold">Friday, 18 October 2024 <span>(08.00 PM)</span></small>
              <p class="mb-0">
                A night of debauchery and socialising come have some fun or just watch at couples
                and girls only swingers party.
              </p>
              <p class="small text-success mb-0">
                Event Type: <span class="fw-medium text-black">Swingers Parties</span>
              </p>
              <p class="small text-success mb-0">
                Age Group: <span class="fw-medium text-black">18 - 60</span>
              </p>
              <p class="small text-success mb-0">
                Location: <span class="fw-medium text-black">Victoria<span>, Eltham</span></span>
              </p>
              <a href="#" target="_blank" class="d-inline-block text-blue-700 underline small mb-2"
                >More Info</a
              >

              <div class="d-flex flex-wrap column-gap-3">
                <InputField
                  :id="'adultMM' + index"
                  type="checkbox"
                  title="AdultMM"
                  checked
                  nowrapper
                />
                <InputField :id="'gayMM' + index" type="checkbox" title="GayMM" nowrapper />
                <InputField :id="'lesbianMM' + index" type="checkbox" title="LesbianMM" nowrapper />
              </div>
              <small class="my-2 d-block text-xs fw-bold fst-italic"
                >Submitted by: <span class="fw-medium text-black">John Doe</span></small
              >
              <div class="d-flex gap-2 flex-wrap mt-3 align-items-center justify-content-between">
                <div class="d-flex gap-2 flex-wrap">
                  <button type="submit" class="btn btn-danger text-center">Reject Event</button>
                  <button type="submit" class="btn btn-primary text-center">Accept Event</button>
                </div>
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
                  <ul
                    class="dropdown-menu dropdown-menu-start"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li><a class="dropdown-item" href="#">Email</a></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
