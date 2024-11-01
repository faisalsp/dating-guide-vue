<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, ref, computed } from 'vue';
import InputField from './InputField.vue';
import AjaxInput from './AjaxInput.vue';

defineComponent({ name: 'EventForm' });
interface Event {
  eventName: string;
  eventDesc: string;
  fullEventDesc: string;
  stateLoc: string;
  suburbLoc: string;
  dateVal: number | string;
  website: string;
  bookingUrl: string;
  getTime: null | string | undefined;
  setTime1: string;
  setTime2: string;
  eventPick: string;
  monthVal: string;
  yearVal: number | string;
  eventType: null | string | undefined;
  occur1: boolean | string;
  ageStart: number | string | undefined;
  ageEnd: number | string;
  occur2: boolean;
}

interface Options {
  states: { [key: string]: string };
  days: number[];
  months: string[];
  years: number[];
  times: string[];
  ages: number[];
}

const route = useRoute();
const is_admin = route.matched[0].path === '/admin' ? true : false;
const searchQuery = defineModel();
const idParam = Number(route.params.id);
const emailParam = route.query.email;

const events = ref<string[]>([
  'Speed Dating',
  'Singles Events',
  'Social Activities',
  'Adult Events',
  'Swingers Parties',
  "Gay Men's Events",
  'Lesbian Events',
  'BDSM Kink Events',
  'Pubs, Nightclubs',
  'Adult Events Women',
  'Gay & Lesbian Events'
]);

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

const getTimes = (start: string, end: string): string[] => {
  start = (parseInt(start) * 2 + (+start.slice(-2) > 0 ? 1 : 0)).toString();
  end = (parseInt(end) * 2 + (+end.slice(-2) > 0 ? 1 : 0) + 1).toString();
  return Array.from({ length: Number(end) - Number(start) }, (_, i) => [
    (i + Number(start)) >> 1,
    (Number(i + start) % 2) * 30
  ]).map(([h, m]) => `${h % 12 || 12}:${m} ${'AP'[+(h > 11)]}M`.replace(/\b\d\b/g, '0$&'));
};

const event = ref<Event>({
  eventName: '',
  eventDesc: '',
  fullEventDesc: '',
  stateLoc: 'New South Wales',
  suburbLoc: '',
  dateVal: curDate.value,
  website: '',
  bookingUrl: '',
  getTime: '',
  setTime1: '',
  setTime2: '',
  eventPick: '1',
  monthVal: curMonth.value,
  yearVal: curYear.value,
  eventType: null,
  occur1: false,
  ageStart: 18,
  ageEnd: 18,
  occur2: false
});

const options = ref<Options>({
  states: {
    'New South Wales': 'NSW',
    Victoria: 'VIC',
    'South Australia': 'SA',
    'Northern Territory': 'NT',
    Queensland: 'QLD',
    'Australian Capital Territory': 'ACT',
    'Western Australia': 'WA',
    Tasmania: 'TAS'
  },
  days: [...Array(31)].map((a, b) => 1 + b),
  months: listMonths.value,
  years: [...Array(6)].map((a, b) => new Date().getFullYear() + b),
  times: getTimes('0:00', '24:00'),
  ages: [...Array(83)].map((a, b) => 18 + b)
});

const getDay = computed(() => {
  let dateString = `${event.value.dateVal} ${event.value.monthVal} ${event.value.yearVal}`;
  const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
  return dateFormatter.format(new Date(dateString));
});
</script>
<template>
  <div class="">
    <div class="row g-5">
      <div class="col-12 col-lg-8">
        <form action="" method="post" class="">
          <div class="mb-3">
            <h1 class="mb-0 fw-bold h2">{{ idParam ? 'Edit Event 1' : 'Submit an Event' }}</h1>
            <small>Please enter your event details below:</small>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Event Listing type</h2>
            </div>
            <div class="bg-amber p-4">
              <InputField
                id="event-1"
                name="eventpick"
                type="radio"
                v-model="event.eventPick"
                value="1"
                nowrapper
                title="Create a full listing so that your event can potentially be featured and you can add both a website and ticketing link."
                checked
              />
              <InputField
                id="event-2"
                name="eventpick"
                type="radio"
                v-model="event.eventPick"
                value="2"
                nowrapper
                title="Create a short listing which links directly to your website."
              />
            </div>
          </div>
          <h2 class="h4 fw-bold mb-3" v-if="event.eventPick == '1'">
            Event Listing & Full Event Details
          </h2>
          <h2 class="h4 fw-bold mb-3" v-if="event.eventPick == '2'">
            Event Listing that Links to My Website
          </h2>
          <InputField
            id="eventName"
            title="Event Name*"
            type="text"
            className="w-full"
            v-model="event.eventName"
            placeholder="Event name"
            required
          />

          <InputField
            id="eventdesc"
            title="Short Description of Event*"
            type="textarea"
            limitLines="3"
            v-model="event.eventDesc"
            helper="Maximum 3 lines, no emoji"
            required
            limit="200"
          />
          <div class="mb-3">
            <AjaxInput
              id="clubs"
              method="POST"
              v-if="is_admin"
              type="text"
              title="Club"
              v-model="searchQuery"
              param="clubName"
              ajaxurl="/clubs.json"
            />
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Venue Location*</h2>
            </div>
            <div class="bg-amber p-3">
              <div class="row">
                <div class="col-6">
                  <InputField
                    id="states"
                    title="State*"
                    :data="options.states"
                    type="select"
                    v-model="event.stateLoc"
                    required
                    nowrapper
                    usekey
                  />
                </div>
                <div class="col-6">
                  <AjaxInput
                    id="suburbs"
                    :state="event.stateLoc"
                    method="POST"
                    type="text"
                    title="City/Town/Suburb*"
                    v-model="searchQuery"
                    placeholder="City/Town/Suburb"
                    param="suburbs"
                    ajaxurl="/suburbs.json"
                    nowrapper
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Date & Time of Event*</h2>
            </div>
            <div class="bg-amber p-3">
              <div class="row">
                <div class="col-6">
                  <span class="d-block mb-2 small fw-medium text-gray-900">Date*</span>
                  <div class="d-flex gap-1">
                    <InputField
                      id="day"
                      type="select"
                      v-model="event.dateVal"
                      :data="options.days"
                      :selected="curDate"
                      required
                      nowrapper
                    />
                    <InputField
                      id="month"
                      type="select"
                      v-model="event.monthVal"
                      :data="options.months"
                      :selected="curMonth"
                      required
                      nowrapper
                    />
                    <InputField
                      id="year"
                      type="select"
                      v-model="event.yearVal"
                      :data="options.years"
                      :selected="curYear"
                      required
                      nowrapper
                    />
                  </div>
                </div>
                <div class="col-6">
                  <InputField
                    id="time"
                    title="Start Time*"
                    type="select"
                    v-model="event.getTime"
                    :data="options.times"
                    required
                    nowrapper
                  />
                </div>
              </div>
            </div>
          </div>
          <InputField
            id="website"
            :title="event.eventPick == '2' ? 'Website URL*' : 'Website URL'"
            type="text"
            v-model="event.website"
            placeholder="https://"
            :required="event.eventPick == '2'"
          />

          <InputField
            id="event"
            title="Event Type*"
            type="select"
            v-model="event.eventType"
            :data="events"
            required
          />
          <InputField
            id="ammmemberid"
            v-if="!is_admin && event.eventType === 'Swingers Parties'"
            title="AMM Email/Username"
            type="text"
            helper="We can link this event to your AMM profile for RSVPs, please provide your email/username"
          />

          <div class="mb-3">
            <div class="row">
              <div class="col">
                <span class="d-block mb-2 fw-medium">Suitable age range for this event*</span>
                <div class="d-flex gap-3 align-items-center">
                  <InputField
                    type="select"
                    v-model="event.ageStart"
                    :data="options.ages"
                    required
                    nowrapper
                  />
                  <span>To</span>
                  <InputField
                    type="select"
                    v-model="event.ageEnd"
                    :data="options.ages"
                    required
                    nowrapper
                  />
                </div>
              </div>
              <div class="col">
                <span class="d-block mb-2 fw-medium">Choose where to display your event</span>
                <InputField
                  id="ammsite"
                  title="AdultMatchMaker.com.au"
                  value="AdultMatchMaker.com.au"
                  type="checkbox"
                  nowrapper
                />
                <InputField
                  id="gmmsite"
                  title="GayMatchMaker.com.au"
                  value="GayMatchMaker.com.au"
                  type="checkbox"
                  nowrapper
                />
                <InputField
                  id="lmmsite"
                  title="LesbianMatchMaker.com.au"
                  value="LesbianMatchMaker.com.au"
                  type="checkbox"
                  nowrapper
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="h4 mb-0">Recurring Dates</h2>
              <small class="fst-italic">If this event reoccurs include other dates</small>
            </div>
            <span class="d-block mb-2 fw-medium"
              >Date & Time <small>(Check box(s) to enter other dates to include)</small></span
            >
            <div class="d-flex gap-1 align-items-center mb-2">
              <InputField id="occur-1" v-model="event.occur1" type="checkbox" nowrapper />
              <InputField
                type="select"
                :selected="curDate"
                :data="options.days"
                nowrapper
                forceselect
              />
              <InputField
                type="select"
                :selected="curMonth"
                :data="options.months"
                nowrapper
                forceselect
              />
              <InputField
                type="select"
                :selected="curYear"
                :data="options.years"
                nowrapper
                forceselect
              />
              @
              <InputField
                type="select"
                v-model="event.setTime1"
                :data="options.times"
                :required="event.occur1"
                nowrapper
              />
            </div>
            <div class="d-flex gap-1 align-items-center mb-2">
              <InputField id="occur-2" v-model="event.occur2" type="checkbox" nowrapper />
              <InputField
                type="select"
                :selected="curDate"
                :data="options.days"
                nowrapper
                forceselect
              />
              <InputField
                type="select"
                :selected="curMonth"
                :data="options.months"
                nowrapper
                forceselect
              />
              <InputField
                type="select"
                :selected="curYear"
                :data="options.years"
                nowrapper
                forceselect
              />
              @
              <InputField
                type="select"
                v-model="event.setTime2"
                :data="options.times"
                :required="event.occur2"
                nowrapper
              />
            </div>
          </div>
          <div v-if="event.eventPick == '1'">
            <hr class="border-2 mb-3" />
            <div class="mb-3">
              <h2 class="fw-medium h4">Full Event Details</h2>
            </div>
            <InputField
              id="fulleventname"
              title="Event Name"
              type="text"
              placeholder="Event name"
            />
            <InputField
              id="fulleventdesc"
              title="Event Description"
              type="textarea"
              v-model="event.fullEventDesc"
              helper="Add detailed information about your event, no emoji"
            />
            <InputField
              id="venueaddress"
              title="Venue & Address*"
              type="textarea"
              helper="Max 200 characters"
              limit="200"
              required
            />
            <InputField
              id="dresscode"
              rows="5"
              title="Dress code"
              type="textarea"
              helper="Max 500 characters"
              limit="500"
            />
            <InputField
              id="rules"
              rows="5"
              title="Rules"
              type="textarea"
              helper="Max 500 characters"
              limit="500"
            />
            <InputField
              id="bookingurl"
              v-model="event.bookingUrl"
              title="Booking URL"
              type="text"
              placeholder="https://"
            />
            <InputField id="ammmemberid" v-if="is_admin" title="AMM Member ID" type="text" />
            <InputField
              v-if="event.bookingUrl === ''"
              id="bookings"
              title="Bookings"
              type="textarea"
              limit="200"
              helper="Max 200 characters"
            />
            <InputField
              id="ctemail"
              title="Contact Email"
              type="email"
              placeholder="john_doe@mail.com"
            />

            <InputField
              id="otcontact"
              title="Other Contact Info"
              type="textarea"
              helper="Max 200 characters"
            />
            <InputField
              id="cost"
              title="Cost*"
              type="textarea"
              helper="Max 200 characters"
              required
            />
            <InputField
              id="masthead"
              title="MastHead Image"
              type="file"
              accept="image/jpeg, image/jpg"
              helper="Landscape banner, Max width 580px, Max height 170px, JPG format, file size less than 30k"
            />
            <InputField
              id="featured"
              title="Featured Event on Contact Us"
              type="checkbox"
              className="mb-2"
              nowrapper
            />
            <InputField
              id="profile"
              v-if="event.eventType == 'Swingers Parties'"
              title="Show this Linked to My Profile"
              type="checkbox"
              className="mb-2"
              nowrapper
            />
            <!-- <InputField id="share" title="Share this on Facebook/Twitter" type="checkbox" className="mb-3" nowrapper /> -->
          </div>
          <div class="d-block d-lg-none">
            <h2 class="text-xl fw-bold mb-2">Event Listing Preview</h2>
            <div class="border border-gray-300 p-3 mb-3">
              <a href="#" class="d-block h4 underline text-primary" v-if="event.eventName">{{
                event.eventName
              }}</a>
              <small class="text-xs fw-bold"
                >{{ getDay }}, {{ event.dateVal }} {{ event.monthVal }} {{ event.yearVal }}
                <span v-if="event.getTime">({{ event.getTime }})</span></small
              >
              <p v-if="event.eventDesc" class="mb-0">{{ event.eventDesc }}</p>
              <p class="small text-success mb-0" v-if="event.eventType">
                Event Type: <span class="fw-medium text-black">{{ event.eventType }}</span>
              </p>
              <p class="small text-success mb-0" v-if="event.ageStart && event.ageEnd">
                Age Group:
                <span class="fw-medium text-black">{{ event.ageStart }} - {{ event.ageEnd }}</span>
              </p>
              <p class="small text-success mb-0">
                Location:
                <span class="fw-medium text-black"
                  >{{ event.stateLoc
                  }}<span v-if="event.suburbLoc">, {{ event.suburbLoc }}</span></span
                >
              </p>
              <a
                href="#"
                target="_blank"
                v-if="event.eventPick == '1'"
                class="text-blue-700 underline text-xs"
                >More Info</a
              >
            </div>
            <p class="mb-2" v-if="emailParam">
              Event for: <span class="d-block fst-italic fw-bold">{{ emailParam }}</span>
            </p>
          </div>
          <div class="d-flex gap-3 justify-content-end">
            <RouterLink to="/" class="btn text-center">Cancel</RouterLink>
            <button type="submit" class="btn btn-primary text-center">Submit Event</button>
          </div>
        </form>
      </div>
      <div
        class="d-none d-lg-block col-12 col-lg-4 position-sticky align-self-baseline"
        style="top: 60px"
      >
        <h4 class="text-xl fw-bold mb-2">Event Listing Preview</h4>
        <div class="border border-gray-300 p-3 mb-3">
          <a href="#" class="d-block h4 underline text-primary" v-if="event.eventName">{{
            event.eventName
          }}</a>
          <small class="text-xs fw-bold"
            >{{ getDay }}, {{ event.dateVal }} {{ event.monthVal }} {{ event.yearVal }}
            <span v-if="event.getTime">({{ event.getTime }})</span></small
          >
          <p v-if="event.eventDesc" class="mb-0">{{ event.eventDesc }}</p>
          <p class="small text-success mb-0" v-if="event.eventType">
            Event Type: <span class="fw-medium text-black">{{ event.eventType }}</span>
          </p>
          <p class="small text-success mb-0" v-if="event.ageStart && event.ageEnd">
            Age Group:
            <span class="fw-medium text-black">{{ event.ageStart }} - {{ event.ageEnd }}</span>
          </p>
          <p class="small text-success mb-0">
            Location:
            <span class="fw-medium text-black"
              >{{ event.stateLoc }}<span v-if="event.suburbLoc">, {{ event.suburbLoc }}</span></span
            >
          </p>
          <a
            href="#"
            target="_blank"
            v-if="event.eventPick == '1'"
            class="text-blue-700 underline text-xs"
            >More Info</a
          >
        </div>
        <p class="mb-2" v-if="emailParam">
          Event for: <span class="d-block fst-italic fw-bold">{{ emailParam }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
