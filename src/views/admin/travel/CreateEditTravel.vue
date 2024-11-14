<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, ref, computed } from 'vue';
import InputField from '@/components/InputField.vue';

defineComponent({ name: 'CreateEditTravel' });

interface Event {
  eventName: string;
  daysNights: string;
  shortDesc: string;
  dateVal: number | string;
  monthVal: string;
  yearVal: number | string;
  dateEndVal: number | string;
  monthEndVal: string;
  yearEndVal: number | string;
}

interface Options {
  days: number[];
  months: string[];
  years: number[];
  eventType: string[];
  subEvent: string[];
}

const route = useRoute();
const idParam = Number(route.params.id);
const travelPick = ref('1');

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
const travelType = ref();
const currentDate = new Date();
const curDate = ref<number>(currentDate.getDate());
const curMonth = ref<string>(listMonths.value[currentDate.getMonth()]);
const curYear = ref<number>(currentDate.getFullYear());

const fields = ref([{ value: '' }]);

function addField(event: { preventDefault: () => void }) {
  event.preventDefault();
  fields.value.push({ value: '' });
}

function removeField(event: { preventDefault: () => void }, index: number) {
  event.preventDefault();
  fields.value.splice(index, 1);
}

const event = ref<Event>({
  eventName: '',
  daysNights: '',
  shortDesc: '',
  dateVal: curDate.value,
  dateEndVal: curDate.value,
  monthVal: curMonth.value,
  monthEndVal: curMonth.value,
  yearVal: curYear.value,
  yearEndVal: curYear.value
});

const options = ref<Options>({
  days: [...Array(31)].map((a, b) => 1 + b),
  months: listMonths.value,
  years: [...Array(6)].map((a, b) => new Date().getFullYear() + b),
  eventType: ['Singles', 'Gay', 'Lesbian', 'Gay & Lesbian', 'Swingers', 'Adult', 'Things To Do'],
  subEvent: [
    'Cruise',
    'Resort',
    'Tours',
    'Short Escape',
    'Air',
    'Land',
    'Water',
    'Driving',
    'Extreme',
    'Creative',
    'Pamper',
    'Wine & Dine',
    'Attractions & Tours',
    'Other',
    'Free',
    'Adult'
  ]
});

const getDay = computed(() => {
  let dateString = `${event.value.dateVal} ${event.value.monthVal} ${event.value.yearVal}`;
  const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
  return dateFormatter.format(new Date(dateString));
});

const getDayEnd = computed(() => {
  let dateString = `${event.value.dateEndVal} ${event.value.monthEndVal} ${event.value.yearEndVal}`;
  const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
  return dateFormatter.format(new Date(dateString));
});
</script>
<template>
  <div class="">
    <div class="row g-5">
      <div class="col-12 col-lg-9">
        <form action="" method="post" class="">
          <div class="mb-2">
            <h1 class="mb-0 fw-bold h2">
              {{ idParam ? 'Edit Travel Event 1' : 'Submit a Travel Event' }}
            </h1>
            <small>For member:</small>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Please select your Travel Listing Type</h2>
            </div>
            <div class="bg-gray p-4">
              <InputField
                id="event-1"
                type="radio"
                v-model="travelPick"
                value="1"
                nowrapper
                title="Travel listing and full details to appear on this website."
                checked
              />
              <InputField
                id="event-2"
                type="radio"
                v-model="travelPick"
                value="2"
                nowrapper
                title="	Travel listing which links directly to your website that has full details of your travel event."
              />
            </div>
          </div>

          <h2 class="h4 fw-bold">Travel Listing Preview</h2>
          <div class="border border-gray-300 p-3 mb-3">
            <a href="#" class="d-block h4 underline text-primary" v-if="event.eventName">{{
              event.eventName
            }}</a>
            <small class="text-xs fw-bold"
              >{{ getDay }}, {{ event.dateVal }} {{ event.monthVal }} {{ event.yearVal }} -
              {{ getDayEnd }}, {{ event.dateEndVal }} {{ event.monthEndVal }}
              {{ event.yearEndVal }}</small
            >
            <p class="small text-success fw-medium mb-0" v-if="event.daysNights">
              {{ event.daysNights }}
            </p>
            <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
              <p class="small mb-0 line-clamp w-lg-75 order-2 order-lg-1" v-if="event.shortDesc">
                {{ event.shortDesc }}
              </p>
              <img
                src="https://placehold.co/500x500"
                class="order-1 order-lg-2 w-lg-25 object-fit-cover mt-2"
                height="120"
                alt=""
              />
            </div>
          </div>
          <small class="d-block mb-3">Please enter your travel details below</small>
          <h2 class="h4 fw-bold mb-3">Travel Listing</h2>
          <InputField
            id="eventHeading"
            title="Event Heading*"
            type="text"
            v-model="event.eventName"
            placeholder="Enter your heading here..."
            className="w-full"
            required
          />
          <div class="row">
            <div class="col-lg-6">
              <span class="d-block mb-2 small fw-medium text-gray-900">Start Date*</span>
              <div class="d-flex gap-1">
                <InputField
                  id="startday"
                  type="select"
                  className="w-100 mb-3"
                  v-model="event.dateVal"
                  :data="options.days"
                  :selected="curDate"
                  required
                />
                <InputField
                  id="startmonth"
                  type="select"
                  className="w-100 mb-3"
                  v-model="event.monthVal"
                  :data="options.months"
                  :selected="curMonth"
                  required
                />
                <InputField
                  id="startyear"
                  type="select"
                  className="w-100 mb-3"
                  v-model="event.yearVal"
                  :data="options.years"
                  :selected="curYear"
                  required
                />
              </div>
            </div>
            <div class="col-lg-6">
              <span class="d-block mb-2 small fw-medium text-gray-900">End Date*</span>
              <div class="d-flex gap-1">
                <InputField
                  id="endday"
                  type="select"
                  className="w-100 mb-3"
                  v-model="event.dateEndVal"
                  :data="options.days"
                  :selected="curDate"
                  required
                />
                <InputField
                  id="endmonth"
                  type="select"
                  className="w-100 mb-3"
                  v-model="event.monthEndVal"
                  :data="options.months"
                  :selected="curMonth"
                  required
                />
                <InputField
                  id="endyear"
                  type="select"
                  className="w-100 mb-3"
                  v-model="event.yearEndVal"
                  :data="options.years"
                  :selected="curYear"
                  required
                />
              </div>
            </div>
          </div>
          <InputField
            id="daysNights"
            title="Days/Nights*"
            v-model="event.daysNights"
            type="text"
            placeholder="4days/3nights, 2 full weeks"
            className="w-full"
            required
          />
          <div class="d-flex flex-wrap flex-column">
            <InputField
              id="noDateText"
              title="No Date Text"
              type="text"
              className="mb-2"
              nowrapper
            />
            <InputField id="noDate" title="Use no dates" type="checkbox" />
          </div>
          <InputField
            id="shortDesc"
            title="Short Description*"
            v-model="event.shortDesc"
            type="textarea"
            rows="5"
            limitLines="5"
            limit="500"
            helper="max 5 lines - that appear in preview"
            required
          />

          <div class="row">
            <div class="col-lg-6">
              <InputField id="website" title="Your Website" type="text" className="w-full" />
            </div>
            <div class="col-lg-6">
              <span class="d-block mb-2 small fw-medium text-gray-900">Travel Event Type*</span>
              <div class="d-flex gap-2">
                <InputField
                  id="eventType"
                  type="select"
                  v-model="travelType"
                  :data="options.eventType"
                  required
                />
                <InputField
                  id="subEventType"
                  type="select"
                  :data="options.subEvent"
                  required
                  forceselect
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <span class="d-block fw-medium">Choose where else to diplay this event:</span>
            <small class="d-block mb-2"
              >(Your event will be displayed on our site and any others you select here)</small
            >
            <InputField
              id="ammsite"
              title="AdultMatchMaker.com.au"
              value="AdultMatchMaker.com.au"
              type="checkbox"
              nowrapper
            />
            <InputField
              id="gmmsite"
              v-if="travelType !== 'Lesbian' && travelType !== 'Swingers'"
              title="GayMatchMaker.com.au"
              value="GayMatchMaker.com.au"
              type="checkbox"
              nowrapper
            />
            <InputField
              id="lmmsite"
              v-if="travelType !== 'Gay' && travelType !== 'Swingers'"
              title="LesbianMatchMaker.com.au"
              value="LesbianMatchMaker.com.au"
              type="checkbox"
              nowrapper
            />
          </div>
          <InputField
            id="listimg"
            title="Add listing image*"
            type="file"
            accept="image/jpeg, image/jpg, image/png, image/gif"
            helper="image max size: 10K , width:190px, height:90px"
            required
          />
          <div class="mt-4" v-if="travelPick === '1'">
            <h2 class="h4 fw-bold mb-2">Full Travel Details</h2>
            <InputField
              id="fullEventHeading"
              title="Event Heading*"
              type="text"
              className="w-full"
              required
            />
            <InputField
              id="subHeading"
              title="SubHeading*"
              type="text"
              className="w-full"
              helper="(Optional: display a line of text below the heading if you want. Otherwise leave blank)"
            />
            <InputField
              id="eventDesc"
              title="Event Description*"
              type="textarea"
              rows="10"
              limit="1000"
              helper="Maximum 1000 characters"
              required
            />
            <div class="mb-3">
              <span class="d-block small fw-medium text-gray-900"
                >Display main points about event</span
              >
              <small class="d-block mb-2"
                >Optional: Enter nothing or up to 10 short summarized details about your event,
                please keep each one to 2 lines or less. This will be displayed in point form on
                your listing.</small
              >
              <div v-for="(field, index) in fields" :key="index">
                <div class="d-flex gap-2 mb-3 align-items-center">
                  <InputField
                    v-model="field.value"
                    className="w-100"
                    type="textarea"
                    rows="2"
                    limitLines="2"
                    limit="200"
                    nowrapper
                  />
                  <button class="btn btn-danger" @click="removeField($event, index)">
                    <i class="gigacon gigacon-bin"></i>
                  </button>
                </div>
              </div>
              <button class="btn btn-secondary" @click="addField">Add Field</button>
            </div>
            <InputField
              id="contactDetails"
              title="Contact Details*"
              type="textarea"
              rows="5"
              required
            />
            <InputField id="contactEmail" title="Contact Email" type="email" className="w-full" />
            <InputField
              id="masthead"
              title="MastHead Image"
              type="file"
              accept="image/jpeg, image/jpg, image/gif"
              helper="Max size: 100K, max height:400px, max width: 580px in either .gif or .jpeg format."
            />
          </div>
          <div class="d-flex gap-3 justify-content-end">
            <RouterLink to="/admin/travel/travel-events" class="btn text-center">Cancel</RouterLink>
            <button type="submit" class="btn btn-primary text-center">
              {{ idParam ? 'Save' : 'Submit Event' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
