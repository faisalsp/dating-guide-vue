<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import { defineComponent } from 'vue';

defineComponent({ name: 'PendingEvents' })

</script>
<template>
  <div class="max-w-xl mx-auto">
    <h1 class="h2 font-bold mb-3">Pending Events</h1>
    <div class="my-10 gap-10">
      <div class="row g-3">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="p-2">
                <a href="#" class="d-block h4 underline text-primary">Lorem ipsum dolor sit amet</a>
                <small class="text-xs fw-bold">Friday, 18 October 2024 <span>(08.00 PM)</span></small>
                <p class="mb-0">A night of debauchery and socialising come have some fun or just watch at couples and
                  girls only swingers party.</p>
                <p class="small text-success mb-0">Event Type: <span class="fw-medium text-black">Swingers
                    Parties</span></p>
                <p class="small text-success mb-0">Age Group: <span class="fw-medium text-black">18 - 60</span></p>
                <p class="small text-success mb-0">Location: <span class="fw-medium text-black">Victoria<span>,
                      Eltham</span></span></p>
                <a href="#" target="_blank" class="text-blue-700 underline small">More Info</a>
                <small class="mt-2 d-block text-xs fw-bold fst-italic">Submitted by: <span
                    class="fw-medium text-black">John Doe</span></small>
                <div class="d-flex flex-wrap gap-2 mt-1 mb-2">
                  <a href="#" target="_blank" class="text-blue-700 underline small">Email</a>
                  <a href="#" target="_blank" class="text-blue-700 underline small">Edit</a>
                  <a href="#" target="_blank" class="text-blue-700 underline small">Delete</a>
                </div>
                <div class="d-flex flex-wrap column-gap-3">
                  <InputField id="adultMM" type="checkbox" title="AdultMM" nowrapper />
                  <InputField id="gayMM" type="checkbox" title="GayMM" nowrapper />
                  <InputField id="lesbianMM" type="checkbox" title="LesbianMM" nowrapper />
                  <InputField id="loveclub" type="checkbox" title="LoveClub" nowrapper />
                  <InputField id="hothookups" type="checkbox" title="HotHookups" nowrapper />
                  <InputField id="aussieMM" type="checkbox" title="AussieMM" nowrapper />
                </div>
                <div class="d-flex gap-2 flex-wrap mt-3">
                  <button type="submit" class="btn btn-danger text-center">Reject Event</button>
                  <button type="submit" class="btn btn-primary text-center">Accept Event</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="p-2">
                <a href="#" class="d-block h4 underline text-primary">Lorem ipsum dolor sit amet</a>
                <small class="text-xs fw-bold">Friday, 18 October 2024 <span>(08.00 PM)</span></small>
                <p class="mb-0">A night of debauchery and socialising come have some fun or just watch at couples and
                  girls only swingers party.</p>
                <p class="small text-success mb-0">Event Type: <span class="fw-medium text-black">Swingers
                    Parties</span></p>
                <p class="small text-success mb-0">Age Group: <span class="fw-medium text-black">18 - 60</span></p>
                <p class="small text-success mb-0">Location: <span class="fw-medium text-black">Victoria<span>,
                      Eltham</span></span></p>
                <a href="#" target="_blank" class="text-blue-700 underline small">More Info</a>
                <small class="mt-2 d-block text-xs fw-bold fst-italic">Submitted by: <span
                    class="fw-medium text-black">John Doe</span></small>
                <div class="d-flex flex-wrap gap-2 mt-1 mb-2">
                  <a href="#" target="_blank" class="text-blue-700 underline small">Email</a>
                  <a href="#" target="_blank" class="text-blue-700 underline small">Edit</a>
                  <a href="#" target="_blank" class="text-blue-700 underline small">Delete</a>
                </div>
                <div class="d-flex flex-wrap column-gap-3">
                  <InputField id="adultMM" type="checkbox" title="AdultMM" nowrapper />
                  <InputField id="gayMM" type="checkbox" title="GayMM" nowrapper />
                  <InputField id="lesbianMM" type="checkbox" title="LesbianMM" nowrapper />
                  <InputField id="loveclub" type="checkbox" title="LoveClub" nowrapper />
                  <InputField id="hothookups" type="checkbox" title="HotHookups" nowrapper />
                  <InputField id="aussieMM" type="checkbox" title="AussieMM" nowrapper />
                </div>
                <div class="d-flex gap-2 flex-wrap mt-3">
                  <button type="submit" class="btn btn-danger text-center">Reject Event</button>
                  <button type="submit" class="btn btn-primary text-center">Accept Event</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>